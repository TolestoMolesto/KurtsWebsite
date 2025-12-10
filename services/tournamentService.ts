/**
 * Tournament Management Service
 * Handles all CRUD operations, versioning, and audit logging
 */

import {
  collection,
  doc,
  setDoc,
  updateDoc,
  deleteDoc,
  getDocs,
  getDoc,
  query,
  where,
  orderBy,
  limit,
  arrayUnion,
  increment,
  serverTimestamp,
  writeBatch,
  QueryConstraint,
} from 'firebase/firestore';
import { db } from './firebase';
import {
  TournamentPlayer,
  TournamentMatch,
  TournamentMatchPlayer,
  AuditLog,
  Tournament,
  TournamentPlayerStats,
} from '../types';

// Role-Based Scoring Multipliers
const ROLE_MULTIPLIERS: Record<string, { kill: number; death: number; assist: number }> = {
  Carry: { kill: 3, death: 1.5, assist: 0.75 },
  Jungle: { kill: 3, death: 1.5, assist: 0.5 },
  Mid: { kill: 3, death: 1.5, assist: 0.75 },
  Solo: { kill: 2, death: 1, assist: 1.25 },
  Support: { kill: 1, death: 1, assist: 1.75 }
};
const BASE_WIN_POINTS = 3;

// ═══════════════════════════════════════════════════════════════════════════
// AUDIT LOGGING
// ═══════════════════════════════════════════════════════════════════════════

export const logAuditAction = async (
  action: AuditLog['action'],
  entityType: AuditLog['entityType'],
  entityId: string,
  changedBy: string,
  changes?: Record<string, any>,
  reason?: string
) => {
  try {
    await setDoc(doc(collection(db, 'audit_logs')), {
      action,
      entityType,
      entityId,
      changes: changes || {},
      changedBy,
      timestamp: new Date().toISOString(),
      reason: reason || '',
    });
  } catch (error) {
    console.error('Error logging audit action:', error);
  }
};

// ═══════════════════════════════════════════════════════════════════════════
// PLAYER OPERATIONS
// ═══════════════════════════════════════════════════════════════════════════

export const createTournamentPlayer = async (
  playerId: string,
  tournamentId: string,
  playerData: Partial<TournamentPlayer>,
  createdBy: string
) => {
  try {
    const newPlayer: TournamentPlayer = {
      id: playerId,
      name: playerData.name || '',
      discord: playerData.discord || '',
      trackerLink: playerData.trackerLink || '',
      primaryRole: playerData.primaryRole || 'Solo',
      offRoles: playerData.offRoles || ['Jungle', 'Mid'],
      mmr: playerData.mmr || 0,
      status: 'active',
      checkedIn: false,
      tournamentId,
      stats: {
        score: 0,
        wins: 0,
        losses: 0,
        matchesPlayed: 0,
        kills: 0,
        deaths: 0,
        assists: 0,
      },
      createdAt: new Date().toISOString(),
      updatedAt: new Date().toISOString(),
      notes: '',
      flags: [],
    };

    await setDoc(doc(db, 'tournament_players', playerId), newPlayer);
    await logAuditAction(
      'player_created',
      'player',
      playerId,
      createdBy,
      newPlayer
    );

    return newPlayer;
  } catch (error) {
    console.error('Error creating tournament player:', error);
    throw error;
  }
};

export const updateTournamentPlayer = async (
  playerId: string,
  updates: Partial<TournamentPlayer>,
  changedBy: string,
  reason?: string
) => {
  try {
    const playerRef = doc(db, 'tournament_players', playerId);
    const oldPlayer = await getDoc(playerRef);

    if (!oldPlayer.exists()) throw new Error('Player not found');

    const changes = Object.entries(updates).reduce(
      (acc, [key, value]) => {
        if (oldPlayer.data()[key] !== value) {
          acc[key] = { old: oldPlayer.data()[key], new: value };
        }
        return acc;
      },
      {} as Record<string, any>
    );

    await updateDoc(playerRef, {
      ...updates,
      updatedAt: new Date().toISOString(),
    });

    await logAuditAction(
      'player_edited',
      'player',
      playerId,
      changedBy,
      changes,
      reason
    );
  } catch (error) {
    console.error('Error updating tournament player:', error);
    throw error;
  }
};

export const deleteTournamentPlayer = async (
  playerId: string,
  deletedBy: string,
  reason?: string
) => {
  try {
    const playerRef = doc(db, 'tournament_players', playerId);
    const player = await getDoc(playerRef);

    if (!player.exists()) throw new Error('Player not found');

    // Soft delete - mark as deleted
    await updateDoc(playerRef, {
      status: 'inactive',
      updatedAt: new Date().toISOString(),
    });

    await logAuditAction(
      'player_deleted',
      'player',
      playerId,
      deletedBy,
      { playerData: player.data() },
      reason
    );
  } catch (error) {
    console.error('Error deleting tournament player:', error);
    throw error;
  }
};

export const togglePlayerCheckIn = async (
  playerId: string,
  checkedBy: string
) => {
  try {
    const playerRef = doc(db, 'tournament_players', playerId);
    const player = await getDoc(playerRef);

    if (!player.exists()) throw new Error('Player not found');

    const newCheckedInStatus = !(player.data().checkedIn || false);

    await updateDoc(playerRef, {
      checkedIn: newCheckedInStatus,
      status: newCheckedInStatus ? 'checked_in' : 'active',
      updatedAt: new Date().toISOString(),
    });

    await logAuditAction(
      'player_edited',
      'player',
      playerId,
      checkedBy,
      { checkedIn: { old: !newCheckedInStatus, new: newCheckedInStatus } }
    );
  } catch (error) {
    console.error('Error toggling player check-in:', error);
    throw error;
  }
};

export const addPlayerNote = async (
  playerId: string,
  note: string,
  flag?: 'disputed' | 'pending_review' | 'banned',
  addedBy?: string
) => {
  try {
    const playerRef = doc(db, 'tournament_players', playerId);
    const player = await getDoc(playerRef);

    if (!player.exists()) throw new Error('Player not found');

    const updates: any = {
      notes: note,
      updatedAt: new Date().toISOString(),
    };

    if (flag) {
      const currentFlags = player.data().flags || [];
      if (!currentFlags.includes(flag)) {
        updates.flags = arrayUnion(flag);
      }
    }

    await updateDoc(playerRef, updates);

    await logAuditAction(
      'player_edited',
      'player',
      playerId,
      addedBy || 'system',
      { note, flag }
    );
  } catch (error) {
    console.error('Error adding player note:', error);
    throw error;
  }
};

// ═══════════════════════════════════════════════════════════════════════════
// MATCH OPERATIONS
// ═══════════════════════════════════════════════════════════════════════════

export const createTournamentMatch = async (
  tournamentId: string,
  matchData: Omit<TournamentMatch, 'id' | 'submittedAt' | 'submittedBy' | 'versions'>,
  submittedBy: string
) => {
  try {
    const matchRef = doc(collection(db, 'tournament_matches'));
    const match: TournamentMatch = {
      ...matchData,
      id: matchRef.id,
      submittedAt: new Date().toISOString(),
      submittedBy,
      versions: [],
    };

    await setDoc(matchRef, match);

    // Update player stats
    await updatePlayerStatsFromMatch(match, true, submittedBy);

    await logAuditAction('match_created', 'match', matchRef.id, submittedBy, {
      match,
    });

    return match;
  } catch (error) {
    console.error('Error creating tournament match:', error);
    throw error;
  }
};

export const updateTournamentMatch = async (
  matchId: string,
  updates: Partial<TournamentMatch>,
  changedBy: string,
  reason?: string
) => {
  try {
    const matchRef = doc(db, 'tournament_matches', matchId);
    const oldMatch = await getDoc(matchRef);

    if (!oldMatch.exists()) throw new Error('Match not found');

    const oldData = oldMatch.data() as TournamentMatch;

    // Create version snapshot
    await updateDoc(matchRef, {
      versions: arrayUnion({
        timestamp: new Date().toISOString(),
        snapshot: oldData,
        editedBy: changedBy,
        reason: reason || '',
      }),
      ...updates,
      status: 'pending', // Reset to pending for re-verification
    });

    // Recalculate stats: undo old, apply new
    await updatePlayerStatsFromMatch(oldData, false, changedBy);
    await updatePlayerStatsFromMatch(
      { ...oldData, ...updates } as any,
      true,
      changedBy
    );

    await logAuditAction(
      'match_edited',
      'match',
      matchId,
      changedBy,
      { reason, updates },
      reason
    );
  } catch (error) {
    console.error('Error updating tournament match:', error);
    throw error;
  }
};

export const deleteTournamentMatch = async (
  matchId: string,
  deletedBy: string,
  reason?: string
) => {
  try {
    const matchRef = doc(db, 'tournament_matches', matchId);
    const match = await getDoc(matchRef);

    if (!match.exists()) throw new Error('Match not found');

    const matchData = match.data() as TournamentMatch;

    // Undo player stats
    await updatePlayerStatsFromMatch(matchData, false, deletedBy);

    // Mark as cancelled instead of hard delete
    await updateDoc(matchRef, {
      status: 'cancelled',
      updatedAt: new Date().toISOString(),
    });

    await logAuditAction(
      'match_deleted',
      'match',
      matchId,
      deletedBy,
      { matchData },
      reason
    );
  } catch (error) {
    console.error('Error deleting tournament match:', error);
    throw error;
  }
};

export const verifyTournamentMatch = async (
  matchId: string,
  verifiedBy: string
) => {
  try {
    const matchRef = doc(db, 'tournament_matches', matchId);

    await updateDoc(matchRef, {
      status: 'verified',
      verifiedAt: new Date().toISOString(),
      verifiedBy,
    });

    await logAuditAction(
      'match_verified',
      'match',
      matchId,
      verifiedBy,
      {}
    );
  } catch (error) {
    console.error('Error verifying tournament match:', error);
    throw error;
  }
};

export const undoLastMatches = async (count: number, undoneBy: string) => {
  try {
    const matchesRef = collection(db, 'tournament_matches');
    const q = query(
      matchesRef,
      orderBy('submittedAt', 'desc'),
      limit(count)
    );
    const matches = await getDocs(q);

    for (const matchDoc of matches.docs) {
      const match = matchDoc.data() as TournamentMatch;
      const versions = match.versions || [];

      if (versions.length > 0) {
        const previous = versions[versions.length - 1];

        // Undo current stats
        await updatePlayerStatsFromMatch(match, false, undoneBy);

        // Apply previous version
        await updateDoc(matchDoc.ref, previous.snapshot);

        await logAuditAction(
          'match_edited',
          'match',
          matchDoc.id,
          undoneBy,
          { undone: true, restoredVersion: previous.timestamp },
          `Undo to version from ${previous.timestamp}`
        );
      }
    }
  } catch (error) {
    console.error('Error undoing matches:', error);
    throw error;
  }
};

// ═══════════════════════════════════════════════════════════════════════════
// HELPER: Update Player Stats from Match
// ═══════════════════════════════════════════════════════════════════════════

const updatePlayerStatsFromMatch = async (
  match: TournamentMatch,
  add: boolean,
  changedBy: string
) => {
  try {
    const batch = writeBatch(db);
    const multiplier = add ? 1 : -1;

    const updatePlayer = (playerData: TournamentMatchPlayer) => {
      const playerQuery = query(
        collection(db, 'tournament_players'),
        where('name', '==', playerData.name)
      );

      getDocs(playerQuery).then((snapshot) => {
        snapshot.docs.forEach((playerDoc) => {
          const playerRole = (playerDoc.data() as any).primaryRole || 'Support';
          const multipliers = ROLE_MULTIPLIERS[playerRole] || ROLE_MULTIPLIERS.Support;
          
          const killScore = Math.round(playerData.kills * multipliers.kill * 10) / 10;
          const deathScore = Math.round(playerData.deaths * multipliers.death * 10) / 10;
          const assistScore = Math.round(playerData.assists * multipliers.assist * 10) / 10;
          const kdaScore = (killScore - deathScore + assistScore) * multiplier;
          
          batch.update(playerDoc.ref, {
            'stats.kills': increment(playerData.kills * multiplier),
            'stats.deaths': increment(playerData.deaths * multiplier),
            'stats.assists': increment(playerData.assists * multiplier),
            'stats.matchesPlayed': increment(1 * multiplier),
            'stats.score': increment(kdaScore),
          });
        });
      });
    };

    const winnersData =
      match.winner === 'Team 1' ? match.team1.players : match.team2.players;
    const losersData =
      match.winner === 'Team 1' ? match.team2.players : match.team1.players;

    winnersData.forEach((p) => {
      updatePlayer(p);
      // Find player and add win bonus
      getDocs(
        query(
          collection(db, 'tournament_players'),
          where('name', '==', p.name)
        )
      ).then((snapshot) => {
        snapshot.docs.forEach((playerDoc) => {
          batch.update(playerDoc.ref, {
            'stats.wins': increment(1 * multiplier),
            'stats.score': increment(BASE_WIN_POINTS * multiplier), // Win = 3 pts base (K/D/A already counted)
          });
        });
      });
    });

    losersData.forEach((p) => {
      updatePlayer(p);
      // K/D/A scoring already applied. Just track the loss.
      getDocs(
        query(
          collection(db, 'tournament_players'),
          where('name', '==', p.name)
        )
      ).then((snapshot) => {
        snapshot.docs.forEach((playerDoc) => {
          batch.update(playerDoc.ref, {
            'stats.losses': increment(1 * multiplier),
            // Score is already calculated in updatePlayer from K/D/A multipliers
          });
        });
      });
    });

    await batch.commit();
  } catch (error) {
    console.error('Error updating player stats from match:', error);
    throw error;
  }
};

// ═══════════════════════════════════════════════════════════════════════════
// TOURNAMENT OPERATIONS
// ═══════════════════════════════════════════════════════════════════════════

export const createTournament = async (
  tournamentData: Partial<Tournament>,
  createdBy: string
) => {
  try {
    const tournamentRef = doc(collection(db, 'tournaments'));
    const tournament: Tournament = {
      id: tournamentRef.id,
      name: tournamentData.name || 'Monthly Tournament',
      month: tournamentData.month || new Date().toLocaleString('default', { month: 'long' }),
      year: tournamentData.year || new Date().getFullYear(),
      startDate: tournamentData.startDate || new Date().toISOString(),
      endDate: tournamentData.endDate || new Date(Date.now() + 30 * 24 * 60 * 60 * 1000).toISOString(),
      status: 'planning',
      bracketType: tournamentData.bracketType || 'round_robin',
      prizePool: tournamentData.prizePool || 0,
      checkInOpen: false,
      registrationOpen: true,
      registrationStartDate: tournamentData.registrationStartDate || new Date().toISOString(),
      registrationEndDate: tournamentData.registrationEndDate || new Date(Date.now() + 7 * 24 * 60 * 60 * 1000).toISOString(),
      rounds: tournamentData.rounds || [],
      createdAt: new Date().toISOString(),
      updatedAt: new Date().toISOString(),
    };

    await setDoc(tournamentRef, tournament);
    await logAuditAction(
      'tournament_created',
      'tournament',
      tournamentRef.id,
      createdBy,
      tournament
    );

    return tournament;
  } catch (error) {
    console.error('Error creating tournament:', error);
    throw error;
  }
};

export const updateTournament = async (
  tournamentId: string,
  updates: Partial<Tournament>,
  changedBy: string
) => {
  try {
    const tournamentRef = doc(db, 'tournaments', tournamentId);

    await updateDoc(tournamentRef, {
      ...updates,
      updatedAt: new Date().toISOString(),
    });

    await logAuditAction(
      'tournament_updated',
      'tournament',
      tournamentId,
      changedBy,
      updates
    );
  } catch (error) {
    console.error('Error updating tournament:', error);
    throw error;
  }
};

export const resetTournamentScores = async (
  tournamentId: string,
  resetBy: string
) => {
  try {
    const playersRef = collection(db, 'tournament_players');
    const q = query(playersRef, where('tournamentId', '==', tournamentId));
    const players = await getDocs(q);

    const batch = writeBatch(db);

    players.docs.forEach((playerDoc) => {
      batch.update(playerDoc.ref, {
        'stats.score': 0,
        'stats.wins': 0,
        'stats.losses': 0,
        'stats.kills': 0,
        'stats.deaths': 0,
        'stats.assists': 0,
        'stats.matchesPlayed': 0,
        checkedIn: false,
      });
    });

    await batch.commit();

    await logAuditAction(
      'tournament_updated',
      'tournament',
      tournamentId,
      resetBy,
      { action: 'reset_scores' },
      'Reset all player scores for new tournament month'
    );
  } catch (error) {
    console.error('Error resetting tournament scores:', error);
    throw error;
  }
};

// ═══════════════════════════════════════════════════════════════════════════
// READ OPERATIONS
// ═══════════════════════════════════════════════════════════════════════════

export const getTournamentPlayer = async (playerId: string) => {
  try {
    const player = await getDoc(doc(db, 'tournament_players', playerId));
    return player.exists() ? (player.data() as TournamentPlayer) : null;
  } catch (error) {
    console.error('Error getting tournament player:', error);
    return null;
  }
};

export const getTournamentMatch = async (matchId: string) => {
  try {
    const match = await getDoc(doc(db, 'tournament_matches', matchId));
    return match.exists() ? (match.data() as TournamentMatch) : null;
  } catch (error) {
    console.error('Error getting tournament match:', error);
    return null;
  }
};

export const getAuditLogs = async (
  entityType?: AuditLog['entityType'],
  entityId?: string,
  limit_count: number = 50
) => {
  try {
    let constraints: QueryConstraint[] = [
      orderBy('timestamp', 'desc'),
      limit(limit_count),
    ];

    if (entityType) {
      constraints.push(where('entityType', '==', entityType));
    }
    if (entityId) {
      constraints.push(where('entityId', '==', entityId));
    }

    const q = query(collection(db, 'audit_logs'), ...constraints);
    const logs = await getDocs(q);

    return logs.docs.map((doc) => doc.data() as AuditLog);
  } catch (error) {
    console.error('Error getting audit logs:', error);
    return [];
  }
};

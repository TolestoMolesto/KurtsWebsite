import React, { useState, useEffect, useMemo } from 'react';
import {
  Trash2, Edit2, Plus, Search, AlertCircle, CheckCircle2,
  Clock, Flag, Users, BarChart3, Settings, Eye, EyeOff,
  Filter, Download, Upload, ChevronDown, X, Copy, Check,
  Twitch, Youtube, ToggleLeft, ToggleRight, Crown
} from 'lucide-react';
import { 
  collection, getDocs, query, where, orderBy, limit,
  onSnapshot, doc
} from 'firebase/firestore';
import { db, auth } from '../services/firebase';
import {
  TournamentPlayer,
  TournamentMatch,
  AuditLog,
  Tournament,
  TournamentPlayerStatus,
  TournamentMatchStatus,
} from '../types';
import {
  updateTournamentPlayer,
  deleteTournamentPlayer,
  addPlayerNote,
  updateTournamentMatch,
  deleteTournamentMatch,
  verifyTournamentMatch,
  undoLastMatches,
  resetTournamentScores,
  getAuditLogs,
} from '../services/tournamentService';

// ═══════════════════════════════════════════════════════════════════════════
// ADMIN PLAYER MANAGEMENT MODAL
// ═══════════════════════════════════════════════════════════════════════════

interface PlayerEditModalProps {
  player: TournamentPlayer | null;
  isOpen: boolean;
  onClose: () => void;
  onSave: () => void;
}

const PlayerEditModal: React.FC<PlayerEditModalProps> = ({
  player,
  isOpen,
  onClose,
  onSave,
}) => {
  const [formData, setFormData] = useState<Partial<TournamentPlayer>>(
    player || {}
  );
  const [notes, setNotes] = useState(player?.notes || '');
  const [flag, setFlag] = useState<
    'disputed' | 'pending_review' | 'banned' | ''
  >('');
  const [isDeleting, setIsDeleting] = useState(false);
  const [isSaving, setIsSaving] = useState(false);

  useEffect(() => {
    if (player) {
      setFormData(player);
      setNotes(player.notes || '');
    }
  }, [player]);

  if (!isOpen || !player) return null;

  const handleSave = async () => {
    if (!auth.currentUser) return;
    setIsSaving(true);

    try {
      await updateTournamentPlayer(
        player.id,
        formData,
        auth.currentUser.uid,
        'Manual edit from admin panel'
      );

      if (notes !== player.notes) {
        await addPlayerNote(
          player.id,
          notes,
          flag as any,
          auth.currentUser.uid
        );
      }

      onSave();
      onClose();
    } catch (error) {
      alert('Error saving player: ' + error);
    } finally {
      setIsSaving(false);
    }
  };

  const handleDelete = async () => {
    if (!window.confirm('Delete this player? This action cannot be undone.'))
      return;
    if (
      !window.confirm(
        'Are you absolutely sure? This player will be marked as inactive.'
      )
    )
      return;

    if (!auth.currentUser) return;
    setIsDeleting(true);

    try {
      await deleteTournamentPlayer(
        player.id,
        auth.currentUser.uid,
        'Deleted from admin panel'
      );
      onSave();
      onClose();
    } catch (error) {
      alert('Error deleting player: ' + error);
    } finally {
      setIsDeleting(false);
    }
  };

  const flagColors: Record<string, string> = {
    disputed: 'bg-yellow-500/20 border-yellow-500/30 text-yellow-400',
    pending_review: 'bg-blue-500/20 border-blue-500/30 text-blue-400',
    banned: 'bg-red-500/20 border-red-500/30 text-red-400',
  };

  return (
    <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4">
      <div className="bg-slate-900 rounded-xl border border-slate-700 w-full max-w-2xl max-h-[90vh] overflow-y-auto">
        <div className="sticky top-0 bg-slate-950 p-4 border-b border-slate-700 flex items-center justify-between">
          <h2 className="text-xl font-bold text-white flex items-center gap-2">
            <Edit2 size={20} className="text-mythic-gold" />
            Edit Player
          </h2>
          <button
            onClick={onClose}
            className="text-slate-400 hover:text-slate-200"
          >
            <X size={20} />
          </button>
        </div>

        <div className="p-6 space-y-4">
          {/* Profile & IGN */}
          <div className="grid grid-cols-2 gap-4">
            <div>
              <label className="block text-sm text-slate-400 mb-1">Profile Name</label>
              <input
                type="text"
                value={formData.name || ''}
                onChange={(e) =>
                  setFormData({ ...formData, name: e.target.value })
                }
                className="w-full bg-slate-950 border border-slate-700 rounded-lg py-2 px-3 text-white"
              />
            </div>
            <div>
              <label className="block text-sm text-slate-400 mb-1">Smite 2 IGN</label>
              <input
                type="text"
                value={(formData as any).smiteIgn || ''}
                onChange={(e) =>
                  setFormData({ ...formData, smiteIgn: e.target.value } as any)
                }
                className="w-full bg-slate-950 border border-slate-700 rounded-lg py-2 px-3 text-white"
              />
            </div>
          </div>

          {/* Streaming Platforms */}
          <div className="grid grid-cols-2 gap-4">
            <div>
              <label className="block text-sm text-slate-400 mb-1 flex items-center gap-1">
                <Twitch size={14} className="text-purple-400" /> Twitch
              </label>
              <input
                type="text"
                value={(formData as any).twitchUsername || ''}
                onChange={(e) =>
                  setFormData({ ...formData, twitchUsername: e.target.value } as any)
                }
                className="w-full bg-slate-950 border border-slate-700 rounded-lg py-2 px-3 text-white"
                placeholder="username"
              />
            </div>
            <div>
              <label className="block text-sm text-slate-400 mb-1 flex items-center gap-1">
                <Youtube size={14} className="text-red-500" /> YouTube
              </label>
              <input
                type="text"
                value={(formData as any).youtubeUsername || ''}
                onChange={(e) =>
                  setFormData({ ...formData, youtubeUsername: e.target.value } as any)
                }
                className="w-full bg-slate-950 border border-slate-700 rounded-lg py-2 px-3 text-white"
                placeholder="username"
              />
            </div>
          </div>

          {/* MMR Fields */}
          <div className="grid grid-cols-3 gap-4">
            <div>
              <label className="block text-sm text-slate-400 mb-1">Current MMR</label>
              <input
                type="number"
                value={(formData as any).currentMmr || 0}
                onChange={(e) =>
                  setFormData({ ...formData, currentMmr: parseInt(e.target.value), mmr: parseInt(e.target.value) } as any)
                }
                className="w-full bg-slate-950 border border-slate-700 rounded-lg py-2 px-3 text-white"
              />
            </div>
            <div>
              <label className="block text-sm text-slate-400 mb-1">Peak MMR</label>
              <input
                type="number"
                value={(formData as any).peakMmr || 0}
                onChange={(e) =>
                  setFormData({ ...formData, peakMmr: parseInt(e.target.value) } as any)
                }
                className="w-full bg-slate-950 border border-slate-700 rounded-lg py-2 px-3 text-white"
              />
            </div>
            <div>
              <label className="block text-sm text-slate-400 mb-1">Status</label>
              <select
                value={formData.status || 'active'}
                onChange={(e) =>
                  setFormData({
                    ...formData,
                    status: e.target.value as TournamentPlayerStatus,
                  })
                }
                className="w-full bg-slate-950 border border-slate-700 rounded-lg py-2 px-3 text-white"
              >
                <option value="active">Active</option>
                <option value="checked_in">Checked In</option>
                <option value="eliminated">Eliminated</option>
                <option value="banned">Banned</option>
                <option value="inactive">Inactive</option>
              </select>
            </div>
          </div>

          {/* Discord & Tracker */}
          <div className="grid grid-cols-2 gap-4">
            <div>
              <label className="block text-sm text-slate-400 mb-1">Discord</label>
              <input
                type="text"
                value={formData.discord || ''}
                onChange={(e) =>
                  setFormData({ ...formData, discord: e.target.value })
                }
                className="w-full bg-slate-950 border border-slate-700 rounded-lg py-2 px-3 text-white"
              />
            </div>
            <div>
              <label className="block text-sm text-slate-400 mb-1">Tracker Link</label>
              <input
                type="text"
                value={formData.trackerLink || ''}
                onChange={(e) =>
                  setFormData({ ...formData, trackerLink: e.target.value })
                }
                className="w-full bg-slate-950 border border-slate-700 rounded-lg py-2 px-3 text-white"
              />
            </div>
          </div>

          {/* Team Captain Toggle */}
          <div className="p-3 bg-slate-950/50 rounded-lg border border-slate-800">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-2">
                <Crown size={16} className="text-mythic-gold" />
                <span className="text-sm text-white font-medium">Team Captain</span>
                <span className="text-xs text-slate-500">(Available for live draft captain selection)</span>
              </div>
              <button
                type="button"
                onClick={() => setFormData({ ...formData, isTeamCaptain: !(formData as any).isTeamCaptain } as any)}
                className={`flex items-center gap-2 px-3 py-1.5 rounded-lg font-bold text-sm transition-all ${(formData as any).isTeamCaptain ? 'bg-mythic-gold/20 text-mythic-gold border border-mythic-gold/30' : 'bg-slate-800 text-slate-400 border border-slate-700'}`}
              >
                {(formData as any).isTeamCaptain ? <ToggleRight size={18} /> : <ToggleLeft size={18} />}
                {(formData as any).isTeamCaptain ? 'YES' : 'NO'}
              </button>
            </div>
          </div>

          {/* Notes Section */}
          <div>
            <label className="block text-sm text-slate-400 mb-1">
              Admin Notes
            </label>
            <textarea
              value={notes}
              onChange={(e) => setNotes(e.target.value)}
              placeholder="Add notes about this player..."
              className="w-full bg-slate-950 border border-slate-700 rounded-lg py-2 px-3 text-white h-20 resize-none"
            />
          </div>

          {/* Flags */}
          <div>
            <label className="block text-sm text-slate-400 mb-2">Flags</label>
            <div className="flex gap-2">
              {(
                [
                  'disputed',
                  'pending_review',
                  'banned',
                ] as const
              ).map((f) => (
                <button
                  key={f}
                  onClick={() => setFlag(flag === f ? '' : f)}
                  className={`px-3 py-1 rounded-lg text-sm font-semibold border transition-all ${
                    flag === f
                      ? flagColors[f]
                      : 'bg-slate-800 border-slate-700 text-slate-400'
                  }`}
                >
                  <Flag size={14} className="inline mr-1" />
                  {f.replace('_', ' ').toUpperCase()}
                </button>
              ))}
            </div>
          </div>

          {/* Stats Display */}
          <div className="bg-slate-950/50 rounded-lg p-4 border border-slate-800">
            <h3 className="font-bold text-slate-200 mb-3 flex items-center gap-2">
              <BarChart3 size={16} />
              Current Stats
            </h3>
            <div className="grid grid-cols-2 gap-3 text-sm">
              <div className="flex justify-between">
                <span className="text-slate-400">Score:</span>
                <span className="text-white font-mono">
                  {player.stats?.score || 0}
                </span>
              </div>
              <div className="flex justify-between">
                <span className="text-slate-400">Wins/Losses:</span>
                <span className="text-white font-mono">
                  {player.stats?.wins || 0}/{player.stats?.losses || 0}
                </span>
              </div>
              <div className="flex justify-between">
                <span className="text-slate-400">K/D/A:</span>
                <span className="text-white font-mono">
                  {player.stats?.kills || 0}/{player.stats?.deaths || 0}/
                  {player.stats?.assists || 0}
                </span>
              </div>
              <div className="flex justify-between">
                <span className="text-slate-400">Matches:</span>
                <span className="text-white font-mono">
                  {player.stats?.matchesPlayed || 0}
                </span>
              </div>
            </div>
          </div>

          {/* Action Buttons */}
          <div className="flex gap-3 pt-4 border-t border-slate-700">
            <button
              onClick={handleSave}
              disabled={isSaving}
              className="flex-1 bg-green-600 hover:bg-green-700 text-white font-bold py-2 rounded-lg transition-colors disabled:opacity-50"
            >
              {isSaving ? 'Saving...' : 'Save Changes'}
            </button>
            <button
              onClick={handleDelete}
              disabled={isDeleting}
              className="px-4 bg-red-600/20 hover:bg-red-600/30 text-red-400 border border-red-500/30 font-bold py-2 rounded-lg transition-colors flex items-center gap-2 disabled:opacity-50"
            >
              <Trash2 size={16} />
              {isDeleting ? 'Deleting...' : 'Delete'}
            </button>
            <button
              onClick={onClose}
              className="flex-1 bg-slate-800 hover:bg-slate-700 text-slate-200 font-bold py-2 rounded-lg transition-colors"
            >
              Cancel
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

// ═══════════════════════════════════════════════════════════════════════════
// ADMIN MATCH MANAGEMENT MODAL
// ═══════════════════════════════════════════════════════════════════════════

interface MatchEditModalProps {
  match: TournamentMatch | null;
  isOpen: boolean;
  onClose: () => void;
  onSave: () => void;
}

const MatchEditModal: React.FC<MatchEditModalProps> = ({
  match,
  isOpen,
  onClose,
  onSave,
}) => {
  const [formData, setFormData] = useState<Partial<TournamentMatch>>(
    match || {}
  );
  const [deleteReason, setDeleteReason] = useState('');
  const [isDeleting, setIsDeleting] = useState(false);
  const [isVerifying, setIsVerifying] = useState(false);
  const [isSaving, setIsSaving] = useState(false);

  useEffect(() => {
    if (match) setFormData({ ...match });
  }, [match]);

  if (!isOpen || !match) return null;

  const handleSave = async () => {
    if (!auth.currentUser) return;
    setIsSaving(true);

    try {
      await updateTournamentMatch(
        match.id,
        formData,
        auth.currentUser.uid,
        'Manual edit from admin panel'
      );
      onSave();
      onClose();
    } catch (error) {
      alert('Error saving match: ' + error);
    } finally {
      setIsSaving(false);
    }
  };

  const handleDelete = async () => {
    if (!window.confirm('Delete this match? Statistics will be recalculated.'))
      return;

    if (!auth.currentUser) return;
    setIsDeleting(true);

    try {
      await deleteTournamentMatch(
        match.id,
        auth.currentUser.uid,
        deleteReason || 'Deleted from admin panel'
      );
      onSave();
      onClose();
    } catch (error) {
      alert('Error deleting match: ' + error);
    } finally {
      setIsDeleting(false);
    }
  };

  const handleVerify = async () => {
    if (!auth.currentUser) return;
    setIsVerifying(true);

    try {
      await verifyTournamentMatch(match.id, auth.currentUser.uid);
      onSave();
      onClose();
    } catch (error) {
      alert('Error verifying match: ' + error);
    } finally {
      setIsVerifying(false);
    }
  };

  return (
    <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4">
      <div className="bg-slate-900 rounded-xl border border-slate-700 w-full max-w-2xl max-h-[90vh] overflow-y-auto">
        <div className="sticky top-0 bg-slate-950 p-4 border-b border-slate-700 flex items-center justify-between">
          <h2 className="text-xl font-bold text-white flex items-center gap-2">
            <Edit2 size={20} className="text-mythic-gold" />
            Edit Match
          </h2>
          <button
            onClick={onClose}
            className="text-slate-400 hover:text-slate-200"
          >
            <X size={20} />
          </button>
        </div>

        <div className="p-6 space-y-4">
          {/* Match Status */}
          <div className="flex items-center justify-between p-4 bg-slate-950 rounded-lg border border-slate-800">
            <span className="text-slate-400">Status:</span>
            <span
              className={`px-3 py-1 rounded-lg text-sm font-bold ${
                match.status === 'verified'
                  ? 'bg-green-500/20 text-green-400'
                  : match.status === 'pending'
                    ? 'bg-yellow-500/20 text-yellow-400'
                    : 'bg-slate-700 text-slate-300'
              }`}
            >
              {match.status.toUpperCase()}
            </span>
          </div>

          {/* Teams */}
          <div className="grid grid-cols-2 gap-4">
            <div>
              <label className="block text-sm text-slate-400 mb-2">
                Team 1
              </label>
              <div className="space-y-2">
                {match.team1?.players.map((p, i) => (
                  <div
                    key={i}
                    className="bg-slate-950 rounded-lg p-2 border border-slate-800 text-sm"
                  >
                    <div className="text-slate-200 font-mono">{p.name}</div>
                    <div className="text-xs text-slate-500">
                      {p.kills}K / {p.deaths}D / {p.assists}A
                    </div>
                  </div>
                ))}
              </div>
            </div>
            <div>
              <label className="block text-sm text-slate-400 mb-2">
                Team 2
              </label>
              <div className="space-y-2">
                {match.team2?.players.map((p, i) => (
                  <div
                    key={i}
                    className="bg-slate-950 rounded-lg p-2 border border-slate-800 text-sm"
                  >
                    <div className="text-slate-200 font-mono">{p.name}</div>
                    <div className="text-xs text-slate-500">
                      {p.kills}K / {p.deaths}D / {p.assists}A
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Delete Reason */}
          <div>
            <label className="block text-sm text-slate-400 mb-1">
              Delete Reason (if applicable)
            </label>
            <input
              type="text"
              value={deleteReason}
              onChange={(e) => setDeleteReason(e.target.value)}
              placeholder="e.g., Duplicate entry, incorrect scores..."
              className="w-full bg-slate-950 border border-slate-700 rounded-lg py-2 px-3 text-white"
            />
          </div>

          {/* Action Buttons */}
          <div className="flex gap-3 pt-4 border-t border-slate-700 flex-wrap">
            {match.status === 'pending' && (
              <button
                onClick={handleVerify}
                disabled={isVerifying}
                className="flex-1 min-w-32 bg-green-600 hover:bg-green-700 text-white font-bold py-2 rounded-lg transition-colors disabled:opacity-50 flex items-center justify-center gap-2"
              >
                <CheckCircle2 size={16} />
                {isVerifying ? 'Verifying...' : 'Verify Match'}
              </button>
            )}
            <button
              onClick={handleDelete}
              disabled={isDeleting}
              className="flex-1 min-w-32 bg-red-600/20 hover:bg-red-600/30 text-red-400 border border-red-500/30 font-bold py-2 rounded-lg transition-colors flex items-center justify-center gap-2 disabled:opacity-50"
            >
              <Trash2 size={16} />
              {isDeleting ? 'Deleting...' : 'Delete'}
            </button>
            <button
              onClick={onClose}
              className="flex-1 min-w-32 bg-slate-800 hover:bg-slate-700 text-slate-200 font-bold py-2 rounded-lg transition-colors"
            >
              Close
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

// ═══════════════════════════════════════════════════════════════════════════
// MAIN ADMIN PANEL COMPONENT
// ═══════════════════════════════════════════════════════════════════════════

export const TournamentAdminPanel: React.FC<{ tournamentId: string }> = ({
  tournamentId,
}) => {
  const [activeTab, setActiveTab] = useState<'players' | 'matches' | 'audit'>(
    'players'
  );
  const [players, setPlayers] = useState<TournamentPlayer[]>([]);
  const [matches, setMatches] = useState<TournamentMatch[]>([]);
  const [auditLogs, setAuditLogs] = useState<AuditLog[]>([]);
  const [search, setSearch] = useState('');
  const [filterStatus, setFilterStatus] = useState<TournamentPlayerStatus | ''>(
    ''
  );
  const [filterMatchStatus, setFilterMatchStatus] =
    useState<TournamentMatchStatus>('');

  const [selectedPlayer, setSelectedPlayer] = useState<TournamentPlayer | null>(
    null
  );
  const [isPlayerModalOpen, setIsPlayerModalOpen] = useState(false);

  const [selectedMatch, setSelectedMatch] = useState<TournamentMatch | null>(
    null
  );
  const [isMatchModalOpen, setIsMatchModalOpen] = useState(false);

  const [isUndoing, setIsUndoing] = useState(false);
  const [showUndoConfirm, setShowUndoConfirm] = useState(false);

  // Load data
  useEffect(() => {
    const unsubPlayers = onSnapshot(
      query(
        collection(db, 'tournament_players'),
        where('tournamentId', '==', tournamentId)
      ),
      (snapshot) => {
        setPlayers(
          snapshot.docs.map((d) => ({ ...d.data() } as TournamentPlayer))
        );
      }
    );

    const unsubMatches = onSnapshot(
      query(
        collection(db, 'tournament_matches'),
        where('tournamentId', '==', tournamentId),
        orderBy('date', 'desc')
      ),
      (snapshot) => {
        setMatches(
          snapshot.docs.map((d) => ({ ...d.data() } as TournamentMatch))
        );
      }
    );

    return () => {
      unsubPlayers();
      unsubMatches();
    };
  }, [tournamentId]);

  // Load audit logs when switching to audit tab
  useEffect(() => {
    if (activeTab === 'audit') {
      getAuditLogs(undefined, undefined, 100).then(setAuditLogs);
    }
  }, [activeTab]);

  const handleUndoLastMatches = async (count: number) => {
    if (!window.confirm(`Undo last ${count} matches? This cannot be undone.`))
      return;

    setIsUndoing(true);
    try {
      await undoLastMatches(count, auth.currentUser?.uid || 'system');
      alert(`Successfully undone last ${count} matches`);
      setShowUndoConfirm(false);
    } catch (error) {
      alert('Error undoing matches: ' + error);
    } finally {
      setIsUndoing(false);
    }
  };

  const handleResetScores = async () => {
    if (
      !window.confirm(
        '⚠️ DANGER: Reset ALL player scores for new month? This cannot be undone.'
      )
    )
      return;
    if (!window.confirm('This is your FINAL warning. Continue?')) return;

    try {
      await resetTournamentScores(
        tournamentId,
        auth.currentUser?.uid || 'system'
      );
      alert('Scores reset successfully');
    } catch (error) {
      alert('Error resetting scores: ' + error);
    }
  };

  const filteredPlayers = useMemo(() => {
    return players.filter((p) => {
      const matchesSearch = p.name
        .toLowerCase()
        .includes(search.toLowerCase());
      const matchesFilter = !filterStatus || p.status === filterStatus;
      return matchesSearch && matchesFilter;
    });
  }, [players, search, filterStatus]);

  const filteredMatches = useMemo(() => {
    return matches.filter((m) => {
      const matchesFilter = !filterMatchStatus || m.status === filterMatchStatus;
      return matchesFilter;
    });
  }, [matches, filterMatchStatus]);

  return (
    <div className="space-y-6">
      {/* Tabs */}
      <div className="flex gap-2 border-b border-slate-700">
        {(['players', 'matches', 'audit'] as const).map((tab) => (
          <button
            key={tab}
            onClick={() => setActiveTab(tab)}
            className={`px-4 py-2 border-b-2 font-semibold transition-colors ${
              activeTab === tab
                ? 'border-mythic-gold text-mythic-gold'
                : 'border-transparent text-slate-400 hover:text-slate-300'
            }`}
          >
            {tab.charAt(0).toUpperCase() + tab.slice(1)}
          </button>
        ))}
      </div>

      {/* PLAYERS TAB */}
      {activeTab === 'players' && (
        <div className="space-y-4">
          <div className="flex gap-4 items-center flex-wrap">
            <div className="flex-1 min-w-48 relative">
              <Search
                size={18}
                className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-500"
              />
              <input
                type="text"
                placeholder="Search players..."
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                className="w-full bg-slate-950 border border-slate-700 rounded-lg py-2 pl-10 pr-4 text-white"
              />
            </div>

            <select
              value={filterStatus}
              onChange={(e) =>
                setFilterStatus(e.target.value as TournamentPlayerStatus | '')
              }
              className="bg-slate-950 border border-slate-700 rounded-lg py-2 px-3 text-white"
            >
              <option value="">All Statuses</option>
              <option value="active">Active</option>
              <option value="checked_in">Checked In</option>
              <option value="eliminated">Eliminated</option>
              <option value="banned">Banned</option>
              <option value="inactive">Inactive</option>
            </select>

            <button
              onClick={handleResetScores}
              className="px-4 py-2 bg-red-600/20 hover:bg-red-600/30 text-red-400 border border-red-500/30 rounded-lg font-semibold transition-colors"
            >
              Reset All Scores
            </button>
          </div>

          <div className="bg-slate-900 border border-slate-700 rounded-xl overflow-hidden">
            <div className="overflow-x-auto">
              <table className="w-full text-sm">
                <thead className="bg-slate-950 border-b border-slate-700">
                  <tr>
                    <th className="text-left py-3 px-4 text-slate-400">
                      Name
                    </th>
                    <th className="text-center py-3 px-4 text-slate-400">
                      Status
                    </th>
                    <th className="text-center py-3 px-4 text-slate-400">
                      Score
                    </th>
                    <th className="text-center py-3 px-4 text-slate-400">
                      W/L
                    </th>
                    <th className="text-center py-3 px-4 text-slate-400">
                      K/D/A
                    </th>
                    <th className="text-center py-3 px-4 text-slate-400">
                      Actions
                    </th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-800">
                  {filteredPlayers.map((player) => (
                    <tr
                      key={player.id}
                      className="hover:bg-slate-800/30 transition-colors"
                    >
                      <td className="py-3 px-4 text-white font-mono">
                        {player.name}
                      </td>
                      <td className="py-3 px-4 text-center">
                        <span
                          className={`px-2 py-1 rounded text-xs font-bold ${
                            player.status === 'banned'
                              ? 'bg-red-500/20 text-red-400'
                              : player.status === 'checked_in'
                                ? 'bg-green-500/20 text-green-400'
                                : 'bg-slate-700 text-slate-300'
                          }`}
                        >
                          {player.status.replace('_', ' ').toUpperCase()}
                        </span>
                      </td>
                      <td className="py-3 px-4 text-center text-slate-200 font-mono">
                        {player.stats?.score || 0}
                      </td>
                      <td className="py-3 px-4 text-center text-slate-300">
                        <span className="text-green-400">
                          {player.stats?.wins || 0}
                        </span>
                        /<span className="text-red-400">
                          {player.stats?.losses || 0}
                        </span>
                      </td>
                      <td className="py-3 px-4 text-center text-slate-300 text-xs">
                        {player.stats?.kills || 0}/{player.stats?.deaths || 0}/
                        {player.stats?.assists || 0}
                      </td>
                      <td className="py-3 px-4 text-center">
                        <button
                          onClick={() => {
                            setSelectedPlayer(player);
                            setIsPlayerModalOpen(true);
                          }}
                          className="inline-flex items-center gap-1 px-2 py-1 bg-mythic-gold/20 hover:bg-mythic-gold/30 text-mythic-gold rounded transition-colors"
                        >
                          <Edit2 size={14} />
                          Edit
                        </button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      )}

      {/* MATCHES TAB */}
      {activeTab === 'matches' && (
        <div className="space-y-4">
          <div className="flex gap-4 items-center flex-wrap">
            <select
              value={filterMatchStatus}
              onChange={(e) =>
                setFilterMatchStatus(e.target.value as TournamentMatchStatus)
              }
              className="bg-slate-950 border border-slate-700 rounded-lg py-2 px-3 text-white"
            >
              <option value="">All Statuses</option>
              <option value="pending">Pending</option>
              <option value="verified">Verified</option>
              <option value="disputed">Disputed</option>
              <option value="cancelled">Cancelled</option>
            </select>

            <div className="flex-1" />

            {showUndoConfirm && (
              <div className="flex gap-2 items-center">
                <span className="text-slate-300">Undo last:</span>
                {[1, 3, 5, 10].map((count) => (
                  <button
                    key={count}
                    onClick={() => handleUndoLastMatches(count)}
                    disabled={isUndoing}
                    className="px-3 py-1 bg-blue-600 hover:bg-blue-700 text-white rounded text-sm font-bold transition-colors disabled:opacity-50"
                  >
                    {count}
                  </button>
                ))}
                <button
                  onClick={() => setShowUndoConfirm(false)}
                  className="px-3 py-1 bg-slate-700 hover:bg-slate-600 text-white rounded text-sm"
                >
                  Cancel
                </button>
              </div>
            )}

            {!showUndoConfirm && (
              <button
                onClick={() => setShowUndoConfirm(true)}
                className="px-4 py-2 bg-blue-600/20 hover:bg-blue-600/30 text-blue-400 border border-blue-500/30 rounded-lg font-semibold transition-colors"
              >
                ⏮ Undo Matches
              </button>
            )}
          </div>

          <div className="grid gap-4">
            {filteredMatches.map((match) => (
              <div
                key={match.id}
                className="bg-slate-900 border border-slate-700 rounded-lg p-4 hover:border-slate-600 transition-colors"
              >
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center gap-2">
                    <span className="font-bold text-white">
                      {match.team1?.name || 'Team 1'} vs{' '}
                      {match.team2?.name || 'Team 2'}
                    </span>
                    <span
                      className={`px-2 py-1 rounded text-xs font-bold ${
                        match.status === 'verified'
                          ? 'bg-green-500/20 text-green-400'
                          : match.status === 'pending'
                            ? 'bg-yellow-500/20 text-yellow-400'
                            : 'bg-slate-700 text-slate-300'
                      }`}
                    >
                      {match.status.toUpperCase()}
                    </span>
                  </div>
                  <button
                    onClick={() => {
                      setSelectedMatch(match);
                      setIsMatchModalOpen(true);
                    }}
                    className="px-3 py-1 bg-mythic-gold/20 hover:bg-mythic-gold/30 text-mythic-gold rounded transition-colors flex items-center gap-1"
                  >
                    <Edit2 size={14} />
                    Edit
                  </button>
                </div>

                <div className="grid grid-cols-2 gap-4 text-sm">
                  <div>
                    <div className="text-slate-400 mb-2">
                      {match.winner === 'Team 1' ? '✓ ' : ''}Team 1
                    </div>
                    {match.team1?.players.map((p, i) => (
                      <div key={i} className="text-slate-300 ml-2 text-xs">
                        {p.name} ({p.kills}K/{p.deaths}D/{p.assists}A)
                      </div>
                    ))}
                  </div>
                  <div>
                    <div className="text-slate-400 mb-2">
                      {match.winner === 'Team 2' ? '✓ ' : ''}Team 2
                    </div>
                    {match.team2?.players.map((p, i) => (
                      <div key={i} className="text-slate-300 ml-2 text-xs">
                        {p.name} ({p.kills}K/{p.deaths}D/{p.assists}A)
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* AUDIT TAB */}
      {activeTab === 'audit' && (
        <div className="space-y-4">
          <div className="bg-slate-900 border border-slate-700 rounded-xl overflow-hidden">
            <div className="overflow-x-auto">
              <table className="w-full text-sm">
                <thead className="bg-slate-950 border-b border-slate-700">
                  <tr>
                    <th className="text-left py-3 px-4 text-slate-400">
                      Action
                    </th>
                    <th className="text-left py-3 px-4 text-slate-400">
                      Entity
                    </th>
                    <th className="text-left py-3 px-4 text-slate-400">
                      Changed By
                    </th>
                    <th className="text-left py-3 px-4 text-slate-400">
                      Timestamp
                    </th>
                    <th className="text-left py-3 px-4 text-slate-400">
                      Reason
                    </th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-800">
                  {auditLogs.map((log, i) => (
                    <tr key={i} className="hover:bg-slate-800/30">
                      <td className="py-3 px-4">
                        <span className="text-xs font-mono bg-slate-800 px-2 py-1 rounded text-slate-300">
                          {log.action.replace('_', ' ')}
                        </span>
                      </td>
                      <td className="py-3 px-4 text-white font-mono text-xs">
                        {log.entityId.substring(0, 12)}...
                      </td>
                      <td className="py-3 px-4 text-slate-400 text-xs">
                        {log.changedBy}
                      </td>
                      <td className="py-3 px-4 text-slate-500 text-xs">
                        {new Date(log.timestamp).toLocaleString()}
                      </td>
                      <td className="py-3 px-4 text-slate-400 text-xs">
                        {log.reason || '—'}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      )}

      {/* Modals */}
      <PlayerEditModal
        player={selectedPlayer}
        isOpen={isPlayerModalOpen}
        onClose={() => setIsPlayerModalOpen(false)}
        onSave={() => {
          setIsPlayerModalOpen(false);
          setSelectedPlayer(null);
        }}
      />

      <MatchEditModal
        match={selectedMatch}
        isOpen={isMatchModalOpen}
        onClose={() => setIsMatchModalOpen(false)}
        onSave={() => {
          setIsMatchModalOpen(false);
          setSelectedMatch(null);
        }}
      />
    </div>
  );
};

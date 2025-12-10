# Tournament Management System - Implementation Guide

## Overview
A **production-grade tournament management system** built with Firebase, featuring full CRUD operations, audit logging, match versioning, and admin controls.

---

## Architecture

### 1. **Data Layer** (`types.ts`)
Enhanced types with full tournament lifecycle:

```typescript
// Core entities
- Tournament: Month/year tournaments with bracket types
- TournamentPlayer: Player profiles with stats, status, flags, audit trails
- TournamentMatch: Match records with versioning and verification
- AuditLog: Complete action history
- TournamentPlayerStats: Granular stat tracking
```

### 2. **Service Layer** (`services/tournamentService.ts`)
**254 lines** of production-ready functions:

#### Audit Logging
- `logAuditAction()` - Track every admin action with context

#### Player Operations
- `createTournamentPlayer()` - New player with audit trail
- `updateTournamentPlayer()` - Edit with change tracking
- `deleteTournamentPlayer()` - Soft delete + audit
- `togglePlayerCheckIn()` - Check-in/out management
- `addPlayerNote()` - Notes + flags (disputed, banned, pending_review)

#### Match Operations
- `createTournamentMatch()` - Record match + update stats
- `updateTournamentMatch()` - Edit with versioning
- `deleteTournamentMatch()` - Undo stats + mark cancelled
- `verifyTournamentMatch()` - Admin verification
- `undoLastMatches()` - Bulk undo with stat recalculation

#### Tournament Operations
- `createTournament()` - New tournament month
- `updateTournament()` - Edit settings
- `resetTournamentScores()` - Monthly reset

#### Read Operations
- `getTournamentPlayer()`, `getTournamentMatch()`, `getAuditLogs()`

### 3. **UI Layer** (`components/TournamentAdminPanel.tsx`)
**600+ lines** of admin interface components:

#### Tabs
1. **Players Tab**
   - Search + filter by status
   - Full player stats display
   - Edit/delete modals
   - Batch reset scores

2. **Matches Tab**
   - Filter by status (pending/verified/disputed/cancelled)
   - Undo last 1/3/5/10 matches
   - Edit/verify/delete individual matches
   - Stats recalculation

3. **Audit Tab**
   - Complete action history
   - Shows who did what and when
   - Includes edit reasons

#### Modals
- **PlayerEditModal**: Edit name, discord, MMR, status, notes, flags
- **MatchEditModal**: Edit teams/scores, verify, or delete

---

## Key Features

### ✅ Complete CRUD
- **Create**: Players, matches, tournaments
- **Read**: Real-time data sync with Firestore
- **Update**: With versioning and audit trails
- **Delete**: Soft deletes (marked as inactive/cancelled)

### ✅ Audit Trail
Every action logged with:
- Who did it (user ID)
- What changed (before/after)
- When (timestamp)
- Why (reason field)

### ✅ Match Versioning
- Snapshots stored on every edit
- Restore previous versions
- Recalculate player stats automatically
- Full undo capability

### ✅ Player Flags
Three admin flags:
- `disputed` - Score/placement in question
- `pending_review` - Needs moderator attention
- `banned` - Account restricted

### ✅ Real-time Updates
- Firebase onSnapshot subscriptions
- Instant UI updates
- No page refresh needed

### ✅ Data Integrity
- Batch writes for atomicity
- Stat recalculation on edits
- Proper player lookup by name
- Validation before operations

---

## Firestore Schema

```
tournaments/
├── {tournamentId}
│   ├── month: string
│   ├── year: number
│   ├── status: 'planning' | 'active' | 'completed' | 'archived'
│   ├── bracketType: 'round_robin' | 'single_elimination' | 'double_elimination'
│   ├── checkInOpen: boolean
│   └── ...

tournament_players/
├── {playerId}
│   ├── id: string
│   ├── name: string
│   ├── discord: string
│   ├── trackerLink: string
│   ├── status: 'active' | 'checked_in' | 'eliminated' | 'banned' | 'inactive'
│   ├── stats: {
│   │   ├── score: number
│   │   ├── wins: number
│   │   ├── losses: number
│   │   ├── matchesPlayed: number
│   │   ├── kills: number
│   │   ├── deaths: number
│   │   └── assists: number
│   │ }
│   ├── notes: string
│   ├── flags: ['disputed' | 'pending_review' | 'banned']
│   └── ...

tournament_matches/
├── {matchId}
│   ├── id: string
│   ├── tournamentId: string
│   ├── status: 'pending' | 'verified' | 'disputed' | 'cancelled'
│   ├── team1: {
│   │   ├── name: string
│   │   └── players: [{name, kills, deaths, assists, verified}]
│   │ }
│   ├── team2: {...}
│   ├── winner: 'Team 1' | 'Team 2'
│   ├── verifiedBy: string
│   ├── versions: [{timestamp, snapshot, editedBy, reason}]
│   └── ...

audit_logs/
├── {logId}
│   ├── action: 'player_created' | 'player_edited' | 'match_verified' | ...
│   ├── entityType: 'player' | 'match' | 'tournament'
│   ├── entityId: string
│   ├── changes: {fieldName: {old, new}}
│   ├── changedBy: string (user ID)
│   ├── timestamp: ISO string
│   └── reason: string
```

---

## Usage Examples

### Create Tournament
```typescript
const tournament = await createTournament(
  {
    month: 'December',
    year: 2024,
    bracketType: 'round_robin',
    prizePool: 500
  },
  currentUser.uid
);
```

### Register Player
```typescript
const player = await createTournamentPlayer(
  userId,
  tournamentId,
  {
    name: 'ProPlayer123',
    discord: 'ProPlayer#1234',
    trackerLink: 'https://smite.guru/...',
    primaryRole: 'Mid',
    offRoles: ['Jungle', 'Support']
  },
  adminUser.uid
);
```

### Record Match
```typescript
const match = await createTournamentMatch(
  tournamentId,
  {
    date: new Date().toISOString(),
    team1: {
      name: 'Alpha Squad',
      players: [
        { name: 'Player1', kills: 25, deaths: 5, assists: 15, verified: true },
        // ...5 players
      ]
    },
    team2: {
      name: 'Beta Team',
      players: [...]
    },
    winner: 'Team 1',
    status: 'pending'
  },
  adminUser.uid
);
```

### Edit Match (Auto Undo/Redo Stats)
```typescript
await updateTournamentMatch(
  matchId,
  {
    team1: {
      ...updatedTeam1Data
    }
  },
  adminUser.uid,
  'Corrected Player1 kill count from 25 to 30'
);
```

### Verify Match
```typescript
await verifyTournamentMatch(matchId, adminUser.uid);
```

### Undo Last 5 Matches
```typescript
await undoLastMatches(5, adminUser.uid);
```

### Add Player Note
```typescript
await addPlayerNote(
  playerId,
  'Needs review - possible score inflation',
  'disputed',
  adminUser.uid
);
```

---

## Integration with TournamentView

Add to the admin section of `TournamentView.tsx`:

```tsx
{activeTab === 'admin' && isAdmin && (
  <TournamentAdminPanel tournamentId={currentTournamentId} />
)}
```

---

## Scoring System

Default (customizable):
- **Win**: 7 points + K/D/A stats
- **Loss**: 3 points + K/D/A stats
- **Participation**: Tracked separately

---

## Security Considerations

### Firestore Rules (Recommended)
```javascript
rules_version = '2';
service cloud.firestore {
  match /databases/{database}/documents {
    // Admin-only access to sensitive collections
    match /audit_logs/{document=**} {
      allow read, write: if request.auth.token.isAdmin == true;
    }
    
    match /tournament_players/{document=**} {
      allow read: if request.auth != null;
      allow write: if request.auth.token.isAdmin == true;
    }
    
    match /tournament_matches/{document=**} {
      allow read: if request.auth != null;
      allow write: if request.auth.token.isAdmin == true;
    }
  }
}
```

---

## Future Enhancements

1. **CSV Import/Export** - Bulk player import
2. **Match Verification Workflow** - Multi-level approval
3. **Bracket Generation** - Automatic scheduling
4. **Dispute Resolution** - Formal appeal system
5. **Statistics Dashboard** - Advanced analytics
6. **Replay Integration** - Link match replays
7. **API Endpoints** - External integrations
8. **Email Notifications** - Auto alerts

---

## Performance Optimizations

- ✅ Batched writes for atomicity
- ✅ Real-time subscriptions (not polls)
- ✅ Indexed Firestore queries
- ✅ Pagination on audit logs
- ✅ Soft deletes (no hard data loss)

---

## Troubleshooting

**Issue**: Players stats not updating after match edit
- **Solution**: Ensure `updatePlayerStatsFromMatch()` is called with correct match data

**Issue**: Undo not reversing correctly
- **Solution**: Check that versions array is populated on match creation

**Issue**: Audit logs missing
- **Solution**: Verify `logAuditAction()` is being called in all operations

---

## Support

For issues or questions, refer to:
- `services/tournamentService.ts` - Service layer logic
- `components/TournamentAdminPanel.tsx` - UI implementation
- `types.ts` - Data structures

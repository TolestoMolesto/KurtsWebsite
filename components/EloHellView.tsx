import React, { useState, useEffect } from 'react';
import { Flame, Play, Plus, Shield } from 'lucide-react';
import { db, auth } from '../services/firebase';
import { collection, onSnapshot, addDoc, serverTimestamp, deleteDoc, doc, query, orderBy, getDoc, setDoc } from 'firebase/firestore';
import * as FirebaseAuth from 'firebase/auth';

interface EloHellEntry {
  id: string;
  playerName: string;
  videoUrl: string;
  timestamp: string;
  category: 'in_hell' | 'play_better' | 'holy_hell';
}

interface UserEloStatus {
  id: string;
  name: string;
  inEloHell: boolean;
}

export const EloHellView: React.FC = () => {
  const [currentUser, setCurrentUser] = useState<FirebaseAuth.User | null>(null);
  const [isAdmin, setIsAdmin] = useState(false);
  const [eloHellCount, setEloHellCount] = useState(0);
  const [notEloHellCount, setNotEloHellCount] = useState(0);
  const [entries, setEntries] = useState<EloHellEntry[]>([]);
  const [selectedPlayerName, setSelectedPlayerName] = useState('');
  const [newVideoUrl, setNewVideoUrl] = useState('');
  const [newCategory, setNewCategory] = useState<'in_hell' | 'play_better' | 'holy_hell'>('in_hell');
  const [isSubmitting, setIsSubmitting] = useState(false);

  // Check admin status and get current user
  useEffect(() => {
    const unsubscribe = FirebaseAuth.onAuthStateChanged(auth, async (user) => {
      setCurrentUser(user);
      if (user) {
        const userDoc = await getDoc(doc(db, 'users', user.uid));
        setIsAdmin(userDoc.exists() && userDoc.data()?.isAdmin === true);
      } else {
        setIsAdmin(false);
      }
    });

    return () => unsubscribe();
  }, []);

  // Subscribe to elo hell entries from Firestore
  useEffect(() => {
    const q = query(collection(db, 'elo_hell_entries'), orderBy('timestamp', 'desc'));
    const unsubscribe = onSnapshot(q, (snapshot) => {
      const data = snapshot.docs.map(doc => ({
        id: doc.id,
        playerName: doc.data().playerName,
        videoUrl: doc.data().videoUrl,
        timestamp: doc.data().timestamp,
        category: doc.data().category || 'in_hell'
      }));
      setEntries(data);
    });

    return () => unsubscribe();
  }, []);

  // Subscribe to elo hell counts from Firestore
  useEffect(() => {
    const unsubscribe = onSnapshot(doc(db, 'elo_hell_stats', 'global'), (doc) => {
      if (doc.exists()) {
        setEloHellCount(doc.data().eloHell || 0);
        setNotEloHellCount(doc.data().notEloHell || 0);
      }
    });

    return () => unsubscribe();
  }, []);

  // Subscribe to user elo hell statuses
  useEffect(() => {
    const q = query(collection(db, 'elo_hell_users'), orderBy('name', 'asc'));
    const unsubscribe = onSnapshot(q, (snapshot) => {
      const data = snapshot.docs.map(doc => ({
        id: doc.id,
        name: doc.data().name,
        inEloHell: doc.data().inEloHell
      }));
      // Just use for dropdown in admin form if needed
    });

    return () => unsubscribe();
  }, []);

  const handleAddEntry = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!selectedPlayerName.trim() || !newVideoUrl.trim()) return;
    if (!isAdmin) return;

    setIsSubmitting(true);
    try {
      await addDoc(collection(db, 'elo_hell_entries'), {
        playerName: selectedPlayerName,
        videoUrl: newVideoUrl,
        category: newCategory,
        timestamp: serverTimestamp()
      });
      setSelectedPlayerName('');
      setNewVideoUrl('');
      setNewCategory('in_hell');
    } catch (error) {
      console.error('Error adding entry:', error);
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleDeleteEntry = async (id: string) => {
    if (!window.confirm('Delete this moment?')) return;
    try {
      await deleteDoc(doc(db, 'elo_hell_entries', id));
    } catch (error) {
      console.error('Error deleting entry:', error);
    }
  };

  const handleToggleEloStatus = async (userId: string, currentStatus: boolean) => {
    if (!isAdmin) return;
    try {
      await setDoc(doc(db, 'elo_hell_users', userId), {
        inEloHell: !currentStatus
      }, { merge: true });
    } catch (error) {
      console.error('Error updating elo status:', error);
    }
  };

  const handleAddUser = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!isAdmin) return;
    // Not needed anymore
  };

  // Only render if user is admin
  if (!isAdmin) {
    return (
      <div className="container mx-auto px-4 py-8 min-h-screen">
        <div className="flex items-center justify-center h-96">
          <div className="text-center">
            <Shield size={48} className="mx-auto text-slate-600 mb-4" />
            <h1 className="text-2xl font-bold text-white mb-2">Admin Only</h1>
            <p className="text-slate-400">You don't have permission to access this page.</p>
          </div>
        </div>
      </div>
    );
  }

  // Only render if user is admin
  if (!isAdmin) {
    return (
      <div className="container mx-auto px-4 py-8 min-h-screen">
        <div className="flex items-center justify-center h-96">
          <div className="text-center">
            <Shield size={48} className="mx-auto text-slate-600 mb-4" />
            <h1 className="text-2xl font-bold text-white mb-2">Admin Only</h1>
            <p className="text-slate-400">You don't have permission to access this page.</p>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="container mx-auto px-4 py-8 min-h-screen">
      {/* Header */}
      <div className="mb-8">
        <div className="flex items-center gap-3 mb-4">
          <Flame size={32} className="text-red-500" />
          <h1 className="font-serif font-bold text-4xl text-white">Elo Hell</h1>
        </div>
        <p className="text-slate-400 text-lg">
          Moments of players stuck in elo hell... or just not good enough. 🔥
        </p>
      </div>

      {/* Stats Section */}
      <div className="grid md:grid-cols-2 gap-6 mb-12">
        {/* In Elo Hell Counter */}
        <div className="bg-gradient-to-br from-red-500/20 to-red-600/10 border border-red-500/30 rounded-xl p-8 text-center">
          <div className="text-6xl font-bold text-red-400 mb-2">{eloHellCount}</div>
          <div className="text-xl text-red-300 font-bold">In Elo Hell 🔥</div>
          <p className="text-red-200/70 text-sm mt-2">Players confirmed stuck</p>
        </div>

        {/* Not In Elo Hell Counter */}
        <div className="bg-gradient-to-br from-green-500/20 to-green-600/10 border border-green-500/30 rounded-xl p-8 text-center">
          <div className="text-6xl font-bold text-green-400 mb-2">{notEloHellCount}</div>
          <div className="text-xl text-green-300 font-bold">Just Bad 😅</div>
          <p className="text-green-200/70 text-sm mt-2">Players who need to git gud</p>
        </div>
      </div>

      {/* ADMIN SECTION */}
      <div className="mb-12 p-6 bg-blue-950/30 border border-blue-700/30 rounded-xl">
        <h2 className="font-bold text-white text-xl mb-6 flex items-center gap-2">
          <Shield size={24} className="text-blue-400" /> Admin: Add Elo Hell Moment
        </h2>
        <form onSubmit={handleAddEntry} className="space-y-4">
          <div>
            <label className="block text-sm text-slate-300 mb-2">Player Name</label>
            <input
              type="text"
              value={selectedPlayerName}
              onChange={(e) => setSelectedPlayerName(e.target.value)}
              placeholder="Enter player name..."
              className="w-full bg-slate-950 border border-slate-700 rounded-lg py-2 px-4 text-slate-200 placeholder-slate-600"
            />
          </div>
          <div>
            <label className="block text-sm text-slate-300 mb-2">Video URL (YouTube, Twitch, etc.)</label>
            <input
              type="url"
              value={newVideoUrl}
              onChange={(e) => setNewVideoUrl(e.target.value)}
              placeholder="https://youtube.com/watch?v=..."
              className="w-full bg-slate-950 border border-slate-700 rounded-lg py-2 px-4 text-slate-200 placeholder-slate-600"
            />
          </div>
          <div>
            <label className="block text-sm text-slate-300 mb-2">Status</label>
            <select
              value={newCategory}
              onChange={(e) => setNewCategory(e.target.value as 'in_hell' | 'play_better' | 'holy_hell')}
              className="w-full bg-slate-950 border border-slate-700 rounded-lg py-2 px-4 text-slate-200"
            >
              <option value="in_hell">In Elo Hell 🔥</option>
              <option value="play_better">You Need to Play The Game Better 💀</option>
              <option value="holy_hell">HOLY you cause players to be in ELO HELL 👿</option>
            </select>
          </div>
          <button
            type="submit"
            disabled={isSubmitting || !selectedPlayerName.trim() || !newVideoUrl.trim()}
            className="w-full bg-red-600 hover:bg-red-500 disabled:opacity-50 text-white font-bold py-2 px-4 rounded-lg transition-colors"
          >
            {isSubmitting ? 'Adding...' : 'Add Moment'}
          </button>
        </form>
      </div>

      {/* PUBLIC SECTION */}
      <div className="mt-16">
        <h2 className="font-bold text-white text-2xl mb-2">Hall of Shame</h2>
        <p className="text-slate-400 mb-8">Watch these moments and you'll understand...</p>

      {/* In Elo Hell */}
      <div className="mb-16">
        <h2 className="font-bold text-white text-lg mb-6">🔥 In Elo Hell</h2>
        {entries.filter(e => e.category === 'in_hell').length === 0 ? (
          <div className="bg-slate-900 border border-slate-700 rounded-xl p-8 text-center">
            <Flame size={40} className="mx-auto text-slate-700 mb-4" />
            <p className="text-slate-400">No elo hell moments yet.</p>
          </div>
        ) : (
          <div className="grid md:grid-cols-2 gap-6">
            {entries.filter(e => e.category === 'in_hell').map(entry => (
              <div key={entry.id} className="bg-slate-900 border border-red-700/30 rounded-xl overflow-hidden hover:border-red-600/30 transition-colors">
                <div className="aspect-video bg-slate-950 relative">
                  {entry.videoUrl.includes('youtube.com') || entry.videoUrl.includes('youtu.be') ? (
                    <iframe
                      width="100%"
                      height="100%"
                      src={`https://www.youtube.com/embed/${entry.videoUrl.includes('youtu.be') ? entry.videoUrl.split('/').pop() : new URLSearchParams(new URL(entry.videoUrl).search).get('v')}`}
                      title={entry.playerName}
                      frameBorder="0"
                      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                      allowFullScreen
                      className="w-full h-full"
                    />
                  ) : (
                    <a
                      href={entry.videoUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-full h-full flex items-center justify-center bg-gradient-to-br from-slate-800 to-slate-900 hover:from-slate-700 hover:to-slate-800 transition-colors"
                    >
                      <Play size={48} className="text-red-500" />
                    </a>
                  )}
                </div>
                <div className="p-4">
                  <h3 className="font-bold text-white mb-2">{entry.playerName}</h3>
                  <div className="flex items-center justify-between">
                    <a
                      href={entry.videoUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-blue-400 hover:text-blue-300 text-sm"
                    >
                      Watch →
                    </a>
                    <button
                      onClick={() => handleDeleteEntry(entry.id)}
                      className="text-slate-500 hover:text-red-400 text-xs px-2 py-1 rounded hover:bg-slate-800 transition-colors"
                    >
                      Remove
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>

      {/* You Need to Play Better */}
      <div className="mb-16">
        <h2 className="font-bold text-white text-lg mb-6">💀 You Need to Play The Game Better</h2>
        {entries.filter(e => e.category === 'play_better').length === 0 ? (
          <div className="bg-slate-900 border border-slate-700 rounded-xl p-8 text-center">
            <Flame size={40} className="mx-auto text-slate-700 mb-4" />
            <p className="text-slate-400">No moments yet.</p>
          </div>
        ) : (
          <div className="grid md:grid-cols-2 gap-6">
            {entries.filter(e => e.category === 'play_better').map(entry => (
              <div key={entry.id} className="bg-slate-900 border border-yellow-700/30 rounded-xl overflow-hidden hover:border-yellow-600/30 transition-colors">
                <div className="aspect-video bg-slate-950 relative">
                  {entry.videoUrl.includes('youtube.com') || entry.videoUrl.includes('youtu.be') ? (
                    <iframe
                      width="100%"
                      height="100%"
                      src={`https://www.youtube.com/embed/${entry.videoUrl.includes('youtu.be') ? entry.videoUrl.split('/').pop() : new URLSearchParams(new URL(entry.videoUrl).search).get('v')}`}
                      title={entry.playerName}
                      frameBorder="0"
                      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                      allowFullScreen
                      className="w-full h-full"
                    />
                  ) : (
                    <a
                      href={entry.videoUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-full h-full flex items-center justify-center bg-gradient-to-br from-slate-800 to-slate-900 hover:from-slate-700 hover:to-slate-800 transition-colors"
                    >
                      <Play size={48} className="text-yellow-500" />
                    </a>
                  )}
                </div>
                <div className="p-4">
                  <h3 className="font-bold text-white mb-2">{entry.playerName}</h3>
                  <div className="flex items-center justify-between">
                    <a
                      href={entry.videoUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-blue-400 hover:text-blue-300 text-sm"
                    >
                      Watch →
                    </a>
                    <button
                      onClick={() => handleDeleteEntry(entry.id)}
                      className="text-slate-500 hover:text-red-400 text-xs px-2 py-1 rounded hover:bg-slate-800 transition-colors"
                    >
                      Remove
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>

      {/* HOLY you cause players to be in ELO HELL */}
      <div className="mb-16">
        <h2 className="font-bold text-white text-lg mb-6">👿 HOLY you cause players to be in ELO HELL</h2>
        {entries.filter(e => e.category === 'holy_hell').length === 0 ? (
          <div className="bg-slate-900 border border-slate-700 rounded-xl p-8 text-center">
            <Flame size={40} className="mx-auto text-slate-700 mb-4" />
            <p className="text-slate-400">No moments yet.</p>
          </div>
        ) : (
          <div className="grid md:grid-cols-2 gap-6">
            {entries.filter(e => e.category === 'holy_hell').map(entry => (
              <div key={entry.id} className="bg-slate-900 border border-purple-700/30 rounded-xl overflow-hidden hover:border-purple-600/30 transition-colors">
                <div className="aspect-video bg-slate-950 relative">
                  {entry.videoUrl.includes('youtube.com') || entry.videoUrl.includes('youtu.be') ? (
                    <iframe
                      width="100%"
                      height="100%"
                      src={`https://www.youtube.com/embed/${entry.videoUrl.includes('youtu.be') ? entry.videoUrl.split('/').pop() : new URLSearchParams(new URL(entry.videoUrl).search).get('v')}`}
                      title={entry.playerName}
                      frameBorder="0"
                      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                      allowFullScreen
                      className="w-full h-full"
                    />
                  ) : (
                    <a
                      href={entry.videoUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-full h-full flex items-center justify-center bg-gradient-to-br from-slate-800 to-slate-900 hover:from-slate-700 hover:to-slate-800 transition-colors"
                    >
                      <Play size={48} className="text-purple-500" />
                    </a>
                  )}
                </div>
                <div className="p-4">
                  <h3 className="font-bold text-white mb-2">{entry.playerName}</h3>
                  <div className="flex items-center justify-between">
                    <a
                      href={entry.videoUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-blue-400 hover:text-blue-300 text-sm"
                    >
                      Watch →
                    </a>
                    <button
                      onClick={() => handleDeleteEntry(entry.id)}
                      className="text-slate-500 hover:text-red-400 text-xs px-2 py-1 rounded hover:bg-slate-800 transition-colors"
                    >
                      Remove
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>

      {/* Player Elo Hell Status Management */}
      {/* Removed - no longer needed, admins just add videos directly */}
      </div>
    </div>
  );
};

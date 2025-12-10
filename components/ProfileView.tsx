
import React, { useState, useEffect } from 'react';
import { auth, db } from '../services/firebase';
import { updateProfile } from 'firebase/auth';
import { doc, getDoc, updateDoc } from 'firebase/firestore';
import { User, Mail, Save, Loader2, Shield, Calendar, Edit2, CheckCircle2, Link as LinkIcon, ExternalLink, MessageCircle } from 'lucide-react';

export const ProfileView: React.FC = () => {
  const [user, setUser] = useState(auth.currentUser);
  const [displayName, setDisplayName] = useState(user?.displayName || '');
  const [trackerLink, setTrackerLink] = useState('');
  const [discordHandle, setDiscordHandle] = useState('');
  
  // Initial states for comparison
  const [initialTrackerLink, setInitialTrackerLink] = useState('');
  const [initialDiscordHandle, setInitialDiscordHandle] = useState('');

  const [isAdmin, setIsAdmin] = useState(false);
  const [joinDate, setJoinDate] = useState<string>('');
  const [isLoading, setIsLoading] = useState(false);
  const [successMsg, setSuccessMsg] = useState('');
  const [errorMsg, setErrorMsg] = useState('');

  useEffect(() => {
    const fetchUserData = async () => {
      if (!user) return;
      try {
        const userDocRef = doc(db, 'users', user.uid);
        const userDoc = await getDoc(userDocRef);
        if (userDoc.exists()) {
          const data = userDoc.data();
          setIsAdmin(data.isAdmin === true);
          if (data.createdAt) {
            setJoinDate(new Date(data.createdAt).toLocaleDateString(undefined, { year: 'numeric', month: 'long', day: 'numeric' }));
          }
          if (data.trackerLink) {
            setTrackerLink(data.trackerLink);
            setInitialTrackerLink(data.trackerLink);
          }
          if (data.discordHandle) {
            setDiscordHandle(data.discordHandle);
            setInitialDiscordHandle(data.discordHandle);
          }
        }
      } catch (err) {
        console.error("Error fetching user data:", err);
      }
    };
    
    fetchUserData();
  }, [user]);

  const handleUpdateProfile = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!user) return;
    setIsLoading(true);
    setErrorMsg('');
    setSuccessMsg('');

    try {
      // 1. Update Firebase Auth Profile
      if (displayName !== user.displayName) {
          await updateProfile(user, {
            displayName: displayName
          });
      }

      // 2. Update Firestore User Document
      const userDocRef = doc(db, 'users', user.uid);
      await updateDoc(userDocRef, {
        displayName: displayName,
        trackerLink: trackerLink,
        discordHandle: discordHandle
      });

      setSuccessMsg('Profile updated successfully!');
      // Refresh local user state to reflect changes elsewhere if needed
      setUser({ ...user, displayName: displayName } as any);
      setInitialTrackerLink(trackerLink);
      setInitialDiscordHandle(discordHandle);
    } catch (err: any) {
      console.error("Error updating profile:", err);
      setErrorMsg('Failed to update profile. Please try again.');
    } finally {
      setIsLoading(false);
    }
  };

  if (!user) {
    return (
      <div className="container mx-auto px-4 py-20 text-center text-slate-500">
        <p>Please log in to view your profile.</p>
      </div>
    );
  }

  return (
    <div className="container mx-auto px-4 py-12 max-w-3xl">
      <div className="bg-slate-900 border border-slate-700 rounded-2xl overflow-hidden shadow-2xl relative">
        
        {/* Decorative Background */}
        <div className="absolute top-0 w-full h-32 bg-gradient-to-r from-slate-800 to-slate-900 border-b border-slate-700"></div>
        <div className="absolute top-0 right-0 p-8 opacity-5">
            <Shield size={200} />
        </div>

        <div className="relative px-8 pb-8 pt-16">
            
            {/* Header Section with Avatar */}
            <div className="flex flex-col md:flex-row items-center md:items-end gap-6 mb-8">
                <div className="w-32 h-32 rounded-full bg-slate-800 border-4 border-slate-900 shadow-xl flex items-center justify-center relative group overflow-hidden">
                    {user.photoURL ? (
                        <img src={user.photoURL} alt="Profile" className="w-full h-full object-cover" />
                    ) : (
                        <span className="text-5xl font-bold text-slate-600 group-hover:text-mythic-gold transition-colors">
                            {displayName ? displayName.charAt(0).toUpperCase() : user.email?.charAt(0).toUpperCase()}
                        </span>
                    )}
                    {isAdmin && (
                        <div className="absolute bottom-2 right-2 bg-mythic-gold text-slate-900 p-1.5 rounded-full border-2 border-slate-900 shadow-lg" title="Admin User">
                            <Shield size={16} fill="currentColor" />
                        </div>
                    )}
                </div>
                
                <div className="text-center md:text-left flex-1">
                    <h1 className="text-3xl font-serif font-bold text-slate-100 mb-1">{displayName || 'Champion'}</h1>
                    <div className="flex flex-wrap items-center justify-center md:justify-start gap-3 text-sm text-slate-400">
                        <span className="flex items-center gap-1 bg-slate-800/50 px-2 py-0.5 rounded-full border border-slate-700">
                            <Mail size={12} /> {user.email}
                        </span>
                        {discordHandle && (
                            <span className="flex items-center gap-1 bg-slate-800/50 px-2 py-0.5 rounded-full border border-slate-700 text-[#5865F2]">
                                <MessageCircle size={12} /> {discordHandle}
                            </span>
                        )}
                        {joinDate && (
                            <span className="flex items-center gap-1 bg-slate-800/50 px-2 py-0.5 rounded-full border border-slate-700">
                                <Calendar size={12} /> Joined {joinDate}
                            </span>
                        )}
                        <span className={`flex items-center gap-1 px-2 py-0.5 rounded-full border font-bold uppercase text-[10px] tracking-wider ${isAdmin ? 'bg-mythic-gold/10 text-mythic-gold border-mythic-gold/30' : 'bg-slate-700 text-slate-300 border-slate-600'}`}>
                            {isAdmin ? 'Administrator' : 'Member'}
                        </span>
                    </div>
                </div>
            </div>

            {/* Edit Form */}
            <div className="bg-slate-950/50 rounded-xl border border-slate-800 p-6 md:p-8">
                <div className="flex items-center gap-2 mb-6 border-b border-slate-800 pb-4">
                    <Edit2 size={18} className="text-mythic-gold" />
                    <h2 className="text-lg font-bold text-slate-200">Edit Profile</h2>
                </div>

                <form onSubmit={handleUpdateProfile} className="space-y-6">
                    <div className="space-y-2">
                        <label className="text-xs font-bold uppercase text-slate-500 ml-1">Display Name</label>
                        <div className="relative">
                            <User className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-500" size={18} />
                            <input 
                                type="text" 
                                value={displayName}
                                onChange={(e) => setDisplayName(e.target.value)}
                                placeholder="Enter your display name"
                                className="w-full bg-slate-900 border border-slate-700 rounded-xl py-3 pl-12 pr-4 text-slate-200 focus:outline-none focus:border-mythic-gold focus:ring-1 focus:ring-mythic-gold transition-all"
                            />
                        </div>
                        <p className="text-[10px] text-slate-500 ml-1">This name will appear on your builds and in tournaments.</p>
                    </div>

                    <div className="space-y-2">
                        <label className="text-xs font-bold uppercase text-slate-500 ml-1">Discord Username</label>
                        <div className="relative">
                            <MessageCircle className="absolute left-4 top-1/2 -translate-y-1/2 text-[#5865F2]" size={18} />
                            <input 
                                type="text" 
                                value={discordHandle}
                                onChange={(e) => setDiscordHandle(e.target.value)}
                                placeholder="Username"
                                className="w-full bg-slate-900 border border-slate-700 rounded-xl py-3 pl-12 pr-4 text-slate-200 focus:outline-none focus:border-mythic-gold focus:ring-1 focus:ring-mythic-gold transition-all"
                            />
                        </div>
                        <p className="text-[10px] text-slate-500 ml-1">Required for tournament participation.</p>
                    </div>

                    <div className="space-y-2">
                        <label className="text-xs font-bold uppercase text-slate-500 ml-1">Smite Tracker Link</label>
                        <div className="flex gap-2">
                            <div className="relative flex-1">
                                <LinkIcon className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-500" size={18} />
                                <input 
                                    type="url" 
                                    value={trackerLink}
                                    onChange={(e) => setTrackerLink(e.target.value)}
                                    placeholder="https://tracker.gg/..."
                                    className="w-full bg-slate-900 border border-slate-700 rounded-xl py-3 pl-12 pr-4 text-slate-200 focus:outline-none focus:border-mythic-gold focus:ring-1 focus:ring-mythic-gold transition-all"
                                />
                            </div>
                            {trackerLink && (
                                <a 
                                    href={trackerLink} 
                                    target="_blank" 
                                    rel="noopener noreferrer"
                                    className="bg-slate-800 hover:bg-slate-700 text-slate-300 border border-slate-700 rounded-xl px-4 flex items-center justify-center transition-colors hover:text-white"
                                    title="Test Link"
                                >
                                    <ExternalLink size={20} />
                                </a>
                            )}
                        </div>
                    </div>

                    <div className="space-y-2">
                        <label className="text-xs font-bold uppercase text-slate-500 ml-1">Email Address</label>
                        <div className="relative opacity-60">
                            <Mail className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-500" size={18} />
                            <input 
                                type="email" 
                                value={user.email || ''}
                                disabled
                                className="w-full bg-slate-900 border border-slate-700 rounded-xl py-3 pl-12 pr-4 text-slate-400 cursor-not-allowed"
                            />
                        </div>
                        <p className="text-[10px] text-slate-600 ml-1">Email cannot be changed securely from this panel.</p>
                    </div>

                    {/* Messages */}
                    {errorMsg && (
                        <div className="bg-red-900/20 border border-red-500/30 text-red-400 p-3 rounded-lg text-sm flex items-center gap-2">
                            <span className="w-1.5 h-1.5 rounded-full bg-red-500 inline-block" /> {errorMsg}
                        </div>
                    )}
                    {successMsg && (
                        <div className="bg-green-900/20 border border-green-500/30 text-green-400 p-3 rounded-lg text-sm flex items-center gap-2 animate-in fade-in slide-in-from-top-2">
                            <CheckCircle2 size={16} /> {successMsg}
                        </div>
                    )}

                    <div className="pt-4 flex justify-end">
                        <button 
                            type="submit" 
                            disabled={isLoading || !displayName.trim() || (displayName === user.displayName && trackerLink === initialTrackerLink && discordHandle === initialDiscordHandle)}
                            className="bg-mythic-gold hover:bg-yellow-400 text-slate-900 font-bold py-3 px-8 rounded-xl transition-all shadow-lg hover:shadow-mythic-gold/20 disabled:opacity-50 disabled:cursor-not-allowed flex items-center gap-2"
                        >
                            {isLoading ? <Loader2 size={18} className="animate-spin" /> : <Save size={18} />}
                            Save Changes
                        </button>
                    </div>
                </form>
            </div>

        </div>
      </div>
    </div>
  );
};

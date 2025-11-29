
import React, { useState, useEffect } from 'react';
import { createPortal } from 'react-dom';
import { Zap, Sword, Shield, List, Hammer, LogIn, LogOut, User, X, Mail, Lock, Loader2, Snowflake, Trophy } from 'lucide-react';
import { auth, db } from '../services/firebase'; // Added db import
import * as FirebaseAuth from 'firebase/auth';
import { doc, setDoc, getDoc } from 'firebase/firestore'; // Added Firestore imports
import { 
  User as FirebaseUser 
} from 'firebase/auth';

interface HeaderProps {
  currentView: 'home' | 'gods' | 'items' | 'tierlist' | 'builder' | 'tournament' | 'profile';
  setCurrentView: (view: 'home' | 'gods' | 'items' | 'tierlist' | 'builder' | 'tournament' | 'profile') => void;
}

export const Header: React.FC<HeaderProps> = ({ currentView, setCurrentView }) => {
  const [user, setUser] = useState<FirebaseUser | null>(null);
  const [isAdmin, setIsAdmin] = useState(false);
  const [isAuthModalOpen, setIsAuthModalOpen] = useState(false);
  const [authMode, setAuthMode] = useState<'login' | 'register'>('login');
  
  // Form State
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [displayName, setDisplayName] = useState('');
  const [error, setError] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    const unsubscribe = FirebaseAuth.onAuthStateChanged(auth, async (currentUser) => {
      setUser(currentUser);
      if (currentUser) {
          const userDoc = await getDoc(doc(db, 'users', currentUser.uid));
          if (userDoc.exists() && userDoc.data().isAdmin === true) {
              setIsAdmin(true);
          } else {
              setIsAdmin(false);
          }
      } else {
          setIsAdmin(false);
      }
    });
    return () => unsubscribe();
  }, []);

  const handleAuth = async (e: React.FormEvent) => {
    e.preventDefault();
    setError('');
    setIsLoading(true);

    try {
      if (authMode === 'login') {
        await FirebaseAuth.signInWithEmailAndPassword(auth, email, password);
      } else {
        const userCredential = await FirebaseAuth.createUserWithEmailAndPassword(auth, email, password);
        // Set Display Name for new user
        if (displayName) {
          await FirebaseAuth.updateProfile(userCredential.user, {
            displayName: displayName
          });
          // Force refresh user to get display name immediately
          setUser({ ...userCredential.user, displayName }); 
        }

        // Create User Profile in Firestore for Role Management
        await setDoc(doc(db, 'users', userCredential.user.uid), {
           email: email,
           displayName: displayName,
           isAdmin: false, // Default role is not admin
           createdAt: new Date().toISOString()
        });
      }
      setIsAuthModalOpen(false);
      resetForm();
    } catch (err: any) {
      console.error("Auth error:", err);
      let msg = "Authentication failed.";
      if (err.code === 'auth/invalid-email') msg = "Invalid email address.";
      if (err.code === 'auth/user-disabled') msg = "User account disabled.";
      if (err.code === 'auth/user-not-found') msg = "No account found with this email.";
      if (err.code === 'auth/wrong-password') msg = "Incorrect password.";
      if (err.code === 'auth/email-already-in-use') msg = "Email already in use.";
      if (err.code === 'auth/weak-password') msg = "Password should be at least 6 characters.";
      setError(msg);
    } finally {
      setIsLoading(false);
    }
  };

  const handleLogout = async (e: React.MouseEvent) => {
    e.stopPropagation(); // Prevent triggering profile view
    try {
      await FirebaseAuth.signOut(auth);
      if (currentView === 'profile') setCurrentView('home');
    } catch (error) {
      console.error("Logout failed:", error);
    }
  };

  const resetForm = () => {
    setEmail('');
    setPassword('');
    setDisplayName('');
    setError('');
    setAuthMode('login');
  };

  const openModal = () => {
    resetForm();
    setIsAuthModalOpen(true);
  };

  const navItems = [
    { id: 'gods', label: 'Gods', icon: <Sword size={16} /> },
    { id: 'builder', label: 'Builder', icon: <Hammer size={16} /> },
    { id: 'items', label: 'Items', icon: <Shield size={16} /> },
    { id: 'tierlist', label: 'Tier List', icon: <List size={16} /> },
    { id: 'tournament', label: 'Tournament', icon: <Trophy size={16} /> },
  ];

  return (
    <>
      <header className="sticky top-0 z-40 w-full bg-slate-950/80 backdrop-blur-md border-b border-white/5 shadow-2xl">
        <div className="container mx-auto px-4 h-16 flex items-center justify-between">
          
          {/* Left Side: Logo & Desktop Nav */}
          <div className="flex items-center gap-8">
              {/* Logo */}
              <div className="flex items-center gap-3 cursor-pointer group relative" onClick={() => setCurrentView('home')}>
                  {/* Holiday Hat/Decoration */}
                  <div className="absolute -top-3 -left-2 rotate-[-15deg] z-10 filter drop-shadow-md animate-bounce-slow">
                     <div className="text-xl">🎅</div>
                  </div>

                  <div className="bg-gradient-to-br from-mythic-gold to-yellow-700 p-1.5 rounded-lg group-hover:rotate-12 transition-transform shadow-[0_0_15px_rgba(250,204,21,0.4)]">
                      <Zap size={20} className="text-slate-950 fill-slate-950" />
                  </div>
                  <div className="flex flex-col">
                      <h1 className="text-xl font-serif font-bold text-slate-100 tracking-tight leading-none uppercase flex items-center gap-2">
                          SMITE <span className="text-transparent bg-clip-text bg-gradient-to-r from-mythic-gold to-yellow-200">SOURCE 2</span>
                      </h1>
                      <span className="text-[9px] text-slate-400 font-mono uppercase tracking-widest mt-0.5 flex items-center gap-1">
                         <Snowflake size={8} className="text-cyan-400" /> Open Beta 23
                      </span>
                  </div>
              </div>

              {/* Desktop Nav */}
              <nav className="hidden lg:flex gap-1">
              {navItems.map((item) => (
                  <button
                      key={item.id}
                      onClick={() => setCurrentView(item.id as any)}
                      className={`flex items-center gap-2 px-3 py-2 rounded-lg text-sm font-semibold transition-all duration-200 ${
                      currentView === item.id 
                      ? 'bg-slate-800 text-mythic-gold shadow-inner border border-slate-700/50' 
                      : 'text-slate-400 hover:text-slate-100 hover:bg-slate-800/50'
                      }`}
                  >
                  {item.icon}
                  {item.label}
                  </button>
              ))}
              </nav>
          </div>

          {/* Right Side: Auth & Mobile Controls */}
          <div className="flex items-center gap-3">
              
              {/* Auth Section */}
              <div className="flex items-center">
                  {user ? (
                      <div className="flex items-center gap-2">
                          <div 
                              onClick={() => setCurrentView('profile')}
                              className={`flex items-center gap-3 cursor-pointer bg-slate-800/50 hover:bg-slate-800 pr-4 pl-1.5 py-1.5 rounded-full border transition-all group relative ${currentView === 'profile' ? 'border-mythic-gold bg-slate-800' : 'border-slate-700/50 hover:border-slate-600'}`}
                              title="View Profile"
                          >
                              <div className="w-8 h-8 bg-gradient-to-br from-mythic-gold to-yellow-600 rounded-full flex items-center justify-center text-slate-900 font-bold shadow-md border border-white/10">
                                  {user.displayName ? user.displayName.charAt(0).toUpperCase() : (user.email ? user.email.charAt(0).toUpperCase() : 'U')}
                              </div>
                              
                              <div className="hidden sm:block text-right leading-tight">
                                  <div className="text-xs text-slate-200 font-bold group-hover:text-white max-w-[100px] truncate">
                                      {user.displayName || user.email?.split('@')[0] || 'Champion'}
                                  </div>
                                  <div className="text-[9px] text-mythic-gold uppercase font-bold tracking-wider">{isAdmin ? 'Admin' : 'Member'}</div>
                              </div>
                              
                              <div onClick={handleLogout} className="p-1 hover:text-red-400 text-slate-500 transition-colors border-l border-slate-700 pl-2 ml-2" title="Sign Out">
                                  <LogOut size={14} />
                              </div>
                          </div>
                      </div>
                  ) : (
                      <button 
                          onClick={openModal}
                          className="flex items-center gap-2 px-5 py-2 bg-slate-800 hover:bg-mythic-gold hover:text-slate-900 text-slate-200 rounded-full text-xs font-bold uppercase tracking-wider transition-all border border-slate-700 hover:border-mythic-gold shadow-sm group"
                      >
                          <div className="bg-slate-700 group-hover:bg-black/20 p-1 rounded-full transition-colors">
                              <LogIn size={14} />
                          </div>
                          <span className="hidden sm:inline">Sign In</span>
                      </button>
                  )}
              </div>

              {/* Mobile Nav Icons (Visible on small screens) */}
              <div className="lg:hidden flex gap-1 pl-2 border-l border-slate-800">
                  {navItems.map(item => (
                      <button
                      key={item.id}
                      onClick={() => setCurrentView(item.id as any)}
                      className={`p-2 rounded-lg ${currentView === item.id ? 'text-mythic-gold bg-slate-800' : 'text-slate-400'}`}
                      >
                      {item.icon}
                      </button>
                  ))}
              </div>

          </div>
        </div>
      </header>

      {/* Auth Modal */}
      {isAuthModalOpen && createPortal(
        <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm animate-in fade-in duration-200">
            <div className="bg-slate-900 w-full max-w-sm rounded-2xl border border-slate-700 shadow-2xl relative overflow-hidden">
                <button 
                  onClick={() => setIsAuthModalOpen(false)}
                  className="absolute top-4 right-4 text-slate-400 hover:text-white transition-colors"
                >
                    <X size={20} />
                </button>

                <div className="p-8">
                    <div className="text-center mb-6">
                        <h2 className="text-2xl font-serif font-bold text-slate-100 mb-2">
                           {authMode === 'login' ? 'Welcome Back' : 'Join the Forge'}
                        </h2>
                        <p className="text-slate-400 text-sm">
                           {authMode === 'login' ? 'Enter your credentials to access your account.' : 'Create an account to save builds and track stats.'}
                        </p>
                    </div>

                    <form onSubmit={handleAuth} className="space-y-4">
                        {authMode === 'register' && (
                             <div className="space-y-1">
                                <label className="text-xs font-bold uppercase text-slate-500 ml-1">Display Name</label>
                                <div className="relative">
                                    <User className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-500" size={16} />
                                    <input 
                                        type="text" 
                                        value={displayName}
                                        onChange={(e) => setDisplayName(e.target.value)}
                                        placeholder="MythicPlayerOne"
                                        className="w-full bg-slate-950 border border-slate-700 rounded-lg py-3 pl-10 pr-4 text-sm text-slate-200 focus:outline-none focus:border-mythic-gold transition-colors"
                                        required
                                    />
                                </div>
                             </div>
                        )}

                        <div className="space-y-1">
                            <label className="text-xs font-bold uppercase text-slate-500 ml-1">Email Address</label>
                            <div className="relative">
                                <Mail className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-500" size={16} />
                                <input 
                                    type="email" 
                                    value={email}
                                    onChange={(e) => setEmail(e.target.value)}
                                    placeholder="Email Address Here"
                                    className="w-full bg-slate-950 border border-slate-700 rounded-lg py-3 pl-10 pr-4 text-sm text-slate-200 focus:outline-none focus:border-mythic-gold transition-colors"
                                    required
                                />
                            </div>
                        </div>

                        <div className="space-y-1">
                            <label className="text-xs font-bold uppercase text-slate-500 ml-1">Password</label>
                            <div className="relative">
                                <Lock className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-500" size={16} />
                                <input 
                                    type="password" 
                                    value={password}
                                    onChange={(e) => setPassword(e.target.value)}
                                    placeholder="6 Didgit Password Please!"
                                    className="w-full bg-slate-950 border border-slate-700 rounded-lg py-3 pl-10 pr-4 text-sm text-slate-200 focus:outline-none focus:border-mythic-gold transition-colors"
                                    required
                                />
                            </div>
                        </div>

                        {error && (
                            <div className="bg-red-500/10 border border-red-500/50 rounded-lg p-3 text-red-400 text-xs text-center">
                                {error}
                            </div>
                        )}

                        <button 
                            type="submit"
                            disabled={isLoading}
                            className="w-full py-3 bg-gradient-to-r from-mythic-gold to-yellow-600 hover:from-yellow-400 hover:to-yellow-500 text-slate-900 font-bold rounded-lg uppercase tracking-wider shadow-lg disabled:opacity-50 disabled:cursor-not-allowed transition-all mt-2 flex items-center justify-center gap-2"
                        >
                            {isLoading ? <Loader2 size={18} className="animate-spin" /> : (authMode === 'login' ? 'Sign In' : 'Create Account')}
                        </button>
                    </form>

                    <div className="mt-6 text-center">
                        <p className="text-xs text-slate-500">
                            {authMode === 'login' ? "Don't have an account?" : "Already have an account?"}
                            <button 
                                onClick={() => {
                                    setAuthMode(authMode === 'login' ? 'register' : 'login');
                                    setError('');
                                }}
                                className="ml-2 text-mythic-gold hover:underline font-bold"
                            >
                                {authMode === 'login' ? 'Register' : 'Log In'}
                            </button>
                        </p>
                    </div>
                </div>
            </div>
        </div>,
        document.body
      )}
    </>
  );
};


import React from 'react';
import { MessageCircle, Youtube, Twitch, Twitter, Heart } from 'lucide-react';

export const Footer: React.FC = () => {
  return (
    <div className="relative w-full z-10 mt-auto">
      {/* Curved Top Border */}
      <div className="absolute top-0 left-0 w-full overflow-hidden leading-[0] transform -translate-y-full pointer-events-none">
        <svg 
          className="relative block w-full h-[40px] md:h-[60px]" 
          data-name="Layer 1" 
          xmlns="http://www.w3.org/2000/svg" 
          viewBox="0 0 1200 120" 
          preserveAspectRatio="none"
        >
          {/* Fill - Matches Footer Background */}
          <path 
            d="M0,120L0,35Q600,-35,1200,35L1200,120Z" 
            fill="#09090b"
          ></path>
          {/* Border Line */}
          <path 
            d="M0,35Q600,-35,1200,35" 
            fill="none" 
            stroke="#1e293b" 
            strokeWidth="2"
            className="opacity-50"
          ></path>
        </svg>
      </div>

      <footer className="w-full bg-slate-950 py-6 relative">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            
            {/* Brand & Copyright */}
            <div className="text-center md:text-left">
              <h3 className="text-base font-serif font-bold text-slate-200 tracking-tight uppercase mb-0.5">
                Smite Source 2
              </h3>
              <p className="text-[10px] text-slate-500 max-w-xs leading-tight">
                The ultimate companion for Smite 2. Built for the community, by the community.
              </p>
              <p className="text-[9px] text-slate-600 mt-1">
                &copy; {new Date().getFullYear()} Smite Source 2. All rights reserved.
              </p>
            </div>

            {/* Social Links */}
            <div className="flex items-center gap-6">
              <a 
                href="https://discord.gg/weak3n" 
                target="_blank" 
                rel="noopener noreferrer"
                className="flex flex-col items-center gap-0.5 group"
              >
                <div className="text-slate-400 group-hover:text-[#5865F2] transition-colors transform group-hover:scale-110">
                  <MessageCircle size={20} />
                </div>
                <span className="text-[9px] font-bold text-slate-600 group-hover:text-slate-300 uppercase tracking-wider transition-colors">Discord</span>
              </a>

              <a 
                href="https://www.youtube.com/c/Weak3n" 
                target="_blank" 
                rel="noopener noreferrer"
                className="flex flex-col items-center gap-0.5 group"
              >
                <div className="text-slate-400 group-hover:text-[#FF0000] transition-colors transform group-hover:scale-110">
                  <Youtube size={20} />
                </div>
                <span className="text-[9px] font-bold text-slate-600 group-hover:text-slate-300 uppercase tracking-wider transition-colors">YouTube</span>
              </a>

              <a 
                href="https://www.twitch.tv/weak3n" 
                target="_blank" 
                rel="noopener noreferrer"
                className="flex flex-col items-center gap-0.5 group"
              >
                <div className="text-slate-400 group-hover:text-[#9146FF] transition-colors transform group-hover:scale-110">
                  <Twitch size={20} />
                </div>
                <span className="text-[9px] font-bold text-slate-600 group-hover:text-slate-300 uppercase tracking-wider transition-colors">Twitch</span>
              </a>

              <a 
                href="https://twitter.com/Weak3n" 
                target="_blank" 
                rel="noopener noreferrer"
                className="flex flex-col items-center gap-0.5 group"
              >
                <div className="text-slate-400 group-hover:text-[#1DA1F2] transition-colors transform group-hover:scale-110">
                  <Twitter size={20} />
                </div>
                <span className="text-[9px] font-bold text-slate-600 group-hover:text-slate-300 uppercase tracking-wider transition-colors">Twitter</span>
              </a>
            </div>
          </div>

          {/* Disclaimer / Credits */}
          <div className="mt-4 pt-4 border-t border-slate-900 text-center">
            <p className="text-[9px] text-slate-600 flex items-center justify-center gap-1">
              Made with <Heart size={8} className="text-red-500 fill-red-500" /> for the Smite community. Not affiliated with Hi-Rez Studios.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
};

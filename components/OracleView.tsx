import React, { useState, useRef, useEffect } from 'react';
import { generateBuildAdvice } from '../services/geminiService';
import { ChatMessage } from '../types';
import { Send, Bot, User, Sparkles } from 'lucide-react';

export const OracleView: React.FC = () => {
  const [messages, setMessages] = useState<ChatMessage[]>([
    { id: '1', role: 'model', text: 'Greetings, Champion. I am the Oracle of the Smite Forge. Ask me about builds, counters, or god strategies.' }
  ]);
  const [input, setInput] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const scrollRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (scrollRef.current) {
      scrollRef.current.scrollTop = scrollRef.current.scrollHeight;
    }
  }, [messages]);

  const handleSend = async () => {
    if (!input.trim() || isLoading) return;

    const userMsg: ChatMessage = { id: Date.now().toString(), role: 'user', text: input };
    setMessages(prev => [...prev, userMsg]);
    setInput('');
    setIsLoading(true);

    // Mock thinking message
    const thinkingId = (Date.now() + 1).toString();
    setMessages(prev => [...prev, { id: thinkingId, role: 'model', text: '...', isThinking: true }]);

    const responseText = await generateBuildAdvice(input);

    setMessages(prev => prev.map(msg => 
      msg.id === thinkingId ? { ...msg, text: responseText, isThinking: false } : msg
    ));
    setIsLoading(false);
  };

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      handleSend();
    }
  };

  return (
    <div className="flex flex-col h-[calc(100vh-140px)] max-w-4xl mx-auto bg-slate-900/50 backdrop-blur-md rounded-xl border border-slate-700 shadow-2xl overflow-hidden mt-4">
      <div className="bg-slate-800 p-4 border-b border-slate-700 flex items-center space-x-3">
        <Sparkles className="w-5 h-5 text-mythic-gold" />
        <h2 className="text-xl font-serif text-mythic-gold">The Oracle</h2>
      </div>

      <div className="flex-1 overflow-y-auto p-4 space-y-4" ref={scrollRef}>
        {messages.map((msg) => (
          <div key={msg.id} className={`flex ${msg.role === 'user' ? 'justify-end' : 'justify-start'}`}>
            <div className={`flex max-w-[80%] ${msg.role === 'user' ? 'flex-row-reverse' : 'flex-row'} items-start gap-3`}>
              <div className={`w-8 h-8 rounded-full flex items-center justify-center shrink-0 ${msg.role === 'user' ? 'bg-mythic-accent' : 'bg-mythic-gold'}`}>
                {msg.role === 'user' ? <User size={16} className="text-slate-900"/> : <Bot size={16} className="text-slate-900"/>}
              </div>
              <div className={`p-3 rounded-lg text-sm leading-relaxed shadow-md ${
                msg.role === 'user' 
                  ? 'bg-mythic-700 text-white rounded-tr-none' 
                  : 'bg-slate-800 text-slate-200 border border-slate-700 rounded-tl-none'
              }`}>
                {msg.isThinking ? (
                   <span className="animate-pulse">Consulting the stars...</span>
                ) : (
                  msg.text
                )}
              </div>
            </div>
          </div>
        ))}
      </div>

      <div className="p-4 bg-slate-800 border-t border-slate-700">
        <div className="relative flex items-center">
          <input
            type="text"
            value={input}
            onChange={(e) => setInput(e.target.value)}
            onKeyDown={handleKeyDown}
            placeholder="Ask about Bellona builds..."
            className="w-full bg-slate-900 text-slate-200 placeholder-slate-500 border border-slate-700 rounded-full py-3 pl-5 pr-12 focus:outline-none focus:ring-2 focus:ring-mythic-gold focus:border-transparent transition-all"
            disabled={isLoading}
          />
          <button
            onClick={handleSend}
            disabled={isLoading || !input.trim()}
            className="absolute right-2 p-2 bg-mythic-gold text-slate-900 rounded-full hover:bg-yellow-400 disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
          >
            <Send size={18} />
          </button>
        </div>
        <p className="text-xs text-slate-500 mt-2 text-center">
          Powered by Gemini. AI may hallucinate Smite mechanics.
        </p>
      </div>
    </div>
  );
};

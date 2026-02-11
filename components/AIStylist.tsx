
import React, { useState, useRef, useEffect } from 'react';
import { Sparkles, X, Send, User, Bot, Loader2 } from 'lucide-react';
import { Message } from '../types';
import { getStylistResponse } from '../services/geminiService';

interface AIStylistProps {
  isOpen: boolean;
  onClose: () => void;
}

const AIStylist: React.FC<AIStylistProps> = ({ isOpen, onClose }) => {
  const [messages, setMessages] = useState<Message[]>([
    { role: 'model', text: 'Bienvenido a Shams AI Stylist. Estoy aquí para ayudarte a curar tu guardarropa perfecto con nuestras marcas premium. ¿Qué estás buscando hoy?' }
  ]);
  const [input, setInput] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const scrollRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (scrollRef.current) {
      scrollRef.current.scrollTop = scrollRef.current.scrollHeight;
    }
  }, [messages, isLoading]);

  const handleSend = async () => {
    if (!input.trim() || isLoading) return;

    const userMessage = input.trim();
    setInput('');
    setMessages(prev => [...prev, { role: 'user', text: userMessage }]);
    setIsLoading(true);

    const response = await getStylistResponse(messages, userMessage);
    setMessages(prev => [...prev, { role: 'model', text: response }]);
    setIsLoading(false);
  };

  const suggestions = [
    "¿Qué me pongo para una gala?",
    "Busco botas Hunter para lluvia",
    "Looks modernos de Vitamina",
    "Regalo para hombre de Armesto"
  ];

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-[110] flex items-center justify-center p-4 md:p-10">
      <div className="absolute inset-0 bg-black/40 backdrop-blur-md transition-all" onClick={onClose} />
      
      <div className="relative w-full max-w-2xl h-[85vh] bg-white border border-black/5 rounded-[2.5rem] flex flex-col overflow-hidden shadow-2xl">
        {/* Header */}
        <div className="p-8 border-b border-black/5 flex items-center justify-between bg-zinc-50">
          <div className="flex items-center gap-4">
            <div className="h-12 w-12 rounded-full bg-white flex items-center justify-center neo-glow border border-black/5">
              <Sparkles size={22} className="text-zinc-400" />
            </div>
            <div>
              <h2 className="font-heading text-lg font-bold tracking-tight text-zinc-900">SHAMS AI STYLIST</h2>
              <p className="text-[10px] text-zinc-500 tracking-[0.3em] uppercase font-bold">Asistente de Moda Inteligente</p>
            </div>
          </div>
          <button onClick={onClose} className="text-zinc-400 hover:text-zinc-900 transition-colors">
            <X size={28} />
          </button>
        </div>

        {/* Chat Area */}
        <div ref={scrollRef} className="flex-1 overflow-y-auto p-8 space-y-8 scroll-smooth bg-zinc-50/30">
          {messages.map((m, idx) => (
            <div key={idx} className={`flex gap-4 ${m.role === 'user' ? 'flex-row-reverse' : ''}`}>
              <div className={`h-10 w-10 rounded-full flex items-center justify-center flex-shrink-0 ${m.role === 'user' ? 'bg-zinc-900 text-white' : 'bg-white border border-black/10'}`}>
                {m.role === 'user' ? <User size={18} /> : <Bot size={18} className="text-zinc-600" />}
              </div>
              <div className={`max-w-[85%] px-6 py-4 rounded-[1.5rem] text-sm leading-relaxed shadow-sm ${m.role === 'user' ? 'bg-zinc-900 text-white font-medium' : 'bg-white text-zinc-700 border border-black/5'}`}>
                {m.text}
              </div>
            </div>
          ))}
          {isLoading && (
            <div className="flex gap-4">
              <div className="h-10 w-10 rounded-full bg-white flex items-center justify-center border border-black/10">
                <Loader2 size={18} className="animate-spin text-zinc-400" />
              </div>
              <div className="bg-white px-6 py-4 rounded-[1.5rem] text-zinc-400 text-sm animate-pulse border border-black/5">
                Analizando tendencias...
              </div>
            </div>
          )}
        </div>

        {/* Input & Suggestions */}
        <div className="p-8 border-t border-black/5 bg-white">
          {messages.length < 3 && (
            <div className="flex flex-wrap gap-2 mb-6">
              {suggestions.map((s, i) => (
                <button 
                  key={i}
                  onClick={() => { setInput(s); }}
                  className="text-[10px] border border-black/5 bg-zinc-50 rounded-full px-4 py-2 text-zinc-500 hover:text-zinc-900 hover:border-black/20 transition-all uppercase tracking-widest font-bold"
                >
                  {s}
                </button>
              ))}
            </div>
          )}
          
          <div className="relative flex items-center">
            <input 
              value={input}
              onChange={(e) => setInput(e.target.value)}
              onKeyDown={(e) => e.key === 'Enter' && handleSend()}
              placeholder="Pregúntame sobre un outfit..."
              className="w-full bg-zinc-50 border border-black/10 rounded-full px-8 py-5 text-sm focus:outline-none focus:border-zinc-400 transition-all pr-16 text-zinc-800 placeholder:text-zinc-400"
            />
            <button 
              onClick={handleSend}
              disabled={isLoading || !input.trim()}
              className="absolute right-3 h-12 w-12 rounded-full bg-zinc-900 text-white flex items-center justify-center hover:scale-105 active:scale-95 transition-all disabled:opacity-50 shadow-lg"
            >
              <Send size={20} />
            </button>
          </div>
          <p className="text-center text-[9px] text-zinc-300 mt-6 uppercase tracking-[0.4em] font-black">Powered by Gemini Engine</p>
        </div>
      </div>
    </div>
  );
};

export default AIStylist;

import React from 'react';
import { ArrowRight } from 'lucide-react';

const Hero: React.FC = () => {
  return (
    <div className="relative h-screen w-full flex items-center justify-center overflow-hidden">
      {/* Background elements */}
      <div className="absolute inset-0 z-0">
        <img 
          src="https://images.unsplash.com/photo-1520699918507-3c3e05c46b0c?q=80&w=2000&auto=format&fit=crop" 
          alt="Fashion District" 
          className="w-full h-full object-cover transition-all duration-1000 scale-105"
        />
        
        {/* Deep Dramatic Overlays */}
        <div className="absolute inset-0 bg-gradient-to-tr from-[#080808] via-transparent to-[#2E5BFF]/30" />
        <div className="absolute inset-0 bg-black/40" />
        
        {/* Massive Background Text "ROSARIO" */}
        <div className="absolute inset-0 flex items-center justify-center pointer-events-none select-none">
          <span className="font-heading text-[20vw] font-black text-white/[0.03] leading-none tracking-tighter outline-text">
            ROSARIO
          </span>
        </div>
        
        {/* Dynamic Light streak */}
        <div className="absolute top-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-[#2E5BFF] to-transparent opacity-50" />
        
        <div className="absolute inset-0 bg-gradient-to-t from-[#080808] via-transparent to-transparent" />
      </div>

      <div className="relative z-10 text-center px-6 max-w-5xl mt-20">
        <div className="inline-block px-5 py-2 border border-[#2E5BFF]/50 rounded-full mb-8 backdrop-blur-3xl bg-white/5 group overflow-hidden">
          <div className="absolute inset-0 bg-vibrant-gradient opacity-0 group-hover:opacity-10 transition-opacity" />
          <span className="text-[10px] tracking-[0.6em] uppercase text-[#2E5BFF] font-black flex items-center gap-3">
            <span className="h-1 w-1 rounded-full bg-[#FF2E97] animate-pulse" />
            DIRECTO DESDE ROSARIO
            <span className="h-1 w-1 rounded-full bg-[#FF2E97] animate-pulse" />
          </span>
        </div>

        <h2 className="font-heading text-6xl md:text-9xl font-black mb-8 leading-[0.8] tracking-tighter text-white">
          SHAMS <br /> <span className="text-vibrant italic">OUTLET</span>
        </h2>
        
        <p className="text-zinc-300 text-sm md:text-base max-w-3xl mx-auto mb-10 font-black leading-relaxed tracking-wider uppercase">
          Primeras marcas. Precios imbatibles. <br />
          <span className="text-white">Encontrá lo mejor de Perramus, Hunter, Nautica, Armesto, Blaque, Las Oreiro, Allo Martinez, Victoria Tucci, Vitamina, Uma, Besha, Swim Days y más.</span>
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
          <button className="bg-vibrant-gradient text-white px-14 py-5 rounded-full font-bold text-[10px] tracking-[0.3em] hover:scale-105 active:scale-95 transition-all flex items-center gap-3 group shadow-[0_15px_40px_rgba(46,91,255,0.5)] uppercase">
            DESCUBRIR COLECCIÓN <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
          </button>
          <button className="glass border-white/10 hover:bg-white/10 transition-all text-white px-14 py-5 rounded-full font-bold text-[10px] tracking-[0.3em] shadow-xl uppercase">
            MARCAS SELECCIONADAS
          </button>
        </div>
      </div>

      {/* Decorative vertical badges */}
      <div className="absolute left-10 bottom-24 hidden lg:block overflow-hidden h-32">
        <span className="text-[11px] uppercase tracking-[0.6em] text-[#2E5BFF] rotate-180 font-black flex items-center gap-4" style={{ writingMode: 'vertical-rl' }}>
           FW / 26 COLLECTION — ROSARIO DISTRICT
        </span>
      </div>
      
      {/* Scroll indicator with animation */}
      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-3">
        <span className="text-[8px] font-black tracking-[0.5em] text-zinc-500 uppercase">EXPLORAR</span>
        <div className="w-[1.5px] h-14 bg-zinc-800 relative overflow-hidden">
          <div className="absolute top-0 left-0 w-full h-full bg-[#2E5BFF] -translate-y-full animate-[scroll_2s_infinite]" />
        </div>
      </div>

      <style>{`
        @keyframes scroll {
          0% { transform: translateY(-100%); }
          100% { transform: translateY(100%); }
        }
        .outline-text {
          -webkit-text-stroke: 1px rgba(255,255,255,0.05);
          color: transparent;
        }
      `}</style>
    </div>
  );
};

export default Hero;

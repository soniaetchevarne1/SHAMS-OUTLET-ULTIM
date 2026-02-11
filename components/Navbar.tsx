
import React from 'react';
import { ShoppingBag, Search, Menu, User, Sparkles } from 'lucide-react';

interface NavbarProps {
  cartCount: number;
  onOpenCart: () => void;
  onOpenAI: () => void;
}

const Navbar: React.FC<NavbarProps> = ({ cartCount, onOpenCart, onOpenAI }) => {
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 glass border-b border-white/5 px-6 py-4 flex items-center justify-between">
      <div className="flex items-center gap-8">
        <h1 
          className="font-heading text-lg font-bold tracking-[0.4em] text-white cursor-pointer whitespace-nowrap uppercase" 
          onClick={() => window.scrollTo({top: 0, behavior: 'smooth'})}
        >
          SHAMS <span className="text-[#2E5BFF]">OUTLET</span>
        </h1>
        <div className="hidden md:flex gap-8 text-[10px] uppercase tracking-[0.3em] font-black text-white">
          <a href="#new" className="hover:text-[#2E5BFF] transition-colors">Novedades</a>
          <a href="#brands" className="hover:text-[#2E5BFF] transition-colors">Marcas</a>
          <a href="#men" className="hover:text-[#2E5BFF] transition-colors">Hombre</a>
          <a href="#women" className="hover:text-[#2E5BFF] transition-colors">Mujer</a>
        </div>
      </div>

      <div className="flex items-center gap-5">
        <button 
          onClick={onOpenAI}
          className="flex items-center gap-2 bg-white/10 hover:bg-white/20 text-white transition-all rounded-full px-5 py-2.5 text-[10px] font-bold tracking-widest border border-white/10 shadow-[0_0_20px_rgba(46,91,255,0.3)]"
        >
          <Sparkles size={14} className="text-[#00F5FF]" />
          <span className="hidden sm:inline">AI STYLIST</span>
        </button>
        <button className="text-white/70 hover:text-[#2E5BFF] transition-colors">
          <Search size={18} />
        </button>
        <button className="text-white/70 hover:text-[#2E5BFF] transition-colors">
          <User size={18} />
        </button>
        <button 
          onClick={onOpenCart}
          className="relative text-white/70 hover:text-[#2E5BFF] transition-colors"
        >
          <ShoppingBag size={18} />
          {cartCount > 0 && (
            <span className="absolute -top-2 -right-2 bg-[#FF2E97] text-white text-[9px] font-black h-4 w-4 flex items-center justify-center rounded-full">
              {cartCount}
            </span>
          )}
        </button>
        <button className="md:hidden text-white/70 hover:text-white transition-colors">
          <Menu size={18} />
        </button>
      </div>
    </nav>
  );
};

export default Navbar;

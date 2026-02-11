
import React from 'react';
import { BRANDS } from '../constants';

const BrandMarquee: React.FC = () => {
  return (
    <div className="py-16 border-y border-white/5 overflow-hidden bg-zinc-950">
      <div className="animate-marquee">
        {[...BRANDS, ...BRANDS].map((brand, idx) => (
          <div key={idx} className="flex items-center px-12 group">
            <span className="text-3xl md:text-5xl font-heading font-bold text-white/40 group-hover:text-white transition-colors duration-500 tracking-tighter cursor-default">
              {brand.toUpperCase()}
            </span>
            <div className="mx-12 h-2 w-2 rounded-full bg-zinc-800 group-hover:bg-zinc-600 transition-colors" />
          </div>
        ))}
      </div>
    </div>
  );
};

export default BrandMarquee;

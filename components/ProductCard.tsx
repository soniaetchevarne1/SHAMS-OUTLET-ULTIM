
import React from 'react';
import { Plus, Heart } from 'lucide-react';
import { Product } from '../types';

interface ProductCardProps {
  product: Product;
  onAddToCart: (p: Product) => void;
}

const ProductCard: React.FC<ProductCardProps> = ({ product, onAddToCart }) => {
  const discount = Math.round(((product.originalPrice - product.price) / product.originalPrice) * 100);

  return (
    <div className="group relative">
      <div className="relative aspect-[3/4] overflow-hidden rounded-[2.5rem] bg-zinc-100 border border-black/5 hover-glow transition-all duration-700">
        <img 
          src={product.image} 
          alt={product.name}
          className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110"
        />
        
        {/* Badges */}
        <div className="absolute top-6 left-6 flex flex-col gap-2">
          <div className="flex items-center gap-2">
            <span className="bg-white/90 backdrop-blur-md text-zinc-950 text-[10px] px-3 py-1 rounded-full border border-black/5 uppercase font-black tracking-widest shadow-sm">
              {product.brand}
            </span>
            <span className="bg-[#2E5BFF] text-white text-[9px] px-2 py-1 rounded-full font-black tracking-tighter uppercase">
              OUTLET
            </span>
          </div>
          <span className="bg-[#FF4D00] text-white text-[10px] px-3 py-1 rounded-full font-black tracking-widest w-fit shadow-lg shadow-orange-500/30">
            -{discount}% OFF
          </span>
        </div>

        <button className="absolute top-6 right-6 text-white/50 hover:text-[#FF2E97] transition-colors drop-shadow-md">
          <Heart size={20} />
        </button>

        {/* Action Overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-[#2E5BFF]/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center backdrop-blur-[1px]">
          <button 
            onClick={() => onAddToCart(product)}
            className="bg-white text-zinc-950 h-14 w-14 rounded-full flex items-center justify-center hover:scale-110 transition-transform shadow-2xl"
          >
            <Plus size={28} className="text-[#2E5BFF]" />
          </button>
        </div>
      </div>

      <div className="mt-6 px-2">
        <h3 className="text-zinc-950 font-black text-sm tracking-wide uppercase">{product.name}</h3>
        <div className="flex items-center gap-3 mt-1">
          <span className="text-xl font-black text-[#2E5BFF]">${product.price.toLocaleString()}</span>
          <span className="text-zinc-400 line-through text-xs font-bold">${product.originalPrice.toLocaleString()}</span>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;

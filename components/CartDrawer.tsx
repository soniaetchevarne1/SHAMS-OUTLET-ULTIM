
import React from 'react';
import { X, ShoppingBag, Trash2, ArrowRight } from 'lucide-react';
import { CartItem } from '../types';

interface CartDrawerProps {
  isOpen: boolean;
  onClose: () => void;
  items: CartItem[];
  onRemove: (id: string) => void;
  onUpdateQty: (id: string, delta: number) => void;
}

const CartDrawer: React.FC<CartDrawerProps> = ({ isOpen, onClose, items, onRemove, onUpdateQty }) => {
  const total = items.reduce((sum, item) => sum + item.price * item.quantity, 0);

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-[100] flex justify-end">
      <div className="absolute inset-0 bg-black/40 backdrop-blur-sm transition-opacity" onClick={onClose} />
      
      <div className="relative w-full max-w-md h-full bg-white border-l border-black/10 flex flex-col shadow-2xl">
        <div className="p-6 border-b border-black/10 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <ShoppingBag size={20} className="text-zinc-700" />
            <h2 className="font-heading text-base font-bold tracking-tight text-zinc-950">CARRITO</h2>
          </div>
          <button onClick={onClose} className="text-zinc-500 hover:text-zinc-950 transition-colors">
            <X size={24} />
          </button>
        </div>

        <div className="flex-1 overflow-y-auto p-6 space-y-6">
          {items.length === 0 ? (
            <div className="h-full flex flex-col items-center justify-center text-center px-4">
              <div className="h-20 w-20 rounded-full bg-zinc-100 flex items-center justify-center mb-6 border border-black/10">
                <ShoppingBag size={32} className="text-zinc-400" />
              </div>
              <p className="text-zinc-700 text-sm font-medium">Tu armario futurista está actualmente vacío.</p>
              <button onClick={onClose} className="mt-8 text-zinc-950 font-black text-[10px] tracking-[0.3em] border-b-2 border-zinc-950 pb-1 hover:text-zinc-600 hover:border-zinc-600 transition-all">CONTINUAR COMPRANDO</button>
            </div>
          ) : (
            items.map((item) => (
              <div key={item.id} className="flex gap-4 group">
                <div className="h-28 w-24 rounded-xl overflow-hidden flex-shrink-0 border border-black/10 bg-zinc-100">
                  <img src={item.image} className="h-full w-full object-cover" alt={item.name} />
                </div>
                <div className="flex-1 flex flex-col justify-between py-1">
                  <div>
                    <div className="flex justify-between items-start">
                      <h3 className="text-[10px] font-black uppercase tracking-widest text-zinc-950">{item.name}</h3>
                      <button onClick={() => onRemove(item.id)} className="text-zinc-400 hover:text-red-600 transition-colors">
                        <Trash2 size={16} />
                      </button>
                    </div>
                    <p className="text-[9px] text-zinc-600 font-black uppercase mt-1 tracking-tighter">{item.brand}</p>
                  </div>
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-4 bg-zinc-100 border border-black/10 rounded-full px-4 py-1.5">
                      <button onClick={() => onUpdateQty(item.id, -1)} className="text-zinc-500 hover:text-zinc-950 transition-colors text-lg font-bold">-</button>
                      <span className="text-xs font-black w-4 text-center text-zinc-950">{item.quantity}</span>
                      <button onClick={() => onUpdateQty(item.id, 1)} className="text-zinc-500 hover:text-zinc-950 transition-colors text-lg font-bold">+</button>
                    </div>
                    <span className="text-sm font-black text-zinc-950 tracking-tight">${(item.price * item.quantity).toLocaleString()}</span>
                  </div>
                </div>
              </div>
            ))
          )}
        </div>

        {items.length > 0 && (
          <div className="p-8 border-t border-black/10 bg-zinc-50">
            <div className="flex justify-between mb-8">
              <span className="text-zinc-600 text-xs tracking-[0.3em] font-black">SUBTOTAL</span>
              <span className="text-2xl font-bold font-heading text-zinc-950">${total.toLocaleString()}</span>
            </div>
            <button className="w-full bg-zinc-950 text-white py-5 rounded-full font-bold text-xs tracking-[0.3em] hover:bg-zinc-800 transition-all flex items-center justify-center gap-3 shadow-lg">
              INICIAR PAGO <ArrowRight size={18} />
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default CartDrawer;

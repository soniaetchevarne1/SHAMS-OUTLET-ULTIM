
import React, { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import BrandMarquee from './components/BrandMarquee';
import ProductCard from './components/ProductCard';
import CartDrawer from './components/CartDrawer';
import AIStylist from './components/AIStylist';
import { PRODUCTS } from './constants';
import { Product, CartItem } from './types';
import { Filter } from 'lucide-react';

const App: React.FC = () => {
  const [cart, setCart] = useState<CartItem[]>([]);
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [isAIStylistOpen, setIsAIStylistOpen] = useState(false);
  const [selectedCategory, setSelectedCategory] = useState('Todos');

  const categoriesMap: Record<string, string> = {
    'All': 'Todos',
    'Outerwear': 'Abrigos',
    'Footwear': 'Calzado',
    'Dresses': 'Vestidos',
    'Tailoring': 'Sastrería',
    'Accessories': 'Accesorios',
    'Knitwear': 'Tejidos'
  };

  const categories = ['Todos', 'Abrigos', 'Calzado', 'Vestidos', 'Sastrería', 'Accesorios', 'Tejidos'];

  const addToCart = (product: Product) => {
    setCart(prev => {
      const existing = prev.find(item => item.id === product.id);
      if (existing) {
        return prev.map(item => item.id === product.id ? { ...item, quantity: item.quantity + 1 } : item);
      }
      return [...prev, { ...product, quantity: 1 }];
    });
    setIsCartOpen(true);
  };

  const removeFromCart = (id: string) => {
    setCart(prev => prev.filter(item => item.id !== id));
  };

  const updateQuantity = (id: string, delta: number) => {
    setCart(prev => prev.map(item => {
      if (item.id === id) {
        const newQty = Math.max(1, item.quantity + delta);
        return { ...item, quantity: newQty };
      }
      return item;
    }));
  };

  const filteredProducts = selectedCategory === 'Todos' 
    ? PRODUCTS 
    : PRODUCTS.filter(p => categoriesMap[p.category] === selectedCategory);

  return (
    <div className="min-h-screen relative selection:bg-[#2E5BFF] selection:text-white bg-[#080808]">
      <Navbar 
        cartCount={cart.reduce((s, i) => s + i.quantity, 0)} 
        onOpenCart={() => setIsCartOpen(true)}
        onOpenAI={() => setIsAIStylistOpen(true)}
      />

      <main>
        <Hero />
        
        <div id="brands" className="relative z-10">
          <BrandMarquee />
        </div>

        {/* Collection Section */}
        <section className="py-40 px-6 md:px-12 max-w-screen-2xl mx-auto" id="new">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-24 gap-8">
            <div>
              <span className="text-[#2E5BFF] uppercase tracking-[0.6em] text-[10px] block mb-4 font-black">CURATED IN ROSARIO</span>
              <h2 className="font-heading text-5xl md:text-8xl font-bold tracking-tighter text-white">LÍNEA <span className="text-vibrant italic">EXCLUSIVA</span></h2>
            </div>
            
            <div className="flex flex-wrap items-center gap-3">
              <div className="flex items-center gap-2 text-[10px] font-black text-zinc-600 mr-2 tracking-[0.3em] uppercase">
                <Filter size={14} />
                <span>FILTRO:</span>
              </div>
              {categories.map(cat => (
                <button
                  key={cat}
                  onClick={() => setSelectedCategory(cat)}
                  className={`px-8 py-3 rounded-full text-[9px] font-black tracking-[0.3em] uppercase transition-all border ${
                    selectedCategory === cat 
                      ? 'bg-[#2E5BFF] text-white border-[#2E5BFF] shadow-[0_10px_25px_rgba(46,91,255,0.4)]' 
                      : 'border-white/10 text-zinc-500 hover:border-white/30 hover:text-white'
                  }`}
                >
                  {cat}
                </button>
              ))}
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-x-12 gap-y-24">
            {filteredProducts.map(product => (
              <ProductCard 
                key={product.id} 
                product={product} 
                onAddToCart={addToCart} 
              />
            ))}
          </div>
        </section>

        {/* Why Shams Section - Architectural Look */}
        <section className="py-52 px-6 bg-white/[0.02] border-y border-white/5 relative overflow-hidden">
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full bg-[url('https://images.unsplash.com/photo-1610450949065-1f2809da7f81?q=80&w=2000&auto=format&fit=crop')] opacity-5 bg-fixed bg-cover" />
          
          <div className="max-w-6xl mx-auto text-center relative z-10">
            <h3 className="font-heading text-4xl md:text-6xl font-bold mb-32 tracking-tighter text-white">
              EL MANIFIESTO <span className="text-[#2E5BFF]">SHAMS</span>
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-12 text-left">
              {[
                { title: 'ORIGEN GARANTIZADO', desc: 'Curaduría directa desde los distritos de moda más prestigiosos de la región.', color: '#2E5BFF' },
                { title: 'PRECIOS DE ARCHIVO', desc: 'Acceso exclusivo a piezas de colección con valor de outlet.', color: '#FF4D00' },
                { title: 'IA VANGUARDISTA', desc: 'Estilismo predictivo alimentado por las últimas tendencias globales.', color: '#FF2E97' }
              ].map((item, i) => (
                <div key={i} className="glass p-14 rounded-[3.5rem] group hover:bg-white/5 hover:scale-[1.02] transition-all border-l-2 relative overflow-hidden" style={{ borderLeftColor: item.color }}>
                  <div className="h-14 w-14 rounded-full mb-10 flex items-center justify-center text-white font-heading text-xl font-bold border border-white/10" style={{ background: `linear-gradient(135deg, ${item.color}44, transparent)` }}>
                    {i+1}
                  </div>
                  <h4 className="text-[13px] font-black tracking-[0.5em] mb-8 text-white uppercase">{item.title}</h4>
                  <p className="text-zinc-400 text-sm leading-relaxed font-black tracking-wide uppercase">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Footer - Blackout Edition */}
        <footer className="py-32 px-6 bg-black relative overflow-hidden text-white border-t border-white/5">
          <div className="absolute top-0 right-1/4 w-96 h-96 bg-[#2E5BFF]/10 blur-[120px] rounded-full" />
          <div className="max-w-screen-2xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-20 relative z-10">
            <div className="md:col-span-2">
              <h1 className="font-heading text-3xl font-bold tracking-[0.5em] mb-10 uppercase">SHAMS <span className="text-[#2E5BFF]">ROSARIO</span></h1>
              <p className="text-zinc-500 text-sm max-w-sm leading-relaxed mb-12 tracking-widest font-black uppercase">
                Redefiniendo el lujo accesible desde Rosario con alma vanguardista. <br />
                <span className="text-white">Tradición, tecnología y futuro.</span>
              </p>
              <div className="flex gap-12">
                {['INSTAGRAM', 'VOGUE', 'BEHANCE'].map(social => (
                  <a key={social} href="#" className="text-[10px] font-black tracking-[0.5em] text-zinc-600 hover:text-[#2E5BFF] transition-colors">{social}</a>
                ))}
              </div>
            </div>
            <div>
              <h5 className="text-[11px] font-black tracking-[0.5em] text-[#2E5BFF] mb-10 uppercase">SERVICIOS</h5>
              <ul className="space-y-6 text-[10px] font-black tracking-[0.3em] text-zinc-500 uppercase">
                <li><a href="#" className="hover:text-white transition-colors">LOGÍSTICA NACIONAL</a></li>
                <li><a href="#" className="hover:text-white transition-colors">POLÍTICA DE ARCHIVO</a></li>
                <li><a href="#" className="hover:text-white transition-colors">RESERVA VIP</a></li>
                <li><a href="#" className="hover:text-white transition-colors">ATELIER DIGITAL</a></li>
              </ul>
            </div>
            <div>
              <h5 className="text-[11px] font-black tracking-[0.5em] text-[#FF2E97] mb-10 uppercase">COMUNIDAD</h5>
              <p className="text-[11px] text-zinc-600 mb-8 tracking-[0.2em] font-black uppercase">Sé el primero en acceder a los "Drops" exclusivos.</p>
              <div className="flex border-b border-white/10 pb-4 group">
                <input type="email" placeholder="TU EMAIL DE LUJO" className="bg-transparent text-[10px] font-black tracking-[0.3em] w-full focus:outline-none placeholder:text-zinc-800 text-white uppercase" />
                <button className="text-[10px] font-black tracking-[0.4em] text-[#2E5BFF] hover:text-white transition-colors">UNIRSE</button>
              </div>
            </div>
          </div>
          <div className="mt-40 pt-12 border-t border-white/5 text-center">
            <p className="text-[10px] text-zinc-800 tracking-[0.8em] font-black uppercase">ESTABLISHED 2026 — ROSARIO / BUENOS AIRES</p>
          </div>
        </footer>
      </main>

      <CartDrawer 
        isOpen={isCartOpen} 
        onClose={() => setIsCartOpen(false)} 
        items={cart}
        onRemove={removeFromCart}
        onUpdateQty={updateQuantity}
      />

      <AIStylist 
        isOpen={isAIStylistOpen}
        onClose={() => setIsAIStylistOpen(false)}
      />
    </div>
  );
};

export default App;

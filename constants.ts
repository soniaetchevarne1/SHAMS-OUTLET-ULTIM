
import { Product } from './types';

export const BRANDS = [
  'Perramus', 'Hunter', 'Nautica', 'Armesto', 'Blaque', 
  'Las Oreiro', 'Allo Martinez', 'Victoria Tucci', 
  'Vitamina', 'Uma', 'Besha', 'Swim Days'
];

export const PRODUCTS: Product[] = [
  {
    id: '1',
    name: 'Classic Trench 2026',
    brand: 'Perramus',
    price: 185000,
    originalPrice: 245000,
    image: 'https://images.unsplash.com/photo-1591047139829-d91aecb6caea?q=80&w=800&auto=format&fit=crop',
    category: 'Outerwear',
    description: 'Iconic protection with a futuristic silhouette. Water-resistant tech fabric.'
  },
  {
    id: '2',
    name: 'Cyber Original Tall Boots',
    brand: 'Hunter',
    price: 120000,
    originalPrice: 180000,
    image: 'https://images.unsplash.com/photo-1605733162220-4131568288ce?q=80&w=800&auto=format&fit=crop',
    category: 'Footwear',
    description: 'Matte finish waterproof boots for the modern urban explorer.'
  },
  {
    id: '3',
    name: 'Regatta Tech Jacket',
    brand: 'Nautica',
    price: 95000,
    originalPrice: 140000,
    image: 'https://images.unsplash.com/photo-1544923246-77307dd654ca?q=80&w=800&auto=format&fit=crop',
    category: 'Outerwear',
    description: 'Wind-resistant sailing heritage reinvented for the street.'
  },
  {
    id: '4',
    name: 'Glitz Evening Dress',
    brand: 'Las Oreiro',
    price: 155000,
    originalPrice: 220000,
    image: 'https://images.unsplash.com/photo-1539008835279-43468093524c?q=80&w=800&auto=format&fit=crop',
    category: 'Dresses',
    description: 'Pure elegance with a touch of Argentine fire. Premium silk blend.'
  },
  {
    id: '5',
    name: 'Neo-Tailored Blazer',
    brand: 'Vitamina',
    price: 110000,
    originalPrice: 165000,
    image: 'https://images.unsplash.com/photo-1548142813-c348350df52b?q=80&w=800&auto=format&fit=crop',
    category: 'Tailoring',
    description: 'Sharp lines and sophisticated fabric for the high-powered woman.'
  },
  {
    id: '6',
    name: 'Lunar Leather Tote',
    brand: 'Blaque',
    price: 75000,
    originalPrice: 110000,
    image: 'https://images.unsplash.com/photo-1544816153-12ad5d714b21?q=80&w=800&auto=format&fit=crop',
    category: 'Accessories',
    description: 'Spacious leather craftsmanship with minimalist hardware.'
  },
  {
    id: '7',
    name: 'Avant-Garde Knit',
    brand: 'Allo Martinez',
    price: 88000,
    originalPrice: 130000,
    image: 'https://images.unsplash.com/photo-1583743814966-8936f5b7be1a?q=80&w=800&auto=format&fit=crop',
    category: 'Knitwear',
    description: 'Deconstructed aesthetics in premium wool.'
  },
  {
    id: '8',
    name: 'Metropolis Suit',
    brand: 'Armesto',
    price: 210000,
    originalPrice: 320000,
    image: 'https://images.unsplash.com/photo-1593030761757-71fae45fa0e7?q=80&w=800&auto=format&fit=crop',
    category: 'Tailoring',
    description: 'The ultimate bespoke experience for the modern gentleman.'
  }
];

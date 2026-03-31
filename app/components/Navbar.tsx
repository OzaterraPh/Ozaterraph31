'use client';
import { Leaf } from 'lucide-react';

export default function Navbar() {
  return (
    <nav className="absolute top-0 w-full z-50 flex items-center justify-between px-8 py-6 text-white bg-black/10 backdrop-blur-sm">
      <div className="flex items-center gap-2">
        <Leaf className="text-emerald-400" fill="currentColor" size={28} />
        <span className="text-2xl font-bold tracking-tight">Ozaterra</span>
      </div>
      
      <div className="hidden md:flex items-center space-x-8 font-medium text-sm tracking-wide">
        <a href="#" className="hover:text-emerald-300 transition-colors">Concept</a>
        <a href="#" className="hover:text-emerald-300 transition-colors">Expériences</a>
        <a href="#" className="hover:text-emerald-300 transition-colors">Contact</a>
        <button className="px-6 py-2 bg-emerald-700 hover:bg-emerald-800 rounded-full transition-all font-bold shadow-lg">
          Devenir partenaire
        </button>
      </div>
    </nav>
  );
}
'use client';
import { useState } from 'react';
import { MapPin, Calendar, Users, Search } from 'lucide-react';

export default function Hero() {
  const [activeTab, setActiveTab] = useState('sejours');

  return (
    <section className="relative h-screen flex flex-col items-center justify-center px-4 overflow-hidden">
      {/* Fond avec image Unsplash d'un champ de blé au coucher du soleil */}
      <div className="absolute inset-0 z-0">
        <img 
          src="https://images.unsplash.com/photo-1500382017468-9049fed747ef?q=80&w=2000" 
          className="w-full h-full object-cover scale-105"
          alt="Champ de blé Ozaterra"
        />
        <div className="absolute inset-0 bg-black/35" />
      </div>

      <div className="relative z-10 text-center mb-12">
        <h1 className="text-6xl md:text-8xl font-serif text-white mb-6 drop-shadow-xl italic">
          L'authenticité a une adresse
        </h1>
        <p className="text-xl text-white/90 max-w-2xl mx-auto font-light leading-relaxed">
          Vivez une immersion totale dans le monde agricole avec des expériences uniques et durables.
        </p>
      </div>

      {/* Barre de recherche Glassmorphism */}
      <div className="relative z-10 w-full max-w-5xl bg-black/40 backdrop-blur-2xl rounded-[3rem] p-3 shadow-2xl border border-white/20">
        <div className="flex gap-6 mb-4 ml-8">
          {['sejours', 'activites'].map((tab) => (
            <button 
              key={tab}
              onClick={() => setActiveTab(tab)}
              className={`text-[10px] font-black uppercase tracking-[0.2em] transition ${activeTab === tab ? 'text-emerald-400 border-b-2 border-emerald-400' : 'text-white/60 hover:text-white'}`}
            >
              {tab === 'sejours' ? 'Séjours' : 'Activités'}
            </button>
          ))}
        </div>

        <div className="grid grid-cols-1 md:grid-cols-4 gap-1 bg-white/10 rounded-[2.5rem] p-1">
          <div className="flex flex-col px-8 py-4 border-r border-white/10">
            <span className="text-[10px] uppercase font-bold text-emerald-400 mb-1">Destination</span>
            <div className="flex items-center gap-2 text-white font-medium">
              <MapPin size={16} /> <input type="text" placeholder="Région" className="bg-transparent outline-none w-full placeholder:text-white/40 text-sm" />
            </div>
          </div>
          <div className="flex flex-col px-8 py-4 border-r border-white/10">
            <span className="text-[10px] uppercase font-bold text-emerald-400 mb-1">Dates</span>
            <div className="flex items-center gap-2 text-white font-medium">
              <Calendar size={16} /> <span className="text-sm">Choisir...</span>
            </div>
          </div>
          <div className="flex flex-col px-8 py-4 border-r border-white/10">
            <span className="text-[10px] uppercase font-bold text-emerald-400 mb-1">Voyageurs</span>
            <div className="flex items-center gap-2 text-white font-medium">
              <Users size={16} /> <span className="text-sm">2 voyageurs</span>
            </div>
          </div>
          <button className="bg-emerald-500 hover:bg-emerald-400 text-white rounded-[2rem] flex items-center justify-center p-4 transition-all duration-300 shadow-lg shadow-emerald-900/20">
            <Search size={28} />
          </button>
        </div>
      </div>
    </section>
  );
}
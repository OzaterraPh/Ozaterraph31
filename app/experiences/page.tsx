'use client';

import React from 'react';
import {
  MapPin,
  Calendar,
  Users,
  Search,
  SlidersHorizontal,
  ChevronDown,
  ChevronUp,
  Star,
  Leaf,
  Sprout,
  Apple,
  Grape,
  Milk,
  Flower2,
  Wheat
} from "lucide-react";

// --- DONNÉES ---

const experiences = [
  {
    id: 1,
    image: 'https://images.unsplash.com/photo-1600493504091-8fb1555d2e14?q=80&w=1080',
    title: "Chambre d'hôte au cœur du potager",
    location: 'Normandie',
    category: 'Maraîchage',
    description: "Séjournez dans une authentique ferme maraîchère et participez aux récoltes matinales. Petit-déjeuner avec produits de la ferme.",
    price: '85€',
    rating: 4.8,
    reviews: 124,
    duration: '2 nuits min.',
    capacity: 2,
    involvementLevels: ['Observation simple', 'Participation légère'],
    animals: ['🐔', '🐰'],
  },
  {
    id: 2,
    image: 'https://images.unsplash.com/photo-1698853434721-67bb4556b469?q=80&w=1080',
    title: "Gîte au domaine viticole",
    location: 'Bourgogne',
    category: 'Viticulture',
    description: "Gîte indépendant au milieu des vignes. Immersion dans le quotidien viticole avec dégustations et visite des caves.",
    price: '145€',
    rating: 4.9,
    reviews: 89,
    duration: '3 nuits min.',
    capacity: 4,
    involvementLevels: ['Participation légère', 'Immersion totale'],
    animals: ['🐔'],
  },
  {
    id: 3,
    image: 'https://images.unsplash.com/photo-1704330327991-a107f69c8b9b?q=80&w=1080',
    title: "Séjour à la ferme laitière",
    location: 'Savoie',
    category: 'Élevage',
    description: "Chambre confortable avec vue sur les alpages. Participez à la traite et à la fabrication du fromage.",
    price: '95€',
    rating: 4.7,
    reviews: 156,
    duration: '2 nuits min.',
    capacity: 3,
    involvementLevels: ['Participation légère', 'Immersion totale'],
    animals: ['🐄', '🐐', '🐑'],
  },
  {
    id: 4,
    image: 'https://images.unsplash.com/photo-1623421851403-15b5be5f5b24?q=80&w=1080',
    title: "Gîte au verger bio",
    location: 'Val de Loire',
    category: 'Arboriculture',
    description: "Maison indépendante entourée de pommiers et poiriers. Profitez des cueillettes selon les saisons.",
    price: '110€',
    rating: 4.6,
    reviews: 203,
    duration: '2 nuits min.',
    capacity: 5,
    involvementLevels: ['Observation simple'],
    animals: ['🐔', '🐴'],
  }
];

// --- SOUS-COMPOSANTS INTEGRÉS ---

const Header = () => (
  <header className="bg-white shadow-sm sticky top-0 z-50 py-4 px-8 flex items-center justify-between border-b border-gray-100">
    <a href="/" className="text-3xl font-serif tracking-widest text-gray-900 cursor-pointer">
      OZATERRA
    </a>

    {/* Barre de recherche centrale */}
    <div className="hidden lg:flex items-center bg-white border border-gray-200 rounded-full shadow-sm p-2 gap-4">
      <div className="flex bg-gray-100 rounded-full p-1">
        <button className="px-4 py-1.5 bg-[#9f956d] text-white rounded-full text-xs font-bold tracking-wider">SÉJOURS</button>
        <button className="px-4 py-1.5 text-gray-500 rounded-full text-xs font-bold tracking-wider hover:bg-gray-200">ACTIVITÉS</button>
      </div>
      <div className="flex items-center gap-2 pl-2 border-r border-gray-200 pr-4">
        <MapPin className="size-4 text-gray-400" />
        <div className="flex flex-col">
          <span className="text-[10px] font-bold text-gray-500 uppercase tracking-widest">Destination</span>
          <span className="text-sm text-gray-900">Où allez-vous ?</span>
        </div>
      </div>
      <div className="flex items-center gap-2 px-4 border-r border-gray-200">
        <Calendar className="size-4 text-gray-400" />
        <div className="flex flex-col">
          <span className="text-[10px] font-bold text-gray-500 uppercase tracking-widest">Arrivée</span>
          <span className="text-sm text-gray-400">Date</span>
        </div>
      </div>
      <div className="flex items-center gap-2 px-4 border-r border-gray-200">
        <Calendar className="size-4 text-gray-400" />
        <div className="flex flex-col">
          <span className="text-[10px] font-bold text-gray-500 uppercase tracking-widest">Départ</span>
          <span className="text-sm text-gray-400">Date</span>
        </div>
      </div>
      <div className="flex items-center gap-2 px-4">
        <Users className="size-4 text-gray-400" />
        <div className="flex flex-col">
          <span className="text-[10px] font-bold text-gray-500 uppercase tracking-widest">Voyageurs</span>
          <span className="text-sm text-gray-900">1 personne</span>
        </div>
      </div>
      <button className="bg-[#9f956d] p-3 rounded-full text-white hover:bg-[#8b825c] transition-colors">
        <Search className="size-4" />
      </button>
    </div>

    {/* Navigation droite */}
    <nav className="hidden xl:flex items-center gap-6">
      <a href="#" className="text-sm text-gray-600 hover:text-gray-900">Qui sommes-nous</a>
      <a href="#" className="text-sm text-gray-600 hover:text-gray-900">Contact</a>
      <button className="px-5 py-2 border border-[#bccfa7] text-gray-700 rounded-xl text-sm font-medium hover:bg-[#f5faea] transition-colors">Se connecter</button>
      <button className="px-5 py-2 bg-[#bccfa7] text-gray-900 rounded-xl text-sm font-medium hover:bg-[#a9be90] transition-colors">Devenir agriculteur partenaire</button>
    </nav>
  </header>
);

const FilterSidebar = () => (
  <div className="w-[280px] shrink-0 bg-white rounded-2xl p-6 shadow-sm border border-gray-100 h-fit sticky top-[120px]">
    <h3 className="text-xl font-serif mb-6 text-gray-900">Filtres</h3>
    
    <div className="mb-6 border-b border-gray-100 pb-6">
      <div className="flex justify-between items-center cursor-pointer group">
        <h4 className="font-bold text-sm text-gray-900">Niveau d&apos;implication</h4>
        <ChevronDown className="size-4 text-gray-400 group-hover:text-gray-600" />
      </div>
    </div>

    <div className="mb-6 border-b border-gray-100 pb-6">
      <div className="flex justify-between items-center mb-4 cursor-pointer group">
        <h4 className="font-bold text-sm text-gray-900">Agriculture</h4>
        <ChevronUp className="size-4 text-gray-400 group-hover:text-gray-600" />
      </div>
      <div className="space-y-4">
        {[
          { icon: Sprout, label: 'Maraîchage', count: 45 },
          { icon: Apple, label: 'Arboriculture', count: 32 },
          { icon: Grape, label: 'Viticulture', count: 28 },
          { icon: Milk, label: 'Élevage', count: 24 },
          { icon: Flower2, label: 'Apiculture', count: 36 },
          { icon: Wheat, label: 'Céréaliculture', count: 18 },
        ].map((item, i) => (
          <label key={i} className="flex items-center gap-3 cursor-pointer group">
            <div className="w-5 h-5 rounded border-2 border-gray-300 flex items-center justify-center group-hover:border-[#9f956d] transition-colors">
              <div className="w-3 h-3 bg-gray-800 rounded-sm"></div> {/* Simule un checkbox coché */}
            </div>
            <item.icon className="size-4 text-[#9f956d]" />
            <span className="text-sm text-gray-700 flex-1">{item.label}</span>
            <span className="text-xs text-[#9f956d] font-medium">{item.count}</span>
          </label>
        ))}
      </div>
    </div>

    <div>
      <div className="flex justify-between items-center mb-4 cursor-pointer group">
        <h4 className="font-bold text-sm text-gray-900">Prix par nuit</h4>
        <ChevronUp className="size-4 text-gray-400 group-hover:text-gray-600" />
      </div>
      <div className="space-y-4">
        {['Moins de 80€', '80€ - 120€', '120€ - 160€', 'Plus de 160€'].map((label, i) => (
          <label key={i} className="flex items-center gap-3 cursor-pointer group">
            <div className="w-5 h-5 rounded border-2 border-gray-300 flex items-center justify-center group-hover:border-[#9f956d] transition-colors">
              {i === 1 && <div className="w-3 h-3 bg-gray-800 rounded-sm"></div>}
            </div>
            <span className="text-sm text-gray-700">{label}</span>
          </label>
        ))}
      </div>
    </div>
  </div>
);

const ExperienceCard = ({ image, title, location, category, description, price, rating, reviews, duration, capacity, involvementLevels, animals }: any) => (
  <div className="bg-white rounded-2xl overflow-hidden shadow-sm border border-gray-100 hover:shadow-lg transition-shadow duration-300 flex flex-col h-full">
    <div className="relative h-56">
      <img src={image} alt={title} className="w-full h-full object-cover" />
      <div className="absolute top-4 left-4 bg-white/95 backdrop-blur-sm px-3 py-1.5 rounded-full text-[10px] font-bold text-gray-700 uppercase tracking-widest flex items-center gap-1.5 shadow-sm">
        <Leaf className="size-3 text-[#9f956d]" /> {category}
      </div>
    </div>
    <div className="p-6 flex-1 flex flex-col">
      <div className="flex justify-between items-start mb-3">
        <h3 className="font-bold text-xl text-gray-900 leading-tight pr-4">{title}</h3>
        <div className="flex items-center gap-1 text-sm font-bold text-gray-800">
          <Star className="size-4 fill-[#9f956d] text-[#9f956d]" /> {rating} <span className="text-gray-400 font-normal">({reviews})</span>
        </div>
      </div>
      
      <div className="flex items-center gap-1 text-gray-500 text-sm mb-4">
        <MapPin className="size-4" /> {location}
      </div>

      <div className="flex items-center gap-4 text-sm text-gray-600 mb-4 font-medium">
        <div className="flex items-center gap-1.5"><Calendar className="size-4" /> {duration}</div>
        <div className="flex items-center gap-1.5"><Users className="size-4" /> {capacity} pers.</div>
      </div>

      <div className="flex flex-wrap gap-2 mb-4">
        {involvementLevels.map((lvl: string, i: number) => (
          <span key={i} className="px-3 py-1 bg-[#f5faea] text-[#8b9165] rounded-full text-xs font-semibold border border-[#bccfa7]/40">
            {lvl}
          </span>
        ))}
      </div>

      <div className="flex items-center gap-2 mb-4 text-lg">
        {animals.map((anim: string, i: number) => <span key={i}>{anim}</span>)}
      </div>

      <p className="text-sm text-gray-600 line-clamp-2 mb-6 flex-1">
        {description}
      </p>

      <div className="flex items-center justify-between pt-4 border-t border-gray-100 mt-auto">
        <div>
          <span className="font-bold text-2xl text-gray-900">{price}</span>
          <span className="text-gray-500 text-sm"> / nuit</span>
        </div>
        <button className="px-6 py-2.5 bg-[#bccfa7] text-gray-900 font-semibold rounded-xl hover:bg-[#9f956d] hover:text-white transition-colors">
          Réserver
        </button>
      </div>
    </div>
  </div>
);

const FranceMap = () => (
  <div className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100 h-fit sticky top-[120px]">
    <h3 className="text-xl font-serif mb-6 text-gray-900">Carte des régions</h3>
    <div className="relative w-full aspect-square bg-[#f5faea] rounded-xl border border-[#bccfa7]/30 flex items-center justify-center p-4 overflow-hidden">
      {/* Forme très stylisée représentant la carte avec des marqueurs */}
      <svg viewBox="0 0 100 100" className="w-full h-full text-[#bccfa7]/40 drop-shadow-sm">
        <path fill="currentColor" d="M35,15 Q60,5 75,25 T85,65 Q75,95 45,90 T15,75 Q5,45 35,15 Z" />
      </svg>
      {/* Points sur la carte */}
      <div className="absolute top-[25%] left-[30%] bg-[#9f956d] text-white text-[10px] font-bold size-6 rounded-full flex items-center justify-center shadow-md border-2 border-white">18</div>
      <div className="absolute top-[18%] left-[48%] bg-[#9f956d] text-white text-[10px] font-bold size-6 rounded-full flex items-center justify-center shadow-md border-2 border-white">23</div>
      <div className="absolute top-[45%] left-[38%] bg-[#9f956d] text-white text-[10px] font-bold size-6 rounded-full flex items-center justify-center shadow-md border-2 border-white">27</div>
      <div className="absolute top-[38%] right-[32%] bg-[#9f956d] text-white text-[10px] font-bold size-6 rounded-full flex items-center justify-center shadow-md border-2 border-white">15</div>
      <div className="absolute top-[50%] right-[20%] bg-[#9f956d] text-white text-[10px] font-bold size-6 rounded-full flex items-center justify-center shadow-md border-2 border-white">19</div>
      <div className="absolute bottom-[35%] right-[30%] bg-[#9f956d] text-white text-[10px] font-bold size-6 rounded-full flex items-center justify-center shadow-md border-2 border-white">12</div>
      <div className="absolute bottom-[25%] right-[40%] bg-[#9f956d] text-white text-[10px] font-bold size-6 rounded-full flex items-center justify-center shadow-md border-2 border-white">31</div>
      <div className="absolute bottom-[35%] left-[45%] bg-[#9f956d] text-white text-[10px] font-bold size-6 rounded-full flex items-center justify-center shadow-md border-2 border-white">25</div>
    </div>
    <div className="mt-6 flex items-center gap-3 text-sm text-gray-600">
      <div className="size-3 rounded-full bg-[#9f956d] shadow-sm"></div>
      Nombre d&apos;expériences par région
    </div>
  </div>
);

// --- PAGE PRINCIPALE ---

export default function App() {
  return (
    <div className="min-h-screen flex flex-col bg-[#FAFAF9]">
      <Header />

      <main className="flex-1">
        <div className="max-w-[1536px] mx-auto px-4 md:px-8 py-10">
          
          {/* En-tête des résultats */}
          <div className="flex flex-col md:flex-row md:items-center justify-between mb-8 gap-4">
            <p className="text-gray-500">
              <span className="text-gray-900 font-bold text-lg">184 hébergements</span> disponibles
            </p>
            <div className="flex items-center gap-3">
              <SlidersHorizontal className="size-5 text-[#9f956d]" />
              <select className="bg-white border border-gray-200 rounded-xl px-4 py-2 text-sm font-medium text-gray-700 outline-none focus:border-[#9f956d] focus:ring-1 focus:ring-[#9f956d] shadow-sm cursor-pointer hover:border-gray-300">
                <option>Trier par: Popularité</option>
                <option>Prix croissant</option>
                <option>Prix décroissant</option>
                <option>Meilleures notes</option>
              </select>
            </div>
          </div>

          {/* Grille principale avec les 3 colonnes */}
          <div className="flex flex-col xl:flex-row gap-8 items-start">
            
            {/* Colonne Gauche : Filtres */}
            <div className="hidden lg:block">
              <FilterSidebar />
            </div>
            
            {/* Colonne Centrale : Cartes */}
            <div className="flex-1 w-full">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {experiences.map(experience => (
                  <ExperienceCard key={experience.id} {...experience} />
                ))}
              </div>

              {/* Pagination style Figma */}
              <div className="flex items-center justify-center gap-2 mt-16 mb-8">
                <button className="px-4 py-2.5 rounded-xl border border-gray-200 text-sm font-medium text-gray-600 hover:bg-gray-50 transition-colors">
                  Précédent
                </button>
                <button className="px-4 py-2.5 rounded-xl bg-[#bccfa7] text-gray-900 text-sm font-bold shadow-sm">
                  1
                </button>
                <button className="px-4 py-2.5 rounded-xl border border-gray-200 text-sm font-medium text-gray-600 hover:bg-gray-50 transition-colors">
                  2
                </button>
                <button className="px-4 py-2.5 rounded-xl border border-gray-200 text-sm font-medium text-gray-600 hover:bg-gray-50 transition-colors">
                  3
                </button>
                <span className="text-gray-400 px-2">...</span>
                <button className="px-4 py-2.5 rounded-xl border border-gray-200 text-sm font-medium text-gray-600 hover:bg-gray-50 transition-colors">
                  Suivant
                </button>
              </div>
            </div>

            {/* Colonne Droite : Carte de France */}
            <div className="hidden xl:block w-[320px] shrink-0">
              <FranceMap />
            </div>

          </div>
        </div>
      </main>
      
      {/* Footer Minimal pour cette page */}
      <footer className="bg-gray-900 text-white py-8 text-center text-sm text-gray-400 mt-auto">
        <p>© 2026 Ozaterra. Tous droits réservés.</p>
      </footer>
    </div>
  );
}
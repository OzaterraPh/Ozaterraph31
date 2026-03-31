'use client';

import React from 'react';
import {
  MapPin,
  Award,
  Users,
  Heart,
  Leaf,
  Sprout,
  Apple,
  Grape,
  Wheat,
  Milk,
  Flower2,
  ChevronRight,
  Search
} from "lucide-react";

// --- COMPOSANTS INCLUS ---

const Button = ({ children, variant = "default", className = "", ...props }: any) => {
  const baseStyle = "inline-flex items-center justify-center rounded-xl px-5 py-2.5 transition-all duration-200 font-medium";
  const variants: any = {
    default: "bg-[#9f956d] text-white hover:bg-[#8b825c]",
    outline: "border-2 border-[#bccfa7] bg-transparent hover:bg-[#bccfa7]/10 text-gray-800",
    white: "bg-white text-black hover:bg-gray-50 border-2 border-[#9f956d]"
  };
  return <button className={`${baseStyle} ${variants[variant]} ${className}`} {...props}>{children}</button>;
};

const CategoryCard = ({ icon: Icon, title, count }: any) => (
  <div className="bg-white rounded-2xl p-6 text-center shadow-sm border border-[#bccfa7]/20 hover:shadow-md transition-shadow cursor-pointer group">
    <div className="size-12 rounded-full bg-[#f5faea] flex items-center justify-center mx-auto mb-4 group-hover:bg-[#bccfa7]/30 transition-colors">
      <Icon className="size-6 text-[#9f956d]" />
    </div>
    <h3 className="font-medium text-gray-900 mb-1">{title}</h3>
    <p className="text-sm text-gray-500">{count} expériences</p>
  </div>
);

const ExperienceCard = ({ title, location, image, price, duration, rating, reviews, category }: any) => (
  <div className="bg-white rounded-2xl overflow-hidden shadow-sm border border-gray-100 hover:shadow-md transition-shadow cursor-pointer">
    <div className="relative h-48">
      <img src={image} alt={title} className="w-full h-full object-cover" />
      <div className="absolute top-4 left-4 bg-white/90 backdrop-blur-sm px-3 py-1 rounded-full text-xs font-bold text-[#9f956d]">
        {category}
      </div>
    </div>
    <div className="p-5">
      <div className="flex justify-between items-start mb-2">
        <h3 className="font-bold text-lg text-gray-900">{title}</h3>
        <div className="flex items-center gap-1 text-sm font-medium text-gray-700">
          <Award className="size-4 text-[#9f956d]" /> {rating}
        </div>
      </div>
      <div className="flex items-center gap-1 text-gray-500 text-sm mb-4">
        <MapPin className="size-4" /> {location}
      </div>
      <div className="flex items-center justify-between pt-4 border-t border-gray-100">
        <div>
          <span className="font-bold text-lg text-[#9f956d]">{price}€</span>
          <span className="text-gray-500 text-sm"> / pers.</span>
        </div>
        <div className="text-sm text-gray-500">{duration}</div>
      </div>
    </div>
  </div>
);

const TestimonialCard = ({ name, rating, comment, experience }: any) => (
  <div className="bg-[#f5faea] rounded-2xl p-6 border border-[#bccfa7]/30">
    <div className="flex gap-1 mb-4 text-[#9f956d]">
      {[...Array(rating)].map((_, i) => <Award key={i} className="size-5 fill-current" />)}
    </div>
    <p className="text-gray-700 italic mb-6">&quot;{comment}&quot;</p>
    <div>
      <div className="font-bold text-gray-900">{name}</div>
      <div className="text-sm text-gray-500">{experience}</div>
    </div>
  </div>
);

const SearchBar = () => (
  <div className="bg-white rounded-2xl p-2 shadow-xl max-w-4xl mx-auto flex flex-col md:flex-row gap-2 border border-gray-100">
    <div className="flex-1 flex items-center px-4 py-3 bg-gray-50 rounded-xl">
      <MapPin className="text-[#9f956d] mr-3 size-5" />
      <div className="flex flex-col">
        <span className="text-xs font-bold text-gray-500 uppercase tracking-wider">Destination</span>
        <input type="text" placeholder="Où allez-vous ?" className="bg-transparent outline-none text-gray-900 placeholder-gray-400" />
      </div>
    </div>
    <div className="flex-1 flex items-center px-4 py-3 bg-gray-50 rounded-xl">
      <Users className="text-[#9f956d] mr-3 size-5" />
      <div className="flex flex-col">
        <span className="text-xs font-bold text-gray-500 uppercase tracking-wider">Voyageurs</span>
        <span className="text-gray-900">2 personnes</span>
      </div>
    </div>
    <Button className="w-full md:w-auto px-8 py-4">
      <Search className="size-5 mr-2" /> Rechercher
    </Button>
  </div>
);

// --- PAGE PRINCIPALE ---

export default function App() {
  const experiences = [
    { id: 1, title: "Séjour à la ferme bio", location: "Normandie, France", image: "https://images.unsplash.com/photo-1500382017468-9049fed747ef?q=80&w=1000", price: 89, duration: "2 jours / 1 nuit", rating: 4.9, reviews: 124, category: "Séjour" },
    { id: 2, title: "Atelier fromage artisanal", location: "Savoie, France", image: "https://images.unsplash.com/photo-1447945702361-458a1d71f318?q=80&w=1000", price: 45, duration: "Demi-journée", rating: 4.8, reviews: 89, category: "Atelier" },
    { id: 3, title: "Vendanges en vignoble", location: "Bourgogne, France", image: "https://images.unsplash.com/photo-1504279577054-acfeacdd3715?q=80&w=1000", price: 55, duration: "Journée", rating: 4.7, reviews: 156, category: "Activité" },
  ];

  const categories = [
    { icon: Sprout, title: "Maraîchage", count: 45 },
    { icon: Apple, title: "Arboriculture", count: 32 },
    { icon: Grape, title: "Viticulture", count: 28 },
    { icon: Wheat, title: "Céréales", count: 19 },
    { icon: Milk, title: "Élevage", count: 24 },
    { icon: Flower2, title: "Apiculture", count: 36 },
  ];

  const stats = [
    { icon: MapPin, value: "250+", label: "Fermes partenaires" },
    { icon: Users, value: "15,000+", label: "Visiteurs satisfaits" },
    { icon: Award, value: "4.8/5", label: "Note moyenne" },
  ];

  const engagementValues = [
    { icon: Heart, title: "Solidaire", description: "Un revenu complémentaire direct et équitable pour les agriculteurs." },
    { icon: Leaf, title: "Authentique", description: "Un tourisme authentique et durable au cœur des exploitations." },
    { icon: Sprout, title: "Immersif", description: "Une découverte immersive du monde agricole qui encourage les générations futures." },
  ];

  const testimonials = [
    { name: "Marie Dubois", rating: 5, comment: "Une expérience inoubliable ! Les enfants ont adoré nourrir les animaux.", experience: "Séjour à la ferme bio" },
    { name: "Pierre Martin", rating: 5, comment: "L'atelier fromage était passionnant. Le fromager a partagé sa passion avec pédagogie.", experience: "Atelier fromage" },
    { name: "Sophie Laurent", rating: 4, comment: "Magnifique journée dans les vignes. Le cadre est superbe.", experience: "Vendanges en vignoble" },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-[#f5faea] to-white font-sans text-gray-900">
      
      {/* Header */}
      <header className="bg-white shadow-sm sticky top-0 z-50 border-b border-[#bccfa7]/20">
        <div className="max-w-7xl mx-auto px-4 py-4 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <Leaf className="text-[#9f956d] size-8" />
            <span className="text-2xl font-bold tracking-tight text-gray-900">Ozaterra</span>
          </div>
          <nav className="hidden md:flex items-center gap-8">
            <a href="#about" className="text-sm font-medium hover:text-[#bbc577] transition-colors">Qui sommes-nous</a>
            <a href="#contact" className="text-sm font-medium hover:text-[#bbc577] transition-colors">Contact</a>
            <Button variant="white">Se connecter</Button>
            <Button>Devenir partenaire</Button>
          </nav>
        </div>
      </header>

      {/* Hero Section */}
      <section className="relative h-[650px] flex flex-col items-center justify-center overflow-hidden">
        <div className="absolute inset-0 bg-cover bg-center" style={{ backgroundImage: `url('https://images.unsplash.com/photo-1500382017468-9049fed747ef?q=80&w=2000')` }}>
          <div className="absolute inset-0 bg-gradient-to-r from-black/60 to-black/30" />
        </div>
        <div className="relative z-10 max-w-5xl mx-auto px-4 w-full pt-10">
          <div className="text-center text-white mb-10">
            <h1 className="text-5xl md:text-7xl font-serif mb-6 drop-shadow-md">
              {"L'authenticité a une adresse"}
            </h1>
            <p className="text-xl md:text-2xl text-white/90 max-w-3xl mx-auto font-light">
              {"Découvrez de manière immersive le monde agricole au travers d'expériences authentiques."}
            </p>
          </div>
          <SearchBar />
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-white relative z-20 -mt-8 rounded-t-3xl shadow-xl">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {stats.map((stat, index) => (
              <div key={index} className="text-center">
                <div className="inline-flex items-center justify-center size-16 rounded-full bg-[#f5faea] mb-4">
                  <stat.icon className="size-8 text-[#9f956d]" />
                </div>
                <div className="text-4xl font-bold text-gray-900 mb-2">{stat.value}</div>
                <div className="text-gray-500 font-medium uppercase tracking-wider text-sm">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Categories Section */}
      <section className="py-20 px-4 bg-[#f5faea]">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-serif mb-4 text-gray-900">Explorez par catégorie</h2>
            <p className="text-xl text-gray-600">{"Trouvez l'expérience qui vous correspond"}</p>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
            {categories.map((category, index) => (
              <CategoryCard key={index} {...category} />
            ))}
          </div>
        </div>
      </section>

      {/* Experiences Section */}
      <section id="experiences" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex items-center justify-between mb-12">
            <div>
              <h2 className="text-4xl font-serif mb-2 text-gray-900">Expériences populaires</h2>
              <p className="text-xl text-gray-600">Réservées et appréciées par notre communauté</p>
            </div>
            <Button variant="outline" className="hidden md:flex">Voir tout <ChevronRight className="size-4 ml-2" /></Button>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {experiences.map((experience) => (
              <ExperienceCard key={experience.id} {...experience} />
            ))}
          </div>
        </div>
      </section>

      {/* Engagement Section */}
      <section id="about" className="py-20 bg-[#9f956d] text-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-serif mb-6">Ozaterra, pour un tourisme engagé</h2>
            <p className="text-white/90 max-w-3xl mx-auto text-lg leading-relaxed font-light">
              {"Ozaterra vous ouvre les portes des fermes et des domaines agricoles français pour des expériences authentiques et immersives. Reconnectez-vous à la nature, prenez part au quotidien des agriculteurs et créez des souvenirs inoubliables."}
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {engagementValues.map((value, index) => (
              <div key={index} className="text-center bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-white/20">
                <div className="size-16 rounded-full bg-white flex items-center justify-center mx-auto mb-6">
                  <value.icon className="size-8 text-[#9f956d]" />
                </div>
                <h3 className="text-2xl font-serif mb-3 text-white">{value.title}</h3>
                <p className="text-white/80 font-light leading-relaxed">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-gradient-to-br from-[#9f956d] to-[#bbc577] text-white text-center px-4">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-5xl font-serif mb-6 drop-shadow-sm">Vous êtes agriculteur ?</h2>
          <p className="text-xl mb-10 text-white/90 font-light">
            {"Partagez votre passion et accueillez des visiteurs en proposant vos propres expériences sur Ozaterra."}
          </p>
          <Button className="text-lg px-10 py-4 bg-white text-gray-900 hover:bg-gray-50 shadow-xl">
            Devenir partenaire
          </Button>
        </div>
      </section>

      {/* Footer Minimaliste */}
      <footer className="bg-gray-900 text-white py-12 text-center text-sm text-gray-400">
        <p>© 2026 Ozaterra. Tous droits réservés.</p>
      </footer>
    </div>
  );
}
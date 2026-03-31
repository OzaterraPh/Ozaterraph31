'use client';
import Navbar from './components/Navbar';
import Hero from './components/Hero';

export default function Home() {
  return (
    <main className="min-h-screen bg-white">
      <Navbar />
      <Hero />
      
      {/* Bandeau de statistiques rapides */}
      <section className="relative z-20 -mt-10 mx-auto max-w-5xl bg-white shadow-2xl rounded-3xl py-12 px-8 flex flex-wrap justify-around text-center border border-slate-100">
        <div>
          <div className="text-4xl font-black text-slate-800 tracking-tight">250+</div>
          <p className="text-emerald-600 text-xs font-bold uppercase mt-2">Fermes partenaires</p>
        </div>
        <div>
          <div className="text-4xl font-black text-slate-800 tracking-tight">15k+</div>
          <p className="text-emerald-600 text-xs font-bold uppercase mt-2">Visiteurs satisfaits</p>
        </div>
        <div>
          <div className="text-4xl font-black text-slate-800 tracking-tight">4.8 / 5</div>
          <p className="text-emerald-600 text-xs font-bold uppercase mt-2">Note moyenne</p>
        </div>
      </section>
    </main>
  );
}
"use client";
import { useState, useEffect } from 'react';
import { SearchBar } from '@/components/SearchBar';
import { ItemCard } from '@/components/ItemCard';
import { getItems, Item } from '@/lib/api';

export default function CompactDashboard() {
  const [items, setItems] = useState<Item[]>([]);
  const [query, setQuery] = useState("");

  useEffect(() => {
    const fetchData = async () => {
      const data = await getItems(query.trim().toLowerCase());
      setItems(data.slice(0, 8));
    };
    fetchData();
  }, [query]);

  return (
    <div className="relative min-h-screen bg-[#f8fafc] overflow-hidden">
      
      {/* 1. HIGH-VISIBILITY BACKGROUND */}
      {/* Increased opacity and size of glows */}
      <div className="absolute -top-12 -right-12 h-[500px] w-[500px] rounded-full bg-indigo-200/40 blur-[100px]" />
      <div className="absolute -bottom-12 -left-12 h-[500px] w-[500px] rounded-full bg-fuchsia-200/30 blur-[100px]" />
      
      {/* Stronger Dot Grid */}
      <div className="absolute inset-0 z-0 opacity-[0.8]" 
           style={{ backgroundImage: 'radial-gradient(#cbd5e1 1.5px, transparent 1.5px)', backgroundSize: '24px 24px' }} 
      />

      <main className="relative z-10 mx-auto max-w-6xl px-6 py-10"> {/* Reduced py-20 to py-10 */}
        
        <header className="mb-12 flex flex-col items-center text-center"> {/* Reduced mb-24 to mb-12 */}
          <div className="mb-2 flex items-center gap-2"> {/* Reduced mb-6 to mb-2 */}
            <span className="h-px w-8 bg-indigo-400"></span>
            <span className="text-[10px] font-bold uppercase tracking-[0.3em] text-indigo-600">Archive System</span>
            <span className="h-px w-8 bg-indigo-400"></span>
          </div>

          <h1 className="text-5xl font-black tracking-tighter text-slate-900 leading-[0.9]"> {/* Tight leading */}
            Digital <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-600 to-fuchsia-600">Archive</span>
          </h1>
          
          <p className="mt-3 max-w-sm text-[11px] font-bold uppercase tracking-tight text-slate-500 leading-tight"> {/* Reduced mt and leading */}
            Precision curated literature. <span className="text-indigo-600">Access granted.</span>
          </p>
          
          <div className="mt-8 w-full max-w-md"> {/* Reduced mt-12 to mt-8 */}
            <SearchBar onSearch={setQuery} />
          </div>
        </header>

        <section className="flex justify-center">
          <div className={`grid w-full gap-x-6 gap-y-10 transition-all duration-700 ${
            items.length === 1 ? 'max-w-[180px] grid-cols-1' : 'grid-cols-2 sm:grid-cols-3 lg:grid-cols-4'
          } justify-items-center`}>
            {items.map((item) => (
              <ItemCard key={item.id} item={item} />
            ))}
          </div>
        </section>

      </main>
    </div>
  );
}
"use client";
import React, { useState } from 'react';
import { Item } from '@/lib/api';

export const ItemCard = ({ item }: { item: Item }) => {
  const [imgError, setImgError] = useState(false);
  const accents = ['bg-indigo-500', 'bg-fuchsia-500', 'bg-cyan-500', 'bg-violet-500'];
  const activeAccent = accents[item.id % accents.length];

  return (
    <div className="group w-full max-w-[170px] flex flex-col items-start">
      
      {/* Tighter, sharper Image Container */}
      <div className="relative aspect-[10/14] w-full overflow-hidden rounded-sm bg-white shadow-md transition-all duration-500 group-hover:shadow-[0_20px_40px_-15px_rgba(99,102,241,0.4)] group-hover:-translate-y-2">
        
        {!imgError ? (
          <img 
            src={item.image} 
            alt={item.title}
            className="h-full w-full object-cover grayscale-[10%] group-hover:grayscale-0 transition-all duration-500"
            referrerPolicy="no-referrer"
            onError={() => setImgError(true)}
          />
        ) : (
          /* THE HOBBIT FALLBACK - Strong color */
          <div className={`flex h-full w-full flex-col items-center justify-center ${activeAccent} p-4`}>
             <span className="text-[10px] font-black text-white uppercase tracking-tighter text-center leading-none">{item.title}</span>
          </div>
        )}
      </div>

      {/* COMPACT MATTER SECTION */}
      <div className="mt-3 w-full"> {/* Reduced mt-6 to mt-3 */}
        <div className="flex items-center justify-between mb-1">
          <span className={`h-1.5 w-1.5 rounded-full ${activeAccent}`} />
          <span className="text-[8px] font-black text-indigo-400 tracking-tighter uppercase">ID-0{item.id}</span>
        </div>
        
        <h3 className="text-[12px] font-black text-slate-800 uppercase tracking-tighter leading-none mb-1">
          {item.title}
        </h3>
        
        <p className="text-[10px] text-slate-500 line-clamp-2 leading-[1.1] italic tracking-tight">
          {item.description}
        </p>
      </div>
    </div>
  );
};
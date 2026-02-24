"use client";

import React from 'react';

interface SearchBarProps {
  onSearch: (val: string) => void;
}

export const SearchBar = ({ onSearch }: SearchBarProps) => {
  return (
    <div className="relative mx-auto w-full max-w-2xl group">
      {/* Search Icon Container */}
      <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-5">
        <svg 
          className="h-5 w-5 text-slate-400 transition-colors group-focus-within:text-indigo-500" 
          fill="none" 
          viewBox="0 0 24 24" 
          stroke="currentColor"
        >
          <path 
            strokeLinecap="round" 
            strokeLinejoin="round" 
            strokeWidth={2} 
            d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" 
          />
        </svg>
      </div>

      {/* Input Field */}
      <input
        type="text"
        onChange={(e) => onSearch(e.target.value)}
        placeholder="Search for magic, adventures, or fairy tales..."
        className="h-14 w-full rounded-2xl border-none bg-white/70 pl-14 pr-6 text-slate-700 shadow-xl shadow-slate-200/50 ring-1 ring-slate-200 backdrop-blur-md transition-all placeholder:text-slate-400 focus:bg-white focus:ring-2 focus:ring-indigo-400 focus:outline-none"
      />
      
      {/* Decorative Glow - Adds that "Vibe" */}
      <div className="absolute -inset-1 -z-10 rounded-3xl bg-gradient-to-r from-indigo-100 to-purple-100 opacity-0 blur transition duration-300 group-focus-within:opacity-100" />
    </div>
  );
};
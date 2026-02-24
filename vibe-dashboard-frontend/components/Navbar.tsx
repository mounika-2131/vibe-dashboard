import React from 'react';

export const Navbar = () => {
  return (
    <nav className="sticky top-0 z-50 w-full border-b border-white/20 bg-white/60 backdrop-blur-lg">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">
        <div className="flex items-center gap-2">
          <div className="h-8 w-8 rounded-lg bg-indigo-600"></div>
          <span className="text-xl font-bold tracking-tight text-slate-900">VibeHub</span>
        </div>
        
        <div className="hidden space-x-8 md:flex">
          <a href="#" className="text-sm font-medium text-slate-600 hover:text-indigo-600">Home</a>
          <a href="#" className="text-sm font-medium text-slate-600 hover:text-indigo-600">Library</a>
          <a href="#" className="text-sm font-medium text-slate-600 hover:text-indigo-600">About</a>
        </div>

        <button className="rounded-full bg-slate-900 px-5 py-2 text-sm font-medium text-white transition-all hover:bg-slate-800 hover:shadow-lg active:scale-95">
          Get Started
        </button>
      </div>
    </nav>
  );
};
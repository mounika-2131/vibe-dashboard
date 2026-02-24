import React from 'react';

export const EmptyState = () => {
  return (
    <div className="flex flex-col items-center justify-center py-20 text-center">
      <div className="mb-6 flex h-24 w-24 items-center justify-center rounded-full bg-indigo-50 text-4xl">
        📚
      </div>
      <h3 className="mb-2 text-xl font-semibold text-slate-800">No books found</h3>
      <p className="max-w-xs text-slate-500">
        We couldn't find any stories matching your search. Try different keywords!
      </p>
    </div>
  );
};
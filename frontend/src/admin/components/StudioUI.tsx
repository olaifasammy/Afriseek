import React from 'react';

// Reusable Studio Card component
export const StudioCard = ({ title, children, className = "" }: { title?: string, children: React.ReactNode, className?: string }) => (
  <div className={`p-6 border border-zinc-800 rounded-lg bg-zinc-900 ${className}`}>
    {title && <h2 className="text-sm font-semibold text-zinc-400 mb-4 uppercase tracking-wider">{title}</h2>}
    {children}
  </div>
);

// Reusable Studio Button component
export const StudioButton = ({ children, variant = 'primary', className = "", ...props }: any) => {
  const baseClasses = "px-4 py-2 rounded-md font-semibold text-sm transition-colors flex items-center gap-2";
  const variants = {
    primary: "bg-amber-500 hover:bg-amber-600 text-zinc-950",
    secondary: "bg-zinc-800 hover:bg-zinc-700 text-zinc-100 border border-zinc-700",
  };
  
  return (
    <button className={`${baseClasses} ${variants[variant as keyof typeof variants]} ${className}`} {...props}>
      {children}
    </button>
  );
};

// Reusable Studio Input component
export const StudioInput = ({ icon: Icon, ...props }: any) => (
  <div className="relative">
    {Icon && <div className="absolute left-3 top-1/2 -translate-y-1/2 text-zinc-500"><Icon size={16} /></div>}
    <input 
      className={`w-full bg-zinc-900 border border-zinc-800 rounded-md py-2 text-sm text-white focus:outline-none focus:border-amber-500 ${Icon ? 'pl-10' : 'pl-4'} pr-4`}
      {...props}
    />
  </div>
);

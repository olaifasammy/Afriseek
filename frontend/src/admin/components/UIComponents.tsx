import React from 'react';

// Reusable Stepper component for wizards
export const Stepper = ({ steps, currentStep }: { steps: { id: number, name: string }[], currentStep: number }) => {
  return (
    <div className="flex items-center justify-between mb-8">
      {steps.map((step, index) => (
        <div key={step.id} className="flex flex-col items-center flex-1">
          <div className={`w-8 h-8 rounded-full flex items-center justify-center font-bold text-sm ${index <= currentStep ? 'bg-amber-500 text-zinc-900' : 'bg-zinc-800 text-zinc-500'}`}>
            {step.id}
          </div>
          <span className={`text-xs mt-2 font-medium ${index <= currentStep ? 'text-white' : 'text-zinc-500'}`}>{step.name}</span>
        </div>
      ))}
    </div>
  );
};

// Reusable Sidebar Card for high-fidelity widgets
export const SidebarCard = ({ title, children, className = "" }: { title: string, children: React.ReactNode, className?: string }) => (
  <div className={`p-5 border border-zinc-800 rounded-lg bg-zinc-900 ${className}`}>
    <h3 className="text-sm font-semibold text-zinc-300 mb-4">{title}</h3>
    {children}
  </div>
);

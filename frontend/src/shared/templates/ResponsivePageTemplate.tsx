import React from 'react';

/**
 * ResponsivePageTemplate
 * 
 * Use this template for all new pages to ensure consistent mobile-first behavior.
 * 
 * Features:
 * - Responsive Header (stacks on mobile, row on desktop).
 * - Responsive Container (handles padding transitions).
 * - Mobile-friendly layout wrapping.
 */
export const ResponsivePageTemplate = ({ 
    title, 
    description, 
    actions, 
    children 
}: { 
    title: string; 
    description?: string; 
    actions?: React.ReactNode; 
    children: React.ReactNode; 
}) => {
  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
        <div>
          <h1 className="text-2xl font-bold text-white">{title}</h1>
          {description && <p className="text-zinc-400 text-sm mt-1">{description}</p>}
        </div>
        {actions && (
          <div className="flex gap-2 w-full md:w-auto">
            {actions}
          </div>
        )}
      </div>

      {/* Content Area */}
      <div className="space-y-6">
        {children}
      </div>
    </div>
  );
};

import React from 'react';
import { ChevronRight, Home } from 'lucide-react';
import { BreadcrumbItem } from '../types';

interface BreadcrumbProps {
  items: BreadcrumbItem[];
  onNavigate: (url: string) => void;
  className?: string;
}

export const Breadcrumb: React.FC<BreadcrumbProps> = ({
  items,
  onNavigate,
  className = ''
}) => {
  return (
    <nav aria-label="Breadcrumb" className={`text-xs font-mono py-2 ${className}`}>
      <ol className="flex items-center flex-wrap gap-1.5 text-slate-400">
        <li className="flex items-center">
          <button
            onClick={() => onNavigate('/')}
            className="flex items-center gap-1 hover:text-sky-300 transition-colors focus:outline-none"
            title="Beranda Ahmad Shofi Nasla"
          >
            <Home className="w-3.5 h-3.5 text-sky-400" />
            <span>Home</span>
          </button>
        </li>
        {items.map((item, index) => {
          const isLast = index === items.length - 1;
          return (
            <li key={index} className="flex items-center gap-1.5">
              <ChevronRight className="w-3.5 h-3.5 text-slate-600 shrink-0" />
              {isLast || !item.url ? (
                <span className="text-slate-200 font-semibold truncate max-w-[240px] sm:max-w-md" aria-current="page">
                  {item.label}
                </span>
              ) : (
                <button
                  onClick={() => onNavigate(item.url!)}
                  className="hover:text-sky-300 transition-colors focus:outline-none"
                >
                  {item.label}
                </button>
              )}
            </li>
          );
        })}
      </ol>
    </nav>
  );
};

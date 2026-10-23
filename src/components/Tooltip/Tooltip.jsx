import { useState } from 'react';
import { cn } from '../../lib/cn';

const placements = {
  top: 'bottom-full left-1/2 -translate-x-1/2 mb-2',
  bottom: 'top-full left-1/2 -translate-x-1/2 mt-2',
  left: 'right-full top-1/2 -translate-y-1/2 mr-2',
  right: 'left-full top-1/2 -translate-y-1/2 ml-2',
};

const arrows = {
  top: 'top-full left-1/2 -translate-x-1/2 -mt-1',
  bottom: 'bottom-full left-1/2 -translate-x-1/2 -mb-1',
  left: 'left-full top-1/2 -translate-y-1/2 -ml-1',
  right: 'right-full top-1/2 -translate-y-1/2 -mr-1',
};

const variants = {
  dark: 'bg-slate-900 text-white',
  light: 'bg-white text-slate-700 border border-slate-200 shadow-lg',
  brand: 'bg-brand-600 text-white',
};

export function Tooltip({ content, placement = 'top', variant = 'dark', arrow = true, open, children }) {
  const [hover, setHover] = useState(false);
  const visible = open ?? hover;

  return (
    <span
      className="relative inline-flex"
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => setHover(false)}
      onFocus={() => setHover(true)}
      onBlur={() => setHover(false)}
    >
      {children}
      <span
        role="tooltip"
        className={cn(
          'pointer-events-none absolute z-30 w-max max-w-xs rounded-md px-2.5 py-1.5 text-xs font-medium transition-opacity',
          placements[placement],
          variants[variant],
          visible ? 'opacity-100' : 'opacity-0',
        )}
      >
        {content}
        {arrow && (
          <span
            className={cn(
              'absolute size-2 rotate-45',
              arrows[placement],
              variants[variant],
              variant === 'light' && 'shadow-none',
              variant === 'light' && placement === 'top' && 'border-t-0 border-l-0',
              variant === 'light' && placement === 'bottom' && 'border-r-0 border-b-0',
              variant === 'light' && placement === 'left' && 'border-b-0 border-l-0',
              variant === 'light' && placement === 'right' && 'border-t-0 border-r-0',
            )}
          />
        )}
      </span>
    </span>
  );
}

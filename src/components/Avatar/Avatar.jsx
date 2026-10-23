import { useState } from 'react';
import { cn } from '../../lib/cn';

const sizes = {
  xs: 'size-6 text-[10px]',
  sm: 'size-8 text-xs',
  md: 'size-10 text-sm',
  lg: 'size-12 text-base',
  xl: 'size-16 text-lg',
};

const statusSize = { xs: 'size-1.5', sm: 'size-2', md: 'size-2.5', lg: 'size-3', xl: 'size-4' };
const statusColor = { online: 'bg-emerald-500', away: 'bg-amber-400', busy: 'bg-red-500', offline: 'bg-slate-400' };

const initialsOf = (name = '') =>
  name.split(' ').filter(Boolean).slice(0, 2).map((p) => p[0].toUpperCase()).join('');

export function Avatar({ src, name, size = 'md', shape = 'circle', status, className }) {
  const [failed, setFailed] = useState(false);
  const radius = shape === 'circle' ? 'rounded-full' : 'rounded-lg';

  return (
    <span className={cn('relative inline-flex shrink-0', className)}>
      <span className={cn('inline-flex items-center justify-center overflow-hidden bg-brand-100 font-semibold text-brand-700 ring-2 ring-white', radius, sizes[size])}>
        {src && !failed ? (
          <img src={src} alt={name ?? ''} className="size-full object-cover" onError={() => setFailed(true)} />
        ) : name ? (
          initialsOf(name)
        ) : (
          <svg className="size-3/5 text-brand-400" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
            <path d="M12 12a5 5 0 1 0 0-10 5 5 0 0 0 0 10Zm0 2c-4.42 0-8 2.24-8 5v3h16v-3c0-2.76-3.58-5-8-5Z" />
          </svg>
        )}
      </span>
      {status && (
        <span
          aria-label={status}
          className={cn('absolute right-0 bottom-0 rounded-full ring-2 ring-white', statusColor[status], statusSize[size])}
        />
      )}
    </span>
  );
}

export function AvatarGroup({ children, max = 4, size = 'md' }) {
  const items = Array.isArray(children) ? children : [children];
  const extra = items.length - max;
  return (
    <div className="flex -space-x-2">
      {items.slice(0, max)}
      {extra > 0 && (
        <span className={cn('inline-flex items-center justify-center rounded-full bg-slate-200 font-semibold text-slate-700 ring-2 ring-white', sizes[size])}>
          +{extra}
        </span>
      )}
    </div>
  );
}

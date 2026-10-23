import { useState } from 'react';
import { cn } from '../../lib/cn';

const range = (start, end) => Array.from({ length: end - start + 1 }, (_, i) => start + i);

function pageList(page, total, siblings) {
  const totalSlots = siblings * 2 + 5;
  if (total <= totalSlots) return range(1, total);
  const left = Math.max(page - siblings, 1);
  const right = Math.min(page + siblings, total);
  const showLeftDots = left > 2;
  const showRightDots = right < total - 1;
  if (!showLeftDots) return [...range(1, 3 + siblings * 2), '…', total];
  if (!showRightDots) return [1, '…', ...range(total - (2 + siblings * 2), total)];
  return [1, '…', ...range(left, right), '…', total];
}

const itemVariants = {
  default: (active) => (active ? 'bg-brand-600 text-white' : 'text-slate-600 hover:bg-slate-100'),
  outline: (active) => (active ? 'border-brand-600 bg-brand-50 text-brand-700' : 'border-slate-300 text-slate-600 hover:bg-slate-50'),
  ghost: (active) => (active ? 'text-brand-700 underline underline-offset-4 decoration-2' : 'text-slate-500 hover:text-slate-900'),
};

const sizes = { sm: 'h-8 min-w-8 text-xs', md: 'h-10 min-w-10 text-sm', lg: 'h-12 min-w-12 text-base' };

const Arrow = ({ dir }) => (
  <svg className={cn('size-4', dir === 'left' && 'rotate-180')} viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
    <path fillRule="evenodd" d="M7.21 14.77a.75.75 0 0 1 .02-1.06L11.17 10 7.23 6.29a.75.75 0 1 1 1.04-1.08l4.5 4.25a.75.75 0 0 1 0 1.08l-4.5 4.25a.75.75 0 0 1-1.06-.02Z" clipRule="evenodd" />
  </svg>
);

/**
 * variant: "default" | "outline" | "ghost" | "simple" (prev / "Page x of y" / next)
 */
export function Pagination({ total = 10, page, defaultPage = 1, onChange, siblings = 1, variant = 'default', size = 'md', className }) {
  const [internal, setInternal] = useState(defaultPage);
  const current = page ?? internal;

  const go = (p) => {
    if (p < 1 || p > total || p === current) return;
    setInternal(p);
    onChange?.(p);
  };

  const base = cn(
    'inline-flex items-center justify-center gap-1 rounded-lg px-2 font-medium transition',
    'focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-500 disabled:cursor-not-allowed disabled:opacity-40',
    sizes[size],
    variant === 'outline' && 'border',
  );
  const navBtn = cn(base, itemVariants[variant === 'simple' ? 'outline' : variant](false), variant === 'simple' && 'border px-3');

  return (
    <nav aria-label="Pagination" className={cn('flex items-center gap-1', className)}>
      <button type="button" className={navBtn} disabled={current === 1} onClick={() => go(current - 1)} aria-label="Previous page">
        <Arrow dir="left" />
        {variant === 'simple' && 'Previous'}
      </button>

      {variant === 'simple' ? (
        <span className="px-3 text-sm text-slate-600">
          Page <span className="font-semibold text-slate-900">{current}</span> of {total}
        </span>
      ) : (
        pageList(current, total, siblings).map((p, i) =>
          p === '…' ? (
            <span key={`dots${i}`} className={cn('inline-flex items-center justify-center text-slate-400', sizes[size])}>…</span>
          ) : (
            <button
              key={p}
              type="button"
              aria-current={p === current ? 'page' : undefined}
              onClick={() => go(p)}
              className={cn(base, itemVariants[variant](p === current))}
            >
              {p}
            </button>
          ),
        )
      )}

      <button type="button" className={navBtn} disabled={current === total} onClick={() => go(current + 1)} aria-label="Next page">
        {variant === 'simple' && 'Next'}
        <Arrow dir="right" />
      </button>
    </nav>
  );
}

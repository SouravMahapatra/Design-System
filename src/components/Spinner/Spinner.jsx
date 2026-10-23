import { cn } from '../../lib/cn';

const tones = {
  brand: 'text-brand-600',
  neutral: 'text-slate-600',
  white: 'text-white',
  success: 'text-emerald-500',
  danger: 'text-red-500',
};

const sizes = { xs: 'size-3', sm: 'size-4', md: 'size-6', lg: 'size-10', xl: 'size-14' };
const dotSizes = { xs: 'size-1', sm: 'size-1.5', md: 'size-2', lg: 'size-3', xl: 'size-4' };

/**
 * variant: "ring" | "dots" | "pulse"
 */
export function Spinner({ variant = 'ring', tone = 'brand', size = 'md', label = 'Loading', className }) {
  return (
    <span role="status" aria-label={label} className={cn('inline-flex items-center justify-center', tones[tone], className)}>
      {variant === 'ring' && (
        <svg className={cn('animate-spin', sizes[size])} viewBox="0 0 24 24" fill="none" aria-hidden="true">
          <circle cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="3" className="opacity-20" />
          <path d="M22 12a10 10 0 0 0-10-10" stroke="currentColor" strokeWidth="3" strokeLinecap="round" />
        </svg>
      )}
      {variant === 'dots' && (
        <span className="flex gap-1">
          {[0, 150, 300].map((delay) => (
            <span key={delay} className={cn('animate-bounce rounded-full bg-current', dotSizes[size])} style={{ animationDelay: `${delay}ms` }} />
          ))}
        </span>
      )}
      {variant === 'pulse' && (
        <span className={cn('relative inline-flex', sizes[size])}>
          <span className="absolute inset-0 animate-ping rounded-full bg-current opacity-60" />
          <span className="relative inline-flex size-full rounded-full bg-current" />
        </span>
      )}
    </span>
  );
}

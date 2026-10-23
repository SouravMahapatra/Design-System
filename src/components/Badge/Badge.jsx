import { cn } from '../../lib/cn';

const tones = {
  neutral: { solid: 'bg-slate-700 text-white', soft: 'bg-slate-100 text-slate-700', outline: 'border-slate-300 text-slate-700', dot: 'bg-slate-500' },
  brand: { solid: 'bg-brand-600 text-white', soft: 'bg-brand-50 text-brand-700', outline: 'border-brand-300 text-brand-700', dot: 'bg-brand-500' },
  success: { solid: 'bg-emerald-600 text-white', soft: 'bg-emerald-50 text-emerald-700', outline: 'border-emerald-300 text-emerald-700', dot: 'bg-emerald-500' },
  warning: { solid: 'bg-amber-500 text-white', soft: 'bg-amber-50 text-amber-800', outline: 'border-amber-300 text-amber-800', dot: 'bg-amber-500' },
  danger: { solid: 'bg-red-600 text-white', soft: 'bg-red-50 text-red-700', outline: 'border-red-300 text-red-700', dot: 'bg-red-500' },
};

const sizes = {
  sm: 'h-5 px-2 text-[11px]',
  md: 'h-6 px-2.5 text-xs',
  lg: 'h-7 px-3 text-sm',
};

export function Badge({ variant = 'soft', tone = 'neutral', size = 'md', dot = false, className, children, ...props }) {
  return (
    <span
      className={cn(
        'inline-flex items-center gap-1.5 rounded-full font-medium whitespace-nowrap',
        variant === 'outline' ? cn('border bg-white', tones[tone].outline) : tones[tone][variant],
        sizes[size],
        className,
      )}
      {...props}
    >
      {dot && <span className={cn('size-1.5 rounded-full', variant === 'solid' ? 'bg-white' : tones[tone].dot)} />}
      {children}
    </span>
  );
}

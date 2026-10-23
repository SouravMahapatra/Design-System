import { cn } from '../../lib/cn';

const variants = {
  elevated: 'bg-white shadow-md shadow-slate-200/70 border border-slate-100',
  outlined: 'bg-white border border-slate-200',
  filled: 'bg-slate-50 border border-transparent',
  interactive: 'bg-white border border-slate-200 transition hover:-translate-y-0.5 hover:border-brand-300 hover:shadow-lg cursor-pointer',
};

const paddings = { none: '', sm: 'p-4', md: 'p-6', lg: 'p-8' };

export function Card({ variant = 'elevated', padding = 'md', className, children, ...props }) {
  return (
    <div className={cn('w-80 overflow-hidden rounded-xl', variants[variant], paddings[padding], className)} {...props}>
      {children}
    </div>
  );
}

export function CardHeader({ title, subtitle, className }) {
  return (
    <div className={cn('mb-4', className)}>
      <h3 className="text-base font-semibold text-slate-900">{title}</h3>
      {subtitle && <p className="mt-1 text-sm text-slate-500">{subtitle}</p>}
    </div>
  );
}

export function CardFooter({ className, children }) {
  return <div className={cn('mt-6 flex items-center justify-end gap-2', className)}>{children}</div>;
}

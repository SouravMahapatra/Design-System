import { cn } from '../../lib/cn';

const tones = {
  info: { soft: 'bg-brand-50 border-brand-200 text-brand-900', solid: 'bg-brand-600 border-brand-600 text-white', accent: 'border-l-brand-500', icon: 'M10 18a8 8 0 1 0 0-16 8 8 0 0 0 0 16Zm.75-11.25a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0ZM9.25 9h1.5v5h-1.5V9Z' },
  success: { soft: 'bg-emerald-50 border-emerald-200 text-emerald-900', solid: 'bg-emerald-600 border-emerald-600 text-white', accent: 'border-l-emerald-500', icon: 'M10 18a8 8 0 1 0 0-16 8 8 0 0 0 0 16Zm3.86-9.86-4.5 4.5a.75.75 0 0 1-1.06 0l-2-2 1.06-1.06 1.47 1.47 3.97-3.97 1.06 1.06Z' },
  warning: { soft: 'bg-amber-50 border-amber-200 text-amber-900', solid: 'bg-amber-500 border-amber-500 text-white', accent: 'border-l-amber-500', icon: 'M8.48 2.88a1.75 1.75 0 0 1 3.04 0l6.25 11.12A1.75 1.75 0 0 1 16.25 16.6H3.75a1.75 1.75 0 0 1-1.52-2.6L8.48 2.88ZM9.25 7v4h1.5V7h-1.5Zm.75 7a.9.9 0 1 0 0-1.8.9.9 0 0 0 0 1.8Z' },
  danger: { soft: 'bg-red-50 border-red-200 text-red-900', solid: 'bg-red-600 border-red-600 text-white', accent: 'border-l-red-500', icon: 'M10 18a8 8 0 1 0 0-16 8 8 0 0 0 0 16ZM7.53 6.47 10 8.94l2.47-2.47 1.06 1.06L11.06 10l2.47 2.47-1.06 1.06L10 11.06l-2.47 2.47-1.06-1.06L8.94 10 6.47 7.53l1.06-1.06Z' },
};

export function Alert({ variant = 'soft', tone = 'info', title, onClose, action, className, children }) {
  const t = tones[tone];
  return (
    <div
      role="alert"
      className={cn(
        'flex w-[28rem] max-w-full gap-3 rounded-lg border p-4 text-sm',
        variant === 'solid' && t.solid,
        variant === 'soft' && t.soft,
        variant === 'accent' && cn('rounded-l-none border-l-4 border-y-slate-200 border-r-slate-200 bg-white text-slate-800', t.accent),
        className,
      )}
    >
      <svg className="mt-0.5 size-5 shrink-0" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
        <path fillRule="evenodd" clipRule="evenodd" d={t.icon} />
      </svg>
      <div className="flex-1">
        {title && <p className="font-semibold">{title}</p>}
        {children && <div className={cn(title && 'mt-1', 'opacity-90')}>{children}</div>}
        {action && <div className="mt-3">{action}</div>}
      </div>
      {onClose && (
        <button type="button" onClick={onClose} aria-label="Dismiss" className="-m-1 h-fit rounded p-1 opacity-70 hover:opacity-100">
          <svg className="size-4" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
            <path d="M6.28 5.22a.75.75 0 0 0-1.06 1.06L8.94 10l-3.72 3.72a.75.75 0 1 0 1.06 1.06L10 11.06l3.72 3.72a.75.75 0 1 0 1.06-1.06L11.06 10l3.72-3.72a.75.75 0 0 0-1.06-1.06L10 8.94 6.28 5.22Z" />
          </svg>
        </button>
      )}
    </div>
  );
}

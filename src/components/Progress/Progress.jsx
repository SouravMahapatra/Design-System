import { cn } from '../../lib/cn';

const tones = {
  brand: { bar: 'bg-brand-600', stroke: 'stroke-brand-600' },
  success: { bar: 'bg-emerald-500', stroke: 'stroke-emerald-500' },
  warning: { bar: 'bg-amber-500', stroke: 'stroke-amber-500' },
  danger: { bar: 'bg-red-500', stroke: 'stroke-red-500' },
};

const barSizes = { sm: 'h-1.5', md: 'h-2.5', lg: 'h-4' };
const circleSizes = { sm: 48, md: 72, lg: 104 };

/**
 * variant: "bar" | "striped" | "circle"
 * indeterminate only applies to the bar variants.
 */
export function Progress({
  value = 0,
  max = 100,
  variant = 'bar',
  tone = 'brand',
  size = 'md',
  label,
  showValue = false,
  indeterminate = false,
  className,
}) {
  const pct = Math.min(100, Math.max(0, (value / max) * 100));
  const t = tones[tone];

  if (variant === 'circle') {
    const d = circleSizes[size];
    const stroke = d / 10;
    const r = (d - stroke) / 2;
    const c = 2 * Math.PI * r;
    return (
      <div className={cn('inline-flex flex-col items-center gap-2', className)}>
        <div className="relative" style={{ width: d, height: d }}>
          <svg width={d} height={d} className="-rotate-90" role="progressbar" aria-valuenow={value} aria-valuemin={0} aria-valuemax={max}>
            <circle cx={d / 2} cy={d / 2} r={r} fill="none" strokeWidth={stroke} className="stroke-slate-200" />
            <circle
              cx={d / 2}
              cy={d / 2}
              r={r}
              fill="none"
              strokeWidth={stroke}
              strokeLinecap="round"
              strokeDasharray={c}
              strokeDashoffset={c - (pct / 100) * c}
              className={cn('transition-[stroke-dashoffset] duration-500', t.stroke)}
            />
          </svg>
          {showValue && (
            <span className={cn('absolute inset-0 flex items-center justify-center font-semibold text-slate-800', size === 'sm' ? 'text-[11px]' : size === 'md' ? 'text-sm' : 'text-lg')}>
              {Math.round(pct)}%
            </span>
          )}
        </div>
        {label && <span className="text-sm text-slate-600">{label}</span>}
      </div>
    );
  }

  return (
    <div className={cn('w-80 max-w-full', className)}>
      {(label || showValue) && (
        <div className="mb-1.5 flex justify-between text-sm">
          <span className="font-medium text-slate-700">{label}</span>
          {showValue && !indeterminate && <span className="tabular-nums text-slate-500">{Math.round(pct)}%</span>}
        </div>
      )}
      <div
        role="progressbar"
        aria-valuenow={indeterminate ? undefined : value}
        aria-valuemin={0}
        aria-valuemax={max}
        className={cn('relative w-full overflow-hidden rounded-full bg-slate-200', barSizes[size])}
      >
        <div
          className={cn(
            'h-full rounded-full transition-[width] duration-500',
            t.bar,
            variant === 'striped' && 'ds-progress-striped',
            indeterminate && 'ds-progress-indeterminate absolute w-1/3',
          )}
          style={indeterminate ? undefined : { width: `${pct}%` }}
        />
      </div>
    </div>
  );
}

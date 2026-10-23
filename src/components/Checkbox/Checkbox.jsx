import { useEffect, useId, useRef } from 'react';
import { cn } from '../../lib/cn';

const tones = {
  brand: 'checked:bg-brand-600 checked:border-brand-600 indeterminate:bg-brand-600 indeterminate:border-brand-600 focus-visible:ring-brand-500/30',
  success: 'checked:bg-emerald-600 checked:border-emerald-600 indeterminate:bg-emerald-600 indeterminate:border-emerald-600 focus-visible:ring-emerald-500/30',
  danger: 'checked:bg-red-600 checked:border-red-600 indeterminate:bg-red-600 indeterminate:border-red-600 focus-visible:ring-red-500/30',
};

const sizes = { sm: 'size-4', md: 'size-5', lg: 'size-6' };
const labelSizes = { sm: 'text-sm', md: 'text-sm', lg: 'text-base' };

export function Checkbox({
  variant = 'default',
  tone = 'brand',
  size = 'md',
  label,
  description,
  indeterminate = false,
  disabled,
  className,
  id,
  ...props
}) {
  const autoId = useId();
  const inputId = id ?? autoId;
  const ref = useRef(null);

  useEffect(() => {
    if (ref.current) ref.current.indeterminate = indeterminate;
  }, [indeterminate]);

  const control = (
    <span className="relative inline-flex shrink-0">
      <input
        ref={ref}
        id={inputId}
        type="checkbox"
        disabled={disabled}
        className={cn(
          'peer cursor-pointer appearance-none border-2 border-slate-300 bg-white transition',
          'focus-visible:outline-none focus-visible:ring-4 disabled:cursor-not-allowed disabled:opacity-50',
          variant === 'rounded' ? 'rounded-full' : 'rounded',
          tones[tone],
          sizes[size],
        )}
        {...props}
      />
      <svg className="pointer-events-none absolute inset-0 m-auto hidden size-3/4 text-white peer-checked:block peer-indeterminate:hidden" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
        <path fillRule="evenodd" d="M16.7 5.3a1 1 0 0 1 0 1.4l-8 8a1 1 0 0 1-1.4 0l-4-4a1 1 0 1 1 1.4-1.4L8 12.58l7.3-7.3a1 1 0 0 1 1.4 0Z" clipRule="evenodd" />
      </svg>
      <svg className="pointer-events-none absolute inset-0 m-auto hidden size-3/4 text-white peer-indeterminate:block" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
        <rect x="4" y="9" width="12" height="2" rx="1" />
      </svg>
    </span>
  );

  return (
    <label
      htmlFor={inputId}
      className={cn(
        'inline-flex cursor-pointer items-start gap-3',
        variant === 'card' && 'w-72 rounded-lg border border-slate-200 p-4 transition hover:bg-slate-50 has-[:checked]:border-brand-500 has-[:checked]:bg-brand-50',
        disabled && 'cursor-not-allowed opacity-60',
        className,
      )}
    >
      {control}
      {(label || description) && (
        <span className="flex flex-col">
          {label && <span className={cn('font-medium text-slate-800', labelSizes[size])}>{label}</span>}
          {description && <span className="text-xs text-slate-500">{description}</span>}
        </span>
      )}
    </label>
  );
}

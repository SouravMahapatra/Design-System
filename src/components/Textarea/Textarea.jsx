import { useId, useState } from 'react';
import { cn } from '../../lib/cn';

const variants = {
  outline: 'border border-slate-300 bg-white focus:border-brand-500 focus:ring-brand-500/20',
  filled: 'border border-transparent bg-slate-100 focus:bg-white focus:border-brand-500 focus:ring-brand-500/20',
  ghost: 'border border-transparent bg-transparent hover:bg-slate-50 focus:bg-white focus:border-slate-300 focus:ring-slate-200',
};

const resizeModes = { none: 'resize-none', vertical: 'resize-y', both: 'resize' };

export function Textarea({
  variant = 'outline',
  resize = 'vertical',
  rows = 4,
  label,
  helperText,
  error,
  maxLength,
  showCount = false,
  disabled,
  defaultValue = '',
  onChange,
  className,
  id,
  ...props
}) {
  const autoId = useId();
  const inputId = id ?? autoId;
  const [length, setLength] = useState(String(props.value ?? defaultValue).length);

  return (
    <div className={cn('flex w-96 max-w-full flex-col gap-1.5', className)}>
      {label && (
        <label htmlFor={inputId} className="text-sm font-medium text-slate-700">
          {label}
        </label>
      )}
      <textarea
        id={inputId}
        rows={rows}
        disabled={disabled}
        maxLength={maxLength}
        defaultValue={props.value === undefined ? defaultValue : undefined}
        aria-invalid={!!error}
        onChange={(e) => {
          setLength(e.target.value.length);
          onChange?.(e);
        }}
        className={cn(
          'w-full rounded-lg px-3 py-2 text-sm text-slate-900 placeholder:text-slate-400 outline-none transition focus:ring-4',
          'disabled:cursor-not-allowed disabled:opacity-50',
          variants[variant],
          resizeModes[resize],
          error && '!border-red-500 focus:!ring-red-500/20',
        )}
        {...props}
      />
      {(error || helperText || showCount) && (
        <div className="flex justify-between gap-4 text-xs">
          <p className={error ? 'text-red-600' : 'text-slate-500'}>{error || helperText}</p>
          {showCount && (
            <span className={cn('tabular-nums', maxLength && length >= maxLength ? 'text-red-600' : 'text-slate-400')}>
              {length}{maxLength ? ` / ${maxLength}` : ''}
            </span>
          )}
        </div>
      )}
    </div>
  );
}

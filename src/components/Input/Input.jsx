import { useId } from 'react';
import { cn } from '../../lib/cn';

const variants = {
  outline: 'border border-slate-300 bg-white focus:border-brand-500 focus:ring-brand-500/20',
  filled: 'border border-transparent bg-slate-100 focus:bg-white focus:border-brand-500 focus:ring-brand-500/20',
  underline: 'rounded-none border-0 border-b-2 border-slate-300 bg-transparent px-0 focus:border-brand-600 focus:ring-0',
};

const sizes = {
  sm: 'h-8 text-sm',
  md: 'h-10 text-sm',
  lg: 'h-12 text-base',
};

export function Input({
  variant = 'outline',
  size = 'md',
  label,
  helperText,
  error,
  leftIcon,
  disabled,
  className,
  id,
  ...props
}) {
  const autoId = useId();
  const inputId = id ?? autoId;

  return (
    <div className={cn('flex w-72 flex-col gap-1.5', className)}>
      {label && (
        <label htmlFor={inputId} className="text-sm font-medium text-slate-700">
          {label}
        </label>
      )}
      <div className="relative">
        {leftIcon && (
          <span className="pointer-events-none absolute inset-y-0 left-3 flex items-center text-slate-400">
            {leftIcon}
          </span>
        )}
        <input
          id={inputId}
          disabled={disabled}
          aria-invalid={!!error}
          className={cn(
            'w-full rounded-lg px-3 text-slate-900 placeholder:text-slate-400 outline-none transition focus:ring-4',
            'disabled:cursor-not-allowed disabled:opacity-50',
            variants[variant],
            sizes[size],
            leftIcon && variant !== 'underline' && 'pl-9',
            leftIcon && variant === 'underline' && 'pl-7',
            error && '!border-red-500 focus:!ring-red-500/20',
          )}
          {...props}
        />
      </div>
      {(error || helperText) && (
        <p className={cn('text-xs', error ? 'text-red-600' : 'text-slate-500')}>{error || helperText}</p>
      )}
    </div>
  );
}

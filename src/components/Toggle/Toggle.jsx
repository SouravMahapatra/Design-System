import { useId, useState } from 'react';
import { cn } from '../../lib/cn';

const tones = {
  brand: 'bg-brand-600',
  success: 'bg-emerald-500',
  danger: 'bg-red-500',
  neutral: 'bg-slate-800',
};

const sizes = {
  sm: { track: 'h-5 w-9', thumb: 'size-4', on: 'translate-x-4' },
  md: { track: 'h-6 w-11', thumb: 'size-5', on: 'translate-x-5' },
  lg: { track: 'h-7 w-14', thumb: 'size-6', on: 'translate-x-7' },
};

export function Toggle({
  checked,
  defaultChecked = false,
  onChange,
  tone = 'brand',
  size = 'md',
  label,
  description,
  labelPosition = 'right',
  showIcons = false,
  disabled = false,
  className,
}) {
  const id = useId();
  const [internal, setInternal] = useState(defaultChecked);
  const on = checked !== undefined ? checked : internal;
  const s = sizes[size];

  const toggle = () => {
    setInternal(!on);
    onChange?.(!on);
  };

  return (
    <div className={cn('inline-flex items-center gap-3', labelPosition === 'left' && 'flex-row-reverse', className)}>
      <button
        id={id}
        type="button"
        role="switch"
        aria-checked={on}
        disabled={disabled}
        onClick={toggle}
        className={cn(
          'relative inline-flex shrink-0 cursor-pointer items-center rounded-full p-0.5 transition-colors',
          'focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-brand-500/30',
          'disabled:cursor-not-allowed disabled:opacity-50',
          on ? tones[tone] : 'bg-slate-300',
          s.track,
        )}
      >
        <span
          className={cn(
            'flex items-center justify-center rounded-full bg-white shadow transition-transform',
            s.thumb,
            on ? s.on : 'translate-x-0',
          )}
        >
          {showIcons &&
            (on ? (
              <svg className="size-3 text-slate-700" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                <path fillRule="evenodd" d="M16.7 5.3a1 1 0 0 1 0 1.4l-8 8a1 1 0 0 1-1.4 0l-4-4a1 1 0 1 1 1.4-1.4L8 12.58l7.3-7.3a1 1 0 0 1 1.4 0Z" clipRule="evenodd" />
              </svg>
            ) : (
              <svg className="size-3 text-slate-400" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                <path d="M6.28 5.22a.75.75 0 0 0-1.06 1.06L8.94 10l-3.72 3.72a.75.75 0 1 0 1.06 1.06L10 11.06l3.72 3.72a.75.75 0 1 0 1.06-1.06L11.06 10l3.72-3.72a.75.75 0 0 0-1.06-1.06L10 8.94 6.28 5.22Z" />
              </svg>
            ))}
        </span>
      </button>
      {(label || description) && (
        <label htmlFor={id} className="flex cursor-pointer flex-col">
          {label && <span className="text-sm font-medium text-slate-800">{label}</span>}
          {description && <span className="text-xs text-slate-500">{description}</span>}
        </label>
      )}
    </div>
  );
}

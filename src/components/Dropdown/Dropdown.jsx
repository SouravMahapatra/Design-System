import { useEffect, useRef, useState } from 'react';
import { cn } from '../../lib/cn';

const triggerVariants = {
  outline: 'border border-slate-300 bg-white hover:border-slate-400',
  filled: 'border border-transparent bg-slate-100 hover:bg-slate-200',
  ghost: 'border border-transparent bg-transparent hover:bg-slate-100',
};

const sizes = {
  sm: 'h-8 px-2.5 text-sm',
  md: 'h-10 px-3 text-sm',
  lg: 'h-12 px-4 text-base',
};

function Chevron({ open }) {
  return (
    <svg className={cn('size-4 text-slate-500 transition-transform', open && 'rotate-180')} viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
      <path fillRule="evenodd" d="M5.23 7.21a.75.75 0 0 1 1.06.02L10 11.17l3.71-3.94a.75.75 0 1 1 1.08 1.04l-4.25 4.5a.75.75 0 0 1-1.08 0l-4.25-4.5a.75.75 0 0 1 .02-1.06Z" clipRule="evenodd" />
    </svg>
  );
}

function Check() {
  return (
    <svg className="size-4 text-brand-600" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
      <path fillRule="evenodd" d="M16.7 5.3a1 1 0 0 1 0 1.4l-8 8a1 1 0 0 1-1.4 0l-4-4a1 1 0 1 1 1.4-1.4L8 12.58l7.3-7.3a1 1 0 0 1 1.4 0Z" clipRule="evenodd" />
    </svg>
  );
}

/**
 * Select-style dropdown. Set `multiple` to allow several selections.
 * options: [{ value, label, description?, disabled? }]
 */
export function Dropdown({
  options = [],
  value,
  defaultValue,
  onChange,
  multiple = false,
  variant = 'outline',
  size = 'md',
  placeholder = 'Select an option',
  label,
  disabled = false,
  className,
}) {
  const [open, setOpen] = useState(false);
  const [internal, setInternal] = useState(defaultValue ?? (multiple ? [] : null));
  const selected = value !== undefined ? value : internal;
  const ref = useRef(null);

  useEffect(() => {
    const onClick = (e) => ref.current && !ref.current.contains(e.target) && setOpen(false);
    const onKey = (e) => e.key === 'Escape' && setOpen(false);
    document.addEventListener('mousedown', onClick);
    document.addEventListener('keydown', onKey);
    return () => {
      document.removeEventListener('mousedown', onClick);
      document.removeEventListener('keydown', onKey);
    };
  }, []);

  const isSelected = (v) => (multiple ? selected?.includes(v) : selected === v);

  const select = (v) => {
    let next;
    if (multiple) {
      next = selected.includes(v) ? selected.filter((x) => x !== v) : [...selected, v];
    } else {
      next = v;
      setOpen(false);
    }
    setInternal(next);
    onChange?.(next);
  };

  const display = multiple
    ? selected.length
      ? options.filter((o) => selected.includes(o.value)).map((o) => o.label).join(', ')
      : null
    : options.find((o) => o.value === selected)?.label;

  return (
    <div ref={ref} className={cn('relative w-64', className)}>
      {label && <span className="mb-1.5 block text-sm font-medium text-slate-700">{label}</span>}
      <button
        type="button"
        disabled={disabled}
        aria-haspopup="listbox"
        aria-expanded={open}
        onClick={() => setOpen((o) => !o)}
        className={cn(
          'flex w-full items-center justify-between gap-2 rounded-lg text-left transition',
          'focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-brand-500/20',
          'disabled:cursor-not-allowed disabled:opacity-50',
          triggerVariants[variant],
          sizes[size],
          open && 'border-brand-500',
        )}
      >
        <span className={cn('truncate', !display && 'text-slate-400')}>{display ?? placeholder}</span>
        <Chevron open={open} />
      </button>

      {open && (
        <ul
          role="listbox"
          aria-multiselectable={multiple || undefined}
          className="absolute z-20 mt-1.5 max-h-64 w-full overflow-auto rounded-lg border border-slate-200 bg-white p-1 shadow-lg"
        >
          {options.map((o) => (
            <li
              key={o.value}
              role="option"
              aria-selected={isSelected(o.value)}
              aria-disabled={o.disabled}
              onClick={() => !o.disabled && select(o.value)}
              className={cn(
                'flex cursor-pointer items-center justify-between gap-2 rounded-md px-2.5 py-2 text-sm text-slate-700',
                'hover:bg-slate-100',
                isSelected(o.value) && 'bg-brand-50 text-brand-700 hover:bg-brand-50',
                o.disabled && 'cursor-not-allowed opacity-40 hover:bg-transparent',
              )}
            >
              <span>
                <span className="block">{o.label}</span>
                {o.description && <span className="block text-xs text-slate-500">{o.description}</span>}
              </span>
              {isSelected(o.value) && <Check />}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}

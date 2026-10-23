import { useId, useState } from 'react';
import { cn } from '../../lib/cn';

const sizes = { sm: 'size-4', md: 'size-5', lg: 'size-6' };

/**
 * variant: "default" (classic radios) | "card" (selectable tiles) | "button" (segmented buttons)
 * options: [{ value, label, description?, disabled? }]
 */
export function RadioGroup({
  options = [],
  value,
  defaultValue,
  onChange,
  variant = 'default',
  size = 'md',
  orientation = 'vertical',
  label,
  name,
  className,
}) {
  const autoName = useId();
  const groupName = name ?? autoName;
  const [internal, setInternal] = useState(defaultValue);
  const selected = value !== undefined ? value : internal;

  const select = (v) => {
    setInternal(v);
    onChange?.(v);
  };

  return (
    <fieldset className={className}>
      {label && <legend className="mb-3 text-sm font-medium text-slate-800">{label}</legend>}
      <div
        className={cn(
          'flex',
          orientation === 'vertical' ? 'flex-col' : 'flex-row flex-wrap',
          variant === 'default' && 'gap-3',
          variant === 'card' && 'gap-3',
          variant === 'button' && 'inline-flex flex-row rounded-lg border border-slate-300 p-1 gap-1',
        )}
      >
        {options.map((o) => {
          const checked = selected === o.value;
          const input = (
            <input
              type="radio"
              name={groupName}
              value={o.value}
              checked={checked}
              disabled={o.disabled}
              onChange={() => select(o.value)}
              className={cn(
                variant === 'button'
                  ? 'sr-only'
                  : cn(
                      'shrink-0 cursor-pointer appearance-none rounded-full border-2 border-slate-300 bg-white transition',
                      'checked:border-[6px] checked:border-brand-600 focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-brand-500/30',
                      'disabled:cursor-not-allowed',
                      sizes[size],
                      size === 'sm' && 'checked:border-[5px]',
                      size === 'lg' && 'checked:border-[7px]',
                    ),
              )}
            />
          );

          if (variant === 'button') {
            return (
              <label
                key={o.value}
                className={cn(
                  'cursor-pointer rounded-md px-4 py-1.5 text-sm font-medium transition has-[:focus-visible]:ring-2 has-[:focus-visible]:ring-brand-500',
                  checked ? 'bg-brand-600 text-white' : 'text-slate-600 hover:bg-slate-100',
                  o.disabled && 'cursor-not-allowed opacity-40',
                )}
              >
                {input}
                {o.label}
              </label>
            );
          }

          return (
            <label
              key={o.value}
              className={cn(
                'flex cursor-pointer items-start gap-3',
                variant === 'card' && cn('w-64 rounded-lg border p-4 transition', checked ? 'border-brand-500 bg-brand-50 ring-1 ring-brand-500' : 'border-slate-200 hover:bg-slate-50'),
                o.disabled && 'cursor-not-allowed opacity-50',
              )}
            >
              {input}
              <span className="flex flex-col">
                <span className={cn('font-medium text-slate-800', size === 'lg' ? 'text-base' : 'text-sm')}>{o.label}</span>
                {o.description && <span className="text-xs text-slate-500">{o.description}</span>}
              </span>
            </label>
          );
        })}
      </div>
    </fieldset>
  );
}

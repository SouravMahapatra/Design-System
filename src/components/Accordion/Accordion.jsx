import { useState } from 'react';
import { cn } from '../../lib/cn';

const containers = {
  default: 'divide-y divide-slate-200 border-y border-slate-200',
  bordered: 'divide-y divide-slate-200 rounded-xl border border-slate-200',
  separated: 'flex flex-col gap-3',
};

const itemStyles = {
  default: '',
  bordered: '',
  separated: 'rounded-xl border border-slate-200 bg-white shadow-sm',
};

/**
 * items: [{ id, title, content, disabled? }]
 * multiple: allow several panels open at once
 */
export function Accordion({ items = [], variant = 'default', multiple = false, defaultOpen = [], className }) {
  const [open, setOpen] = useState(defaultOpen);

  const toggle = (id) =>
    setOpen((cur) => (cur.includes(id) ? cur.filter((x) => x !== id) : multiple ? [...cur, id] : [id]));

  return (
    <div className={cn('w-[32rem] max-w-full', containers[variant], className)}>
      {items.map((item) => {
        const isOpen = open.includes(item.id);
        return (
          <div key={item.id} className={itemStyles[variant]}>
            <button
              type="button"
              aria-expanded={isOpen}
              disabled={item.disabled}
              onClick={() => toggle(item.id)}
              className={cn(
                'flex w-full items-center justify-between gap-4 py-4 text-left text-sm font-medium text-slate-900',
                'focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-500 disabled:cursor-not-allowed disabled:opacity-40',
                variant !== 'default' && 'px-5',
              )}
            >
              {item.title}
              <svg className={cn('size-4 shrink-0 text-slate-500 transition-transform', isOpen && 'rotate-180')} viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                <path fillRule="evenodd" d="M5.23 7.21a.75.75 0 0 1 1.06.02L10 11.17l3.71-3.94a.75.75 0 1 1 1.08 1.04l-4.25 4.5a.75.75 0 0 1-1.08 0l-4.25-4.5a.75.75 0 0 1 .02-1.06Z" clipRule="evenodd" />
              </svg>
            </button>
            <div className={cn('grid transition-all', isOpen ? 'grid-rows-[1fr]' : 'grid-rows-[0fr]')}>
              <div className="overflow-hidden">
                <div className={cn('pb-4 text-sm text-slate-600', variant !== 'default' && 'px-5')}>{item.content}</div>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
}

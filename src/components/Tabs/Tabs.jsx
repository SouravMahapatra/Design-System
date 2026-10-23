import { useState } from 'react';
import { cn } from '../../lib/cn';

const listStyles = {
  underline: 'gap-6 border-b border-slate-200',
  pills: 'gap-2',
  segmented: 'gap-1 rounded-lg bg-slate-100 p-1',
};

const tabStyles = {
  underline: (active) =>
    cn('-mb-px border-b-2 pb-3', active ? 'border-brand-600 text-brand-700' : 'border-transparent text-slate-500 hover:text-slate-800 hover:border-slate-300'),
  pills: (active) =>
    cn('rounded-full px-4 py-1.5', active ? 'bg-brand-600 text-white' : 'text-slate-600 hover:bg-slate-100'),
  segmented: (active) =>
    cn('flex-1 rounded-md px-4 py-1.5', active ? 'bg-white text-slate-900 shadow-sm' : 'text-slate-600 hover:text-slate-900'),
};

const sizes = { sm: 'text-xs', md: 'text-sm', lg: 'text-base' };

/**
 * tabs: [{ id, label, content, count?, disabled? }]
 */
export function Tabs({ tabs = [], defaultTab, variant = 'underline', size = 'md', onChange, className }) {
  const [active, setActive] = useState(defaultTab ?? tabs[0]?.id);
  const current = tabs.find((t) => t.id === active);

  const select = (id) => {
    setActive(id);
    onChange?.(id);
  };

  return (
    <div className={cn('w-[32rem] max-w-full', className)}>
      <div role="tablist" className={cn('flex', listStyles[variant])}>
        {tabs.map((t) => (
          <button
            key={t.id}
            type="button"
            role="tab"
            aria-selected={t.id === active}
            disabled={t.disabled}
            onClick={() => select(t.id)}
            className={cn(
              'inline-flex items-center justify-center gap-2 font-medium transition',
              'focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-500',
              'disabled:cursor-not-allowed disabled:opacity-40',
              sizes[size],
              tabStyles[variant](t.id === active),
            )}
          >
            {t.label}
            {t.count !== undefined && (
              <span className={cn('rounded-full px-1.5 text-[11px]', t.id === active && variant === 'pills' ? 'bg-white/20' : 'bg-slate-200 text-slate-600')}>
                {t.count}
              </span>
            )}
          </button>
        ))}
      </div>
      {current?.content && (
        <div role="tabpanel" className="pt-4 text-sm text-slate-600">
          {current.content}
        </div>
      )}
    </div>
  );
}

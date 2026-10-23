import { Fragment } from 'react';
import { cn } from '../../lib/cn';

function Separator({ type }) {
  if (type === 'slash') return <span className="text-slate-300">/</span>;
  if (type === 'dot') return <span className="text-slate-300">•</span>;
  return (
    <svg className="size-4 text-slate-400" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
      <path fillRule="evenodd" d="M7.21 14.77a.75.75 0 0 1 .02-1.06L11.17 10 7.23 6.29a.75.75 0 1 1 1.04-1.08l4.5 4.25a.75.75 0 0 1 0 1.08l-4.5 4.25a.75.75 0 0 1-1.06-.02Z" clipRule="evenodd" />
    </svg>
  );
}

const Home = () => (
  <svg className="size-4" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
    <path fillRule="evenodd" d="M9.29 2.29a1 1 0 0 1 1.42 0l7 7A1 1 0 0 1 17 11h-1v6a1 1 0 0 1-1 1h-3v-4H8v4H5a1 1 0 0 1-1-1v-6H3a1 1 0 0 1-.71-1.71l7-7Z" clipRule="evenodd" />
  </svg>
);

/**
 * items: [{ label, href? }] — the last item is treated as the current page.
 * variant: "default" | "contained" (pill background)
 * separator: "chevron" | "slash" | "dot"
 * maxItems: collapses the middle items into "…" when exceeded
 */
export function Breadcrumb({ items = [], variant = 'default', separator = 'chevron', showHome = false, maxItems, className }) {
  let visible = items.map((item, i) => ({ ...item, index: i }));
  if (maxItems && items.length > maxItems) {
    visible = [visible[0], { label: '…', ellipsis: true }, ...visible.slice(items.length - (maxItems - 1))];
  }

  return (
    <nav aria-label="Breadcrumb" className={className}>
      <ol
        className={cn(
          'flex flex-wrap items-center gap-2 text-sm',
          variant === 'contained' && 'rounded-lg border border-slate-200 bg-slate-50 px-4 py-2',
        )}
      >
        {visible.map((item, i) => {
          const isLast = i === visible.length - 1;
          return (
            <Fragment key={item.index ?? `e${i}`}>
              <li className="inline-flex items-center gap-1.5">
                {i === 0 && showHome && <Home />}
                {item.ellipsis ? (
                  <span className="text-slate-400">…</span>
                ) : isLast ? (
                  <span aria-current="page" className="font-medium text-slate-900">{item.label}</span>
                ) : (
                  <a href={item.href ?? '#'} className="text-slate-500 transition hover:text-brand-600">{item.label}</a>
                )}
              </li>
              {!isLast && (
                <li aria-hidden="true" className="inline-flex">
                  <Separator type={separator} />
                </li>
              )}
            </Fragment>
          );
        })}
      </ol>
    </nav>
  );
}

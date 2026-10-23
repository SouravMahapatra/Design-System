import { useEffect } from 'react';
import { createPortal } from 'react-dom';
import { cn } from '../../lib/cn';

const sizes = {
  sm: 'max-w-sm',
  md: 'max-w-md',
  lg: 'max-w-2xl',
  full: 'max-w-[calc(100vw-2rem)] h-[calc(100vh-2rem)]',
};

const tones = {
  default: null,
  danger: { bg: 'bg-red-100 text-red-600', path: 'M8.48 2.88a1.75 1.75 0 0 1 3.04 0l6.25 11.12A1.75 1.75 0 0 1 16.25 16.6H3.75a1.75 1.75 0 0 1-1.52-2.6L8.48 2.88ZM9.25 7v4h1.5V7h-1.5Zm.75 7a.9.9 0 1 0 0-1.8.9.9 0 0 0 0 1.8Z' },
  success: { bg: 'bg-emerald-100 text-emerald-600', path: 'M10 18a8 8 0 1 0 0-16 8 8 0 0 0 0 16Zm3.86-9.86-4.5 4.5a.75.75 0 0 1-1.06 0l-2-2 1.06-1.06 1.47 1.47 3.97-3.97 1.06 1.06Z' },
};

/**
 * variant: "dialog" (centered) | "drawer" (slides in from the right)
 */
export function Modal({
  open,
  onClose,
  title,
  description,
  variant = 'dialog',
  size = 'md',
  tone = 'default',
  footer,
  closeOnOverlay = true,
  children,
}) {
  useEffect(() => {
    if (!open) return;
    const onKey = (e) => e.key === 'Escape' && onClose?.();
    document.addEventListener('keydown', onKey);
    const prev = document.body.style.overflow;
    document.body.style.overflow = 'hidden';
    return () => {
      document.removeEventListener('keydown', onKey);
      document.body.style.overflow = prev;
    };
  }, [open, onClose]);

  if (!open) return null;
  const icon = tones[tone];

  return createPortal(
    <div className={cn('fixed inset-0 z-50 flex', variant === 'drawer' ? 'justify-end' : 'items-center justify-center p-4')}>
      <div className="absolute inset-0 bg-slate-900/50 backdrop-blur-[2px]" onClick={closeOnOverlay ? onClose : undefined} />
      <div
        role="dialog"
        aria-modal="true"
        aria-labelledby="modal-title"
        className={cn(
          'relative flex w-full flex-col bg-white shadow-2xl',
          variant === 'drawer' ? 'h-full max-w-md' : cn('rounded-xl', sizes[size]),
        )}
      >
        <div className="flex items-start gap-4 border-b border-slate-100 p-6">
          {icon && (
            <span className={cn('flex size-10 shrink-0 items-center justify-center rounded-full', icon.bg)}>
              <svg className="size-5" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                <path fillRule="evenodd" clipRule="evenodd" d={icon.path} />
              </svg>
            </span>
          )}
          <div className="flex-1">
            <h2 id="modal-title" className="text-lg font-semibold text-slate-900">{title}</h2>
            {description && <p className="mt-1 text-sm text-slate-500">{description}</p>}
          </div>
          <button type="button" onClick={onClose} aria-label="Close" className="-m-1 rounded p-1 text-slate-400 hover:bg-slate-100 hover:text-slate-700">
            <svg className="size-5" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
              <path d="M6.28 5.22a.75.75 0 0 0-1.06 1.06L8.94 10l-3.72 3.72a.75.75 0 1 0 1.06 1.06L10 11.06l3.72 3.72a.75.75 0 1 0 1.06-1.06L11.06 10l3.72-3.72a.75.75 0 0 0-1.06-1.06L10 8.94 6.28 5.22Z" />
            </svg>
          </button>
        </div>
        {children && <div className="flex-1 overflow-auto p-6 text-sm text-slate-600">{children}</div>}
        {footer && <div className="flex justify-end gap-2 border-t border-slate-100 bg-slate-50 px-6 py-4 rounded-b-xl">{footer}</div>}
      </div>
    </div>,
    document.body,
  );
}

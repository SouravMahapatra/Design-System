import { cn } from '../../lib/cn';

const shapes = {
  text: 'h-4 rounded',
  rect: 'rounded-lg',
  circle: 'rounded-full',
};

/**
 * variant: "text" | "rect" | "circle"
 * animation: "pulse" | "shimmer" | "none"
 */
export function Skeleton({ variant = 'text', animation = 'pulse', width, height, lines = 1, className }) {
  const base = cn(
    'block bg-slate-200',
    shapes[variant],
    animation === 'pulse' && 'animate-pulse',
    animation === 'shimmer' && 'ds-skeleton-shimmer',
    className,
  );

  if (variant === 'text' && lines > 1) {
    return (
      <span className="flex flex-col gap-2" style={{ width }}>
        {Array.from({ length: lines }, (_, i) => (
          <span key={i} className={base} style={{ width: i === lines - 1 ? '60%' : '100%' }} />
        ))}
      </span>
    );
  }

  return <span aria-hidden="true" className={base} style={{ width, height }} />;
}

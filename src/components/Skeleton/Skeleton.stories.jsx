import { Skeleton } from './Skeleton';

export default {
  title: 'Components/Skeleton',
  component: Skeleton,
  tags: ['autodocs'],
  argTypes: {
    variant: { control: 'inline-radio', options: ['text', 'rect', 'circle'] },
    animation: { control: 'inline-radio', options: ['pulse', 'shimmer', 'none'] },
  },
  args: { variant: 'text', animation: 'pulse', width: 280, lines: 3 },
};

export const Playground = {};
export const Text = {};
export const Rect = { args: { variant: 'rect', width: 280, height: 160 } };
export const Circle = { args: { variant: 'circle', width: 56, height: 56 } };
export const Shimmer = { args: { animation: 'shimmer' } };

export const CardPlaceholder = {
  args: { animation: 'shimmer' },
  render: ({ animation }) => (
    <div className="w-80 rounded-xl border border-slate-200 bg-white p-5">
      <Skeleton variant="rect" animation={animation} width="100%" height={140} />
      <div className="mt-4 flex items-center gap-3">
        <Skeleton variant="circle" animation={animation} width={40} height={40} />
        <div className="flex-1">
          <Skeleton animation={animation} width="70%" />
          <Skeleton animation={animation} width="40%" className="mt-2 h-3" />
        </div>
      </div>
      <div className="mt-4">
        <Skeleton animation={animation} lines={3} />
      </div>
    </div>
  ),
};

export const ListPlaceholder = {
  render: () => (
    <div className="flex w-80 flex-col gap-4">
      {[1, 2, 3, 4].map((i) => (
        <div key={i} className="flex items-center gap-3">
          <Skeleton variant="circle" width={36} height={36} />
          <div className="flex-1">
            <Skeleton width="80%" />
            <Skeleton width="50%" className="mt-2 h-3" />
          </div>
        </div>
      ))}
    </div>
  ),
};

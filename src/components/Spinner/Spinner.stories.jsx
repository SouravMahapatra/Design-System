import { Spinner } from './Spinner';

const sizes = ['xs', 'sm', 'md', 'lg', 'xl'];

export default {
  title: 'Components/Spinner',
  component: Spinner,
  tags: ['autodocs'],
  argTypes: {
    variant: { control: 'inline-radio', options: ['ring', 'dots', 'pulse'] },
    tone: { control: 'inline-radio', options: ['brand', 'neutral', 'white', 'success', 'danger'] },
    size: { control: 'inline-radio', options: sizes },
  },
  args: { variant: 'ring', tone: 'brand', size: 'lg' },
};

export const Playground = {};
export const Ring = { args: { variant: 'ring' } };
export const Dots = { args: { variant: 'dots' } };
export const Pulse = { args: { variant: 'pulse' } };
export const OnDark = {
  args: { tone: 'white' },
  decorators: [(Story) => <div className="rounded-lg bg-slate-900 p-8"><Story /></div>],
};

export const Matrix = {
  render: () => (
    <div className="flex flex-col gap-6">
      {['ring', 'dots', 'pulse'].map((v) => (
        <div key={v} className="flex items-center gap-6">
          {sizes.map((s) => (
            <Spinner key={s} variant={v} size={s} />
          ))}
        </div>
      ))}
    </div>
  ),
};

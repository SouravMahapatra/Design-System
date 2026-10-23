import { Progress } from './Progress';

const tones = ['brand', 'success', 'warning', 'danger'];

export default {
  title: 'Components/Progress',
  component: Progress,
  tags: ['autodocs'],
  argTypes: {
    variant: { control: 'inline-radio', options: ['bar', 'striped', 'circle'] },
    tone: { control: 'inline-radio', options: tones },
    size: { control: 'inline-radio', options: ['sm', 'md', 'lg'] },
    value: { control: { type: 'range', min: 0, max: 100 } },
  },
  args: { value: 64, variant: 'bar', tone: 'brand', size: 'md', label: 'Uploading files', showValue: true },
};

export const Playground = {};
export const Bar = { args: { variant: 'bar' } };
export const Striped = { args: { variant: 'striped', size: 'lg' } };
export const Circle = { args: { variant: 'circle', label: 'Storage used' } };
export const Indeterminate = { args: { indeterminate: true, label: 'Processing…' } };

export const Tones = {
  render: () => (
    <div className="flex flex-col gap-4">
      {tones.map((t, i) => (
        <Progress key={t} tone={t} value={30 + i * 20} label={t} showValue />
      ))}
    </div>
  ),
};

export const Circles = {
  render: () => (
    <div className="flex items-end gap-8">
      {['sm', 'md', 'lg'].map((s, i) => (
        <Progress key={s} variant="circle" size={s} tone={tones[i]} value={25 + i * 30} showValue label={s} />
      ))}
    </div>
  ),
};

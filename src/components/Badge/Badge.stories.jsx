import { Badge } from './Badge';

const tones = ['neutral', 'brand', 'success', 'warning', 'danger'];

export default {
  title: 'Components/Badge',
  component: Badge,
  tags: ['autodocs'],
  argTypes: {
    variant: { control: 'inline-radio', options: ['solid', 'soft', 'outline'] },
    tone: { control: 'select', options: tones },
    size: { control: 'inline-radio', options: ['sm', 'md', 'lg'] },
  },
  args: { children: 'Badge', variant: 'soft', tone: 'brand', size: 'md' },
};

export const Playground = {
  args: {
    variant: "solid"
  }
};
export const Solid = { args: { variant: 'solid' } };
export const Soft = { args: { variant: 'soft' } };
export const Outline = { args: { variant: 'outline' } };
export const WithDot = { args: { dot: true, tone: 'success', children: 'Active' } };

export const Matrix = {
  render: () => (
    <div className="flex flex-col gap-3">
      {['solid', 'soft', 'outline'].map((v) => (
        <div key={v} className="flex gap-2">
          {tones.map((t) => (
            <Badge key={t} variant={v} tone={t} dot>{t}</Badge>
          ))}
        </div>
      ))}
    </div>
  ),
};

export const Sizes = {
  render: () => (
    <div className="flex items-center gap-2">
      <Badge size="sm" tone="brand">Small</Badge>
      <Badge size="md" tone="brand">Medium</Badge>
      <Badge size="lg" tone="brand">Large</Badge>
    </div>
  ),
};

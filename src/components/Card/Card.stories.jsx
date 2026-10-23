import { Card, CardHeader, CardFooter } from './Card';
import { Button } from '../Button/Button';
import { Badge } from '../Badge/Badge';

export default {
  title: 'Components/Card',
  component: Card,
  tags: ['autodocs'],
  argTypes: {
    variant: { control: 'inline-radio', options: ['elevated', 'outlined', 'filled', 'interactive'] },
    padding: { control: 'inline-radio', options: ['none', 'sm', 'md', 'lg'] },
  },
  args: { variant: 'elevated', padding: 'md' },
  render: (args) => (
    <Card {...args}>
      <CardHeader title="Project Atlas" subtitle="Last updated 2 hours ago" />
      <p className="text-sm text-slate-600">A shared component library used across web and mobile products.</p>
      <CardFooter>
        <Button variant="ghost" size="sm">Cancel</Button>
        <Button size="sm">Open</Button>
      </CardFooter>
    </Card>
  ),
};

export const Playground = {};
export const Elevated = { args: { variant: 'elevated' } };
export const Outlined = { args: { variant: 'outlined' } };
export const Filled = { args: { variant: 'filled' } };
export const Interactive = { args: { variant: 'interactive' } };

export const WithMedia = {
  args: { padding: 'none' },
  render: (args) => (
    <Card {...args}>
      <div className="h-36 bg-gradient-to-br from-brand-500 to-violet-500" />
      <div className="p-6">
        <Badge tone="brand" size="sm">New</Badge>
        <CardHeader className="mt-3" title="Design tokens 2.0" subtitle="Color, spacing and type scales rebuilt on Tailwind v4." />
        <Button variant="link">Read the changelog →</Button>
      </div>
    </Card>
  ),
};

export const AllVariants = {
  render: () => (
    <div className="grid grid-cols-2 gap-6">
      {['elevated', 'outlined', 'filled', 'interactive'].map((v) => (
        <Card key={v} variant={v}>
          <CardHeader title={v[0].toUpperCase() + v.slice(1)} subtitle={`variant="${v}"`} />
        </Card>
      ))}
    </div>
  ),
};

import { RadioGroup } from './Radio';

const plans = [
  { value: 'starter', label: 'Starter', description: '$0 / month · 3 projects' },
  { value: 'pro', label: 'Pro', description: '$12 / month · Unlimited projects' },
  { value: 'enterprise', label: 'Enterprise', description: 'Custom pricing', disabled: true },
];

const views = [
  { value: 'day', label: 'Day' },
  { value: 'week', label: 'Week' },
  { value: 'month', label: 'Month' },
  { value: 'year', label: 'Year' },
];

export default {
  title: 'Components/Radio',
  component: RadioGroup,
  tags: ['autodocs'],
  argTypes: {
    variant: { control: 'inline-radio', options: ['default', 'card', 'button'] },
    size: { control: 'inline-radio', options: ['sm', 'md', 'lg'] },
    orientation: { control: 'inline-radio', options: ['vertical', 'horizontal'] },
  },
  args: { options: plans, label: 'Choose a plan', defaultValue: 'pro', variant: 'default', size: 'md', orientation: 'vertical' },
};

export const Playground = {};
export const Default = {};
export const Horizontal = { args: { orientation: 'horizontal', options: plans.map(({ description, ...o }) => o) } };
export const Card = { args: { variant: 'card' } };
export const CardHorizontal = { args: { variant: 'card', orientation: 'horizontal' } };
export const ButtonGroup = { args: { variant: 'button', options: views, label: 'Calendar view', defaultValue: 'week' } };

export const Sizes = {
  render: () => (
    <div className="flex gap-12">
      {['sm', 'md', 'lg'].map((s) => (
        <RadioGroup key={s} size={s} label={s.toUpperCase()} options={views.slice(0, 3)} defaultValue="week" />
      ))}
    </div>
  ),
};

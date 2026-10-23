import { Tabs } from './Tabs';

const tabs = [
  { id: 'overview', label: 'Overview', content: 'Project summary, key metrics and recent activity.' },
  { id: 'activity', label: 'Activity', count: 12, content: 'A timeline of everything that happened in this project.' },
  { id: 'members', label: 'Members', count: 4, content: 'People who have access to this project.' },
  { id: 'settings', label: 'Settings', content: 'Configure project name, visibility and integrations.' },
  { id: 'billing', label: 'Billing', disabled: true },
];

export default {
  title: 'Components/Tabs',
  component: Tabs,
  tags: ['autodocs'],
  argTypes: {
    variant: { control: 'inline-radio', options: ['underline', 'pills', 'segmented'] },
    size: { control: 'inline-radio', options: ['sm', 'md', 'lg'] },
  },
  args: { tabs, variant: 'underline', size: 'md' },
};

export const Playground = {};
export const Underline = { args: { variant: 'underline' } };
export const Pills = { args: { variant: 'pills' } };
export const Segmented = { args: { variant: 'segmented', tabs: tabs.slice(0, 3).map(({ count, ...t }) => t) } };

export const Sizes = {
  render: (args) => (
    <div className="flex flex-col gap-8">
      {['sm', 'md', 'lg'].map((s) => (
        <Tabs key={s} {...args} size={s} tabs={tabs.slice(0, 4).map(({ content, ...t }) => t)} />
      ))}
    </div>
  ),
};

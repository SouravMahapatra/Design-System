import { Dropdown } from './Dropdown';

const frameworks = [
  { value: 'react', label: 'React' },
  { value: 'vue', label: 'Vue' },
  { value: 'svelte', label: 'Svelte' },
  { value: 'angular', label: 'Angular', disabled: true },
  { value: 'solid', label: 'Solid' },
];

const plans = [
  { value: 'free', label: 'Free', description: 'Up to 3 projects' },
  { value: 'pro', label: 'Pro', description: 'Unlimited projects, priority support' },
  { value: 'team', label: 'Team', description: 'Shared workspaces and SSO' },
];

export default {
  title: 'Components/Dropdown',
  component: Dropdown,
  tags: ['autodocs'],
  parameters: { layout: 'padded' },
  decorators: [(Story) => <div className="min-h-80"><Story /></div>],
  argTypes: {
    variant: { control: 'inline-radio', options: ['outline', 'filled', 'ghost'] },
    size: { control: 'inline-radio', options: ['sm', 'md', 'lg'] },
  },
  args: { options: frameworks, label: 'Framework', variant: 'outline', size: 'md' },
};

export const Playground = {};
export const Outline = { args: { variant: 'outline' } };
export const Filled = { args: { variant: 'filled' } };
export const Ghost = { args: { variant: 'ghost' } };
export const WithDescriptions = { args: { options: plans, label: 'Plan', defaultValue: 'pro' } };
export const MultiSelect = { args: { multiple: true, label: 'Frameworks', placeholder: 'Pick a few', defaultValue: ['react', 'svelte'] } };
export const Disabled = { args: { disabled: true } };

export const Sizes = {
  render: (args) => (
    <div className="flex items-start gap-4">
      <Dropdown {...args} size="sm" label="Small" className="w-48" />
      <Dropdown {...args} size="md" label="Medium" className="w-48" />
      <Dropdown {...args} size="lg" label="Large" className="w-48" />
    </div>
  ),
};

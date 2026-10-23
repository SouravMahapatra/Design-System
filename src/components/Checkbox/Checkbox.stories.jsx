import { Checkbox } from './Checkbox';

export default {
  title: 'Components/Checkbox',
  component: Checkbox,
  tags: ['autodocs'],
  argTypes: {
    variant: { control: 'inline-radio', options: ['default', 'rounded', 'card'] },
    tone: { control: 'inline-radio', options: ['brand', 'success', 'danger'] },
    size: { control: 'inline-radio', options: ['sm', 'md', 'lg'] },
  },
  args: { label: 'Accept terms and conditions', variant: 'default', tone: 'brand', size: 'md' },
};

export const Playground = {};
export const Default = { args: { defaultChecked: true } };
export const Rounded = { args: { variant: 'rounded', defaultChecked: true } };
export const Card = {
  args: { variant: 'card', label: 'Email notifications', description: 'Get notified when someone mentions you.', defaultChecked: true },
};
export const WithDescription = { args: { description: 'You agree to our Terms of Service and Privacy Policy.' } };
export const Indeterminate = { args: { label: 'Select all', indeterminate: true } };
export const Disabled = { args: { disabled: true, defaultChecked: true } };

export const Tones = {
  render: () => (
    <div className="flex gap-6">
      <Checkbox tone="brand" label="Brand" defaultChecked />
      <Checkbox tone="success" label="Success" defaultChecked />
      <Checkbox tone="danger" label="Danger" defaultChecked />
    </div>
  ),
};

export const Sizes = {
  render: () => (
    <div className="flex items-center gap-6">
      <Checkbox size="sm" label="Small" defaultChecked />
      <Checkbox size="md" label="Medium" defaultChecked />
      <Checkbox size="lg" label="Large" defaultChecked />
    </div>
  ),
};

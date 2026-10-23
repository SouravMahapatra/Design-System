import { Toggle } from './Toggle';

export default {
  title: 'Components/Toggle',
  component: Toggle,
  tags: ['autodocs'],
  argTypes: {
    tone: { control: 'inline-radio', options: ['brand', 'success', 'danger', 'neutral'] },
    size: { control: 'inline-radio', options: ['sm', 'md', 'lg'] },
    labelPosition: { control: 'inline-radio', options: ['left', 'right'] },
  },
  args: { label: 'Dark mode', tone: 'brand', size: 'md', labelPosition: 'right' },
};

export const Playground = {};
export const On = { args: { defaultChecked: true } };
export const Off = { args: { defaultChecked: false } };
export const WithIcons = { args: { showIcons: true, defaultChecked: true, label: 'Auto-save' } };
export const WithDescription = {
  args: { label: 'Two-factor authentication', description: 'Require a code when signing in.', defaultChecked: true, tone: 'success' },
};
export const LabelLeft = { args: { labelPosition: 'left' } };
export const Disabled = { args: { disabled: true, defaultChecked: true } };

export const Tones = {
  render: () => (
    <div className="flex gap-6">
      {['brand', 'success', 'danger', 'neutral'].map((t) => (
        <Toggle key={t} tone={t} label={t} defaultChecked />
      ))}
    </div>
  ),
};

export const Sizes = {
  render: () => (
    <div className="flex items-center gap-6">
      <Toggle size="sm" label="Small" defaultChecked />
      <Toggle size="md" label="Medium" defaultChecked />
      <Toggle size="lg" label="Large" defaultChecked />
    </div>
  ),
};

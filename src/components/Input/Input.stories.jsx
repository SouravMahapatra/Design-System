import { Input } from './Input';

const Search = () => (
  <svg className="size-4" viewBox="0 0 20 20" fill="currentColor"><path fillRule="evenodd" d="M9 3.5a5.5 5.5 0 1 0 0 11 5.5 5.5 0 0 0 0-11ZM2 9a7 7 0 1 1 12.45 4.39l3.08 3.08a.75.75 0 1 1-1.06 1.06l-3.08-3.08A7 7 0 0 1 2 9Z" clipRule="evenodd" /></svg>
);

export default {
  title: 'Components/Input',
  component: Input,
  tags: ['autodocs'],
  argTypes: {
    variant: { control: 'inline-radio', options: ['outline', 'filled', 'underline'] },
    size: { control: 'inline-radio', options: ['sm', 'md', 'lg'] },
  },
  args: { label: 'Email', placeholder: 'you@company.com', variant: 'outline', size: 'md' },
};

export const Playground = {};
export const Outline = { args: { variant: 'outline' } };
export const Filled = { args: { variant: 'filled' } };
export const Underline = { args: { variant: 'underline' } };
export const WithHelperText = { args: { helperText: "We'll never share your email." } };
export const WithError = { args: { defaultValue: 'not-an-email', error: 'Please enter a valid email address.' } };
export const WithIcon = { args: { label: 'Search', placeholder: 'Search components…', leftIcon: <Search /> } };
export const Disabled = { args: { disabled: true, defaultValue: 'locked@company.com' } };

export const Sizes = {
  render: (args) => (
    <div className="flex flex-col gap-4">
      <Input {...args} size="sm" label="Small" />
      <Input {...args} size="md" label="Medium" />
      <Input {...args} size="lg" label="Large" />
    </div>
  ),
};

import { Textarea } from './Textarea';

export default {
  title: 'Components/Textarea',
  component: Textarea,
  tags: ['autodocs'],
  argTypes: {
    variant: { control: 'inline-radio', options: ['outline', 'filled', 'ghost'] },
    resize: { control: 'inline-radio', options: ['none', 'vertical', 'both'] },
  },
  args: { label: 'Feedback', placeholder: 'Tell us what you think…', variant: 'outline', resize: 'vertical' },
};

export const Playground = {};
export const Outline = { args: { variant: 'outline' } };
export const Filled = { args: { variant: 'filled' } };
export const Ghost = { args: { variant: 'ghost', label: undefined, placeholder: 'Write a comment…' } };
export const WithCounter = { args: { showCount: true, maxLength: 200, helperText: 'Keep it short and sweet.', defaultValue: 'Love the new components!' } };
export const WithError = { args: { error: 'Feedback is required.' } };
export const Disabled = { args: { disabled: true, defaultValue: 'Submissions are closed.' } };
export const NoResize = { args: { resize: 'none', rows: 3 } };

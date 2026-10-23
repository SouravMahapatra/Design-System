import { Alert } from './Alert';
import { Button } from '../Button/Button';

const tones = ['info', 'success', 'warning', 'danger'];
const copy = {
  info: ['Update available', 'A new version of the design system is ready to install.'],
  success: ['Changes saved', 'Your profile has been updated successfully.'],
  warning: ['Storage almost full', "You've used 90% of your workspace storage."],
  danger: ['Payment failed', 'We could not process your card. Please try again.'],
};

export default {
  title: 'Components/Alert',
  component: Alert,
  tags: ['autodocs'],
  argTypes: {
    variant: { control: 'inline-radio', options: ['soft', 'solid', 'accent'] },
    tone: { control: 'select', options: tones },
  },
  args: { variant: 'soft', tone: 'info', title: copy.info[0], children: copy.info[1] },
};

export const Playground = {};
export const Soft = { args: { variant: 'soft' } };
export const Solid = { args: { variant: 'solid' } };
export const Accent = { args: { variant: 'accent' } };
export const Dismissible = { args: { onClose: () => {} } };
export const WithAction = {
  args: { tone: 'warning', title: copy.warning[0], children: copy.warning[1], action: <Button size="sm" variant="outline">Upgrade plan</Button> },
};

export const AllTones = {
  render: (args) => (
    <div className="flex flex-col gap-3">
      {tones.map((t) => (
        <Alert key={t} variant={args.variant} tone={t} title={copy[t][0]}>{copy[t][1]}</Alert>
      ))}
    </div>
  ),
};

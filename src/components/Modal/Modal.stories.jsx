import { useState } from 'react';
import { Modal } from './Modal';
import { Button } from '../Button/Button';
import { Input } from '../Input/Input';

export default {
  title: 'Components/Modal',
  component: Modal,
  tags: ['autodocs'],
  parameters: { docs: { story: { inline: false, iframeHeight: 520 } } },
  argTypes: {
    variant: { control: 'inline-radio', options: ['dialog', 'drawer'] },
    size: { control: 'inline-radio', options: ['sm', 'md', 'lg', 'full'] },
    tone: { control: 'inline-radio', options: ['default', 'danger', 'success'] },
  },
  args: {
    variant: 'dialog',
    size: 'md',
    tone: 'default',
    title: 'Invite teammates',
    description: 'They will get an email with a link to join your workspace.',
  },
  render: function Render({ children, footer, ...args }) {
    const [open, setOpen] = useState(true);
    const close = () => setOpen(false);
    return (
      <>
        <Button onClick={() => setOpen(true)}>Open modal</Button>
        <Modal
          {...args}
          open={open}
          onClose={close}
          footer={
            footer ?? (
              <>
                <Button variant="outline" onClick={close}>Cancel</Button>
                <Button variant={args.tone === 'danger' ? 'destructive' : 'primary'} onClick={close}>
                  {args.tone === 'danger' ? 'Delete' : 'Confirm'}
                </Button>
              </>
            )
          }
        >
          {children !== undefined ? children : <Input label="Email address" placeholder="name@company.com" className="w-full" />}
        </Modal>
      </>
    );
  },
};

export const Playground = {};
export const Default = {};
export const Small = { args: { size: 'sm' } };
export const Large = {
  args: { size: 'lg', title: 'Release notes', description: 'Version 2.0', children: <p>Larger dialogs suit longer content like changelogs, previews or multi-field forms.</p> },
};
export const Danger = {
  args: { tone: 'danger', size: 'sm', title: 'Delete project?', description: 'This permanently removes the project and all of its data. This cannot be undone.', children: null },
};
export const Success = {
  args: { tone: 'success', size: 'sm', title: 'Payment received', description: 'Your plan has been upgraded to Pro.', children: null },
};
export const Drawer = {
  args: { variant: 'drawer', title: 'Filters', description: 'Narrow down the results.' },
};

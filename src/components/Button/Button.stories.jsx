import { Button } from './Button';

const Plus = () => (
  <svg className="size-4" viewBox="0 0 20 20" fill="currentColor"><path d="M10.75 4.75a.75.75 0 0 0-1.5 0v4.5h-4.5a.75.75 0 0 0 0 1.5h4.5v4.5a.75.75 0 0 0 1.5 0v-4.5h4.5a.75.75 0 0 0 0-1.5h-4.5v-4.5Z" /></svg>
);
const Arrow = () => (
  <svg className="size-4" viewBox="0 0 20 20" fill="currentColor"><path fillRule="evenodd" d="M3 10a.75.75 0 0 1 .75-.75h10.64l-4.22-4.22a.75.75 0 1 1 1.06-1.06l5.5 5.5a.75.75 0 0 1 0 1.06l-5.5 5.5a.75.75 0 1 1-1.06-1.06l4.22-4.22H3.75A.75.75 0 0 1 3 10Z" clipRule="evenodd" /></svg>
);

export default {
  title: 'Components/Button',
  component: Button,
  tags: ['autodocs'],
  argTypes: {
    variant: { control: 'select', options: ['primary', 'secondary', 'outline', 'ghost', 'destructive', 'link'] },
    size: { control: 'inline-radio', options: ['sm', 'md', 'lg'] },
  },
  args: { children: 'Button', variant: 'primary', size: 'md' },
};

export const Playground = {};
export const Primary = { args: { variant: 'primary' } };
export const Secondary = { args: { variant: 'secondary' } };
export const Outline = { args: { variant: 'outline' } };
export const Ghost = { args: { variant: 'ghost' } };
export const Destructive = { args: { variant: 'destructive', children: 'Delete' } };
export const Link = { args: { variant: 'link', children: 'Learn more' } };

export const AllVariants = {
  render: () => (
    <div className="flex flex-wrap items-center gap-3">
      {['primary', 'secondary', 'outline', 'ghost', 'destructive', 'link'].map((v) => (
        <Button key={v} variant={v}>{v[0].toUpperCase() + v.slice(1)}</Button>
      ))}
    </div>
  ),
};

export const Sizes = {
  render: () => (
    <div className="flex items-center gap-3">
      <Button size="sm">Small</Button>
      <Button size="md">Medium</Button>
      <Button size="lg">Large</Button>
    </div>
  ),
};

export const WithIcons = {
  render: () => (
    <div className="flex gap-3">
      <Button leftIcon={<Plus />}>New project</Button>
      <Button variant="outline" rightIcon={<Arrow />}>Continue</Button>
    </div>
  ),
};

export const States = {
  render: () => (
    <div className="flex gap-3">
      <Button loading>Saving…</Button>
      <Button disabled>Disabled</Button>
      <Button variant="outline" disabled>Disabled</Button>
    </div>
  ),
};

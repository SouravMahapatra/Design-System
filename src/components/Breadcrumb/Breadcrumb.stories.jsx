import { Breadcrumb } from './Breadcrumb';

const items = [
  { label: 'Home', href: '#' },
  { label: 'Projects', href: '#' },
  { label: 'Design System', href: '#' },
  { label: 'Components', href: '#' },
  { label: 'Breadcrumb' },
];

export default {
  title: 'Components/Breadcrumb',
  component: Breadcrumb,
  tags: ['autodocs'],
  argTypes: {
    variant: { control: 'inline-radio', options: ['default', 'contained'] },
    separator: { control: 'inline-radio', options: ['chevron', 'slash', 'dot'] },
  },
  args: { items: items.slice(0, 3), variant: 'default', separator: 'chevron' },
};

export const Playground = {};
export const Chevron = {};
export const Slash = { args: { separator: 'slash' } };
export const Dot = { args: { separator: 'dot' } };
export const Contained = { args: { variant: 'contained' } };
export const WithHomeIcon = { args: { showHome: true } };
export const Collapsed = { args: { items, maxItems: 3, showHome: true } };

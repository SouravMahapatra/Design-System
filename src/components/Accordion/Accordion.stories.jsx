import { Accordion } from './Accordion';

const items = [
  { id: 'what', title: 'What is a design system?', content: 'A collection of reusable components, guidelines and tokens that keep product UI consistent.' },
  { id: 'theme', title: 'Can I change the brand colour?', content: 'Yes. Update the --color-brand-* tokens in src/index.css and every component picks them up.' },
  { id: 'a11y', title: 'Are components accessible?', content: 'Components use semantic elements, ARIA attributes and visible focus rings.' },
  { id: 'soon', title: 'Dark mode support', content: 'Coming soon.', disabled: true },
];

export default {
  title: 'Components/Accordion',
  component: Accordion,
  tags: ['autodocs'],
  argTypes: { variant: { control: 'inline-radio', options: ['default', 'bordered', 'separated'] } },
  args: { items, variant: 'default', multiple: false, defaultOpen: ['what'] },
};

export const Playground = {};
export const Default = { args: { variant: 'default' } };
export const Bordered = { args: { variant: 'bordered' } };
export const Separated = { args: { variant: 'separated' } };
export const Multiple = { args: { variant: 'bordered', multiple: true, defaultOpen: ['what', 'theme'] } };

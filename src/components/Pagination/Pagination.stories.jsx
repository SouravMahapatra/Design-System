import { Pagination } from './Pagination';

export default {
  title: 'Components/Pagination',
  component: Pagination,
  tags: ['autodocs'],
  argTypes: {
    variant: { control: 'inline-radio', options: ['default', 'outline', 'ghost', 'simple'] },
    size: { control: 'inline-radio', options: ['sm', 'md', 'lg'] },
  },
  args: { total: 20, defaultPage: 6, variant: 'default', size: 'md', siblings: 1 },
};

export const Playground = {};
export const Default = {};
export const Outline = { args: { variant: 'outline' } };
export const Ghost = { args: { variant: 'ghost' } };
export const Simple = { args: { variant: 'simple' } };
export const FewPages = { args: { total: 5, defaultPage: 2 } };

export const Sizes = {
  render: (args) => (
    <div className="flex flex-col items-center gap-4">
      {['sm', 'md', 'lg'].map((s) => (
        <Pagination key={s} {...args} size={s} variant="outline" />
      ))}
    </div>
  ),
};

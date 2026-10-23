import { Tooltip } from './Tooltip';
import { Button } from '../Button/Button';

export default {
  title: 'Components/Tooltip',
  component: Tooltip,
  tags: ['autodocs'],
  decorators: [(Story) => <div className="p-16"><Story /></div>],
  argTypes: {
    placement: { control: 'inline-radio', options: ['top', 'bottom', 'left', 'right'] },
    variant: { control: 'inline-radio', options: ['dark', 'light', 'brand'] },
  },
  args: { content: 'Copy to clipboard', placement: 'top', variant: 'dark', arrow: true },
  render: (args) => (
    <Tooltip {...args}>
      <Button variant="outline">Hover me</Button>
    </Tooltip>
  ),
};

export const Playground = {};
export const Dark = { args: { variant: 'dark', open: true } };
export const Light = { args: { variant: 'light', open: true } };
export const Brand = { args: { variant: 'brand', open: true } };
export const NoArrow = { args: { arrow: false, open: true } };

export const Placements = {
  render: (args) => (
    <div className="grid grid-cols-2 gap-x-32 gap-y-16 px-16">
      {['top', 'bottom', 'left', 'right'].map((p) => (
        <Tooltip key={p} {...args} placement={p} content={`Tooltip on ${p}`} open>
          <Button variant="secondary">{p}</Button>
        </Tooltip>
      ))}
    </div>
  ),
};

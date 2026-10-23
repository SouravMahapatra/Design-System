import { Avatar, AvatarGroup } from './Avatar';

const photo = 'https://i.pravatar.cc/150?img=';

export default {
  title: 'Components/Avatar',
  component: Avatar,
  tags: ['autodocs'],
  argTypes: {
    size: { control: 'inline-radio', options: ['xs', 'sm', 'md', 'lg', 'xl'] },
    shape: { control: 'inline-radio', options: ['circle', 'square'] },
    status: { control: 'select', options: [undefined, 'online', 'away', 'busy', 'offline'] },
  },
  args: { name: 'Priya Sharma', src: `${photo}47`, size: 'lg', shape: 'circle' },
};

export const Playground = {};
export const Image = {};
export const Initials = { args: { src: undefined } };
export const Placeholder = { args: { src: undefined, name: undefined } };
export const Square = { args: { shape: 'square' } };
export const WithStatus = {
  render: (args) => (
    <div className="flex gap-4">
      {['online', 'away', 'busy', 'offline'].map((s, i) => (
        <Avatar key={s} {...args} src={`${photo}${i + 10}`} status={s} />
      ))}
    </div>
  ),
};

export const Sizes = {
  render: (args) => (
    <div className="flex items-end gap-3">
      {['xs', 'sm', 'md', 'lg', 'xl'].map((s) => (
        <Avatar key={s} {...args} size={s} />
      ))}
    </div>
  ),
};

export const Group = {
  render: () => (
    <AvatarGroup max={4}>
      {[11, 12, 13, 14, 15, 16].map((n) => (
        <Avatar key={n} src={`${photo}${n}`} name="Team member" />
      ))}
    </AvatarGroup>
  ),
};

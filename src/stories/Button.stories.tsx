import { Story } from '@storybook/react';
import Button from '../components/Button/Button';

export default {
  title: 'Button',
  component: Button
};
const Template: Story<{ textDisplay: string }> = (args: any) => (
  <Button {...args} />
);
export const Primary = Template.bind({});
Primary.args = { textDisplay: 'string' };

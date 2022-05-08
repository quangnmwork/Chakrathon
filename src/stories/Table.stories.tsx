import { Story } from '@storybook/react';
import Button from '../components/Button/Button';
import TableData from '../components/TableData/TableData';

export default {
  title: 'TableData',
  component: TableData
};
const Template: any = (args: any) => <TableData {...args} />;
export const Primary = Template.bind({});
Primary.args = { titles: ['Heading'] };

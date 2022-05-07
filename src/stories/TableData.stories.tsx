import TableData from '../components/TableData';

export default {
  title: 'Table Data',
  component: TableData
};
const Template: any = (args: any) => <TableData {...args} />;
export const Table = Template.bind({});
Table.args = { titles: ['Heading'] };

import { Button } from '@chakra-ui/react';
import TableDataContainer from '../components/TableData/TableContainer';
import { IHeading } from '../model';

export default {
  title: 'Table/TableData',
  component: TableDataContainer
};
const TableDataTitles: IHeading[] = [
  { title: 'ID' },
  { title: <Button>Guys</Button> }
];
export const TableData = () => {
  return <TableDataContainer titles={TableDataTitles} />;
};

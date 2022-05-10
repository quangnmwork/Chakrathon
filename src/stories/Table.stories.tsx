import { Box, Button, Text } from '@chakra-ui/react';
import { TableDataRow } from '../components';
import { useData } from '../components/services/useData';
import { useTitle } from '../components/services/useTitle';
import TableData from '../components/TableData';
import TableHeading from '../components/TableData/TableDataHeading';

export default {
  title: 'Table/TableData',
  component: TableData
};
const titles = useTitle(['Id', 'Username', <Text color={'red'}>Warning</Text>]);
const data = useData([
  ['1', 'Quang', <Box padding={'0'}>1,2,3</Box>],
  ['2', 'Toan', <Button padding={'0'}>Click me</Button>]
]);
export const Table = () => {
  return <TableData variant={'striped'} colorScheme={'red'}></TableData>;
};

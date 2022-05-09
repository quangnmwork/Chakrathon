import { Box, Button, Text } from '@chakra-ui/react';
import { useData, useTitle } from '../components/services/useTitle';
import TableData from '../components/TableData';

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
  return <TableData titles={titles} data={data} />;
};

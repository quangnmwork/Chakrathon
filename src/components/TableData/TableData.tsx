import { IHeading } from '../../model';
import TableDataContainer from './TableContainer/TableDataContainer';
import { ChakraProvider, Button } from '@chakra-ui/react';
import {
  Table,
  Thead,
  Tbody,
  Tfoot,
  Tr,
  Th,
  Td,
  TableCaption,
  TableContainer
} from '@chakra-ui/react';
interface StateProps {
  titles: IHeading[];
}
const TableData = (props: StateProps) => {
  return (
    <ChakraProvider>
      <Button colorScheme="blue">Hello</Button>
    </ChakraProvider>
  );
};

export default TableData;

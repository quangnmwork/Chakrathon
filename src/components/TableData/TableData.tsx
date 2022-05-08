import { ChakraProvider, StylesProvider } from '@chakra-ui/react';

import { IHeading } from '../../model';
import TableDataContainer from './TableContainer/TableDataContainer';

interface StateProps {
  titles: IHeading[];
}
const TableData = (props: StateProps) => {
  return (
    <ChakraProvider>
      <TableDataContainer titles={props.titles}></TableDataContainer>
    </ChakraProvider>
  );
};

export default TableData;

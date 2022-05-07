import { ChakraProvider } from '@chakra-ui/react';
import React from 'react';
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

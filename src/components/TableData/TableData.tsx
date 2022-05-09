import { TableContainer } from '@chakra-ui/table';
import React from 'react';
import { IRow, IRows } from '../../model';
import TableDataContainer from './TableDataContainer';
interface StateProps {
  titles: IRow[];
  data: IRows;
}
const TableData = (props: StateProps) => {
  return (
    <TableContainer>
      <TableDataContainer titles={props.titles} data={props.data} />
    </TableContainer>
  );
};

export default TableData;

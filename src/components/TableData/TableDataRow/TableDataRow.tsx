import { Tbody, Td, Tr } from '@chakra-ui/table';
import React from 'react';
import { IRows } from '../../../model';
interface StateProps {
  data: IRows;
}

const TableDataRow = (props: StateProps) => {
  return (
    <Tbody>
      {props.data.map((rows, index) => (
        <Tr key={index}>
          {rows.map((row, indexx) => (
            <Td key={indexx}>{row}</Td>
          ))}
        </Tr>
      ))}
    </Tbody>
  );
};

export default TableDataRow;

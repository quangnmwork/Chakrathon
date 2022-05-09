import {
  TableBodyProps,
  TableCellProps,
  TableRowProps,
  Tbody,
  Td,
  Tr
} from '@chakra-ui/table';
import React from 'react';
import { IRows } from '../../../model';
interface StateProps {
  data: IRows;
  TBodyStyles?: TableBodyProps;
  TrStyles?: TableRowProps;
  TdStyles?: TableCellProps;
}

const TableDataRow = (props: StateProps) => {
  return (
    <Tbody {...props.TBodyStyles}>
      {props.data.map((rows, index) => (
        <Tr key={index} {...props.TrStyles}>
          {rows.map((row, indexx) => (
            <Td key={indexx} {...props.TdStyles}>
              {row}
            </Td>
          ))}
        </Tr>
      ))}
    </Tbody>
  );
};

export default TableDataRow;

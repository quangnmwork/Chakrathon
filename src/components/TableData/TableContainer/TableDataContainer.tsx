import { TableContainer, Tbody, Thead } from '@chakra-ui/react';
import React from 'react';
import { IHeading } from '../../../model';
import TableHeading from '../TableHeading/TableHeading';
interface StateProps {
  titles: IHeading[];
}
const TableDataContainer = (props: StateProps) => {
  return (
    <TableContainer>
      <Thead>
        {props.titles.map((title: IHeading, index) => (
          <TableHeading key={index} title={title} />
        ))}
      </Thead>
      <Tbody></Tbody>
    </TableContainer>
  );
};

export default TableDataContainer;

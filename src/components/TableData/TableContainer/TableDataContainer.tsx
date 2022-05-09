import { Table, TableContainer, Tbody, Thead } from '@chakra-ui/react';

import { IHeading } from '../../../model';
import TableHeading from '../TableHeading/TableHeading';
interface StateProps {
  titles: IHeading[];
}
const TableDataContainer = (props: StateProps) => {
  return (
    <TableContainer>
      <Table>
        <Thead>
          {props.titles.map((title: IHeading, index) => (
            <TableHeading key={index} title={title} />
          ))}
        </Thead>
      </Table>
    </TableContainer>
  );
};

export default TableDataContainer;

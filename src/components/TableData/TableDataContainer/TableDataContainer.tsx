import { Table } from '@chakra-ui/react';

import { IRow, IRows } from '../../../model';

import TableHeading from '../TableDataHeading/TableHeading';
import TableDataRow from '../TableDataRow';
interface StateProps {
  titles: IRow[];
  data: IRows;
}
const TableDataContainer = (props: StateProps) => {
  return (
    <Table>
      <TableHeading titles={props.titles} />
      <TableDataRow data={props.data} />
    </Table>
  );
};

export default TableDataContainer;

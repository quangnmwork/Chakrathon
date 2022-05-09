import { TableProps } from '@chakra-ui/table';

import TableDataContainer from './TableDataContainer';
interface StateProps {}
const TableData = (props: TableProps) => {
  const { ...rest } = props;
  return <TableDataContainer {...rest}>{props.children}</TableDataContainer>;
};

export default TableData;

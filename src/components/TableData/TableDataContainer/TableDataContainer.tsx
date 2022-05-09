import {
  Table,
  useStyleConfig,
  TableContainer,
  TableProps
} from '@chakra-ui/react';

const TableDataContainer = (props: TableProps) => {
  const { ...rest } = props;
  const styles = useStyleConfig('TableDataContainer');
  return (
    <TableContainer>
      <Table {...rest} __css={styles}></Table>
    </TableContainer>
  );
};

export default TableDataContainer;

import { Th, Thead, Tr } from '@chakra-ui/react';
import { IRow } from '../../../model';
interface StateProps {
  titles: IRow[];
}
const TableHeading = (props: StateProps) => {
  return (
    <Thead>
      <Tr>
        {props.titles.map((title, index) => (
          <Th key={index}>{title}</Th>
        ))}
      </Tr>
    </Thead>
  );
};

export default TableHeading;

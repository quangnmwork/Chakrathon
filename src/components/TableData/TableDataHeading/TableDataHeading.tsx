import {
  Th,
  Thead,
  Tr,
  TableColumnHeaderProps,
  TableHeadProps
} from '@chakra-ui/react';
import { IRow } from '../../../model';
interface StateProps {
  titles: IRow[];
  ThStyles?: TableColumnHeaderProps;
  TheadStyles?: TableHeadProps;
}
const TableHeading = (props: StateProps) => {
  return (
    <Thead {...props.TheadStyles}>
      <Tr>
        {props.titles.map((title, index) => (
          <Th key={index} {...props.ThStyles}>
            {title}
          </Th>
        ))}
      </Tr>
    </Thead>
  );
};

export default TableHeading;

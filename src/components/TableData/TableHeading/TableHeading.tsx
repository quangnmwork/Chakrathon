import { Th } from '@chakra-ui/table';
import { IHeading } from '../../../model';
interface StateProps {
  title: IHeading;
}
const TableHeading = (props: StateProps) => {
  return <Th>{props.title.title}</Th>;
};

export default TableHeading;

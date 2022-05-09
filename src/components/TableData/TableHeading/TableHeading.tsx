import { Th } from '@chakra-ui/react';
import { forwardRef } from 'react';
import { IHeading } from '../../../model';
interface StateProps {
  title: IHeading;
}
const TableHeading = forwardRef<HTMLTableElement, StateProps>((props, ref) => {
  return <Th>{props.title.title}</Th>;
});

export default TableHeading;

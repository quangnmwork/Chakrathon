import { chakra } from '@chakra-ui/react';
import React from 'react';
import { IHeading } from '../../../model';
interface StateProps {
  title: IHeading;
}
const TableHeading = (props: StateProps) => {
  return <chakra.th>{props.title.title}</chakra.th>;
};

export default TableHeading;

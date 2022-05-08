import { Th } from '@chakra-ui/react';
import React from 'react';
import { IHeading } from '../../../model';
interface StateProps {
  title: IHeading;
}
const TableHeading = (props: StateProps) => {
  return <Th>{props.title.title}</Th>;
};

export default TableHeading;

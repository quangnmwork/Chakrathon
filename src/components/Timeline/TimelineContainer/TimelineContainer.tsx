import { Box, useStyleConfig } from '@chakra-ui/react';
import React from 'react';
interface StateProps {
  position: 'left' | 'right' | 'mix';
}
const TimelineContainer = (props: any | StateProps) => {
  const { variant, ...rest } = props;

  const styles = useStyleConfig('TimelineContainer', { variant });
  return <Box __css={styles} {...rest}></Box>;
};

export default TimelineContainer;

import { Box, useStyleConfig } from '@chakra-ui/react';
import React from 'react';

const TimelineDot = (props: any) => {
  const { variant, ...rest } = props;

  const styles = useStyleConfig('TimelineDot', { variant });
  return <Box __css={styles} {...rest} />;
};

export default TimelineDot;

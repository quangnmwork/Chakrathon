import { Box, useStyleConfig } from '@chakra-ui/react';
import React from 'react';

const TimelineConnector = (props: any) => {
  const { variant, ...rest } = props;

  const styles = useStyleConfig('TimelineConnector', { variant });
  return <Box __css={styles} {...rest}></Box>;
};

export default TimelineConnector;

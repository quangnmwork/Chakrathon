import { Box, useStyleConfig } from '@chakra-ui/react';
import React from 'react';

interface StateProps {
  dot: React.ReactElement<any>;
  connector: React.ReactElement<any>;
}

const TimelineSeparator = (props: any | StateProps) => {
  const { variant, ...rest } = props;

  const styles = useStyleConfig('TimelineSeparator', { variant });
  return (
    <Box __css={styles} {...rest} direction={'column'} width={'auto'}></Box>
  );
};

export default TimelineSeparator;

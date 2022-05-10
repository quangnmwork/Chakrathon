import { Box, useStyleConfig } from '@chakra-ui/react';
import React from 'react';
import { TimelineContext } from '../../services/TimelineProvider';
interface StateProps {
  position: 'left' | 'right' | 'mix';
}
const TimelineContainer = (props: any | StateProps) => {
  const { variant, ...rest } = props;

  const styles = useStyleConfig('TimelineContainer', { variant });
  const position = props.position || 'right';
  return (
    <TimelineContext.Provider value={{ position }}>
      <Box __css={styles} {...rest}></Box>
    </TimelineContext.Provider>
  );
};

export default TimelineContainer;

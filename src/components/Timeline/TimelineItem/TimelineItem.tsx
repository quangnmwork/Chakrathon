import { Box, useStyleConfig } from '@chakra-ui/react';

const TimelineItem = (props: any) => {
  const { variant, ...rest } = props;

  const styles = useStyleConfig('TimelineItem', { variant });
  return <Box __css={styles} {...rest}></Box>;
};

export default TimelineItem;

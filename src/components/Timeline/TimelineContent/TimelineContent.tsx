import { Box, useStyleConfig } from '@chakra-ui/react';

const TimelineContent = (props: any) => {
  const { variant, ...rest } = props;

  const styles = useStyleConfig('TimelineContent', { variant });
  return <Box __css={styles} {...rest}></Box>;
};

export default TimelineContent;

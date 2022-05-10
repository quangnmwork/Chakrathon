import { useStyleConfig, Box } from '@chakra-ui/react';
import React, { useContext } from 'react';

const TimelineInverseContent = (props: any) => {
  const { variant, ...rest } = props;

  const styles = useStyleConfig('TimelineInverseContent', { variant });
  return <Box __css={styles} className={'inverse'} {...rest} />;
};

export default TimelineInverseContent;

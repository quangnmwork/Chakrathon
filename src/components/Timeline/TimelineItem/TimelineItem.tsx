import { Box, useStyleConfig } from '@chakra-ui/react';
import React, { useContext } from 'react';
import { TimelineContext } from '../../services/TimelineProvider';
const positionHandle = (
  position: 'right' | 'left' | 'mix',
  isInverse: boolean
) => {
  const returnCSS = {
    _even: {},
    _odd: {},
    flexDirection: '',
    textAlign: '',
    _before: {}
  };
  if (position == 'left') {
    returnCSS.flexDirection = 'row';
    returnCSS.textAlign = 'left';
  }
  if (position == 'right') {
    returnCSS.flexDirection = 'row-reverse';
    returnCSS.textAlign = 'right';
  }
  if (position == 'mix') {
    returnCSS._even = {
      flexDirection: 'row-reverse',
      textAlign: 'right'

      // _before: { content: "''", flex: 1, padding: '5px 10px' }
    };
    returnCSS._odd = {
      flexDirection: 'row',
      textAlign: 'left'
      // _before: { content: "''", flex: 1, padding: '5px 10px' }
    };
  }
  if (!isInverse) {
    returnCSS._before = {
      content: "''",
      flex: 1,
      padding: '5px 10px'
    };
  }
  return returnCSS;
};

const TimelineItem = (props: any) => {
  const { variant, ...rest } = props;
  let isInverse = React.Children.count(props.children) > 2 ? true : false;
  const { position } = useContext(TimelineContext);

  const styles = useStyleConfig('TimelineItem', { variant });
  return (
    <Box
      __css={styles}
      {...positionHandle(position, isInverse)}
      {...rest}
    ></Box>
  );
};

export default TimelineItem;

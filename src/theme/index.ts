import { extendTheme } from '@chakra-ui/react';

const TimelineContainer = {
  baseStyle: {
    display: 'flex',
    flexDirection: 'column',
    gap: '5px',
    padding: '6px 16px',
    flexGrow: 1
  },
  variants: {},
  defaultProps: {}
};
const TimelineSeparator = {
  baseStyle: {
    display: 'flex',
    alignItems: 'center',
    flexDirection: 'column'
  }
};
const TimelineItem = {
  baseStyle: { display: 'flex', gap: '10px' },
  variants: {},
  defaultProps: {}
};
const TimelineContent = {
  baseStyle: {
    flex: 1,
    minHeight: '50px',
    bgColor: 'white',
    boxShadow: 'sm',
    borderRadius: 'md',
    padding: '5px 10px'
  }
};
const TimelineDot = {
  baseStyle: {
    display: 'flex',
    width: '10px',
    height: '10px',
    borderRadius: '50%',
    bgColor: 'white',
    alignSelf: 'baseline'
  }
};
const TimelineConnector = {
  baseStyle: {
    width: '3px',

    bgColor: 'white',
    my: '5px',
    flexGrow: 1
  }
};
export const theme = extendTheme({
  components: {
    TimelineContainer,
    TimelineItem,
    TimelineContent,
    TimelineSeparator,
    TimelineDot,
    TimelineConnector
  }
});

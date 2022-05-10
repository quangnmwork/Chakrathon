import { extendTheme } from '@chakra-ui/react';

interface ColorMode {
  colorMode: 'light' | 'dark';
}

const TimelineContainer = {
  baseStyle: {
    display: 'flex',
    flexDirection: 'column',
    gap: '5px',
    flexGrow: 1
  },
  sizes: {
    sm: { width: '32rem' },
    md: { width: '48rem' },
    lg: { width: '64rem' }
  },
  variants: {},
  defaultProps: { size: 'lg' }
};
const TimelineSeparator = {
  baseStyle: {
    display: 'flex',
    alignItems: 'center',
    flexDirection: 'column',
    flex: 0
  }
};
const TimelineItem = {
  baseStyle: { display: 'flex', gap: 'md', position: 'relative' },
  variants: {},

  defaultProps: {}
};
const TimelineContent = {
  baseStyle: ({ colorMode }: ColorMode) => ({
    flex: 1,
    minHeight: '50px',
    bgColor: 'white',
    borderWidth: '1px',
    borderColor: colorMode == 'dark' ? '' : 'black.100',
    borderRadius: 'md',
    padding: '5px 10px'
  }),
  sizes: {}
};

const TimelineInverseContent = {
  baseStyle: {
    marginRight: 'auto',
    textAlign: 'right',
    flex: 1,
    padding: '5px 10px'
  }
};

const TimelineDot = {
  baseStyle: {
    display: 'flex',
    width: '20px',
    height: '20px',
    borderRadius: '50%',
    bgColor: 'white',
    alignSelf: 'baseline',
    position: 'relative'
  },
  variants: {
    solid: ({ colorMode }: ColorMode) => ({
      bgColor: colorMode == 'dark' ? 'white' : 'gray.300'
    }),
    outline: ({ colorMode }: ColorMode) => ({
      bgColor: colorMode == 'dark' ? 'inherit' : 'white',
      borderColor: colorMode == 'dark' ? 'white' : 'gray.300',
      borderWidth: '1px'
    }),
    dots: ({ colorMode }: ColorMode) => ({
      borderColor: colorMode == 'dark' ? 'white' : 'gray.300',
      borderWidth: '1px',
      _after: {
        content: "''",
        width: '10px',
        height: '10px',
        borderRadius: '50%',
        position: 'absolute',
        bgColor: 'gray.300',
        top: '50%',
        left: '50%',
        transform: 'translate(-50%,-50%)'
      }
    })
  },
  sizes: {},
  defaultProps: {
    variant: 'dots'
  }
};
const TimelineConnector = {
  baseStyle: ({ colorMode }: ColorMode) => ({
    width: '5px',
    bgColor: colorMode == 'dark' ? 'white' : 'gray.300',
    my: '5px',
    flexGrow: 1
  }),
  sizes: {}
};
export const theme = extendTheme({
  components: {
    TimelineContainer,
    TimelineItem,
    TimelineContent,
    TimelineSeparator,
    TimelineDot,
    TimelineConnector,
    TimelineInverseContent
  }
});

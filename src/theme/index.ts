import { extendTheme } from '@chakra-ui/react';

const TableDataContainer = {
  baseStyle: {
    boxShadow: 'md',
    background: 'blue'
  },
  variants: {
    rounded: {
      borderRadius: 'xl',
      boxShadow: 'xl'
    },
    smooth: {
      borderRadius: '2px',
      boxShadow: 'md'
    }
  },
  // The default variant value
  defaultProps: {
    variant: 'smooth'
  }
};
export const theme = extendTheme({ components: { TableDataContainer } });

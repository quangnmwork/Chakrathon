import theme from './../src/theme';
// addDecorator(story => <ChakraProvider theme={theme}>{story()}</ChakraProvider>);
export const parameters = {
  actions: { argTypesRegex: '^on[A-Z].*' },
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/
    }
  },
  chakra: { theme }
};

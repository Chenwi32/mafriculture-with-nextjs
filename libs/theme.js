import { extendTheme } from '@chakra-ui/react'


const colors = {
  brand: {
    900: "#EC1F04",
    800: "#444545",
    700: "#fff",
  },
};

const theme = extendTheme({
  config: {
        initialColorMode: colors
  },
});

export default theme;







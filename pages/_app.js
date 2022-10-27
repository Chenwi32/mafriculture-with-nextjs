import Layout from "../components/layout";
import "../styles/globals.css";
import { ChakraProvider, extendTheme } from "@chakra-ui/react";

import "@fortawesome/fontawesome-svg-core/styles.css"; // import Font Awesome CSS
import { config } from "@fortawesome/fontawesome-svg-core";

const theme = extendTheme({
  colors: {
    brand: {
      100: " #EC1F04 ",
      200: "#444545",
      300: "#fff",
    },
  },
});

function MyApp({ Component, pageProps }) {
  return (
    <ChakraProvider theme={theme} >
    <Layout>
      <Component {...pageProps} />
    </Layout>
     </ChakraProvider>
  );
}

export default MyApp;

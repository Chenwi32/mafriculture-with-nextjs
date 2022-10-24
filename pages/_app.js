import Layout from "../components/layout";
import "../styles/globals.css";
import { ChakraProvider } from "@chakra-ui/react";

import "@fortawesome/fontawesome-svg-core/styles.css"; // import Font Awesome CSS
import { config } from "@fortawesome/fontawesome-svg-core";
import theme from "../libs/theme";

function MyApp({ Component, pageProps }) {
  return (
    <ChakraProvider theme={theme}>
      <Layout>{<Component {...pageProps} />}</Layout>
    </ChakraProvider>
  );
}

export default MyApp;

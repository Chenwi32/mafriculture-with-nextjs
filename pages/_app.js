import Layout from "../components/layout";
import "../styles/globals.css";


import "@fortawesome/fontawesome-svg-core/styles.css"; // import Font Awesome CSS
import { config } from "@fortawesome/fontawesome-svg-core";


function MyApp({ Component, pageProps }) {
  return (
    <Layout>
     { <Component {...pageProps} />}
    </Layout>
  );
}

export default MyApp;

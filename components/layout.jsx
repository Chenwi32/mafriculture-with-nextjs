import reducer, { initialstate } from "../libs/reducer";
import { StateProvider } from "../libs/stateProvider";
import Footer from "./footer";
import Navigation from "./navigation";

const Layout = ({children}) => {
    return (
    
        <StateProvider
          initialState={initialstate}
          reducer={reducer}
            >
              <Navigation />
        <main>{children}</main>
        <Footer />  

        </StateProvider>
    );
}

export default Layout;
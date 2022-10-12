import Footer from "./footer";
import Navigation from "./navigation";

const Layout = ({children}) => {
    return (
        <>
            <Navigation />
            <main>
                {children}
            </main>
            <Footer/>
        
        </>
    );
}

export default Layout;
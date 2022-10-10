import Footer from "./footer";
import Navigation from "./navigation";

const Layout = ({children}) => {
    return (
        <div>
            <Navigation />
            <main>
                {children}
            </main>
            <Footer/>
        
        </div>
    );
}

export default Layout;
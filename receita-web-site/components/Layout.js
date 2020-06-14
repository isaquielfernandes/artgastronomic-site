import Meta from "./Meta";
import Navigation from "./Navigation";
import Contacto from "./Contacto";
import Footer from './Footer';

const Layout = ({ children }) =>(
    <>
        <Meta/>
        <Navigation/>
        <div className="mg-t-15 container">
            {children}
        </div>
        <Contacto/>
        <Footer/>
    </>
)

export default Layout

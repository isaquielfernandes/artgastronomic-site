import Meta from "./Meta";
import Navigation from "./Navigation";
import Contacto from "./Contacto";
import Footer from './Footer';

const Layout = ({ children }) =>(
    <div>
        <Meta/>
        <Navigation/>
        <div className="mg-t-15 container">
            {children}
        </div>
        <Contacto/>
        <Footer/>
    </div>
)

export default Layout

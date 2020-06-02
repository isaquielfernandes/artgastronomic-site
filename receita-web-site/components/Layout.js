import Meta from "./Meta";
import Navigation from "./Navigation";
import Footer from './Footer';

const Layout = ({ children }) =>(
    <>
        <Meta/>
        <Navigation/>
        <div className="section container">
            {children}
        </div>
        <Footer/>
    </>
)

export default Layout
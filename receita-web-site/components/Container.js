import Navigation from "./Navigation";
import Contacto from "./Contacto";
import Meta from "./Meta";
import Footer from "./Footer";

const Container = (prosps) => (
    <>
        <Meta/>
        <Navigation/>
            {prosps.children}
        <Contacto/>
        <Footer/>
    </>
);

export default Container;

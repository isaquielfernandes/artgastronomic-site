import Navigation from "./Navigation";
import Banner from "./Banner";
import Album from "./Album";
import Contacto from "./Contacto";
import Meta from "./Meta";
import Footer from "./Footer";
import MainSection from "./MainSection";

const Container = (prosps) => (
    <div>
        <Meta/>
        <Navigation/>
          {prosps.children}
        <Contacto/>
        <Footer/>
    </div>
);

export default Container;

import Navigation from "./Navigation";
import Contacto from "./Contacto";
import Meta from "./Meta";
import Footer from "./Footer";

const Container = (prosps) => (
    <div>
        <Meta/>
        <Navigation/>
          <div className="">
              {prosps.children}
          </div>
        <Contacto/>
        <Footer/>
    </div>
);

export default Container;

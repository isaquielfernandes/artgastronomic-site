import Navigation from "./Navigation";
import Banner from "./Banner";
import Album from "./Album";
import Contacto from "./Contacto";
import Meta from "./Meta";
import MainSection from "./MainSection";

const Container = (prosps) => (
    <div>
        <Meta/>
        <Navigation/>
        <Banner/>
        <MainSection>
            <div>{prosps.children}</div>
        </MainSection>
        <Album/>
        <Contacto/>
    </div>
);

export default Container;

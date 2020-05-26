import Navigation from "./Navigation";
import Banner from "./Banner";
import Head from "next/head";
import MainSection from "./MainSection";
import Album from "./Album";
import Contacto from "./Contacto";

const Container = (prosps) => (
    <div>
        <Head>
            <title>Art Gastronomic</title>
            <link rel="stylesheet" href="/css/bootstrap.css" />
            <link rel="stylesheet" href="/css/main.css" />
        </Head>
        <Navigation/>
        <Banner/>
        <div className="container p-4">{prosps.children}</div>
        <Album/>
        <Contacto/>
    </div>
);

export default Container;
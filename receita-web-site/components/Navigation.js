import Link from "next/link"; 
import Logo from "./Logo";
import React, { useState } from 'react';
import {Sidebar} from "primereact/sidebar";
import {Button} from 'primereact/button';


const Navigation = () => {
   const [visibleLeft, setVisibleLeft] = useState(false);

  return(
    <header>
        <nav className="navbar navbar-expand-lg navbar-dark bg-primary fixed-top">
            <Link href="/">     
                <a className="navbar-brand">
                    <Logo/>
                    ArtGastronomic
                </a>
            </Link>
            <button className="navbar-toggler" type="button" data-toggle="offcanvas" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                 <span className="navbar-toggler-icon" />
            </button>
            
            <Button icon="pi pi-arrow-right" onClick={(e) => setVisibleLeft(true)}  style={{marginRight:'.25em'}} />

            <Sidebar visible={visibleLeft} baseZIndex={1000000} onHide={() => setVisibleLeft(false)}>
                
                
            </Sidebar>

            <div className="navbar-collapse offcanvas-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav mr-auto">
                <li className="nav-item">
                    <Link href="/index">
                        <a className="nav-link">Home</a>
                    </Link>
                </li>
                <li className="nav-item">
                    <Link href="/">
                         <a className="nav-link" href="https://www.youtube.com/channel/UCybV8OZ7XZ9U30ESJ_r2UCg" target="_blank">YouTube</a>
                    </Link>
                </li>
                <li className="nav-item">
                    <Link href="/">
                        <a className="nav-link" href="#receitas">Receitas</a>
                    </Link>
                </li>
                <li className="nav-item">
                    <Link href="/">
                         <a className="nav-link" href="#contact">Contactos</a>
                    </Link>
                </li>
            </ul>
            </div>
        </nav>
    </header>
 )
}

export default Navigation;

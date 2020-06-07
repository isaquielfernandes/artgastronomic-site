import Link from "next/link"; 
import Logo from "./Logo";
import React, { useState } from 'react';
import {Sidebar} from "primereact/sidebar";
import {Button} from 'primereact/button';


const Navigation = () => {
  const [visibleRight, setVisibleRight] = useState(false);

  return(
    <header>
        <nav className="navbar navbar-expand-lg navbar-dark bg-primary fixed-top">
            <Link href="/">     
                <a className="navbar-brand">
                    <Logo/>
                    ArtGastronomic
                </a>
            </Link>
            <button className="navbar-toggler" type="button" data-toggle="offcanvas" data-target="#navbarContent" aria-controls="navbarContent" aria-expanded="false" aria-label="Toggle navigation">
                 <span className="navbar-toggler-icon" />
            </button>

            <Button icon="pi pi-arrow-right" onClick={(e) => setVisibleRight(true)}  style={{marginRight:'.25em'}} />
       
            <Sidebar visible={visibleRight} position="right" baseZIndex={1000000} onHide={() => setVisibleRight(false)} className="navbar-collapse offcanvas-collapse" id="navbarContent">    
              <ul className="navbar-nav mr-auto">
                <li className="nav-item">
                    <Link href="/index">
                        <a className="nav-link pl-1">Home</a>
                    </Link>
                </li>
                <li className="nav-item">
                    <Link href="/">
                         <a className="nav-link pl-1" href="https://www.youtube.com/channel/UCybV8OZ7XZ9U30ESJ_r2UCg" target="_blank">YouTube</a>
                    </Link>
                </li>
                <li className="nav-item">
                    <Link href="/">
                        <a className="nav-link pl-1">Receitas</a>
                    </Link>
                </li>
                <li className="nav-item">
                    <Link href="/">
                         <a className="nav-link pl-1">Contactos</a>
                    </Link>
                </li>
              </ul>
            </Sidebar>
        </nav>
    </header>
 )
}

export default Navigation;

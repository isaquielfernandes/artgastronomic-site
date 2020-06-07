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
            <button className="navbar-toggler" type="button" onClick={(e) => setVisibleLeft(true)} data-toggle="oooffcanvas" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                 <span className="navbar-toggler-icon" />
            </button>

            <div className="navbar-collapse oooffcanvas-collapse" id="navbarContent">
            
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
                        <a href="#receitas" className="nav-link pl-1">Receitas</a>
                    </Link>
                </li>
                <li className="nav-item">
                    <Link href="/">
                         <a href="#contact" className="nav-link pl-1">Contactos</a>
                    </Link>
                </li>
            </ul>
            </div>

            <Sidebar visible={visibleRight} position="right" baseZIndex={1000000} onHide={() => setVisibleRight(false)}>
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
                        <a href="#receitas" className="nav-link pl-1">Receitas</a>
                    </Link>
                </li>
                <li className="nav-item">
                    <Link href="/">
                         <a href="#contact" className="nav-link pl-1">Contactos</a>
                    </Link>
                </li>
              </ul>
              <Button type="button" onClick={(e) => setVisibleRight(false)} label="Cancel" className="p-button-secondary"/>
            </Sidebar>

        </nav>
    </header>
 )
}

export default Navigation;

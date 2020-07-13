import Link from "next/link"; 
import Logo from "./Logo";
import React, { useState } from 'react';
import {Sidebar} from "primereact/sidebar";
import {Button} from 'primereact/button';


const Navigation = () => {
  const [visible, setVisible] = useState(false);

  return(
    <header>
        <nav className="navbar navbar-expand-lg navbar-dark bg-primary fixed-top">
            <Link href="/">     
                <a className="navbar-brand">
                    <Logo/>
                    ArtGastronomic
                </a>
            </Link>
            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarContent" aria-controls="navbarContent" aria-expanded="false" aria-label="Toggle navigation">
                 <span className="navbar-toggler-icon" />
            </button>

            <div className="collapse navbar-collapse" id="navbarContent">    
              <ul className="navbar-nav mr-auto">
                <li className="nav-item">
                    <Link href="/index">
                        <a className="nav-link pl-1">Home</a>
                    </Link>
                </li>
                <li className="nav-item">
                    <Link href="/">
                         <a className="nav-link pl-1" href="https://www.youtube.com/channel/UCybV8OZ7XZ9U30ESJ_r2UCg" target="_blank" rel="noreferrer noopener">YouTube</a>
                    </Link>
                </li>
                <li className="nav-item">
                    <Link href="/#receita">
                        <a className="nav-link pl-1">Receitas</a>
                    </Link>
                </li>
                <li className="nav-item">
                    <Link href="/contact">
                         <a className="nav-link pl-1">Contacto</a>
                    </Link>
                </li>
              </ul>  
            </div>
        </nav>
    </header>
 )
}

export default Navigation;

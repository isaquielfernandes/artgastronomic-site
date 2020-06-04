import React, { useState } from 'react';
import { categorias } from '../lib/constante'

const MainSection = (prosps) => {
    const [categoria, setCategoria] = useState(null);

    const handleClick = (e) => {
        e.preventDefault();
        setCategoria(e.value);
    }

    return(
        <div role="main" className="section">
            <hr className="hr" />
            <div id="receitas" className="container">
                <div className="row">
                    <div className="col-sm-12 col-md-12 col-lg-9 mb-2">
                            <section className="receita-section">
                                <div className="card">
                                    {prosps.children}
                                </div>
                            </section>
                    </div>{/* receita post end */}
                    <div className="col-sm-12 col-md-12 col-lg-3 mb-2 ">
                        <section id="categoria-section" className="categoria-section d-none d-lg-block">
                            <div id="categorias" className="card">
                                <div id="categoria-header" className="card-header">
                                    <header>
                                        <h5>Categorias</h5>
                                        <hr/>
                                    </header>
                                </div>
                                <div className="collapse show categoria" id="collapseCategoria" aria-labelledby="categoria-header" data-parent="#categoria-section">
                                    <div className="card-body p-2">
                                        <nav className="receitaFilter clearfix list-group list-group-flush">
                                            { categorias.map((cat) => (
                                                <a href="" key={cat.value} data-filter={cat.value} onClick={handleClick} className={`list-group-item list-group-item-action p-1 ${cat.value == "*" ? ' active ' : ''}`} aria-selected="false">{cat.label}</a>
                                            ))}
                                        </nav>
                                    </div>
                                </div>
                            </div>
                        </section>
                    </div>{/* categoria receita end */}
                </div>
            </div>
        </div>
    )

};

export default MainSection;

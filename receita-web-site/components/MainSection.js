import React, { useState } from 'react';
import {Dropdown} from 'primereact/dropdown';

const MainSection = (prosps) => {
    const [categoria, setCategoria] = useState(null);

    let categorias = [
        {label: 'Peixe', value: 'peixe'},
        {label: 'Carne', value: 'carne'},
        {label: 'Entradas & Petiscos', value: 'entradas-petiscos'},
        {label: 'Polvo, Lulas & Chocos', value: 'polvo-lulas-chocos'},
        {label: 'Sobremesas & Doces', value: 'sobremesas-doces'},
        {label: 'Vegetarianos', value: 'vegetarianos'},
        {label: 'Vegan', value: 'vegan'},
        {label: 'Sopas', value: 'sopas'},
        {label: 'Arroz', value: 'arroz'},
        {label: 'Pães', value: 'paes'},
        {label: 'Internacional', value: 'internacional'},
        {label: 'Mariscos', value: 'mariscos'},
        {label: 'Molhos', value: 'molhos'},
        {label: 'Acompanhamentos', value: 'acompanhamentos'}
    ];

    const onCategoriaChange = (e) => {
        setCategoria(e.value);
    };

    const handleClick = (e) => {
        e.preventDefault();
        setCategoria(e.value);
    }

    return(
        <div className="section">
            <hr className="hr" />
            <div id="receitas" className="container">
                <div className="row">
                    <div className="col-sm-12 col-md-12 col-lg-9 mb-2">
                            <section className="receita-section">
                                <div className="card">
                                    <div className="card-header">
                                        <header>
                                            <h5 className=""style={{width: '10rem'}}>Receitas</h5>
                                            <hr/>
                                            <Dropdown value={categoria} options={categorias} onChange={onCategoriaChange} className="float-sm-right" style={{width: '16rem'}}
                                                       editable={false} placeholder="Selecione uma Categoria" />
                                            {/*<div style={{marginTop: '.5em'}}>{categoria ? 'Selected Cat: ' + categoria : 'No categoria selected'}</div>*/}
                                        </header>
                                    </div>
                                    {prosps.children}
                                </div>
                            </section>
                    </div>{/* receita post end */}
                    <div className="col-sm-12 col-md-12 col-lg-3 mb-2 ">
                        <section id="categoria-section" className="categoria-section d-none d-md-block">
                            <div id="categorias" className="card">
                                <div id="categoria-header" className="card-header">
                                    <header>
                                        <h5>Categorias
                                            <button className="btn btn-outline-primary btn-sm float-right" data-toggle="collapse" data-target="#collapseCategoria" aria-expanded="true" aria-controls="collapseCategoria">
                                                <i className="fa fa-window-maximize" aria-hidden="false" />
                                            </button>
                                        </h5>
                                    </header>
                                </div>
                                <div className="collapse show categoria" id="collapseCategoria" aria-labelledby="categoria-header" data-parent="#categoria-section">
                                    <div className="card-body p-2">
                                        <nav className="receitaFilter clearfix list-group list-group-flush">
                                            <a href="" data-filter="*" onClick={handleClick} className="list-group-item list-group-item-action p-1 active" aria-selected="true">Todos</a>
                                            { categorias.map((cat) => (
                                                <a href="" key={cat.value} data-filter={cat.value} onClick={handleClick} className="list-group-item list-group-item-action p-1" aria-selected="false">{cat.label}</a>
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

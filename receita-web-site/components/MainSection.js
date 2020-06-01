
const MainSection = (prosps) => (
    <div className="section">
        <hr className="hr" />
        <div id="receitas" className="container">
            <div className="row">
                <div className="col-sm-12 col-md-12 col-lg-9 mb-2 nav-cat">
                    <div className="nav-scroller shadow-sm">
                        <nav className="nav nav-underline">
                        <a className="nav-link active" href="#">Categorias</a>
                        <a className="nav-link" href="#">Todos</a>
                        <a className="nav-link" href="#">Peixes</a>
                        <a className="nav-link" href="#">Carne</a>
                        <a className="nav-link" href="#">Vegan</a>
                        <a className="nav-link" href="#">Arroz</a>
                        <a className="nav-link" href="#">Pães</a>
                        <a className="nav-link" href="#">Link</a>
                        <a className="nav-link" href="#">Link</a>
                        </nav>
                    </div>
                </div>
                <div className="col-sm-12 col-md-12 col-lg-9 mb-2">
                    <section className="receita-section">
                        <div className="card">
                            <div className="card-header">
                                <header>
                                    <h5 className="text-center">Receitas</h5>
                                </header>
                            </div>
                            {prosps.children}
                        </div>
                    </section>
                </div>{/* receita post end */}
                <div className="col-sm-12 col-md-12 col-lg-3 mb-2 float-sm-left">
                    <section id="categoria-section" className="categoria-section">
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
                                <nav className="receitaFilter clearfix list-group list-group-flush ">
                                    <a href="#" data-filter="*" className="list-group-item
                                    list-group-item-action p-1 active" aria-selected="true">Todos</a>
                                    <a href="#" data-filter="#peixe" className="list-group-item
                                    list-group-item-action p-1" aria-selected="false">Peixe</a>
                                    <a href="#" data-filter="#carne" className="list-group-item
                                    list-group-item-action p-1" aria-selected="false">Carne</a>
                                    <a href="#" data-filter="#entradas-petiscos" className="list-group-item list-group-item-action p-1" aria-selected="false">Entradas &amp; Petiscos</a>
                                    <a href="#" data-filter="#polvo-lulas-chocos" className="list-group-item list-group-item-action p-1" aria-selected="false">Polvo, Lulas &amp; Chocos</a>
                                    <a href="#" data-filter="#sobremesas-doces" className="list-group-item list-group-item-action p-1" aria-selected="false">Sobremesas &amp; Doces</a>
                                    <a href="#" data-filter="#vegetarianos" className="list-group-item list-group-item-action p-1" aria-selected="false">Vegetarianos</a>
                                    <a href="#" data-filter="#vegan" className="list-group-item
                                    list-group-item-action p-1" aria-selected="false">Vegan</a>
                                    <a href="#" data-filter="#sopas" className="list-group-item
                                    list-group-item-action p-1" aria-selected="false">Sopas</a>
                                    <a href="#" data-filter="#arroz" className="list-group-item
                                    list-group-item-action p-1" aria-selected="false">Arroz</a>
                                    <a href="#" data-filter="#massa-pizzas" className="list-group-item list-group-item-action p-1" aria-selected="false">Massa &amp; Pizzas</a>
                                    <a href="#" data-filter="#paes" className="list-group-item
                                    list-group-item-action p-1" aria-selected="false">Pães</a>
                                    <a href="#" data-filter="#mariscos" className="list-group-item
                                    list-group-item-action p-1" aria-selected="false">Mariscos
                                    </a><a href="#" data-filter="#internacional" className="list-group-item list-group-item-action p-1" aria-selected="false">Internacional</a>
                                    <a href="#" data-filter="#molhos" className="list-group-item
                                    list-group-item-action p-1" aria-selected="false">Molhos</a>
                                    <a href="#" data-filter="#acompanhamentos" className="list-group-item list-group-item-action p-1" aria-selected="false">Acompanhamentos</a>
                                </nav>
                            </div>
                            </div>
                        </div>
                    </section>
                </div>{/* categoria receita end */}
            </div>
        </div>
    </div>
);

export default MainSection;

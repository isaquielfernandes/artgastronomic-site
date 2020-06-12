import Router from "next/router";

const Album = () => (
    <div>
        {/* outher section */}
        <hr className="hr" />
        <div id="album" className="container section">
            <div className="shadow-sm rounded card mb-3">
            <h3 className="card-header">Post</h3>
            <div id="carouselExampleCaptions" className="carousel slide" data-ride="carousel">
                <ol className="carousel-indicators">
                <li data-target="#carouselExampleCaptions" data-slide-to={0} className="active" />
                <li data-target="#carouselExampleCaptions" data-slide-to={1} />
                <li data-target="#carouselExampleCaptions" data-slide-to={2} />
                </ol>
                <div className="carousel-inner">
                <div className="carousel-item active">
                    <img src="img/img-fundo-01.jpg" className="d-block w-100 outher-img" alt="..." />
                    <div className="carousel-caption d-none d-md-block">
                    <h5 />
                    <p />
                    </div>
                </div>
                <div className="carousel-item">
                    <img src="img/img-fundo-02.jpg" className="d-block w-100 outher-img" alt="..." />
                    <div className="carousel-caption d-none d-md-block">
                    <h5 />
                    <p />
                    </div>
                </div>
                <div className="carousel-item">
                    <img src="img/img-fundo-03.jpg" className="d-block w-100 outher-img" alt="..." />
                    <div className="carousel-caption d-none d-md-block">
                    <h5 />
                    <p />
                    </div>
                </div>
                </div>
                <a className="carousel-control-prev" href="#carouselExampleCaptions" role="button" data-slide="prev">
                <span className="carousel-control-prev-icon" aria-hidden="true" />
                <span className="sr-only">Previous</span>
                </a>
                <a className="carousel-control-next" href="#carouselExampleCaptions" role="button" data-slide="next">
                <span className="carousel-control-next-icon" aria-hidden="true" />
                <span className="sr-only">Next</span>
                </a>
            </div>
            <div className="card-footer text-muted">
                2 days ago
            </div>
            </div>
            <div className="shadow-sm card rounded">
            <div className="card-body text-center">
                <img src="img/logo/logotipo.jpg" className="img-fluid img-thumbnail img-logo mb-2" width={120} height={120} alt="logotipo chefsassyfnandes" />
                <h4 className="card-title text-center"><b>Sassy Fernandes</b></h4>
                <h6 className="card-subtitle mb-2 text-muted" />
                <p className="card-text text-center text-secondary p-2">"COZINHAR É COMO A VIDA.
                CASE COM UMA PESSOA QUE SAIBA COZINHAR...
                O AMOR ACABA...A FOME NÃO."</p>
            </div>
            </div>
        </div>
    </div>

);

export default Album;

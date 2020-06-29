import Router from "next/router";
import Frases from "./Frases";

const Album = () => (
  <section>
    {/* outher section */}
    <hr className="hr" />
    <div id="album" className="container mt-4">
        <div className="row">
            <div className="col-12 col-lg-7 mx-auto">
                <div className="shadow-sm rounded card my-2">
                    <h3 className="card-header">Post Recentes</h3>
                    <div id="carouselExampleCaptions" className="carousel slide" data-ride="carousel">
                        <ol className="carousel-indicators">
                            <li data-target="#carouselExampleCaptions" data-slide-to={0} className="active"/>
                            <li data-target="#carouselExampleCaptions" data-slide-to={1} />
                            <li data-target="#carouselExampleCaptions" data-slide-to={2} />
                        </ol>
                        <div className="carousel-inner">
                            <div className="carousel-item active">
                                <img src="img/img-fundo-01.jpg" className="d-block w-100 outher-img" alt="..."/>
                            </div>
                            <div className="carousel-item">
                                <img src="img/img-fundo-05.jpg" className="d-block w-100 outher-img" alt="..."/>
                            </div>
                            <div className="carousel-item">
                                <img src="img/img-fundo-03.jpg" className="d-block w-100 outher-img" alt="..."/>
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
            </div>
            <Frases />
        </div>
    </div>
  </section>
);

Album.getInitialProps = async (ctx) => {
  const res = await fetch('')
  const json = await res.json()
  return { ultimosReceitas: json.stargazers_count }
}


export default Album;

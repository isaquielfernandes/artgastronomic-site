import Link from "next/link";
import { Button } from 'primereact/button';

const Banner = () => (
    <div className="social-media mt-0">
        <div className="container">
            <div className="row info-social jumbotron">
                <div className="col-sm-12 col-md-4 col-lg-4 text-center">
                    <h3 className="display-6 display-sm-12 text-center" style={{color: '#FD281A'}}>Chef Sassy Fernandes</h3>
                    <b className="text-center bg-dark p-2 my-2" style={{color: '#0A0A0A'}}>
                       Receitas Novas Todas As Semanas
                    </b>
                    <div className="lead btn-group my-3">
                       <a style={{color: '#0F0F0F'}} className="btn btn-danger p-button-danger p-button-raised text-uppercase" href="https://youtube.com/channel/UCybV8OZ7XZ9U30ESJ_r2UCg" target="_blank" rel="noreferrer noopener"><i className="mr-2 fa fa-youtube-play" />Inscreva-se</a>
                    </div>
                </div>
                <div className="col-sm-12 col-md-8 my-3">
                    <div className="float-right social-media-links">
                        <a style={{background: '#525252', color: '#fff'}} className="btn rounded-circle" href="https://instagram.com/chefsassyfnandes" target="_blank" rel="noreferrer noopener"> 
                          <i className="fa fa-instagram" />
                          <span className="sr-only">
                            Instagram
                          </span>
                        </a>
                        <a style={{background: '#525252', color: '#fff'}} className="btn rounded-circle ml-1" href="https://facebook.com/chfsassy/" target="_blank" rel="noreferrer noopener"> 
                          <i className="fa fa-facebook" />
                          <span className="sr-only">
                            Facebook
                          </span>
                        </a>
                        <a style={{background: '#525252', color: '#fff'}} className="btn rounded-circle ml-1" href="https://www.youtube.com/channel/UCybV8OZ7XZ9U30ESJ_r2UCg" target="_blank" rel="noreferrer" noopener>
                          <i className="fa fa-youtube" />
                          <span className="sr-only">
                            YouTube
                          </span>
                        </a>
                    </div>
                    <hr />
                </div>
            </div>
        </div>
    </div>
);

export default Banner;

import Link from "next/link";
import { Button } from 'primereact/button';

const Banner = () => (
    <div className="social-media mt-0">
        <div className="container">
            <div className="row info-social jumbotron">
                <div className="col-sm-12 col-md-4 col-lg-4 text-center">
                    <h3 className="display-6 display-sm-12 text-center" style={{color: '#FD281A', opacity: 1}}>Chef Sassy Fernandes</h3>
                    <p className="text-center text-info">
                       <b>Receitas Novas Todas As Semanas</b>
                    </p>
                    <div className="btn-group" role="group">
                       <a className="p-button-danger p-button-raised text-uppercase" href="https://youtube.com/channel/UCybV8OZ7XZ9U30ESJ_r2UCg" target="_blank" rel="noreferrer"><i className="mr-2 fa fa-youtube-play" aria-hidden="true" />Inscreva-se</a>
                    </div>
                </div>
                <div className="col-sm-12 col-md-8 col-lg-8">
                    <div className="float-right social-media-links">
                        <a className="p-button-warning p-button-raised " href="https://instagram.com/chefsassyfnandes" target="_blank" rel="noreferrer noopener"><i className="fa fa-instagram" /></a>
                        <a className="p-button-info p-button-raised ml-1" href="https://facebook.com/chfsassy/" target="_blank" rel="noreferrer noopener"><i className="fa fa-facebook" /></a>
                        <a className="p-button-danger p-button-raised ml-1" href="https://www.youtube.com/channel/UCybV8OZ7XZ9U30ESJ_r2UCg" target="_blank" rel="noreferrer"><i className="fa fa-youtube" /></a>
                    </div>
                    <hr />
                </div>
            </div>
        </div>
    </div>
);

export default Banner;

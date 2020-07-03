import Link from "next/link";

const Banner = () => (
    <div className="social-media mt-0">
        <div className="container">
            <div className="row info-social jumbotron">
                <div className="col-sm-12 col-md-4 col-lg-4 text-center">
                    <h3 className="display-6 display-sm-12 text-center" style={{color: '#FD281A', opacity: 1}}>Chef Sassy Fernandes</h3>
                    <p className="text-center text-info"><b>Receitas Novas Todas As Semanas</b></p>
                    <p className="lead">
                    </p>
                    <div className="btn-group" role="group">
                        <a className="btn btn-secondary text-uppercase" href="https://youtube.com/channel/UCybV8OZ7XZ9U30ESJ_r2UCg" target="_blank" rel="noopener"><i className="mr-2 fa fa-youtube-play" aria-hidden="true" /> Inscreva-se</a>
                    </div>
                    <p />
                </div>
                <div className="col-sm-12 col-md-8 col-lg-8">
                    <div className="float-right social-media-links">
                        <a className="btn btn-warning " href="https://instagram.com/chefsassyfnandes" target="_blank" rel="noreferrer noopener"><i className="fa fa-instagram" /></a>
                        <a className="btn btn-info ml-1" href="https://facebook.com/chfsassy/" target="_blank" rel="noreferrer noopener"><i className="fa fa-facebook" /></a>
                        <a className="btn btn-danger ml-1" href="https://www.youtube.com/channel/UCybV8OZ7XZ9U30ESJ_r2UCg" target="_blank" rel="noopener"><i className="fa fa-youtube" /></a>
                    </div>
                    <hr />
                </div>
            </div>
        </div>
    </div>
);

export default Banner;

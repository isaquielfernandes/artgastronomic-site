import Router from "next/router";

const Contacto = () => (
    <div>
        {/* section contato */}
        <hr className="hr" />
        <div id="contact" className="container section">
            <aside className="address p-2">
            <h2 >Find Us</h2>
            <div className="row justify-content-sm-center">
                <p className="col-sm-12 col-md-4 col-lg-3"><strong>Address</strong><br /><i className="fas fa-map-marker-alt" /> 123
                Main Street<br /><i className="fas fa-map-marker-alt" /> New York, NY 10001</p>
                <p className="col-sm-12 col-md-2 col-lg-3"><strong>Contact</strong><br /><i className="fas fa-mobile-alt mr-1" />
                 935728467<i className="fas
                fa-phone-square-alt ml-2 mr-1" /> 945790354<br /><i className="fas
                fa-envelope-square" /> artgrastronomic@gmail.com</p>
                <p className="col-sm-12 col-md-6 col-lg-6"><strong>Hours</strong><br /><i className="far fa-clock" /> Monday–Friday:
                9:00AM–5:00PM<br /><i className="far fa-clock" /> Saturday &amp; Sunday: 11:00AM–3:00PM</p>
            </div>
            </aside>
        </div>
    </div>
);

export default Contacto;
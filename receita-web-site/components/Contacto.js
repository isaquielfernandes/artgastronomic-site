import Router from "next/router";

const Contacto = () => (
    <div>
        {/* section contato */}
        <hr className="hr" />
        <div id="contact" className="container mt-4">
            <aside className="address p-2">
            <h2 >Find Us</h2>
            <div className="row justify-content-sm-center">
                <p className="col-sm-12 col-md-6 col-lg-3">
                    <strong>Address</strong><br /><i className="fas fa-map-marker-alt" /> Setúbal, 2810-226 Almada<br /><i className="fas fa-map-marker-alt" /> Lisboa, Portugal
                </p>
                <p className="col-sm-12 col-md-6 col-lg-3">
                    <strong>Contact</strong><br /><i className="fas fa-mobile-alt mr-1" />935728467<i className="fas fa-phone-square-alt ml-2 mr-1" /> 945790354<br /><i className="fas fa-envelope-square mr-1" />artgrastronomic@gmail.com
                </p>
                <p className="col-sm-12 col-md-12 col-lg-6">
                    <strong>Hours</strong><br /><i className="far fa-clock" /> Mon–Fri: 9:00AM–5:00PM<br /><i className="far fa-clock" /> Sat &amp; Sun: 11:00AM–3:00PM
                </p>
            </div>
            </aside>
        </div>
    </div>
);

export default Contacto;

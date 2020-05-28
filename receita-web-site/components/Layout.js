import Meta from "./Meta";
import Navigation from "./Navigation";

const Layout = ({ children }) =>(
    <>
        <Meta/>
        <Navigation/>
        <div className="container">
            <div className="row">
                    <div className="col-md-6 offset-md-3">
                            <main>{children}</main>
                    </div>
                </div>
        </div>
    </>
)

export default Layout
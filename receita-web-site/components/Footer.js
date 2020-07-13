
const Footer = () => (
    <>
        {/* footer */}
        <footer className="footer-section mt-4">
            <div >
               <a className="btn btn-lg" href="https://be.contentful.com/login" target="_blank" rel="noreferrer noopener">
                <span className="">
                  Admin
                </span>
               </a>
            </div>
            <a className="btn btn-lg" href="https://instagram.com/chefsassyfnandes" target="_blank" rel="noreferrer noopener">
                <i className="fa fa-instagram" />
                <span className="sr-only">
                  Instagram
                </span>
            </a>
            <a className="btn btn-lg" href="https://facebook.com/chfsassy/" target="_blank" rel="noreferrer noopener">
               <i className="fa fa-facebook" />
               <span className="sr-only">
                 Facebook
               </span>
            </a>
            <a className="btn btn-lg" href="https://www.youtube.com/channel/UCybV8OZ7XZ9U30ESJ_r2UCg" target="_blank" rel="noreferrer">
               <i className="fa fa-youtube" />
               <span className="sr-only">
                 YouTube
               </span>
            </a>
            <p className="copyright mt-2 pb-0">
                Copyright ©
                All rights reserved <i className="ion-heart" aria-hidden="true" /> by Art
                Gastronomic!
            </p>
        </footer>
    </>
);

export default Footer;

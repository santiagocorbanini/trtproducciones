import React from 'react';
import logo from '../../assets/img/logo.png'
import logoPampa from '../../assets/img/LogoPampaWhite.png'

const Footer = () => {
    return (
        <footer className="footer text-center">
            <div className="container">
                <div className="row">
                    {/*<!-- Footer Location
                    <div className="col-lg-4 mb-5 mb-lg-0">
                        <h4 className="text-uppercase mb-4">Location</h4>
                        <p className="lead mb-0">
                            2215 John Daniel Drive
                            <br />
                            Clark, MO 65243
                        </p>
                    </div>
                    -->*/}
                    {/*<!-- Footer Social Icons-->*/}
                    <div className="col-lg-6 mb-5 mb-lg-0">
                        <a href="https://www.pampacode.com" target={"_blank"}>
                            <img src={logoPampa} alt="Pampacode" id='logo-footer-pampa' />
                        </a>
                        <p className="lead mb-0">
                        © Todos los derechos reservados - {(new Date().getFullYear())}.
                        </p>
                        <a className="btn btn-outline-light btn-social mx-1 mt-3" href="https://www.pampacode.com" target={"_blank"}><i className="fas fa-fw fa-globe"></i></a>
                        <a className="btn btn-outline-light btn-social mx-1 mt-3" href="https://www.instagram.com/pampacode" target={"_blank"}><i className="fab fa-fw fa-instagram"></i></a>
                    </div>
                    {/*<!-- Footer About Text-->*/}
                    <div className="col-lg-6">
                        <img src={logo} alt="2222 Agencia" id='logo-footer' />
                        <p className="lead mb-0">
                            Barcelona, España.
                        </p>
                        <a className="btn btn-outline-light btn-social mx-1 mt-3" href="https://www.2222agencia.com" target={"_blank"}><i className="fas fa-fw fa-globe"></i></a>
                        <a className="btn btn-outline-light btn-social mx-1 mt-3" href="https://www.instagram.com/2222agencia/" target={"_blank"}><i className="fab fa-fw fa-instagram"></i></a>
                        <a className="btn btn-outline-light btn-social mx-1 mt-3" href={"mailto:info@2222agencia.com"}><i className="fas fa-envelope"></i></a>
                        <a className="btn btn-outline-light btn-social mx-1 mt-3" href="https://wa.me/+34667569323" target={"_blank"}><i className="fab fa-fw fa-whatsapp"></i></a>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;

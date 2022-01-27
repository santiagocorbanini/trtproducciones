import React from 'react';

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
                    <h4 className="text-uppercase mb-1">Pampa</h4>
                    <p className="lead mb-0">
                        Todos los derechos reservados.
                    </p>
                    <a className="btn btn-outline-light btn-social mx-1 mt-3" href="#!"><i className="fas fa-fw fa-globe"></i></a>
                    <a className="btn btn-outline-light btn-social mx-1 mt-3" href="#!"><i className="fab fa-fw fa-whatsapp"></i></a>
                    <a className="btn btn-outline-light btn-social mx-1 mt-3" href="#!"><i className="fab fa-fw fa-linkedin-in"></i></a>
                </div>
                {/*<!-- Footer About Text-->*/}
                <div className="col-lg-6">
                    <h4 className="text-uppercase mb-1">2222 Agencia</h4>
                    <p className="lead mb-0">
                        Freelance is a free to use, MIT.
                    </p>
                    <a className="btn btn-outline-light btn-social mx-1 mt-3" href="#!"><i className="fas fa-fw fa-globe"></i></a>
                    <a className="btn btn-outline-light btn-social mx-1 mt-3" href="#!"><i className="fab fa-fw fa-instagram"></i></a>
                    <a className="btn btn-outline-light btn-social mx-1 mt-3" href="#!"><i className="fab fa-fw fa-whatsapp"></i></a>
                </div>
            </div>
        </div>
    </footer>
  );
};

export default Footer;

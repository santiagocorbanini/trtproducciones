import '../../css/styles.css';
import logo from '../../assets/img/logo.png';

const Nav = () => {
    return (

        <nav className="navbar navbar-expand-lg bg-secondary text-uppercase fixed-top" id="mainNav">
            <div className="container">
                <a className="navbar-brand" href="#home"><img src={logo} alt={logo} id="logo" /></a>
                <button className="navbar-toggler text-uppercase font-weight-bold bg-primary text-white rounded" id="menu-text" type="button" data-bs-toggle="collapse" data-bs-target="#navbarResponsive" aria-controls="navbarResponsive" aria-expanded="false" aria-label="Toggle navigation">
                    Menu
                </button>
                <div className="collapse navbar-collapse" id="navbarResponsive">
                    <ul className="navbar-nav ms-auto">
                        <li className="nav-item mx-0 mx-lg-1"><a className="nav-link py-3 px-0 px-lg-2 rounded" href="#home">Home</a></li>
                        <li className="nav-item mx-0 mx-lg-1"><a className="nav-link py-3 px-0 px-lg-2 rounded" href="#events">Eventos</a></li>
                        <li className="nav-item mx-0 mx-lg-1"><a className="nav-link py-3 px-0 px-lg-2 rounded" href="#services">Servicios</a></li>
                        <li className="nav-item mx-0 mx-lg-1"><a className="nav-link py-3 px-0 px-lg-2 rounded" href="#artists">Artistas</a></li>
                        <li className="nav-item mx-0 mx-lg-1"><a className="nav-link py-3 px-0 px-lg-2 rounded" href="#about">Nosotros</a></li>
                        <li className="nav-item mx-0 mx-lg-1"><a className="nav-link py-3 px-0 px-lg-2 rounded" href="#contact">Contacto</a></li>
                    </ul>
                </div>
            </div>
        </nav>

    );
};

export default Nav;

import "../../css/styles.css";
import logo from "../../assets/img/logonew2222.png";
import newLogo from "../../assets/img/logonew2222.png";

const Nav = () => {
    return (
        <nav
        className="navbar navbar-expand-lg bg-secondary fixed-top"
        id="mainNav"
        >
        <div className="container">
            <button
            className="navbar-toggler text-uppercase font-weight-bold bg-primary text-white rounded"
            id="menu-text"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarResponsive"
            aria-controls="navbarResponsive"
            aria-expanded="false"
            aria-label="Toggle navigation"
            >
            Menu
            </button>
            <div className="collapse navbar-collapse" id="navbarResponsive">
            <ul className="navbar-nav">
                <li className="nav-item mx-0 mx-lg-1">
                <a className="nav-link py-3 px-0 px-lg-2 rounded" href="#events">
                    Eventos
                </a>
                </li>
                <li className="nav-item mx-0 mx-lg-1">
                <a className="nav-link py-3 px-0 px-lg-2 rounded" href="#artists">
                    Artistas
                </a>
                </li>
                <li className="nav-item mx-0 mx-lg-1">
                <a
                    className="nav-link py-3 px-0 px-lg-2 rounded"
                    href="#services"
                >
                    Servicios
                </a>
                </li>
                <a className="navbar-brand" href="#events">
                <img src={newLogo} alt={logo} id="logo" />
                </a>
                <li className="nav-item mx-0 mx-lg-1">
                <a
                    className="nav-link py-3 px-0 px-lg-2 rounded"
                    href="#convocatoria"
                >
                    Convocatoria
                </a>
                </li>
                <li className="nav-item mx-0 mx-lg-1">
                <a
                    className="nav-link py-3 px-0 px-lg-2 rounded"
                    href="#trabajos"
                >
                    Trabajos
                </a>
                </li>
                <li className="nav-item mx-0 mx-lg-1">
                <a className="nav-link py-3 px-0 px-lg-2 rounded" href="#about">
                    Nosotros
                </a>
                </li>
                <li className="nav-item mx-0 mx-lg-1 ms-auto">
                <a className="nav-link py-3 px-0 px-lg-2 rounded" href="#contact">
                    Contacto
                </a>
                </li>
            </ul>
            </div>
        </div>
        </nav>
    );
};

export default Nav;

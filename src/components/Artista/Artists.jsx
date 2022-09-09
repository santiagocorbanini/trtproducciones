import artist from "../../assets/img/artist.png";
import ToggleDisplay from "react-toggle-display";
import { useState } from "react";

const Artists = () => {
    const [show, setShow] = useState('');

    const handleClick = () => {
        setShow(!show);
    };

    return (
        <section className="page-section portfolio bg-secundary" id="artists">
        <div className="container">
            {/*<!-- Portfolio Section Heading-->*/}
            <h2 className="page-section-heading text-center text-uppercase text-black mb-0">
            Artistas
            </h2>
            {/*<!-- Icon Divider -->*/}
            <div className="divider-custom">
            <div className="divider-custom-line"></div>
            <div className="divider-custom-icon">
                <i className="fas fa-microphone"></i>
            </div>
            <div className="divider-custom-line"></div>
            </div>
            {/*<!-- Portfolio Grid Items-->*/}
            <div className="row justify-content-center">
            {/*<!-- Portfolio Item 1 -->*/}
            <div className="col-md-6 col-lg-3 text-center">
                <div className="portfolio-item mx-auto">
                <img className="img-fluid" src={artist} alt="..." />
                <h4 className="m-2">Ciro</h4>
                <button 
                className="btn btn-primary" 
                onClick={handleClick}
                >Ver Más</button>
                <ToggleDisplay 
                show={show}>
                    <p>
                    Su carrera como solista comienza editando el disco Espejos
                    recibiendo buenas críticas y ventas. En 2010, nuevamente le
                    toca ser soporte, esta vez del artista solista más exitoso del
                    mundo en la historia de la música popular (según el Libro
                    Guiness de los Records), Paul McCartney. Este, tras escuchar
                    todos las de artistas que tenía como opciones soporte para sus
                    shows en Argentina en 2010 decidió quedarse con Ciro.2​
                    </p>
                </ToggleDisplay>
                </div>
            </div>
            {/*<!-- Portfolio Item 2 -->*/}
            <div className="col-md-6 col-lg-3 text-center">
                <div className="portfolio-item mx-auto">
                <img className="img-fluid" src={artist} alt="..." />
                <h4 className="text-align-center m-2">Ciro</h4>
                <p>
                    Su carrera como solista comienza editando el disco Espejos
                    recibiendo buenas críticas y ventas. En 2010, nuevamente le toca
                    ser soporte, esta vez del artista solista más exitoso del mundo
                    en la historia de la música popular (según el Libro Guiness de
                    los Records), Paul McCartney. Este, tras escuchar todos las de
                    artistas que tenía como opciones soporte para sus shows en
                    Argentina en 2010 decidió quedarse con Ciro.2​
                </p>
                </div>
            </div>
            {/*<!-- Portfolio Item 3 -->*/}
            <div className="col-md-6 col-lg-3 text-center">
                <div className="portfolio-item mx-auto">
                <img className="img-fluid" src={artist} alt="..." />
                <h4 className="text-align-center m-2">Ciro</h4>
                <p>
                    Su carrera como solista comienza editando el disco Espejos
                    recibiendo buenas críticas y ventas. En 2010, nuevamente le toca
                    ser soporte, esta vez del artista solista más exitoso del mundo
                    en la historia de la música popular (según el Libro Guiness de
                    los Records), Paul McCartney. Este, tras escuchar todos las de
                    artistas que tenía como opciones soporte para sus shows en
                    Argentina en 2010 decidió quedarse con Ciro.2​
                </p>
                </div>
            </div>
            {/*<!-- Portfolio Item 4 -->*/}
            <div className="col-md-6 col-lg-3 text-center">
                <div className="portfolio-item mx-auto">
                <img className="img-fluid" src={artist} alt="..." />
                <h4 className="text-align-center m-2">Ciro</h4>
                <p>
                    Su carrera como solista comienza editando el disco Espejos
                    recibiendo buenas críticas y ventas. En 2010, nuevamente le toca
                    ser soporte, esta vez del artista solista más exitoso del mundo
                    en la historia de la música popular (según el Libro Guiness de
                    los Records), Paul McCartney. Este, tras escuchar todos las de
                    artistas que tenía como opciones soporte para sus shows en
                    Argentina en 2010 decidió quedarse con Ciro.2​
                </p>
                </div>
            </div>
            </div>
        </div>
        </section>
    );
};

export default Artists;

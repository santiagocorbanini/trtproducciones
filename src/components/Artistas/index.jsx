import artist from "../../assets/img/artist.png"
import ToggleDisplay from "react-toggle-display"
import { useState } from "react"
import { useMediaQuery } from "react-responsive"

const Artistas = () => {
    const [show, setShow] = useState("")

    const handleClick = () => {
        setShow(!show)
    }

    // Const para mapear las redes (seguir...)
    const redes = [
        {
            instagram: {
                url: "https://www.instagram.com/",
                icon: <i className="fab fa-fw fa-instagram fa-lg"></i>,
            },
        },
    ]

    console.log(redes)

    //const isDesktopOrLaptop = useMediaQuery({query: "(min-width: 1224px)",});
    //const isBigScreen = useMediaQuery({ query: "(min-width: 1824px)" });
    const isTabletOrMobile = useMediaQuery({ query: "(max-width: 1224px)" })
    //const isPortrait = useMediaQuery({ query: "(orientation: portrait)" });
    //const isRetina = useMediaQuery({ query: "(min-resolution: 2dppx)" });

    return (
        <section className="page-section portfolio bg-secundary" id="Artistas">
            {/* Test para usar ---> useMediaQuery
        <div>
            <h1>Device Test!</h1>
            {isDesktopOrLaptop && <p>You are a desktop or laptop</p>}
            {isBigScreen && <p>You have a huge screen</p>}
            {isTabletOrMobile && <p>You are a tablet or mobile phone</p>}
            <p>Your are in {isPortrait ? "portrait" : "landscape"} orientation</p>
            {isRetina && <p>You are retina</p>}
        </div> */}
            <div className="container">
                {/*<!-- Portfolio Section Heading-->*/}
                <h2 className="page-section-heading text-center text-uppercase mb-0">
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
                            {isTabletOrMobile ? (
                                <>
                                    <button
                                        className="btn btn-primary m-4"
                                        onClick={handleClick}
                                    >
                                        Ver Más
                                    </button>
                                    <ToggleDisplay show={show}>
                                        <p>
                                            Su carrera como solista comienza
                                            editando el disco Espejos recibiendo
                                            buenas críticas y ventas. En 2010,
                                            nuevamente le toca ser soporte, esta
                                            vez del artista solista más exitoso
                                            del mundo en la historia de la
                                            música popular (según el Libro
                                            Guiness de los Records), Paul
                                            McCartney. Este, tras escuchar todos
                                            las de artistas que tenía como
                                            opciones soporte para sus shows en
                                            Argentina en 2010 decidió quedarse
                                            con Ciro.2​
                                        </p>
                                    </ToggleDisplay>
                                </>
                            ) : (
                                <div>
                                    <p>
                                        Su carrera como solista comienza
                                        editando el disco Espejos recibiendo
                                        buenas críticas y ventas. En 2010,
                                        nuevamente le toca ser soporte, esta vez
                                        del artista solista más exitoso del
                                        mundo en la historia de la música
                                        popular (según el Libro Guiness de los
                                        Records), Paul McCartney. Este, tras
                                        escuchar todos las de artistas que tenía
                                        como opciones soporte para sus shows en
                                        Argentina en 2010 decidió quedarse con
                                        Ciro.2​
                                    </p>
                                    <a
                                        href="https://www.pampacode.com"
                                        target={"_blank"}
                                        rel={"noreferrer"}
                                    >
                                        <i className="fab fa-fw fa-instagram fa-lg"></i>
                                    </a>
                                    <a
                                        href="https://www.pampacode.com"
                                        target={"_blank"}
                                        rel={"noreferrer"}
                                    >
                                        <i className="fab fa-fw fa-instagram fa-lg"></i>
                                    </a>
                                    <a
                                        href="https://www.pampacode.com"
                                        target={"_blank"}
                                        rel={"noreferrer"}
                                    >
                                        <i className="fab fa-fw fa-instagram fa-lg"></i>
                                    </a>
                                </div>
                            )}
                        </div>
                    </div>
                    {/*<!-- Portfolio Item 2 -->*/}
                    <div className="col-md-6 col-lg-3 text-center">
                        <div className="portfolio-item mx-auto">
                            <img className="img-fluid" src={artist} alt="..." />
                            <h4 className="m-2">Ciro</h4>
                            {isTabletOrMobile ? (
                                <>
                                    <button
                                        className="btn btn-primary m-4"
                                        onClick={handleClick}
                                    >
                                        Ver Más
                                    </button>
                                    <ToggleDisplay show={show}>
                                        <p>
                                            Su carrera como solista comienza
                                            editando el disco Espejos recibiendo
                                            buenas críticas y ventas. En 2010,
                                            nuevamente le toca ser soporte, esta
                                            vez del artista solista más exitoso
                                            del mundo en la historia de la
                                            música popular (según el Libro
                                            Guiness de los Records), Paul
                                            McCartney. Este, tras escuchar todos
                                            las de artistas que tenía como
                                            opciones soporte para sus shows en
                                            Argentina en 2010 decidió quedarse
                                            con Ciro.2​
                                        </p>
                                    </ToggleDisplay>
                                </>
                            ) : (
                                <p>
                                    Su carrera como solista comienza editando el
                                    disco Espejos recibiendo buenas críticas y
                                    ventas. En 2010, nuevamente le toca ser
                                    soporte, esta vez del artista solista más
                                    exitoso del mundo en la historia de la
                                    música popular (según el Libro Guiness de
                                    los Records), Paul McCartney. Este, tras
                                    escuchar todos las de artistas que tenía
                                    como opciones soporte para sus shows en
                                    Argentina en 2010 decidió quedarse con
                                    Ciro.2​
                                </p>
                            )}
                        </div>
                    </div>
                    {/*<!-- Portfolio Item 3 -->*/}
                    <div className="col-md-6 col-lg-3 text-center">
                        <div className="portfolio-item mx-auto">
                            <img className="img-fluid" src={artist} alt="..." />
                            <h4 className="m-2">Ciro</h4>
                            {isTabletOrMobile ? (
                                <>
                                    <button
                                        className="btn btn-primary m-4"
                                        onClick={handleClick}
                                    >
                                        Ver Más
                                    </button>
                                    <ToggleDisplay show={show}>
                                        <p>
                                            Su carrera como solista comienza
                                            editando el disco Espejos recibiendo
                                            buenas críticas y ventas. En 2010,
                                            nuevamente le toca ser soporte, esta
                                            vez del artista solista más exitoso
                                            del mundo en la historia de la
                                            música popular (según el Libro
                                            Guiness de los Records), Paul
                                            McCartney. Este, tras escuchar todos
                                            las de artistas que tenía como
                                            opciones soporte para sus shows en
                                            Argentina en 2010 decidió quedarse
                                            con Ciro.2​
                                        </p>
                                    </ToggleDisplay>
                                </>
                            ) : (
                                <p>
                                    Su carrera como solista comienza editando el
                                    disco Espejos recibiendo buenas críticas y
                                    ventas. En 2010, nuevamente le toca ser
                                    soporte, esta vez del artista solista más
                                    exitoso del mundo en la historia de la
                                    música popular (según el Libro Guiness de
                                    los Records), Paul McCartney. Este, tras
                                    escuchar todos las de artistas que tenía
                                    como opciones soporte para sus shows en
                                    Argentina en 2010 decidió quedarse con
                                    Ciro.2​
                                </p>
                            )}
                        </div>
                    </div>
                    {/*<!-- Portfolio Item 4 -->*/}
                    <div className="col-md-6 col-lg-3 text-center">
                        <div className="portfolio-item mx-auto">
                            <img className="img-fluid" src={artist} alt="..." />
                            <h4 className="m-2">Ciro</h4>
                            {isTabletOrMobile ? (
                                <>
                                    <button
                                        className="btn btn-primary m-4"
                                        onClick={handleClick}
                                    >
                                        Ver Más
                                    </button>
                                    <ToggleDisplay show={show}>
                                        <p>
                                            Su carrera como solista comienza
                                            editando el disco Espejos recibiendo
                                            buenas críticas y ventas. En 2010,
                                            nuevamente le toca ser soporte, esta
                                            vez del artista solista más exitoso
                                            del mundo en la historia de la
                                            música popular (según el Libro
                                            Guiness de los Records), Paul
                                            McCartney. Este, tras escuchar todos
                                            las de artistas que tenía como
                                            opciones soporte para sus shows en
                                            Argentina en 2010 decidió quedarse
                                            con Ciro.2​
                                        </p>
                                    </ToggleDisplay>
                                </>
                            ) : (
                                <p>
                                    Su carrera como solista comienza editando el
                                    disco Espejos recibiendo buenas críticas y
                                    ventas. En 2010, nuevamente le toca ser
                                    soporte, esta vez del artista solista más
                                    exitoso del mundo en la historia de la
                                    música popular (según el Libro Guiness de
                                    los Records), Paul McCartney. Este, tras
                                    escuchar todos las de artistas que tenía
                                    como opciones soporte para sus shows en
                                    Argentina en 2010 decidió quedarse con
                                    Ciro.2​
                                </p>
                            )}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Artistas

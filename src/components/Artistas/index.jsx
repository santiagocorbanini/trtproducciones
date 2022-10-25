import artist from "../../assets/img/artist.png"
import ToggleDisplay from "react-toggle-display"
import { useState } from "react"
import { MediaQueries } from "../../const/BreakpointsMediaQueries"
import ValentinaOlguin from "../../assets/img/artistas/ValentinaOlguin.jpg"
import MorusAlba from "../../assets/img/artistas/MorusAlba.jpg"
import PolinaGrace from "../../assets/img/artistas/PolinaGrace.jpg"
import Kanela from "../../assets/img/artistas/Kanela.jpg"
import TheColorFools from "../../assets/img/artistas/TheColorFools.jpg"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"

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
                icon: (
                    <FontAwesomeIcon icon="fa-brands fa-instagram" size="xl" />
                ),
            },
        },
    ]

    console.log(redes)

    const { isTabletOrMobile } = MediaQueries()

    return (
        <section className="page-section portfolio bg-secundary" id="Artistas">
            <div className="container container-body">
                {/*<!-- Portfolio Section Heading-->*/}
                <h2 className="page-section-heading text-center mb-0">
                    Artistas
                </h2>

                {/*<!-- Portfolio Grid Items-->*/}
                <div className="row justify-content-center">
                    {/*<!-- Portfolio Item 1 -->*/}
                    <div className="col-md-6 col-lg-3 text-center">
                        <div className="portfolio-item mx-auto">
                            <img
                                className="img-fluid"
                                src={ValentinaOlguin}
                                width={400}
                                height={400}
                                alt="..."
                            />
                            <h4 className="m-2 title-artist">
                                Valentina Olguin
                            </h4>
                            {isTabletOrMobile ? (
                                <>
                                    <button
                                        className="btn btn-primary m-4 px-4 py-2"
                                        data-bs-toggle="collapse"
                                        href="#artista1"
                                        aria-expanded="false"
                                        aria-controls="artista1"
                                    >
                                        Ver Más
                                    </button>
                                    <ToggleDisplay show={!show}>
                                        <div
                                            class="collapse multi-collapse"
                                            id="artista1"
                                        >
                                            <p>
                                                Su carrera como solista comienza
                                                editando el disco Espejos
                                                recibiendo buenas críticas y
                                                ventas. En 2010, nuevamente le
                                                toca ser soporte, esta vez del
                                                artista solista más exitoso del
                                                mundo en la historia de la
                                                música popular (según el Libro
                                                Guiness de los Records), Paul
                                                McCartney. Este, tras escuchar
                                                todos las de artistas que tenía
                                                como opciones soporte para sus
                                                shows en Argentina en 2010
                                                decidió quedarse con Ciro.2​
                                            </p>
                                            <div className="container d-flex justify-content-center p-5">
                                                <a
                                                    href="https://www.instagram.com/valentinaolguin_/"
                                                    target={"_blank"}
                                                    rel={"noreferrer"}
                                                >
                                                    <FontAwesomeIcon
                                                        icon="fa-brands fa-instagram"
                                                        size="3x"
                                                        id="icon"
                                                        color="#ff254d"
                                                    />
                                                </a>
                                                <a
                                                    href="https://open.spotify.com/artist/4bFcNlqngm7XibeU7HW3IR?si=6MER-jh3SaGndPTuqdc3gQ"
                                                    target={"_blank"}
                                                    rel={"noreferrer"}
                                                >
                                                    <FontAwesomeIcon
                                                        icon="fa-brands fa-spotify"
                                                        size="3x"
                                                        id="icon"
                                                        color="#ff254d"
                                                    />
                                                </a>
                                            </div>
                                        </div>
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
                                    <div className="container d-flex justify-content-around">
                                        <a
                                            href="https://www.instagram.com/valentinaolguin_/"
                                            target={"_blank"}
                                            rel={"noreferrer"}
                                        >
                                            <FontAwesomeIcon
                                                icon="fa-brands fa-instagram"
                                                size="2x"
                                                id="icon"
                                                color="#ff254d"
                                            />
                                        </a>
                                        <a
                                            href="https://open.spotify.com/artist/4bFcNlqngm7XibeU7HW3IR?si=6MER-jh3SaGndPTuqdc3gQ"
                                            target={"_blank"}
                                            rel={"noreferrer"}
                                        >
                                            <FontAwesomeIcon
                                                icon="fa-brands fa-spotify"
                                                size="2x"
                                                id="icon"
                                                color="#ff254d"
                                            />
                                        </a>
                                    </div>
                                </div>
                            )}
                        </div>
                    </div>
                    {/*<!-- END Portfolio Item 1 -->*/}
                    {/*<!-- Portfolio Item 2 -->*/}
                    <div className="col-md-6 col-lg-3 text-center">
                        <div className="portfolio-item mx-auto">
                            <img
                                className="img-fluid"
                                src={MorusAlba}
                                width={400}
                                alt="..."
                            />
                            <h4 className="m-2 title-artist">Morus Alba</h4>
                            {isTabletOrMobile ? (
                                <>
                                    <button
                                        className="btn btn-primary m-4 px-4 py-2"
                                        data-bs-toggle="collapse"
                                        href="#artista2"
                                        aria-expanded="false"
                                        aria-controls="artista2"
                                    >
                                        Ver Más
                                    </button>
                                    <ToggleDisplay show={!show}>
                                        <div
                                            class="collapse multi-collapse"
                                            id="artista2"
                                        >
                                            <p>
                                                Su carrera como solista comienza
                                                editando el disco Espejos
                                                recibiendo buenas críticas y
                                                ventas. En 2010, nuevamente le
                                                toca ser soporte, esta vez del
                                                artista solista más exitoso del
                                                mundo en la historia de la
                                                música popular (según el Libro
                                                Guiness de los Records), Paul
                                                McCartney. Este, tras escuchar
                                                todos las de artistas que tenía
                                                como opciones soporte para sus
                                                shows en Argentina en 2010
                                                decidió quedarse con Ciro.2​
                                            </p>
                                            <div className="container d-flex justify-content-center p-5">
                                                <a
                                                    href="https://www.instagram.com/morus.alba.wav/"
                                                    target={"_blank"}
                                                    rel={"noreferrer"}
                                                >
                                                    <FontAwesomeIcon
                                                        icon="fa-brands fa-instagram"
                                                        size="3x"
                                                        id="icon"
                                                        color="#ff254d"
                                                    />
                                                </a>
                                                <a
                                                    href="https://open.spotify.com/artist/2TtsYaNj41ilhQDMNuAb5w?si=sG6Tai5xTbqaq9m0VOA_dw"
                                                    target={"_blank"}
                                                    rel={"noreferrer"}
                                                >
                                                    <FontAwesomeIcon
                                                        icon="fa-brands fa-spotify"
                                                        size="3x"
                                                        id="icon"
                                                        color="#ff254d"
                                                    />
                                                </a>
                                            </div>
                                        </div>
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
                                    <div className="container d-flex justify-content-around">
                                        <a
                                            href="https://www.instagram.com/morus.alba.wav/"
                                            target={"_blank"}
                                            rel={"noreferrer"}
                                        >
                                            <FontAwesomeIcon
                                                icon="fa-brands fa-instagram"
                                                size="2x"
                                                id="icon"
                                                color="#ff254d"
                                            />
                                        </a>
                                        <a
                                            href="https://open.spotify.com/artist/2TtsYaNj41ilhQDMNuAb5w?si=sG6Tai5xTbqaq9m0VOA_dw"
                                            target={"_blank"}
                                            rel={"noreferrer"}
                                        >
                                            <FontAwesomeIcon
                                                icon="fa-brands fa-spotify"
                                                size="2x"
                                                id="icon"
                                                color="#ff254d"
                                            />
                                        </a>
                                    </div>
                                </div>
                            )}
                        </div>
                    </div>
                    {/*<!-- END Portfolio Item 2 -->*/}
                    {/*<!-- Portfolio Item 3 -->*/}
                    <div className="col-md-6 col-lg-3 text-center">
                        <div className="portfolio-item mx-auto">
                            <img
                                className="img-fluid"
                                src={PolinaGrace}
                                alt="..."
                            />
                            <h4 className="m-2 title-artist">Polina Grace</h4>
                            {isTabletOrMobile ? (
                                <>
                                    <button
                                        className="btn btn-primary m-4 px-4 py-2"
                                        data-bs-toggle="collapse"
                                        href="#artista3"
                                        aria-expanded="false"
                                        aria-controls="artista3"
                                    >
                                        Ver Más
                                    </button>
                                    <ToggleDisplay show={!show}>
                                        <div
                                            class="collapse multi-collapse"
                                            id="artista3"
                                        >
                                            <p>
                                                Su carrera como solista comienza
                                                editando el disco Espejos
                                                recibiendo buenas críticas y
                                                ventas. En 2010, nuevamente le
                                                toca ser soporte, esta vez del
                                                artista solista más exitoso del
                                                mundo en la historia de la
                                                música popular (según el Libro
                                                Guiness de los Records), Paul
                                                McCartney. Este, tras escuchar
                                                todos las de artistas que tenía
                                                como opciones soporte para sus
                                                shows en Argentina en 2010
                                                decidió quedarse con Ciro.2​
                                            </p>
                                            <div className="container d-flex justify-content-center p-5">
                                                <a
                                                    href="https://www.instagram.com/polinagrace/"
                                                    target={"_blank"}
                                                    rel={"noreferrer"}
                                                >
                                                    <FontAwesomeIcon
                                                        icon="fa-brands fa-instagram"
                                                        size="3x"
                                                        id="icon"
                                                        color="#ff254d"
                                                    />
                                                </a>
                                                <a
                                                    href="https://open.spotify.com/artist/1NHTQwuk3e6uBGMd4V74ug?si=aHsFR3EhQReIvpPazfdijA"
                                                    target={"_blank"}
                                                    rel={"noreferrer"}
                                                >
                                                    <FontAwesomeIcon
                                                        icon="fa-brands fa-spotify"
                                                        size="3x"
                                                        id="icon"
                                                        color="#ff254d"
                                                    />
                                                </a>
                                            </div>
                                        </div>
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
                                    <div className="container d-flex justify-content-around">
                                        <a
                                            href="https://www.instagram.com/polinagrace/"
                                            target={"_blank"}
                                            rel={"noreferrer"}
                                        >
                                            <FontAwesomeIcon
                                                icon="fa-brands fa-instagram"
                                                size="2x"
                                                id="icon"
                                                color="#ff254d"
                                            />
                                        </a>
                                        <a
                                            href="https://open.spotify.com/artist/1NHTQwuk3e6uBGMd4V74ug?si=aHsFR3EhQReIvpPazfdijA"
                                            target={"_blank"}
                                            rel={"noreferrer"}
                                        >
                                            <FontAwesomeIcon
                                                icon="fa-brands fa-spotify"
                                                size="2x"
                                                id="icon"
                                                color="#ff254d"
                                            />
                                        </a>
                                    </div>
                                </div>
                            )}
                        </div>
                    </div>
                    {/*<!-- END Portfolio Item 3 -->*/}
                    {/*<!-- Portfolio Item 4 -->*/}
                    <div className="col-md-6 col-lg-3 text-center">
                        <div className="portfolio-item mx-auto">
                            <img
                                className="img-fluid"
                                src={Kanela}
                                alt="..."
                            />
                            <h4 className="m-2 title-artist">Kanela</h4>
                            {isTabletOrMobile ? (
                                <>
                                    <button
                                        className="btn btn-primary m-4 px-4 py-2"
                                        data-bs-toggle="collapse"
                                        href="#artista4"
                                        aria-expanded="false"
                                        aria-controls="artista4"
                                    >
                                        Ver Más
                                    </button>
                                    <ToggleDisplay show={!show}>
                                        <div
                                            class="collapse multi-collapse"
                                            id="artista4"
                                        >
                                            <p>
                                                Su carrera como solista comienza
                                                editando el disco Espejos
                                                recibiendo buenas críticas y
                                                ventas. En 2010, nuevamente le
                                                toca ser soporte, esta vez del
                                                artista solista más exitoso del
                                                mundo en la historia de la
                                                música popular (según el Libro
                                                Guiness de los Records), Paul
                                                McCartney. Este, tras escuchar
                                                todos las de artistas que tenía
                                                como opciones soporte para sus
                                                shows en Argentina en 2010
                                                decidió quedarse con Ciro.2​
                                            </p>
                                            <div className="container d-flex justify-content-center p-5">
                                                <a
                                                    href="https://www.instagram.com/kanelaofficial/"
                                                    target={"_blank"}
                                                    rel={"noreferrer"}
                                                >
                                                    <FontAwesomeIcon
                                                        icon="fa-brands fa-instagram"
                                                        size="3x"
                                                        id="icon"
                                                        color="#ff254d"
                                                    />
                                                </a>
                                                <a
                                                    href="https://open.spotify.com/artist/2IqxZH8QxR7KJ0C6JH5i39?si=rTAUBMLIQL-8_C4eLf2fkw"
                                                    target={"_blank"}
                                                    rel={"noreferrer"}
                                                >
                                                    <FontAwesomeIcon
                                                        icon="fa-brands fa-spotify"
                                                        size="3x"
                                                        id="icon"
                                                        color="#ff254d"
                                                    />
                                                </a>
                                            </div>
                                        </div>
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
                                    <div className="container d-flex justify-content-around">
                                        <a
                                            href="https://www.instagram.com/kanelaofficial/"
                                            target={"_blank"}
                                            rel={"noreferrer"}
                                        >
                                            <FontAwesomeIcon
                                                icon="fa-brands fa-instagram"
                                                size="2x"
                                                id="icon"
                                                color="#ff254d"
                                            />
                                        </a>
                                        <a
                                            href="https://open.spotify.com/artist/2IqxZH8QxR7KJ0C6JH5i39?si=rTAUBMLIQL-8_C4eLf2fkw"
                                            target={"_blank"}
                                            rel={"noreferrer"}
                                        >
                                            <FontAwesomeIcon
                                                icon="fa-brands fa-spotify"
                                                size="2x"
                                                id="icon"
                                                color="#ff254d"
                                            />
                                        </a>
                                    </div>
                                </div>
                            )}
                        </div>
                    </div>
                    {/*<!-- END Portfolio Item 4 -->*/}
                    {/*<!-- Portfolio Item 5 -->*/}
                    <div className="col-md-6 col-lg-3 text-center">
                        <div className="portfolio-item mx-auto">
                            <img
                                className="img-fluid"
                                src={TheColorFools}
                                alt="..."
                            />
                            <h4 className="m-2 title-artist">The Color Fools</h4>
                            {isTabletOrMobile ? (
                                <>
                                    <button
                                        className="btn btn-primary m-4 px-4 py-2"
                                        data-bs-toggle="collapse"
                                        href="#artista5"
                                        aria-expanded="false"
                                        aria-controls="artista5"
                                    >
                                        Ver Más
                                    </button>
                                    <ToggleDisplay show={!show}>
                                        <div
                                            class="collapse multi-collapse"
                                            id="artista5"
                                        >
                                            <p>
                                                Su carrera como solista comienza
                                                editando el disco Espejos
                                                recibiendo buenas críticas y
                                                ventas. En 2010, nuevamente le
                                                toca ser soporte, esta vez del
                                                artista solista más exitoso del
                                                mundo en la historia de la
                                                música popular (según el Libro
                                                Guiness de los Records), Paul
                                                McCartney. Este, tras escuchar
                                                todos las de artistas que tenía
                                                como opciones soporte para sus
                                                shows en Argentina en 2010
                                                decidió quedarse con Ciro.2​
                                            </p>
                                            <div className="container d-flex justify-content-center p-5">
                                                <a
                                                    href="https://www.instagram.com/thecolourfools/"
                                                    target={"_blank"}
                                                    rel={"noreferrer"}
                                                >
                                                    <FontAwesomeIcon
                                                        icon="fa-brands fa-instagram"
                                                        size="3x"
                                                        id="icon"
                                                        color="#ff254d"
                                                    />
                                                </a>
                                                <a
                                                    href="https://open.spotify.com/artist/5RKatiNTXjc3uN0FhUtlzd?si=Gc2U-lcyRJOaO-VbNlUBDg"
                                                    target={"_blank"}
                                                    rel={"noreferrer"}
                                                >
                                                    <FontAwesomeIcon
                                                        icon="fa-brands fa-spotify"
                                                        size="3x"
                                                        id="icon"
                                                        color="#ff254d"
                                                    />
                                                </a>
                                            </div>
                                        </div>
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
                                    <div className="container d-flex justify-content-around">
                                        <a
                                            href="https://www.instagram.com/thecolourfools/"
                                            target={"_blank"}
                                            rel={"noreferrer"}
                                        >
                                            <FontAwesomeIcon
                                                icon="fa-brands fa-instagram"
                                                size="2x"
                                                id="icon"
                                                color="#ff254d"
                                            />
                                        </a>
                                        <a
                                            href="https://open.spotify.com/artist/5RKatiNTXjc3uN0FhUtlzd?si=Gc2U-lcyRJOaO-VbNlUBDg"
                                            target={"_blank"}
                                            rel={"noreferrer"}
                                        >
                                            <FontAwesomeIcon
                                                icon="fa-brands fa-spotify"
                                                size="2x"
                                                id="icon"
                                                color="#ff254d"
                                            />
                                        </a>
                                    </div>
                                </div>
                            )}
                        </div>
                    </div>
                    {/*<!-- END Portfolio Item 5 -->*/}
                </div>
            </div>
        </section>
    )
}

export default Artistas

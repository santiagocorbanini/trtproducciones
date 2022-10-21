import artist from "../../assets/img/artist.png"
import ToggleDisplay from "react-toggle-display"
import { useState } from "react"
import { MediaQueries } from "../../const/BreakpointsMediaQueries"

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

    const { isTabletOrMobile } = MediaQueries();

    return (
        <section className="page-section portfolio bg-secundary" id="Artistas">
            <div className="container">
                {/*<!-- Portfolio Section Heading-->*/}
                <h2 className="page-section-heading text-center mb-0">
                    Artistas
                </h2>

                {/*<!-- Portfolio Grid Items-->*/}
                <div className="row justify-content-center">
                    <h2 className="page-section-heading text-center mb-0">
                        Artistas
                    </h2>
                </div>
                <div className="row justify-content-center">
                    <h2 className="page-section-heading text-center mb-0">
                        Artistas
                    </h2>
                </div>
                <div className="row justify-content-center">
                    <h2 className="page-section-heading text-center mb-0">
                        Artistas
                    </h2>
                </div>
            </div>
        </section>
    )
}

export default Artistas

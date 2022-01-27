import logo from "../../assets/img/logo.png";
import booking from "../../assets/img/booking.jpg"

const Carousel = () => {
    return (  
            <div>
                <div id="carouselExampleControls" className="carousel slide" data-bs-ride="carousel">
                <div className="carousel-inner">
                    <div className="carousel-item active">
                    <img src={logo} className="d-block w-100" alt="..."/>
                    </div>
                    <div className="carousel-item">
                    <img src={logo} className="d-block w-100" alt="..."/>
                    </div>
                    <div className="carousel-item">
                    <img src={logo} className="d-block w-100" alt="..."/>
                    </div>
                </div>
                <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="prev">
                    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                    <span className="visually-hidden">Anterior</span>
                </button>
                <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="next">
                    <span className="carousel-control-next-icon" aria-hidden="true"></span>
                    <span className="visually-hidden">Siguiente</span>
                </button>
                </div>
            </div>
    )
}

export default Carousel
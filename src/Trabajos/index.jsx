import React from "react";
import Slider from "react-slick";
import "./style.scss";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const Trabajos = () => {
    return (
        <section id="trabajos">
        <div className="container d-flex align-items-center justify-content-center p-5">
            <h2>Trabajos</h2>
        </div>
        <div className="container-fluid brands">
        <Slider
            autoplay={true}
            slidesToShow={3}
            autoplaySpeed={2000}
            dots={false}
        >
            <div>
            <img src="https://via.placeholder.com/200" alt="" />
            </div>
            <div>
            <img src="https://via.placeholder.com/200" alt="" />
            </div>
            <div>
            <img src="https://via.placeholder.com/200" alt="" />
            </div>
            <div>
            <img src="https://via.placeholder.com/200" alt="" />
            </div>
        </Slider>
        </div>
        </section>
    );
};

export default Trabajos;

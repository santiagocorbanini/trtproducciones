import imagen3 from '../../assets/img/fundamentalista.jpg';

const Hero = () => {
    return (  
        <section className="page-section bg-primary" id="hero">
            <div className="container">
                <img className="img-carousel" src={imagen3} alt="..." />
            </div>
        </section>
    )
}

export default Hero
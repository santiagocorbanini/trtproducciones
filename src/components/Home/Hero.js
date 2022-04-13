import imagen3 from '../../assets/img/pngegg.png';

const Hero = () => {
    return (  
        <section className="page-section bg-primary" id="hero">
            <div className="container">
                <div className="row hero" >
                    <div className="col-lg-6">
                              <img className='w-100 min-vw-50' id="img-about" src={imagen3} alt="" srcSet="" />
                          </div>
                        {/*<!-- Nosotros Descripcion -->*/}
                          <div className="col-lg-6" id="nosotros">
                                <div>
                                  <p className="px-2 text-left">Somos una agencia de booking y management de músicos independientes, con base en Barcelona, España.</p>
                                  <p className="px-2 text-left lead">Nuestro objetivo es ayudar a los artistas a desarrollarse plenamente y encontrar su mejor versión.</p>
                                </div>
                          </div>
                </div>
            </div>
        </section>
    )
}

export default Hero
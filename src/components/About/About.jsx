import React from 'react';
import gira from '../../assets/img/gira2022.jpg'

export const About = () => {
  return (
    <section className="page-section bg-primary text-white mb-0 text-center" id="about">
              <h2 className="page-section-heading text-center text-uppercase text-black">Nosotros</h2>
                {/*<!-- Icon Divider -->*/}
                <div className="divider-custom divider-dark">
                    <div className="divider-custom-line"></div>
                    <div className="divider-custom-icon"><i className="fas fa-star"></i></div>
                    <div className="divider-custom-line"></div>
                </div>
            {/*<!-- Imagen Nosotros-->*/}
              <div className="container text-black">
                  <div className="row">
                          <div className="col-lg-4 mb-5 mb-lg-0">
                              <img className='w-100 pt-5 min-vw-50' id="img-about" src={gira} alt="" srcSet="" />
                          </div>
                        {/*<!-- Nosotros Descripcion -->*/}
                          <div className="col-lg-8" id="nosotros">
                                <div>
                                  <p className="px-2 text-left">Somos una agencia de booking y management de músicos independientes, con base en Barcelona, España.</p>
                                  <p className="px-2 text-left lead">Nuestro objetivo es ayudar a los artistas a desarrollarse plenamente y encontrar su mejor versión.</p>
                                  <p className="px-2 text-left">Esto lo conseguimos gracias a nuestra experiencia en el mundo de la música, nuestros socios claves y el grupo de profesionales que nos apoyan y nos brindan la posibilidad de trabajar de manera profesional en este mundo tan competitivo.</p>
                                  <p className="px-2 text-left">Mas de 10 años de#experiencia trabajando, individualmente, con productoras de eventos masivos y con artistas de renombre, desde bares hasta grandes estadios, nos han aportado un gran conocimiento del segmento alrededor del mundo.</p>
                                  <p className="px-2 text-left">Somos profesionales y perfeccionistas que trabajamos arduamente en buscar siempre la mejor opción para que el evento sea increíble e inolvidable, tanto para el artista como para el público.</p>
                                  <p className="px-2 text-left">Nos encontramos en constante movimiento para estar actualizados y a la altura de las exigencias de la industria musical.</p>
                                  <p className="px-2 text-left">Además de contar con una vasta experiencia, nos encontramos en constante movimiento para estar actualizados y a la altura de las exigencias de la industria musical.</p>
                                </div>
                          </div>
                          <h5 className="mt-5">Creemos en las nuevas generaciones de artistas y contamos con el sentimiento más puro y genuino hacia la música.</h5>
                  </div>
              </div>
    </section>
  );
};

export default About;
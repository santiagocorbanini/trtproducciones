import gira from '../../assets/img/gira2022.jpg'
import distribucion from '../../assets/img/distribucion.jpg'
import contenido from '../../assets/img/contenidoAudiovisual.jpg'
import estudios from '../../assets/img/estudios.jpg'
import produccion from '../../assets/img/produccion.jpg'


const Services = () => {
    return (
        <section className="page-section bg-primary text-white mb-0 text-center" id="services">
                    <h2 className="page-section-heading text-center text-uppercase text-black">Servicios</h2>
                    {/*<!-- Icon Divider -->*/}
                    <div className="divider-custom divider-dark">
                        <div className="divider-custom-line"></div>
                        <div className="divider-custom-icon"><i className="fas fa-music"></i></div>
                        <div className="divider-custom-line"></div>
                    </div>
                    <div className="container text-black">

                        {/*<!-- 1 -->*/}
                        <div className="row mb-4">
                                <div className="col-lg-4 mb-5 mb-lg-0">
                                    <img className='w-50 min-vw-25' id="img-about" src={distribucion} alt="" srcSet="" />
                                </div>
                                <div className="col-lg-8" id="nosotros">
                                        <div>
                                        <h4 className="mb-0 text-left"><i className="fas fa-guitar fa-lg pr-2"></i> Distribucion digital</h4>
                                        <p className="px-2 text-left">Somos una agencia de booking y management de músicos independientes, con base en Barcelona, España.</p>
                                        <p className="px-2 text-left">Esto lo conseguimos gracias a nuestra experiencia en el mundo de la música, nuestros socios claves y el grupo de profesionales que nos apoyan y nos brindan la posibilidad de trabajar de manera profesional en este mundo tan competitivo.</p>
                                        </div>
                                </div>
                        </div>

                        {/*<!-- 2 -->*/}
                        <div className="row mb-4">
                                <div className="col-lg-4 mb-5 mb-lg-0">
                                    <img className='w-50 min-vw-25' id="img-about" src={contenido} alt="" srcSet="" />
                                </div>
                                <div className="col-lg-8" id="nosotros">
                                        <div>
                                        <h4 className="mb-0 text-left"><i className="fas fa-headphones-alt fa-lg pr-2"></i> Contenido audiovisual</h4>
                                        <p className="px-2 text-left">Brindamos todas las comodidades necesarias para que los músicos puedan desarrollar su arte de la mejor manera.</p>
                                        <p className="px-2 text-left">Brindamos todas las comodidades necesarias para que los músicos puedan desarrollar su arte de la mejor manera.</p>
                                        </div>
                                </div>
                        </div>

                        {/*<!-- 3 -->*/}
                        <div className="row mb-4">
                                <div className="col-lg-4 mb-5 mb-lg-0">
                                    <img className='w-50 min-vw-25' id="img-about" src={estudios} alt="" srcSet="" />
                                </div>
                                <div className="col-lg-8" id="nosotros">
                                        <div>
                                        <h4 className="mb-0 text-left"><i className="fas fa-clipboard fa-lg pr-2"></i> Grabación en Estudio</h4>
                                        <p className="px-2 text-left">Nos encargamos de gestionar la distribución digital del material de nuestros artistas en todas las plataformas digitales..</p>
                                        <p className="px-2 text-left">Nos encargamos de gestionar la distribución digital del material de nuestros artistas en todas las plataformas digitales..</p>
                                        </div>
                                </div>
                        </div>

                        {/*<!-- 4 -->*/}
                        <div className="row mb-4">
                                <div className="col-lg-4 mb-5 mb-lg-0">
                                    <img className='w-50 min-vw-25' id="img-about" src={produccion} alt="" srcSet="" />
                                </div>
                                <div className="col-lg-8" id="nosotros">
                                        <div>
                                        <h4 className="mb-0 text-left"><i className="fas fa-clipboard fa-lg pr-2"></i> Produccion de Eventos</h4>
                                        <p className="px-2 text-left">Junto a ellos, planificamos las salidas de nuevos lanzamentos, singles, videos o álbumes y Hacemos un seguimiento y estudio de las estadísticas para saber en que puntos mejorar, y así lograr los mayores resultados..</p>
                                        <p className="px-2 text-left">Junto a ellos, planificamos las salidas de nuevos lanzamentos, singles, videos o álbumes y Hacemos un seguimiento y estudio de las estadísticas para saber en que puntos mejorar, y así lograr los mayores resultados.</p>
                                        </div>
                                </div>
                        </div>

                         
                    </div>
        </section>
        );
    };

export default Services;
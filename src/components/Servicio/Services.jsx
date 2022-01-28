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
                        <div className="row">
                                {/*<!-- Servicios Descripcion -->*/}
                                <div className="col-lg-8 text-left d-flex flex-column pt-5" id="nosotros">
                                <span className=""><i className="fas fa-guitar fa-lg pr-2"></i> Brindamos todas las comodidades necesarias para que los músicos puedan desarrollar su arte de la mejor manera.</span>
                                <span className=""><i className="fas fa-headphones-alt fa-lg pr-2"></i> Nos encargamos de gestionar la distribución digital del material de nuestros artistas en todas las plataformas digitales.</span>
                                <span className=""><i className="fas fa-clipboard fa-lg pr-2"></i> Junto a ellos, planificamos las salidas de nuevos lanzamentos, singles, videos o álbumes y Hacemos un seguimiento y estudio de las estadísticas para saber en que puntos mejorar, y así lograr los mayores resultados.</span>

                                </div>
                                {/*<!-- Imagenes Servicios-->*/}
                                <div className="col-lg-4 pt-5 mb-lg-0">
                                    <div className='cuadrado-img'>
                                    <img className='w-50 border-tl' src={distribucion} alt="" srcSet="" />
                                    <img className='w-50 border-tr' src={contenido} alt="" srcSet="" />
                                    <img className='w-50 border-bl' src={estudios} alt="" srcSet="" />
                                    <img className='w-50 border-br' src={produccion} alt="" srcSet="" />
                                    </div>
                                </div>
                        </div>
                    </div>
        </section>
        );
    };

export default Services;
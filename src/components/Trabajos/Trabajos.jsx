import distribucion from '../../assets/img/distribucion.jpg'
import contenido from '../../assets/img/contenidoAudiovisual.jpg'
import estudios from '../../assets/img/estudios.jpg'
import produccion from '../../assets/img/produccion.jpg'

const Trabajos = () => {
    return (
        <section className="page-section bg-primary text-white mb-0 text-center" id="trabajos">

                    <h6 className="page-section-heading text-center text-uppercase text-black">Trabajos realizados</h6>

                    <div className="container trabajos">
                        <div className="col-lg-4 mb-5 mb-lg-0">
                            <img className='w-50 min-vw-25' id="img-about" src={distribucion} alt="" srcSet="" />
                        </div>

                        <div className="col-lg-4 mb-5 mb-lg-0">
                            <img className='w-50 min-vw-25' id="img-about" src={contenido} alt="" srcSet="" />
                        </div>

                        <div className="col-lg-4 mb-5 mb-lg-0">
                            <img className='w-50 min-vw-25' id="img-about" src={estudios} alt="" srcSet="" />
                        </div>

                        <div className="col-lg-4 mb-5 mb-lg-0">
                            <img className='w-50 min-vw-25' id="img-about" src={produccion} alt="" srcSet="" />
                        </div>                      
                    </div>
        </section>
        );
    };

export default Trabajos;
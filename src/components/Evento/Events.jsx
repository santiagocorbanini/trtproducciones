
import imagen1 from '../../assets/img/guaso.jpg';
import imagen3 from '../../assets/img/fundamentalista.jpg';
import imagen22 from '../../assets/img/cruzando2.jpg';


const Events = () => {
  return (
    <section className="page-section portfolio bg-secundary" id="events">
            <div className="container">
                {/*<!-- Portfolio Section Heading-->*/}
                <h2 className="page-section-heading text-center text-uppercase text-black mb-0">Eventos</h2>
                {/*<!-- Icon Divider -->*/}
                <div className="divider-custom">
                    <div className="divider-custom-line"></div>
                    <div className="divider-custom-icon"><i className="far fa-calendar-alt"></i></div>
                    <div className="divider-custom-line"></div>
                </div>
                {/*<!-- Portfolio Grid Items-->*/}
                <div className="row justify-content-center">
                    {/*<!-- Portfolio Item 1 -->*/}
                    <div className="col-md-6 col-lg-4 mb-5">
                        <div className="portfolio-item mx-auto" data-bs-toggle="modal" data-bs-target="#portfolioModal1">
                            <div className="portfolio-item-caption d-flex align-items-center justify-content-center h-100 w-100">
                                <div className="portfolio-item-caption-content text-center text-white"><i className="fas fa-plus fa-3x"></i></div>
                            </div>
                            <img className="img-fluid" src={imagen1} alt="..." />
                        </div>
                    </div>
                    {/*<!-- Portfolio Item 2 -->*/}
                    <div className="col-md-6 col-lg-4 mb-5">
                        <div className="portfolio-item mx-auto" data-bs-toggle="modal" data-bs-target="#portfolioModal2">
                            <div className="portfolio-item-caption d-flex align-items-center justify-content-center h-100 w-100">
                                <div className="portfolio-item-caption-content text-center text-white"><i className="fas fa-plus fa-3x"></i></div>
                            </div>
                            <img className="img-fluid" src={imagen22} alt="..." />
                        </div>
                    </div>
                    {/*<!-- Portfolio Item 3 -->*/}
                    <div className="col-md-6 col-lg-4 mb-5">
                        <div className="portfolio-item mx-auto" data-bs-toggle="modal" data-bs-target="#portfolioModal3">
                            <div className="portfolio-item-caption d-flex align-items-center justify-content-center h-100 w-100">
                                <div className="portfolio-item-caption-content text-center text-white"><i className="fas fa-plus fa-3x"></i></div>
                            </div>
                            <img className="img-fluid" src={imagen3} alt="..." />
                        </div>
                    </div>
                </div>
            </div>
            {/*<!-- Portfolio Modals -->*/}
                {/*<!--Portfolio Modal 1 -->*/}
                <div className="portfolio-modal modal fade" id="portfolioModal1" tabIndex="-1" aria-labelledby="portfolioModal1" aria-hidden="true">
                        <div className="modal-dialog modal-xl">
                            <div className="modal-content">
                                {/*<!--Portfolio Modal X Close -->*/}
                                <div className="modal-header border-0"><button className="btn-close" type="button" data-bs-dismiss="modal" aria-label="Close"></button></div>
                                <div className="modal-body text-center pb-5">
                                    <div className="container">
                                        <div className="row justify-content-center">
                                            <div className="col-lg-8">
                                                {/*<!--Portfolio Modal Title -->*/}
                                                <h2 id="evento-titulo" className="portfolio-modal-title text-black text-uppercase mb-0">Guasones</h2>
                                                {/*<!--Icon Divider -->*/}
                                                <div className="divider-custom">
                                                    <div className="divider-custom-line"></div>
                                                    <div className="divider-custom-icon"><i className="fas fa-star"></i></div>
                                                    <div className="divider-custom-line"></div>
                                                </div>
                                                {/*<!--Portfolio Modal Image -->*/}
                                                <img className="img-fluid rounded mb-5" src={imagen1} alt="..." />
                                                {/*<!--Portfolio Modal Text -->*/}
                                                <h6>ENTRADAS YA A LA VENTA</h6>
                                                <p className="mb-4 lead">Anticipadas en @woutick (www.woutick.es)
                                                    A PRECIO PROMOCIONAL POR TIEMPO LIMITADO</p>
                                                <p className="mb-4 lead">
                                                    🃏@guasones llega a #España 🇪🇸
                                                    🇦🇷 Una de las bandas argentinas mas solicitadas llegará al Viejo Continente con todos sus hits!</p>
                                                    <h6>26 Mayo #Barcelona @razzmatazzclubs</h6>
                                                    <h6>27 Mayo #Mallorca @es_gremi</h6>
                                                    <h6>28 Mayo #Valencia @madisonlatinclub</h6>
                                                    <h6>3 Junio #Malaga @salatrincheraA</h6>
                                                    <h6>4 Junio #Madrid @independanceclub</h6>
                                                {/*<!--Portfolio Modal Button Cerrar -->*/}
                                                <button className="btn btn-primary mt-4" type="button" data-bs-dismiss="modal">
                                                    <i className="fas fa-times fa-fw"></i>
                                                    Cerrar
                                                </button>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                {/*<!--Portfolio Modal 2 -->*/}
                <div className="portfolio-modal modal fade" id="portfolioModal2" tabIndex="-1" aria-labelledby="portfolioModal2" aria-hidden="true">
                        <div className="modal-dialog modal-xl">
                            <div className="modal-content">
                                {/*<!--Portfolio Modal X Close -->*/}
                                <div className="modal-header border-0"><button className="btn-close" type="button" data-bs-dismiss="modal" aria-label="Close"></button></div>
                                <div className="modal-body text-center pb-5">
                                    <div className="container">
                                        <div className="row justify-content-center">
                                            <div className="col-lg-8">
                                                {/*<!--Portfolio Modal Title -->*/}
                                                <h2 id="evento-titulo" className="portfolio-modal-title text-black text-uppercase mb-0">Cruzando el charco</h2>
                                                {/*<!--Icon Divider -->*/}
                                                <div className="divider-custom">
                                                    <div className="divider-custom-line"></div>
                                                    <div className="divider-custom-icon"><i className="fas fa-star"></i></div>
                                                    <div className="divider-custom-line"></div>
                                                </div>
                                                {/*<!--Portfolio Modal Image -->*/}
                                                <img className="img-fluid rounded mb-5" src={imagen22} alt="..." />
                                                {/*<!--Portfolio Modal Text -->*/}
                                                <p className="mb-4 lead">🎫 Anticipadas a la venta en @woutick ! A VALOR PROMOCIONAL

                                                    Te lo vas a perder?
                                                    </p>
                                                    <h6>22 Abril #Barcelona @razzmatazzclubs</h6>
                                                    <h6>23 Abril #Valencia @madisonlatinclub</h6>
                                                    <h6>29 Abril #Mallorca @es_gremi</h6>
                                                    <h6>30 Abril #Malaga @salatrincheraA</h6>
                                                    <h6>1 Mayo #Madrid @independanceclub</h6>                                                {/*<!--Portfolio Modal Button Cerrar -->*/}
                                                <button className="btn btn-primary mt-4" type="button" data-bs-dismiss="modal">
                                                    <i className="fas fa-times fa-fw"></i>
                                                    Cerrar
                                                </button>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                {/*<!--Portfolio Modal 3 -->*/}
                <div className="portfolio-modal modal fade" id="portfolioModal3" tabIndex="-1" aria-labelledby="portfolioModal3" aria-hidden="true">
                        <div className="modal-dialog modal-xl">
                            <div className="modal-content">
                                {/*<!--Portfolio Modal X Close -->*/}
                                <div className="modal-header border-0"><button className="btn-close" type="button" data-bs-dismiss="modal" aria-label="Close"></button></div>
                                <div className="modal-body text-center pb-5">
                                    <div className="container">
                                        <div className="row justify-content-center">
                                            <div className="col-lg-8">
                                                {/*<!--Portfolio Modal Title -->*/}
                                                <h2 id="evento-titulo" className=" text-black text-uppercase mb-0 text-center">Los fundamentalistas del aire acondicionado</h2>
                                                {/*<!--Icon Divider -->*/}
                                                <div className="divider-custom">
                                                    <div className="divider-custom-line"></div>
                                                    <div className="divider-custom-icon"><i className="fas fa-star"></i></div>
                                                    <div className="divider-custom-line"></div>
                                                </div>
                                                {/*<!--Portfolio Modal Image -->*/}
                                                <img className="img-fluid rounded mb-5" src={imagen3} alt="..." />
                                                {/*<!--Portfolio Modal Text -->*/}
                                                <p className="mb-4 lead">⚠️ YA A LA VENTA ⚠️
                                                        🎟 Ya están las entradas disponibles en:
                                                        👉🏼 www.sfx-events.com

                                                        💣 @losfundamentalistasok llegan a #España 💣
                                                    </p>
                                                    <h6>31 Marzo | Barcelona - Razzmatazz</h6>
                                                    <h6>2 Abril | Mallorca - Es Gremi</h6>
                                                    <h6>7 Abril | Madrid - Riviera</h6>
                                                    <h6>8 Abril | Valencia - Repvplicca</h6>
                                                    <h6>9 Abril | Malaga - Paris 15</h6>                                                    {/*<!--Portfolio Modal Button Cerrar -->*/}
                                                <button className="btn btn-primary mt-4" type="button" data-bs-dismiss="modal">
                                                    <i className="fas fa-times fa-fw"></i>
                                                    Cerrar
                                                </button>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
        </section>
    );
};

export default Events;

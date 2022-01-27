
import imagen1 from '../../assets/img/gira2022.jpg';
import imagen2 from '../../assets/img/distribucion.jpg';
import imagen3 from '../../assets/img/estudios.jpg';

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
                            <img className="img-fluid" src={imagen2} alt="..." />
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
                <div className="portfolio-modal modal fade" id="portfolioModal1" tabindex="-1" aria-labelledby="portfolioModal1" aria-hidden="true">
                        <div className="modal-dialog modal-xl">
                            <div className="modal-content">
                                {/*<!--Portfolio Modal X Close -->*/}
                                <div className="modal-header border-0"><button className="btn-close" type="button" data-bs-dismiss="modal" aria-label="Close"></button></div>
                                <div className="modal-body text-center pb-5">
                                    <div className="container">
                                        <div className="row justify-content-center">
                                            <div className="col-lg-8">
                                                {/*<!--Portfolio Modal Title -->*/}
                                                <h2 className="portfolio-modal-title text-black text-uppercase mb-0">Log Cabin</h2>
                                                {/*<!--Icon Divider -->*/}
                                                <div className="divider-custom">
                                                    <div className="divider-custom-line"></div>
                                                    <div className="divider-custom-icon"><i className="fas fa-star"></i></div>
                                                    <div className="divider-custom-line"></div>
                                                </div>
                                                {/*<!--Portfolio Modal Image -->*/}
                                                <img className="img-fluid rounded mb-5" src={imagen1} alt="..." />
                                                {/*<!--Portfolio Modal Text -->*/}
                                                <p className="mb-4">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Mollitia neque assumenda ipsam nihil, molestias magnam, recusandae quos quis inventore quisquam velit asperiores, vitae? Reprehenderit soluta, eos quod consequuntur itaque. Nam.</p>
                                                {/*<!--Portfolio Modal Button Cerrar -->*/}
                                                <button className="btn btn-primary" type="button" data-bs-dismiss="modal">
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
                <div className="portfolio-modal modal fade" id="portfolioModal2" tabindex="-1" aria-labelledby="portfolioModal2" aria-hidden="true">
                        <div className="modal-dialog modal-xl">
                            <div className="modal-content">
                                {/*<!--Portfolio Modal X Close -->*/}
                                <div className="modal-header border-0"><button className="btn-close" type="button" data-bs-dismiss="modal" aria-label="Close"></button></div>
                                <div className="modal-body text-center pb-5">
                                    <div className="container">
                                        <div className="row justify-content-center">
                                            <div className="col-lg-8">
                                                {/*<!--Portfolio Modal Title -->*/}
                                                <h2 className="portfolio-modal-title text-black text-uppercase mb-0">Log Cabin</h2>
                                                {/*<!--Icon Divider -->*/}
                                                <div className="divider-custom">
                                                    <div className="divider-custom-line"></div>
                                                    <div className="divider-custom-icon"><i className="fas fa-star"></i></div>
                                                    <div className="divider-custom-line"></div>
                                                </div>
                                                {/*<!--Portfolio Modal Image -->*/}
                                                <img className="img-fluid rounded mb-5" src={imagen2} alt="..." />
                                                {/*<!--Portfolio Modal Text -->*/}
                                                <p className="mb-4">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Mollitia neque assumenda ipsam nihil, molestias magnam, recusandae quos quis inventore quisquam velit asperiores, vitae? Reprehenderit soluta, eos quod consequuntur itaque. Nam.</p>
                                                {/*<!--Portfolio Modal Button Cerrar -->*/}
                                                <button className="btn btn-primary" type="button" data-bs-dismiss="modal">
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
                <div className="portfolio-modal modal fade" id="portfolioModal3" tabindex="-1" aria-labelledby="portfolioModal3" aria-hidden="true">
                        <div className="modal-dialog modal-xl">
                            <div className="modal-content">
                                {/*<!--Portfolio Modal X Close -->*/}
                                <div className="modal-header border-0"><button className="btn-close" type="button" data-bs-dismiss="modal" aria-label="Close"></button></div>
                                <div className="modal-body text-center pb-5">
                                    <div className="container">
                                        <div className="row justify-content-center">
                                            <div className="col-lg-8">
                                                {/*<!--Portfolio Modal Title -->*/}
                                                <h2 className="portfolio-modal-title text-black text-uppercase mb-0">Log Cabin</h2>
                                                {/*<!--Icon Divider -->*/}
                                                <div className="divider-custom">
                                                    <div className="divider-custom-line"></div>
                                                    <div className="divider-custom-icon"><i className="fas fa-star"></i></div>
                                                    <div className="divider-custom-line"></div>
                                                </div>
                                                {/*<!--Portfolio Modal Image -->*/}
                                                <img className="img-fluid rounded mb-5" src={imagen3} alt="..." />
                                                {/*<!--Portfolio Modal Text -->*/}
                                                <p className="mb-4">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Mollitia neque assumenda ipsam nihil, molestias magnam, recusandae quos quis inventore quisquam velit asperiores, vitae? Reprehenderit soluta, eos quod consequuntur itaque. Nam.</p>
                                                {/*<!--Portfolio Modal Button Cerrar -->*/}
                                                <button className="btn btn-primary" type="button" data-bs-dismiss="modal">
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

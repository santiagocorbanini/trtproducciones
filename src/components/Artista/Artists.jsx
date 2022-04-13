
import imagen1 from '../../assets/img/guaso.jpg';
import imagen3 from '../../assets/img/fundamentalista.jpg';
import imagen22 from '../../assets/img/cruzando2.jpg';


const Artists = () => {
  return (
    <section className="page-section portfolio bg-secundary" id="artists">
            <div className="container">
                {/*<!-- Portfolio Section Heading-->*/}
                <h2 className="page-section-heading text-center text-uppercase text-black mb-0">Artistas</h2>
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
                  
           
        </section>
    );
};

export default Artists;

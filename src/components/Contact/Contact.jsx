import React from 'react';

const Contact = () => {
  return (
    <section className="page-section" id="contact">
        <div className="container">
            {/*<!-- Contact Section Heading-->*/}
            <h2 className="page-section-heading text-center text-uppercase text-secondary mb-0">Contacto</h2>
            {/*<!-- Icon Divider-->*/}
            <div className="divider-custom">
                <div className="divider-custom-line"></div>
                <div className="divider-custom-icon"><i className="fas fa-envelope"></i></div>
                <div className="divider-custom-line"></div>
            </div>
            {/*<!-- Contact Section Form-->*/}
            <div className="row justify-content-center">
                <div className="col-lg-8 col-xl-7">
                    {/*<!-- * * * * * * * * * * * * * * *-->*/}
                    {/*<!-- * * SB Forms Contact Form * *-->*/}
                    {/*<!-- * * * * * * * * * * * * * * *-->*/}
                    {/*<!-- This form is pre-integrated with SB Forms.-->*/}
                    {/*<!-- To make this form functional, sign up at-->*/}
                    {/*<!-- https://startbootstrap.com/solution/contact-forms-->*/}
                    {/*<!-- to get an API token!-->*/}
                    <form id="contactForm" data-sb-form-api-token="API_TOKEN">
                        {/*<!-- Name input-->*/}
                        <div className="form-floating mb-3">
                            <input className="form-control" name="name" type="text" placeholder="Enter your name..." data-sb-validations="required" />
                            <label htmlFor="name">Nombre</label>
                            <div className="invalid-feedback" data-sb-feedback="name:required">Un nombre es requerido.</div>
                        </div>
                        {/*<!-- Email address input-->*/}
                        <div className="form-floating mb-3">
                            <input className="form-control" name="email" type="email" placeholder="name@example.com" data-sb-validations="required,email" />
                            <label htmlFor="email">Correo electronico</label>
                            <div className="invalid-feedback" data-sb-feedback="email:required">Un email es requerido.</div>
                            <div className="invalid-feedback" data-sb-feedback="email:email">El email no es valido.</div>
                        </div>
                        {/*<!-- Phone number input-->*/}
                        <div className="form-floating mb-3">
                            <input className="form-control" name="phone" type="tel" placeholder="(123) 456-7890" data-sb-validations="required" />
                            <label htmlFor="phone">Telefono</label>
                            <div className="invalid-feedback" data-sb-feedback="phone:required">Un numero telefonico es requerido</div>
                        </div>
                        {/*<!-- Message input-->*/}
                        <div className="form-floating mb-3">
                            <textarea className="form-control" name="message" type="text" defaultValue="" placeholder="Enter your message here..." data-sb-validations="required"></textarea>
                            <label htmlFor="message">Mensaje</label>
                            <div className="invalid-feedback" data-sb-feedback="message:required">Un mensaje es requerido.</div>
                        </div>
                        {/*<!-- Submit success message-->*/}
                        {/*<!---->*/}
                        {/*<!-- This is what your users will see when the form-->*/}
                        {/*<!-- has successfully submitted-->*/}
                        <div className="d-none" id="submitSuccessMessage">
                            <div className="text-center mb-3">
                                <div className="fw-bolder">Form submission successful!</div>
                                To activate this form, sign up at
                                <br />
                                <a href="https://startbootstrap.com/solution/contact-forms">https://startbootstrap.com/solution/contact-forms</a>
                            </div>
                        </div>
                        {/*<!-- Submit error message-->*/}
                        {/*<!---->*/}
                        {/*<!-- This is what your users will see when there is-->*/}
                        {/*<!-- an error submitting the form-->*/}
                        <div className="d-none" id="submitErrorMessage"><div className="text-center text-danger mb-3">Error sending message!</div></div>
                        {/*<!-- Submit Button-->*/}
                        <button className="btn btn-primary btn-xl disabled" id="submitButton" type="submit">Enviar</button>
                    </form>
                </div>
            </div>
        </div>
    </section>
  );
};

export default Contact;

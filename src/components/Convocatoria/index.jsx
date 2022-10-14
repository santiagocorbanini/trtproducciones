const Convocatoria = () => {
    return (
        <section
            className="page-section bg-primary text-white mb-0 text-center"
            id="convocatoria"
        >
            <h6 className="page-section-heading text-center text-uppercase">
                Convocatoria de bandas
            </h6>

            <div className="container">
                <p className="px-2 text-center">
                    Buscamos bandas o solistas independientes para importante
                    proyecto musical.
                </p>
                <p className="px-2 text-center">
                    No importa de que parte del mundo seas, envianos tu info
                    entrando al link.
                </p>
            </div>
            <button
                className="btn btn-primary btn-xl"
                id="submitConvocatoria"
                type="submit"
            >
                link
            </button>
        </section>
    )
}

export default Convocatoria

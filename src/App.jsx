import About from "./components/About/About";
import Contact from "./components/Contact/Contact";
import Home from "./components/Home/Home";
import Nav from "./components/Nav/Nav";
import Footer from "./components/Footer/Footer";
import Artists from "./components/Artista/Artists";
import Events from "./components/Evento/Events";
import Services from "./components/Servicio/Services";
import Trabajos from "./components/Trabajos/Trabajos";
import Convocatoria from "./components/Convocatoria/Convocatoria";

const App = () => {
  return (
    <>
    <Nav/>
    <Events />
    <Artists />
    <About />
    <Services />
    <Convocatoria />
    <Trabajos />
    <Contact />
    <Footer />
    </>
  );
};

export default App;

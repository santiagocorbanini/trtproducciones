import About from "./components/About/About";
import Contact from "./components/Contact/Contact";
import Masterhead from "./components/Masterhead/Masterhead";
import Nav from "./components/Nav/Nav";
import Footer from "./components/Footer/Footer";
import Portfolio from "./components/Portfolio/Portfolio"

const App = () => {
  return (
    <>
    <Nav/>
    <Masterhead/>
    <Portfolio />
    <About />
    <Contact />
    <Footer />
    </>
  );
};

export default App;

import { BrowserRouter, Routes, Route } from "react-router-dom";
import Nav from "./components/Nav";
import Eventos from "./components/Eventos";
import Artistas from "./components/Artistas";
import Servicios from "./components/Servicios";
import Convocatoria from "./components/Convocatoria";
import Trabajos from "./Trabajos";
import Nosotros from "./components/Nosotros";
import Contacto from "./components/Contacto";
import Footer from "./components/Footer";

const App = () => {
  return (
    <BrowserRouter>
    <Nav/>
    <Routes>
      <Route index path="" element={<Eventos/>}/>
      <Route path="eventos" element={<Eventos/>}/>
      <Route path='artistas' element={<Artistas/>}/>
      <Route path='servicios' element={<Servicios/>}/>
      <Route path='convocatoria' element={<Convocatoria/>}/>
      <Route path='trabajos' element={<Trabajos/>}/>
      <Route path='nosotros' element={<Nosotros/>}/>
      <Route path='contacto' element={<Contacto/>}/>
    </Routes>
    <Footer />
    </BrowserRouter>
  );
};

export default App;

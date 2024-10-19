import 'bootstrap/dist/css/bootstrap.min.css';
import './AppCustom.css';
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import About from './pages/About';
import Services from './pages/Services';
import Portfolio from './pages/Portfolio';
import ContactUs from './pages/ContactUs';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Websites from './pages/services/Websites';
import Invitaciones from './pages/services/Invitaciones';
import Ecommerce from './pages/services/Ecommerce';
import Software from './pages/services/Software';
import Diseno from './pages/services/Diseno';
import Soporte from './pages/services/Soporte';
import NoPage from './pages/NoPage';
// import ContactBanner from './components/Contact-Banner';

const App = () => {
  return (
    <Router>
      <div>
        <Navbar />
        <Routes>
          <Route index element={<Home />} />
          <Route path="/home" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/services" element={<Services />} />
          <Route path="/services/websites" element={<Websites />} />
          <Route path="/services/invitaciones" element={<Invitaciones />} />
          <Route path="/services/ecommerce" element={<Ecommerce />} />
          <Route path="/services/software" element={<Software />} />
          <Route path="/services/diseno" element={<Diseno />} />
          <Route path="/services/soporte" element={<Soporte />} />
          {/* <Route path="/portfolio" element={<Portfolio />} /> */}
          <Route path="/contact-us" element={<ContactUs />} />
          <Route path='*' element={<NoPage />} />
        </Routes>
        {/* <ContactBanner/> */}
        <Footer />
      </div>
    </Router>
  );
};

export default App;

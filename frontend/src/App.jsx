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
// import NoPage from './pages/NoPage';



const App = () => {
  return (
    <Router>
      <div>
        <Navbar />
          <Routes>
            <Route index element={<Home />}/>
            <Route path="/home" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/services" element={<Services />} />
            <Route path="/portfolio" element={<Portfolio />} />
            <Route path="/contact-us" element={<ContactUs />} />
            {/* <Route path='*' element={<NoPage />} /> */}
          </Routes>
        <Footer/>
      </div>
    </Router>
  );
};

export default App;

// import React from 'react';
// import { Link } from 'react-router-dom';

// const Navbar = () => {
//   return (
//     <nav className="navbar navbar-expand-lg navbar-light bg-light csnavbar">
//       <Link className="navbar-brand" to="/home">Calupoh+Solutions</Link>
//       <button 
//         className="navbar-toggler" 
//         type="button" 
//         data-toggle="collapse" 
//         data-target="#navbarNav" 
//         aria-controls="navbarNav" 
//         aria-expanded="false" 
//         aria-label="Toggle navigation"
//       >
//         <span className="navbar-toggler-icon"></span>
//       </button>
//       <div className="collapse navbar-collapse navbarNav" id="navbarNav">
//         <ul className="navbar-nav menuList">
//           {["home", "about", "services", "portfolio", "contact-us"].map((page) => (
//             <li className="nav-item" key={page}>
//               <Link className="nav-link" to={`/${page}`}>{page.replace("-", " ")}</Link>
//             </li>
//           ))}
//         </ul>
//       </div>
//     </nav>
//   );
// };


// export default Navbar;

import React from 'react';
import { Link } from 'react-router-dom';
import { FaHome, FaInfoCircle, FaServicestack, FaEnvelope, FaBriefcase, FaGlobe, FaShoppingCart, FaEnvelopeOpen, FaCode, FaPaintBrush, FaTools } from 'react-icons/fa';

const Navbar = () => {
  return (
    <nav className="navbar navbar-expand-lg csnavbar">
      <Link className="navbar-brand" to="/home">Calupoh+Solutions</Link>
      <button 
        className="navbar-toggler" 
        type="button" 
        data-toggle="collapse" 
        data-target="#navbarNav" 
        aria-controls="navbarNav" 
        aria-expanded="false" 
        aria-label="Toggle navigation"
      >
        <span className="navbar-toggler-icon"></span>
      </button>
      <div className="collapse navbar-collapse" id="navbarNav">
        <ul className="navbar-nav menuList">
          <li className="nav-item">
            <Link className="nav-link" to="/home"> Home</Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" to="/about"> About</Link>
          </li>
          <li className="nav-item dropdown">
            <Link className="nav-link dropdown-toggle" to="#" id="servicesDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
               Servicios
            </Link>
            <div className="dropdown-menu" aria-labelledby="servicesDropdown">
              <Link className="dropdown-item" to="/services/websites"><FaGlobe /> Creación de Websites</Link>
              <Link className="dropdown-item" to="/services/ecommerce"><FaShoppingCart /> E-commerce</Link>
              <Link className="dropdown-item" to="/services/invitaciones"><FaEnvelopeOpen /> Invitaciones Digitales</Link>
              <Link className="dropdown-item" to="/services/software"><FaCode /> Software a Medida</Link>
              <Link className="dropdown-item" to="/services/diseno"><FaPaintBrush /> Diseño Digital</Link>
              <Link className="dropdown-item" to="/services/soporte"><FaTools /> Soporte y Reparación</Link>
            </div>
          </li>
          <li className="nav-item">
            <Link className="nav-link" to="/portfolio"> Portfolio</Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" to="/contact-us"> Contact Us</Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;


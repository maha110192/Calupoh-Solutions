// import React, { useState, useEffect, useRef } from 'react';
// import { Link } from 'react-router-dom';
// import { FaGlobe, FaShoppingCart, FaEnvelopeOpen, FaCode, FaPaintBrush, FaTools } from 'react-icons/fa';

// const Navbar = () => {
//   const [expanded, setExpanded] = useState(false);
//   const dropdownRef = useRef(null);

//   const handleSelect = () => {
//     setExpanded(false); // Colapsa la navbar
//   };

//   const handleOutsideClick = (event) => {
//     if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
//       setExpanded(false); // Colapsa el dropdown
//     }
//   };

//   useEffect(() => {
//     document.addEventListener('mousedown', handleOutsideClick);
//     return () => {
//       document.removeEventListener('mousedown', handleOutsideClick);
//     };
//   }, []);

//   return (
//     <nav className="navbar navbar-expand-lg csnavbar">
//       <Link 
//         className="navbar-brand" 
//         to="/home" 
//         onClick={(e) => {
//           e.preventDefault();
//           handleSelect();
//           setTimeout(() => window.scrollTo({ top: 0, behavior: 'smooth' }), 0);
//         }}
//       >
//         Calupoh+Solutions
//       </Link>
//       <button 
//         className="navbar-toggler" 
//         type="button" 
//         onClick={() => setExpanded(!expanded)}
//         aria-controls="navbarNav" 
//         aria-expanded={expanded} 
//         aria-label="Toggle navigation"
//       >
//         <span className="navbar-toggler-icon"></span>
//       </button>
//       <div className={`collapse navbar-collapse ${expanded ? 'show' : ''}`} id="navbarNav">
//         <ul className="navbar-nav menuList">
//           <li className="nav-item">
//             <Link className="nav-link" to="/home" onClick={handleSelect}>Home</Link>
//           </li>
//           <li className="nav-item">
//             <Link className="nav-link" to="/about" onClick={handleSelect}>About</Link>
//           </li>
//           <li className="nav-item dropdown" ref={dropdownRef}>
//             <Link 
//               className="nav-link dropdown-toggle" 
//               to="#" 
//               id="servicesDropdown" 
//               role="button" 
//               onClick={() => setExpanded(prev => !prev)} // Cambia el estado al hacer clic
//             >
//               Servicios
//             </Link>
//             <div className={`dropdown-menu ${expanded ? 'show' : ''}`} aria-labelledby="servicesDropdown">
//               <Link className="dropdown-item" to="/services/websites" onClick={handleSelect}><FaGlobe /> Websites</Link>
//               <Link className="dropdown-item" to="/services/invitaciones" onClick={handleSelect}><FaEnvelopeOpen /> Invitaciones Digitales</Link>
//               <Link className="dropdown-item" to="/services/ecommerce" onClick={handleSelect}><FaShoppingCart /> E-commerce</Link>
//               <Link className="dropdown-item" to="/services/software" onClick={handleSelect}><FaCode /> Software a Medida</Link>
//               <Link className="dropdown-item" to="/services/diseno" onClick={handleSelect}><FaPaintBrush /> Diseño Digital</Link>
//               <Link className="dropdown-item" to="/services/soporte" onClick={handleSelect}><FaTools /> Soporte y Reparación</Link>
//               <Link className="dropdown-item" to="/services" onClick={handleSelect}><FaGlobe /> Todos nuestros Servicios</Link>
//             </div>
//           </li>
//           <li className="nav-item">
//             <Link className="nav-link" to="/portfolio" onClick={handleSelect}>Portfolio</Link>
//           </li>
//           <li className="nav-item">
//             <Link className="nav-link" to="/contact-us" onClick={handleSelect}>Contact Us</Link>
//           </li>
//         </ul>
//       </div>
//     </nav>
//   );
// };

// export default Navbar;

import React, { useState, useEffect, useRef } from 'react';
import { FaAngleDown } from 'react-icons/fa'; // Importar ícono para el dropdown
import { Link } from 'react-router-dom';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isServicesOpen, setIsServicesOpen] = useState(false);
  const dropdownRef = useRef(null);
  const navRef = useRef(null);

  const handleSelect = () => {
    setIsOpen(false);
    setIsServicesOpen(false);
  };

  const handleOutsideClick = (event) => {
    if (navRef.current && !navRef.current.contains(event.target)) {
      setIsOpen(false);
      setIsServicesOpen(false);
    }
  };

  useEffect(() => {
    document.addEventListener('mousedown', handleOutsideClick);
    return () => {
      document.removeEventListener('mousedown', handleOutsideClick);
    };
  }, []);

  const NavItem = ({ href, children }) => (
    <li className="nav-item">
      <a href={href} className="nav-link" onClick={handleSelect}>
        {children}
      </a>
    </li>
  );

  const ServicesDropdown = () => (
    <div className={`dropdown-menu ${isServicesOpen ? 'block' : 'hidden'}`} ref={dropdownRef}>
      <Link className="dropdown-item" to="/services/websites" onClick={handleSelect}>🌐 Websites</Link>
      <Link className="dropdown-item" to="/services/invitaciones" onClick={handleSelect}>✉️ Invitaciones Digitales</Link>
      <Link className="dropdown-item" to="/services/ecommerce" onClick={handleSelect}>🛒 E-commerce</Link>
      <Link className="dropdown-item" to="/services/software" onClick={handleSelect}>💻 Software a Medida</Link>
      <Link className="dropdown-item" to="/services/diseno" onClick={handleSelect}>🎨 Diseño Digital</Link>
      <Link className="dropdown-item" to="/services/soporte" onClick={handleSelect}>🔧 Soporte y Reparación</Link>
      <Link className="dropdown-item" to="/services" onClick={handleSelect}>🌐 Todos nuestros Servicios</Link>
    </div>
  );

  return (
    <nav ref={navRef} className="navbar">
      <div className="navbar-container">
        <div className="navbar-brand">
          <a href="/home" onClick={handleSelect}>Calupoh+Solutions</a>
        </div>
        <div className="navbar-menu">
          <ul className="navbar-nav">
            <NavItem href="/home">Home</NavItem>
            <NavItem href="/about">About</NavItem>
            <li className="nav-item dropdown" ref={dropdownRef}>
              <button
                onClick={() => setIsServicesOpen(!isServicesOpen)}
                className="dropdown-button">
                Servicios <FaAngleDown />
              </button>
              <ServicesDropdown />
            </li>
            <NavItem href="/portfolio">Portfolio</NavItem>
            <NavItem href="/contact-us">Contact Us</NavItem>
          </ul>
        </div>
        <button className="navbar-toggler" onClick={() => setIsOpen(!isOpen)}>
          {isOpen ? '✕' : '☰'}
        </button>
      </div>
      <div className={`mobile-menu ${isOpen ? 'translate-x-0' : '-translate-x-full'}`}>
        <ul className="navbar-nav">
          <NavItem href="/home">Home</NavItem>
          <NavItem href="/about">About</NavItem>
          <li className="nav-item">
            <button
              onClick={() => setIsServicesOpen(!isServicesOpen)}
              className="dropdown-button"
            >
              Servicios <FaAngleDown />
            </button>
            {isServicesOpen && <ServicesDropdown />}
          </li>
          <NavItem href="/portfolio">Portfolio</NavItem>
          <NavItem href="/contact-us">Contact Us</NavItem>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;


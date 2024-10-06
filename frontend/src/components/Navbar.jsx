import React from 'react';
import { Link } from 'react-router-dom';


const Navbar = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light csnavbar">
      <a className="navbar-brand" href="/home">Calupoh+Solutions</a>
      <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon"></span>
      </button>
      <div className="collapse navbar-collapse navbarNav">
        <ul className="navbar-nav menuList">
          <li className="nav-item"><Link className="nav-link" to="/home">Home</Link></li>
          <li className="nav-item"><Link className="nav-link" to="/about">About</Link></li>
          <li className="nav-item"><Link className="nav-link" to="/services">Services</Link></li>
          <li className="nav-item"><Link className="nav-link" to="/portfolio">Portfolio</Link></li>
          <li className="nav-item"><Link className="nav-link" to="/contact-us">Contact Us</Link></li>
        </ul>
      </div>
    </nav>
  );
};


export default Navbar;

// import React, { useState, useEffect } from 'react';
// import { Navbar, Nav, Container } from 'react-bootstrap';
// import { Link } from 'react-router-dom';
// import { useTranslation } from 'react-i18next';

// const NavbarComponent = () => {
//   const { t } = useTranslation();
//   const [isScrolled, setIsScrolled] = useState(false);

//   useEffect(() => {
//     const handleScroll = () => {
//       setIsScrolled(window.scrollY > 50);
//     };
//     window.addEventListener('scroll', handleScroll);
//     return () => window.removeEventListener('scroll', handleScroll);
//   }, []);

//   return (
//     <Navbar 
//       expand="lg" 
//       className={`navbar-glass ${isScrolled ? 'py-2' : 'py-3'}`}
//     >
//       <Container>
//         <Navbar.Brand as={Link} to="/" className="text-gradient font-bold text-xl">
//           Calupoh Solutions
//         </Navbar.Brand>
//         <Navbar.Toggle aria-controls="basic-navbar-nav" />
//         <Navbar.Collapse id="basic-navbar-nav">
//           <Nav className="ms-auto">
//             <Nav.Link as={Link} to="/">{t('nav.home')}</Nav.Link>
//             <Nav.Link as={Link} to="/services">{t('nav.services')}</Nav.Link>
//             <Nav.Link as={Link} to="/portfolio">{t('nav.portfolio')}</Nav.Link>
//             <Nav.Link as={Link} to="/about">{t('nav.about')}</Nav.Link>
//             <Nav.Link as={Link} to="/contact">{t('nav.contact')}</Nav.Link>
//           </Nav>
//         </Navbar.Collapse>
//       </Container>
//     </Navbar>
//   );
// };

// export default NavbarComponent;
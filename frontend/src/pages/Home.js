
import React, { useEffect, useRef } from 'react';
import { Container } from "react-bootstrap";
import yourImage from '../assets/images/itsolutions1.png'; 

const Home = () => {
  const sectionRefs = useRef([]);

  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('reveal');
          observer.unobserve(entry.target); // Stop observing after revealing
        }
      });
    });

    // Copy refs to a variable for cleanup
    const currentRefs = sectionRefs.current;

    currentRefs.forEach(ref => {
      if (ref) observer.observe(ref);
    });

    return () => {
      currentRefs.forEach(ref => {
        if (ref) observer.unobserve(ref);
      });
    };
  }, []);

  return (
    <>
      <section className="top-section" ref={el => sectionRefs.current[0] = el}>
        <div className="container">
          <div className="hero">
            <h1>Calupoh Solutions</h1>
            <p>You Imagine We code</p>
            <div className="color-div">
              <h3>Nuestras Soluciones</h3>
              <p>Ofrecemos servicios de desarrollo web, marketing digital y más.</p>
            </div>
          </div>
        </div>
      </section>

      <section id="photos" className="photos-block photos2" ref={el => sectionRefs.current[1] = el}>
        <Container fluid>
          <div className="title-holder">
            {/* Add any content here if needed */}
          </div>
        </Container>
      </section>

      <section className="making-real-section" ref={el => sectionRefs.current[2] = el}>
        <div className="container">
          <div className="makingItReal">
            <h2>Making it Real</h2>
            <p>Transformamos tus ideas en soluciones efectivas a través de:</p>
            <ul>
              <li>Desarrollo ágil y personalizado.</li>
              <li>Integración de tecnologías innovadoras.</li>
              <li>Consultoría experta para tu negocio.</li>
            </ul>
          </div>
        </div>
      </section>

      <section className="about-section" ref={el => sectionRefs.current[3] = el}>
        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-6 col-md-12">
              <h2 className="reveal-text">About Us</h2>
              <p className="reveal-text">Somos un equipo dedicado a ofrecer soluciones digitales de alta calidad.</p>
              <p className="reveal-text">Nuestra misión es transformar tu negocio a través de la tecnología.</p>
            </div>
            <div className="col-lg-6 col-md-12">
              <img src={yourImage} alt="Our company" className="img-fluid" />
            </div>
          </div>
        </div>
      </section>

      <section className="services-section" ref={el => sectionRefs.current[4] = el}>
        <div className="container">
          <div className="servicesList">
            {/* Add service details here */}
          </div>
        </div>
      </section>
    </>
  );
};

export default Home;

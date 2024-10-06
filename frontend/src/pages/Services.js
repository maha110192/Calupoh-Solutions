import React, { useEffect, useRef } from 'react';
// import { Container } from "react-bootstrap";
// import yourImage from '../assets/images/apps1.jpg'; 

const Services = () => {
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
    <section className="servicesShow-section" ref={el => sectionRefs.current[1] = el}>
      <div className="container">
        <h2>Nuestros Servicios</h2>
        <div className="row">
          <div className="col-md-4">
            <div className="card">
              <div className="card-body">
                <h5 className="card-title">Desarrollo Web</h5>
                <p className="card-text">Creamos sitios web adaptativos y de alto rendimiento.</p>
              </div>
            </div>
          </div>
          <div className="col-md-4">
            <div className="card">
              <div className="card-body">
                <h5 className="card-title">Consultoría de TI</h5>
                <p className="card-text">Asesoramos a empresas en sus estrategias digitales.</p>
              </div>
            </div>
          </div>
          <div className="col-md-4">
            <div className="card">
              <div className="card-body">
                <h5 className="card-title">Marketing Digital</h5>
                <p className="card-text">Ayudamos a aumentar tu presencia en línea.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
    </>
  );
};

export default Services;

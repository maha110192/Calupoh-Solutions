import React, { useEffect, useRef } from 'react';
// import { Container } from "react-bootstrap";
// import yourImage from '../assets/images/itsolutions1.png'; 

const Portfolio = () => {
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
      <section className="portfolio-section" ref={el => sectionRefs.current[1] = el}>
        <div className="container">
          <h2>Portfolio</h2>
          <p>Mira algunos de nuestros proyectos anteriores:</p>
          <div className="row">
            <div className="col-md-4">
              <div className="card">
                <img src="project1.jpg" className="card-img-top" alt="Proyecto 1" />
                <div className="card-body">
                  <h5 className="card-title">Proyecto 1</h5>
                  <p className="card-text">Descripción breve del proyecto 1.</p>
                </div>
              </div>
            </div>
            <div className="col-md-4">
              <div className="card">
                <img src="project2.jpg" className="card-img-top" alt="Proyecto 2" />
                <div className="card-body">
                  <h5 className="card-title">Proyecto 2</h5>
                  <p className="card-text">Descripción breve del proyecto 2.</p>
                </div>
              </div>
            </div>
            <div className="col-md-4">
              <div className="card">
                <img src="project3.jpg" className="card-img-top" alt="Proyecto 3" />
                <div className="card-body">
                  <h5 className="card-title">Proyecto 3</h5>
                  <p className="card-text">Descripción breve del proyecto 3.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Portfolio;

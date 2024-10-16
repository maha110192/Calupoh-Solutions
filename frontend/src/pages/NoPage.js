import React, { useEffect, useRef } from 'react';
// import { Container } from "react-bootstrap";
// import yourImage from '../assets/images/itsolutions1.png';

const About = () => {
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
    <section className="about-section" ref={el => sectionRefs.current[3] = el}>
        <div className="container">
          <div className="hero">
            <div className="row align-items-center">
              <div className="col-lg-6 col-md-12">
                <h2 className="reveal-text">404 - Página No Encontrada</h2>
                <p className="reveal-text">Lo sentimos, la página que buscas no existe.</p>
                <p className="reveal-text">Por favor, verifica la URL o regresa a la página de inicio.</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default About;

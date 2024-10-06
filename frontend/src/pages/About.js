import React, { useEffect, useRef } from 'react';
// import { Container } from "react-bootstrap";
import yourImage from '../assets/images/itsolutions1.png';

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

export default About;

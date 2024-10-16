import React, { useEffect, useRef } from 'react'; 
import { Button } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faWhatsapp } from '@fortawesome/free-brands-svg-icons'; 

const ContactBanner = () => {
  const sectionRefs = useRef([]);

  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('reveal');
          observer.unobserve(entry.target);
        }
      });
    });

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

  const whatsappNumber = process.env.REACT_APP_WHATSAPP_NUMBER; 
  const whatsappMessage = 'Hello, I need help with designing a web invitation.';
  const whatsappURL = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(whatsappMessage)}`;

  return (
    <section ref={el => sectionRefs.current[0] = el} className="contact-section">
      <div className="full-width-container text-center">
        <h2 className="my-4">Conoce más sobre nuestros servicios</h2>
        <p className="mb-5">Contáctanos por email o envíanos un WhatsApp.</p>
        <div className="button-group d-flex justify-content-center">
          <Button variant="primary" className="mx-2 inform2" href="/contact-us">Más informes</Button>
          <Button variant="success" className="mx-2 sendWhatsapp rounded-circle" href={whatsappURL} target="_blank" rel="noreferrer">
            <FontAwesomeIcon icon={faWhatsapp} className="whatsapp-icon" /> 
          </Button>
        </div>
      </div>
    </section>
  );
};

export default ContactBanner;

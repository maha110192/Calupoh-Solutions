import React from 'react';
import { Button } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faWhatsapp } from '@fortawesome/free-brands-svg-icons';

const ContactBanner = () => {
  const whatsappNumber = process.env.REACT_APP_WHATSAPP_NUMBER;
  const whatsappMessage = 'Hola, Tengo una idea en mente que quiero realizar.';
  const whatsappURL = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(whatsappMessage)}`;

  return (
    <section className="contact-section" aria-labelledby="contact-title">
      <div className="full-width-container text-center">
        <h2 id="contact-title" className="my-4">Conoce más sobre nuestros servicios</h2>
        <p className="mb-5">Contáctanos por email o envíanos un WhatsApp.</p>
        <div className="button-group d-flex justify-content-center">
          <Button 
            variant="primary" 
            className="mx-2 inform2" 
            href="/contact-us"
            aria-label="Más informes por email"
          >
            Más informes
          </Button>
          <Button 
            variant="success" 
            className="mx-2 sendWhatsapp" 
            href={whatsappURL} 
            target="_blank" 
            rel="noreferrer noopener"
            aria-label="Enviar mensaje por WhatsApp"
          >
            <FontAwesomeIcon icon={faWhatsapp} className="whatsapp-icon" aria-hidden="true" />
            <span className="visually-hidden">WhatsApp</span>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default ContactBanner;
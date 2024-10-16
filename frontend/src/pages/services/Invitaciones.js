import React, { useEffect, useRef } from 'react';
import { Container, Row, Col, Card } from 'react-bootstrap';
import './Invitaciones.css';

import paoMiguelImg from '../../assets/images/PaoyMiguel-inv2.jpg';
import mypImg from '../../assets/images/myp-inv3.jpg';
import photoSectionImg from '../../assets/images/photosection5.jpg';

const PackageCard = ({ title, items }) => (
  <Col md={4}>
    <Card className="package-card">
      <Card.Body>
        <Card.Title className="package-title">{title}</Card.Title>
        <Card.Text className="text-center">
          <ul>
            {items.map((item, index) => (
              <li key={index}>{item}</li>
            ))}
          </ul>
        </Card.Text>
      </Card.Body>
    </Card>
  </Col>
);

const Invitaciones = () => {
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

  const packages = [
    {
      title: 'Estandar',
      items: [
        'Portada con Fecha del Evento',
        'Animaciones Predefinidas',
        'Countdown',
        'Lugar del evento con Maps',
        'Wedding dress',
        'Mesa de Regalos (definida por el cliente)',
        'Confirmación (por correo al cliente y al invitado)',
        'Subdominio que vence 15 días después del evento'
      ]
    },
    {
      title: 'Custom',
      items: [
        'Secciones adicionales que el cliente requiera (Padrinos, Padres, etc.)',
        'Tipografía',
        'Galería de Fotos',
        'Colores para la invitación (opcional)',
        'Hospedaje'
      ]
    },
    {
      title: 'Premium',
      items: [
        'Acceso a la invitación en un dominio propio',
        'Lista de Invitados en Base de Datos',
        'Animaciones personalizadas',
        'Multilingual Automatizado',
        'Agregar Evento a tu Calendario'
      ]
    }
  ];

  const invitations = [
    { id: 1, name: 'Pao y Miguel', imageUrl: paoMiguelImg, link: 'https://example.com/inv1' },
    { id: 2, name: 'Novios 2', imageUrl: mypImg, link: 'https://example.com/inv2' },
    { id: 3, name: 'Novios 3', imageUrl: photoSectionImg, link: 'https://example.com/inv3' },
  ];

  return (
    <Container className="invitaciones-section">
      <section ref={el => sectionRefs.current[0] = el} className="topInvitaciones-section">
        <div className='hero'>
          <h1 className="text-center my-4">Invitaciones Digitales</h1>
          <p className="text-center mb-5">
            Ofrecemos invitaciones digitales para todo tipo de eventos sociales.
          </p>
        </div>
      </section>

      <section ref={el => sectionRefs.current[1] = el} className="invitePackage-section">
        <Row className="justify-content-center">
          {packages.map((pkg, index) => (
            <PackageCard key={index} title={pkg.title} items={pkg.items} />
          ))}
        </Row>
      </section>

      <section ref={el => sectionRefs.current[2] = el} className='invitacionesExample-section'>
        <div className='hero'>
          <h1 className="text-center my-4">Revisa alguna de nuestras invitaciones</h1>
          <p className="text-center mb-5">Conoce nuestras invitaciones web y enamorate de ellas.</p>
        </div>
        <Row className="justify-content-center">
          {invitations.map(invitation => (
            <Col md={4} key={invitation.id}>
              <div
                className="invitation-card"
                style={{ backgroundImage: `url(${invitation.imageUrl})` }}
                onClick={() => window.open(invitation.link, '_blank')}
              >
                <div className="cinta">
                  {invitation.name}
                </div>
              </div>
            </Col>
          ))}
        </Row>
      </section>
    </Container>
  );
};

export default Invitaciones;

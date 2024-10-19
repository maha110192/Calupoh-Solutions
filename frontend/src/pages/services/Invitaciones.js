import React from 'react';
import { Container, Row, Col, Card, Button } from 'react-bootstrap';
import { motion } from 'framer-motion';
import { LazyLoadImage } from 'react-lazy-load-image-component';
import 'react-lazy-load-image-component/src/effects/blur.css';
import './Invitaciones.css';

import paoMiguelImg from '../../assets/images/PaoyMiguel-inv2.jpg';
import mypImg from '../../assets/images/myp-inv3.jpg';
import photoSectionImg from '../../assets/images/photosection5.jpg';

const PackageCard = ({ title, items, price }) => (
  <motion.div
    whileHover={{ scale: 1.05 }}
    whileTap={{ scale: 0.95 }}
  >
    <Card className="package-card">
      <Card.Body>
        <Card.Title className="package-title">{title}</Card.Title>
        <Card.Text as="div" className="text-center">
          <ul>
            {items.map((item, index) => (
              <li key={index}>{item}</li>
            ))}
          </ul>
        </Card.Text>
        <Card.Footer className="text-center">
          <strong>Desde ${price}</strong>
        </Card.Footer>
      </Card.Body>
    </Card>
  </motion.div>
);

const InvitationCard = ({ name, imageUrl, link }) => (
  <motion.div
    whileHover={{ scale: 1.05 }}
    whileTap={{ scale: 0.95 }}
    className="invitation-card-container"
  >
    <LazyLoadImage
      alt={name}
      height={500}
      src={imageUrl}
      width="100%"
      effect="blur"
      className="invitation-image"
    />
    <div className="invitation-overlay">
      <h3>{name}</h3>
      <Button variant="light" href={link} target="_blank" rel="noopener noreferrer">
        Ver Invitación
      </Button>
    </div>
  </motion.div>
);

const Invitaciones = () => {
  const packages = [
    {
      title: 'Estándar',
      items: [
        'Portada con Fecha del Evento',
        'Animaciones Predefinidas',
        'Countdown',
        'Lugar del evento con Maps',
        'Wedding dress',
        'Mesa de Regalos',
        'Confirmación',
        'Subdominio (15 días post-evento)'
      ],
      price: 99
    },
    {
      title: 'Custom',
      items: [
        'Todo lo del paquete Estándar',
        'Secciones adicionales',
        'Tipografía personalizada',
        'Galería de Fotos',
        'Colores personalizados',
        'Información de Hospedaje'
      ],
      price: 149
    },
    {
      title: 'Premium',
      items: [
        'Todo lo del paquete Custom',
        'Dominio propio',
        'Lista de Invitados en Base de Datos',
        'Animaciones personalizadas',
        'Multilingual Automatizado',
        'Agregar Evento a Calendario'
      ],
      price: 199
    }
  ];

  const invitations = [
    { id: 1, name: 'Pao y Miguel', imageUrl: paoMiguelImg, link: 'https://example.com/inv1' },
    { id: 2, name: 'María y Pedro', imageUrl: mypImg, link: 'https://example.com/inv2' },
    { id: 3, name: 'Ana y Juan', imageUrl: photoSectionImg, link: 'https://example.com/inv3' },
  ];

  return (
    <Container fluid className="invitaciones-section">
      <motion.section
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="topInvitaciones-section"
      >
        <Container>
          <h1 className="text-center my-4">Invitaciones Digitales</h1>
          <p className="text-center mb-5">
            Crea invitaciones únicas y personalizadas para tu evento especial. Nuestras invitaciones digitales combinan estilo, funcionalidad y sostenibilidad.
          </p>
        </Container>
      </motion.section>

      <section className="invitePackage-section">
        <Container>
          <h2 className="text-center mb-4">Nuestros Paquetes</h2>
          <Row className="justify-content-center">
            {packages.map((pkg, index) => (
              <Col md={4} key={index}>
                <PackageCard {...pkg} />
              </Col>
            ))}
          </Row>
        </Container>
      </section>

      <section className="invitacionesExample-section">
        <Container>
          <h2 className="text-center my-4">Ejemplos de Nuestras Invitaciones</h2>
          <p className="text-center mb-5">Explora nuestras invitaciones web y déjate inspirar para tu evento.</p>
          <Row className="justify-content-center">
            {invitations.map(invitation => (
              <Col md={4} key={invitation.id} className="mb-4">
                <InvitationCard {...invitation} />
              </Col>
            ))}
          </Row>
        </Container>
      </section>

      <section className="cta-section">
        <Container className="text-center">
          <h2 className="mb-4">¿Listo para crear tu invitación?</h2>
          <p className="mb-4">Contáctanos hoy y comencemos a diseñar la invitación perfecta para tu evento especial.</p>
          <Button variant="primary" className='mx-2 inform2' size="lg" href="/contact">Solicitar Cotización</Button>
        </Container>
      </section>
    </Container>
  );
};

export default Invitaciones;
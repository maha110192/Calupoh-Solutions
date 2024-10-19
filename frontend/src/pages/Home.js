import React, { useEffect, useRef } from 'react';
import { Container, Row, Col } from "react-bootstrap";
import { motion } from 'framer-motion';
import { Code, ShoppingCart, Cloud, Heart, Trophy, Cpu } from 'lucide-react';
import { Button } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faWhatsapp } from '@fortawesome/free-brands-svg-icons';


const Home = () => {
  const sectionRefs = useRef([]);

  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('reveal');
          observer.unobserve(entry.target);
        }
      });
    }, {
      threshold: 0.1
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

  const services = [
    {
      icon: <Code size={40} />,
      title: "Desarrollo Web",
      description: "Sitios web modernos y responsivos que cautivan a tus usuarios"
    },
    {
      icon: <ShoppingCart size={40} />,
      title: "E-Commerce",
      description: "Plataformas de comercio electrónico seguras y escalables"
    },
    {
      icon: <Cloud size={40} />,
      title: "Software a Medida",
      description: "Soluciones personalizadas para tu negocio"
    }
  ];

  const stats = [
    { number: "100+", text: "Proyectos Completados" },
    { number: "50+", text: "Clientes Satisfechos" },
    { number: "5+", text: "Años de Experiencia" }
  ];

    const whatsappNumber = process.env.REACT_APP_WHATSAPP_NUMBER;
    const whatsappMessage = 'Hola, Tengo una idea en mente que quiero realizar.';
    const whatsappURL = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(whatsappMessage)}`;

  return (
    <>
      <section id="hero" className="hero-section" ref={el => sectionRefs.current[0] = el}>
        <div className="hero-content">
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            Transformamos Ideas en Realidad Digital
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="hero-subtitle"
          >
            Desarrollo web • Software a medida • E-commerce • Soluciones digitales
          </motion.p>
          <motion.div 
            className="hero-cta"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            <a href="#contact" className="primary-btn">Iniciar Proyecto</a>
            <a href="#services" className="secondary-btn">Explorar Servicios</a>
          </motion.div>
        </div>
      </section>

      <section id="services" className="services-section" ref={el => sectionRefs.current[1] = el}>
        <Container>
          <div className="section-header">
            <h2>Nuestros Servicios</h2>
            <p>Soluciones digitales completas para hacer crecer tu negocio</p>
            <p>Somos expertos en desarrollo de software y servicios digitales, comprometidos con impulsar el éxito de tu negocio a través de soluciones tecnológicas innovadoras.</p>
          </div>
          <Row>
            {services.map((service, index) => (
              <Col md={4} key={index}>
                <motion.div 
                  className="service-card"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.2 }}
                >
                  <div className="service-icon">{service.icon}</div>
                  <h3>{service.title}</h3>
                  <p>{service.description}</p>
                </motion.div>
              </Col>
            ))}
          </Row>
        </Container>
      </section>

      <section id="why-us" className="why-us-section" ref={el => sectionRefs.current[2] = el}>
        <Container>
          <Row className="align-items-center">
            <Col lg={6}>
              <div className="why-us-content">
                <h2>¿Por qué elegirnos?</h2>
                <div className="feature-item">
                  <Cpu className="feature-icon" />
                  <div>
                    <h3>Tecnología Avanzada</h3>
                    <p>Utilizamos las últimas tecnologías para crear soluciones modernas y eficientes.</p>
                  </div>
                </div>
                <div className="feature-item">
                  <Heart className="feature-icon" />
                  <div>
                    <h3>Enfoque Personalizado</h3>
                    <p>Cada proyecto es único y recibe atención personalizada según tus necesidades.</p>
                  </div>
                </div>
                <div className="feature-item">
                  <Trophy className="feature-icon" />
                  <div>
                    <h3>Resultados Garantizados</h3>
                    <p>Nos comprometemos con la excelencia y la satisfacción del cliente.</p>
                  </div>
                </div>
              </div>
            </Col>
            <Col lg={6}>
              <div className="stats-container">
                {stats.map((stat, index) => (
                  <motion.div 
                    key={index}
                    className="stat-item"
                    initial={{ opacity: 0, scale: 0.5 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.5, delay: index * 0.2 }}
                  >
                    <h3>{stat.number}</h3>
                    <p>{stat.text}</p>
                  </motion.div>
                ))}
              </div>
            </Col>
          </Row>
        </Container>
      </section>

      <section id="cta" className="cta-section" ref={el => sectionRefs.current[3] = el}>
        <Container>
          <div className="cta-content ">
            <h2>¿Listo para dar el siguiente paso?</h2>
            <p>Conversemos sobre cómo podemos ayudarte a alcanzar tus objetivos digitales</p>
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
        </Container>
      </section>
    </>
  );
};

export default Home;
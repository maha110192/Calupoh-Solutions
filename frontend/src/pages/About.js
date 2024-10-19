import React from 'react';
import { Container, Row, Col, Button, Card } from 'react-bootstrap';
import { motion } from 'framer-motion';
import { Target, Rocket, Users, Shield, Award, BarChart } from 'lucide-react';
import './About.css';

const About = () => {
  const values = [
    {
      icon: <Target className="value-icon" />,
      title: "Visión",
      description: "Ser el socio tecnológico preferido para empresas que buscan destacar en la era digital."
    },
    {
      icon: <Award className="value-icon" />,
      title: "Experiencia",
      description: "Más de 10 años transformando negocios a través de soluciones digitales innovadoras."
    },
    {
      icon: <Users className="value-icon" />,
      title: "Equipo",
      description: "Expertos apasionados por la tecnología y comprometidos con tu éxito."
    }
  ];

  const benefits = [
    {
      icon: <Rocket className="benefit-icon" />,
      title: "Acelera tu Crecimiento",
      description: "Potenciamos tu negocio con soluciones digitales que impulsan el crecimiento y la eficiencia."
    },
    {
      icon: <Shield className="benefit-icon" />,
      title: "Tecnología Confiable",
      description: "Implementamos soluciones robustas y seguras que protegen tu inversión."
    },
    {
      icon: <BarChart className="benefit-icon" />,
      title: "Resultados Medibles",
      description: "Nos enfocamos en generar valor real y resultados tangibles para tu negocio."
    }
  ];

  return (
    <div className="about-page">
      <section className="hero-section2">
        <Container>
          <Row className="justify-content-center">
            <Col md={8} className="text-center">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
              >
                <h1 className="hero-title">Empoderamos tu Negocio en la Era Digital</h1>
                <p className="hero-subtitle">
                  Somos más que una empresa de tecnología - somos tu socio estratégico
                  en la transformación digital. Convertimos los desafíos en oportunidades
                  y las ideas en soluciones que impulsan tu crecimiento.
                </p>
              </motion.div>
            </Col>
          </Row>
        </Container>
      </section>

      {/* Quiénes Somos */}
      <section className="who-we-are-section">
        <Container>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center section-header"
          >
            <h2>Quiénes Somos</h2>
            <p className="section-description">
              Nacimos con la misión de democratizar la tecnología para empresas de todos los tamaños.
              Nuestro equipo combina experiencia técnica con visión estratégica para
              entregar soluciones que no solo resuelven problemas actuales, sino que
              preparan tu negocio para el futuro.
            </p>
          </motion.div>

          <Row className="mt-5">
            {values.map((value, index) => (
              <Col md={4} key={index}>
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
                >
                  <Card className="value-card">
                    <Card.Body className="text-center">
                      <div className="icon-wrapper">
                        {value.icon}
                      </div>
                      <Card.Title>{value.title}</Card.Title>
                      <Card.Text>{value.description}</Card.Text>
                    </Card.Body>
                  </Card>
                </motion.div>
              </Col>
            ))}
          </Row>
        </Container>
      </section>

      {/* Cómo Empoderamos */}
      <section className="empower-section">
        <Container>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="text-center section-header"
          >
            <h2>Cómo Empoderamos tu Negocio</h2>
            <p className="section-description">
              Nuestra metodología se centra en crear valor real para tu empresa,
              combinando tecnología innovadora con estrategias probadas.
            </p>
          </motion.div>

          <Row className="mt-5">
            {benefits.map((benefit, index) => (
              <Col md={4} key={index}>
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
                  className="benefit-item"
                >
                  <div className="benefit-icon-wrapper">
                    {benefit.icon}
                  </div>
                  <h3>{benefit.title}</h3>
                  <p>{benefit.description}</p>
                </motion.div>
              </Col>
            ))}
          </Row>
        </Container>
      </section>

      {/* Call to Action */}
      <section className="cta-section">
        <Container className="text-center">
          <h2 className="mb-4">Comienza tu Transformación Digital Hoy</h2>
          <p className="mb-4">Descubre cómo podemos ayudarte a alcanzar tus objetivos empresariales a través de soluciones digitales innovadoras.</p>
          <Button variant="primary" className='mx-2 inform2' size="lg" href="/contact">Agenda una Consulta Gratuita</Button>
        </Container>
      </section>
    </div>
  );
};

export default About;
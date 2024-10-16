import React, { useEffect, useRef } from 'react';
import { Carousel } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import './Websites.css';

const Website = () => {
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

  return (
    <>
      <section className="hero-section text-center" ref={el => sectionRefs.current[0] = el}>
        <div className="container">
          <h1 className="animated fadeIn">Creación de Sitios Web Personalizados</h1>
          <p className="animated fadeIn">Desarrollamos sitios web que destacan y cumplen tus necesidades.</p>
          <button className="btn btn-primary animated fadeIn planBtn ">¡Contáctanos!</button>
        </div>
      </section>

      <section className="servicesShow-section" ref={el => sectionRefs.current[1] = el}>
        <div className="container">
          <h2 className="text-center">Nuestros Servicios</h2>
          <div className="row">
            {[
              { title: "Sitios Web Informativos", description: "Páginas claras y atractivas.", img: require('../../assets/images/apps1.jpg') },
              { title: "E-commerce", description: "Tiendas en línea seguras.", img: require('../../assets/images/abstract1.jpg') },
              { title: "Portafolios", description: "Muestra tu trabajo de manera profesional.", img: require('../../assets/images/photosection5.jpg') },
              { title: "Landing Pages", description: "Páginas de aterrizaje efectivas.", img: require('../../assets/images/myp-inv3.jpg') },
              { title: "Blogs", description: "Publica contenido de calidad.", img: require('../../assets/images/image (1).png') },
            ].map((service, index) => (
              <div className="col-md-4 mb-4" key={index}>
                <div className="card service-card text-center">
                  <img src={service.img} alt={service.title} className="card-img-top" />
                  <div className="card-body">
                    <h5 className="card-title">{service.title}</h5>
                    <p className="card-text">{service.description}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="features-section" ref={el => sectionRefs.current[2] = el}>
        <div className="container">
          <h2 className="text-center">Características Clave</h2>
          <div className="row">
            {[
              { feature: "Diseño Responsivo", description: "Tu sitio se verá bien en cualquier dispositivo." },
              { feature: "Optimización SEO", description: "Aumenta tu visibilidad en los motores de búsqueda." },
              { feature: "Integración con Redes Sociales", description: "Conecta con tu audiencia en todas las plataformas." },
              { feature: "Fácil de Usar", description: "Gestión sencilla para actualizar tu contenido." }
            ].map((item, index) => (
              <div className="col-md-3 mb-4" key={index}>
                <div className="feature-card text-center">
                  <div className="feature-icon">
                    <i className="fas fa-check-circle"></i>
                  </div>
                  <h5>{item.feature}</h5>
                  <p>{item.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="testimonials-section" ref={el => sectionRefs.current[3] = el}>
        <div className="container">
          <h2 className="text-center">Lo que nuestros clientes dicen</h2>
          <Carousel interval={5000}>
            {[
              { text: "¡El equipo de Calupoh+ hizo un gran trabajo en mi sitio web! Muy satisfecho.", name: "Juan Pérez" },
              { text: "Recomiendo totalmente sus servicios. El diseño de mi e-commerce es impresionante.", name: "María López" },
              { text: "Gran atención al cliente y un resultado espectacular. ¡Gracias!", name: "Carlos Sánchez" }
            ].map((testimonial, index) => (
              <Carousel.Item key={index}>
                <div className="text-center carousel-caption">
                  <p>"{testimonial.text}"</p>
                  <h5>- {testimonial.name}</h5>
                </div>
              </Carousel.Item>
            ))}
          </Carousel>
        </div>
      </section>

      <section className="steps-section" ref={el => sectionRefs.current[4] = el}>
        <div className="container">
          <h2 className="text-center">Pasos para Crear tu Sitio Web</h2>
          <div className="steps-container">
            <ol className="steps-list">
              {["Contactarnos", "Dinos tu idea", "Elige alguno de nuestros planes", "Empieza a usar tu website", "Recibe soporte continuo"].map((step, index) => (
                <li key={index}>
                  <span className="step-number">{index + 1}</span> {step}
                </li>
              ))}
            </ol>
          </div>
        </div>
      </section>

      <section className="plans-section" ref={el => sectionRefs.current[5] = el}>
        <div className="container">
          <h2 className="text-center">Nuestros Planes</h2>
          <div className="row">
            {[ 
              { name: "Paquete Básico", price: "$299", features: ["1 Página Web", "Diseño Responsive", "Soporte Básico"] },
              { name: "Paquete Premium", price: "$599", features: ["Hasta 5 Páginas", "E-commerce", "Soporte Prioritario"] }
            ].map((plan, index) => (
              <div className="col-md-6 mb-4" key={index}>
                <div className="card plan-card text-center">
                  <div className="card-body">
                    <h5 className="card-title">{plan.name}</h5>
                    <p className="card-price">{plan.price}</p>
                    <ul className="list-unstyled">
                      {plan.features.map((feature, idx) => (
                        <li key={idx}>{feature}</li>
                      ))}
                    </ul>
                    <button className="btn btn-primary planBtn">Elegir Plan</button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default Website;

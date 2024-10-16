import React, { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';

const Services = () => {
  const sectionRefs = useRef([]);

  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('reveal');
          observer.unobserve(entry.target); // Detener la observación después de revelar
        }
      });
    });

    // Copiar refs a una variable para limpieza
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
    { title: "Desarrollo Web", description: "Creamos sitios web adaptativos y de alto rendimiento.", slug: "desarrollo-web" },
    { title: "Invitaciones Digitales", description: "Diseñamos invitaciones creativas para cualquier ocasión.", slug: "invitaciones" },
    { title: "E-commerce", description: "Desarrollamos tiendas en línea seguras y efectivas.", slug: "e-commerce" },
    { title: "Software a medida", description: "Creamos soluciones de software personalizadas para tu negocio.", slug: "software-a-medida" },
    { title: "Diseño Digital", description: "Diseños gráficos que destacan y comunican tu mensaje.", slug: "diseno-digital" },
    { title: "Soporte y Reparación", description: "Asistencia técnica y mantenimiento para tus sistemas.", slug: "soporte-reparacion" }
  ];

  return (
    <section className="servicesShow-section" ref={el => sectionRefs.current[1] = el}>
      <div className="container ">
        <div className="hero">
          <h2>Nuestros Servicios</h2>
          <div className="row servicesHero">
            {services.map((service, index) => (
              <div className="col-md-4 " key={index}>
                <div className="card service-card">
                  <div className="card-body">
                    <Link to={`/services/${service.slug}`} className="service-link">
                      <h5 className="card-title">{service.title}</h5>
                      <p className="card-text">{service.description}</p>
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;

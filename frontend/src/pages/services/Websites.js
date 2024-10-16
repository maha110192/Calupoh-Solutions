import React, { useEffect, useRef } from 'react';

const Website = () => {
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

  return (
    <>
      <section className="servicesShow-section" ref={el => sectionRefs.current[1] = el}>
        <div className="container">
            <div className="hero">
            <h2>Nuestros Servicios</h2>
            <div className="row">
                {[
                { title: "Desarrollo Web", description: "Creamos sitios web adaptativos y de alto rendimiento." },
                { title: "Invitaciones Digitales", description: "Diseñamos invitaciones creativas para cualquier ocasión." },
                { title: "E-commerce", description: "Desarrollamos tiendas en línea seguras y efectivas." },
                { title: "Software a medida", description: "Creamos soluciones de software personalizadas para tu negocio." },
                { title: "Diseño Digital", description: "Diseños gráficos que destacan y comunican tu mensaje." },
                { title: "Soporte y Reparación", description: "Asistencia técnica y mantenimiento para tus sistemas." }
                ].map((service, index) => (
                <div className="col-md-4" key={index}>
                    <div className="card service-card">
                    <div className="card-body">
                        <h5 className="card-title">{service.title}</h5>
                        <p className="card-text">{service.description}</p>
                    </div>
                    </div>
                </div>
                ))}
            </div>
        </div>
        </div>
      </section>
    </>
  );
};

export default Website;

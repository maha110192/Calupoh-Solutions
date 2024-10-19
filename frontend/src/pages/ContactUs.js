import React, { useRef, useEffect, useState } from 'react';
import axios from "axios";
import { useTranslation } from 'react-i18next';
import { Container, Spinner, Alert } from "react-bootstrap";
import { Button, Form, FormGroup, Input, Label } from "reactstrap";
import { motion } from 'framer-motion';
import { Mail, Phone, MapPin, Clock, Send } from 'lucide-react';
import './ContactUs.css';
import { FaWhatsapp } from 'react-icons/fa';

const ContactUs = () => {
  const sectionRefs = useRef([]);
  const { t } = useTranslation();
  const [formData, setFormData] = useState({ name: "", email: "", phone: "", message: "" });
  const [errors, setErrors] = useState({});
  const [alert, setAlert] = useState({ type: '', message: '' });
  const [loading, setLoading] = useState(false);
  const [timeoutId, setTimeoutId] = useState(null);

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
    currentRefs.forEach(ref => { if (ref) observer.observe(ref); });
    
    return () => {
      currentRefs.forEach(ref => { if (ref) observer.unobserve(ref); });
      if (timeoutId) clearTimeout(timeoutId);
    };
  }, [timeoutId]);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
    // Clear error when user starts typing
    if (errors[name]) {
      setErrors({ ...errors, [name]: '' });
    }
  };

  const validateForm = () => {
    const newErrors = {};
    if (!formData.name) newErrors.name = "Name is required";
    if (!formData.email) newErrors.email = "Email is required";
    else if (!/\S+@\S+\.\S+/.test(formData.email)) newErrors.email = "Email format is invalid";
    if (!formData.phone) newErrors.phone = "Phone is required";
    if (!/^\d{10}$/.test(formData.phone)) newErrors.phone = "Phone must be 10 digits";
    if (!formData.message) newErrors.message = "Please leave us a message";
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleFormSubmit = async (e) => {
    e.preventDefault();
    if (validateForm()) {
      setLoading(true);
      try {
        const response = await axios.post(
          `${process.env.REACT_APP_API_URL}/rsvp`,
          formData,
          { headers: { "Content-Type": "application/json" } }
        );
        setAlert({ type: 'success', message: response.data.message });
        setFormData({ name: "", email: "", phone: "", message: "" });
        
        const id = setTimeout(() => {
          setAlert({ type: '', message: '' });
        }, 4000);
        setTimeoutId(id);
      } catch (error) {
        setAlert({ type: 'danger', message: "There was an error submitting the form." });
        const id = setTimeout(() => {
          setAlert({ type: '', message: '' });
        }, 4000);
        setTimeoutId(id);
      } finally {
        setLoading(false);
      }
    }
  };

  const contactInfo = [
    { icon: <Mail size={24} />, text: "info@calupohsolutions.com" },
    { icon: <Phone size={24} />, text: "+1 604 968 1508" },
    { icon: <FaWhatsapp size={24} />, text: "+52 449 149 9782" },
    { icon: <MapPin size={24} />, text: "123 Business Street, Tech City" },
    { icon: <Clock size={24} />, text: "Mon - Fri: 9:00 AM - 6:00 PM" }
  ];

  return (
    <section className="contact-page-section" ref={el => sectionRefs.current[0] = el}>
      <Container>
        <motion.div 
          className="contact-header"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <h1>Get in Touch</h1>
          <p>We'd love to hear from you. Let's create something amazing together.</p>
        </motion.div>

        <div className="contact-content">
          <div className="contact-info-wrapper">
            <motion.div 
              className="contact-info"
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <h3>Contact Information</h3>
              {contactInfo.map((info, index) => (
                <motion.div 
                  key={index}
                  className="info-item"
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.6, delay: 0.1 * (index + 1) }}
                >
                  {info.icon}
                  <span>{info.text}</span>
                </motion.div>
              ))}
            </motion.div>
          </div>

          <motion.div 
            className="contact-form-wrapper"
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            {alert.message && (
              <Alert variant={alert.type} className="form-alert">
                {alert.message}
              </Alert>
            )}
            
            <Form onSubmit={handleFormSubmit} className="contact-form">
              <FormGroup>
                <Label for="name">{t('formName')}</Label>
                <Input 
                  type="text" 
                  name="name" 
                  placeholder="Enter your name"
                  value={formData.name}
                  onChange={handleInputChange}
                  className={errors.name ? 'is-invalid' : ''}
                />
                {errors.name && <div className="invalid-feedback">{errors.name}</div>}
              </FormGroup>

              <FormGroup>
                <Label for="email">{t('formEmail')}</Label>
                <Input 
                  type="email" 
                  name="email" 
                  placeholder="Enter your email"
                  value={formData.email}
                  onChange={handleInputChange}
                  className={errors.email ? 'is-invalid' : ''}
                />
                {errors.email && <div className="invalid-feedback">{errors.email}</div>}
              </FormGroup>

              <FormGroup>
                <Label for="phone">{t('formPhone')}</Label>
                <Input 
                  type="tel" 
                  name="phone" 
                  placeholder="Enter your phone"
                  value={formData.phone}
                  onChange={handleInputChange}
                  className={errors.phone ? 'is-invalid' : ''}
                />
                {errors.phone && <div className="invalid-feedback">{errors.phone}</div>}
              </FormGroup>

              <FormGroup>
                <Label for="message">{t('formMessage')}</Label>
                <Input 
                  type="textarea" 
                  name="message" 
                  rows="5" 
                  placeholder="Your message..."
                  value={formData.message}
                  onChange={handleInputChange}
                  className={errors.message ? 'is-invalid' : ''}
                />
                {errors.message && <div className="invalid-feedback">{errors.message}</div>}
              </FormGroup>

              <Button type="submit" className="submit-button" disabled={loading}>
                {loading ? (
                  <Spinner size="sm" />
                ) : (
                  <>
                    Send Message <Send size={18} />
                  </>
                )}
              </Button>
            </Form>
          </motion.div>
        </div>
      </Container>
    </section>
  );
};

export default ContactUs;



// // import { Container } from "react-bootstrap";
// import React, { useRef, useEffect, useState } from 'react';
// import yourImage from '../assets/images/itsolutions1.png';
// import axios from "axios";
// import { useTranslation } from 'react-i18next';
// import {
//   Container,
//   // Modal,
//   // ModalHeader,
//   // ModalBody,
//   // ModalFooter,
//   Spinner,
// } from "react-bootstrap";
// import { Button, Form, FormGroup, Input, Label } from "reactstrap";
// import "bootstrap/dist/css/bootstrap.min.css";

// const ContactUs = () => {
//   const sectionRefs = useRef([]);

//    useEffect(() => {
//     const observer = new IntersectionObserver((entries) => {
//       entries.forEach(entry => {
//         if (entry.isIntersecting) {
//           entry.target.classList.add('reveal');
//           observer.unobserve(entry.target); // Stop observing after revealing
//         }
//       });
//     });

//     // Copy refs to a variable for cleanup
//     const currentRefs = sectionRefs.current;

//     currentRefs.forEach(ref => {
//       if (ref) observer.observe(ref);
//     });

//     return () => {
//       currentRefs.forEach(ref => {
//         if (ref) observer.unobserve(ref);
//       });
//     };
//   }, []);

//   const { t } = useTranslation();
//   const [formData, setFormData] = useState({
//     name: "",
//     email: "",
//     phone: "",
//     message: "",
//   });
//   const [errors, setErrors] = useState({});
//   const [modal, setModal] = useState(false);
//   const [confirmation, setConfirmation] = useState("");
//   const [loading, setLoading] = useState(false);

//   const handleInputChange = (e) => {
//     const { name, value } = e.target;
//     setFormData({ ...formData, [name]: value });
//   };

//   const validateForm = () => {
//     const newErrors = {};
//     if (!formData.name) newErrors.name = "Name is required";
//     if (!formData.email) newErrors.email = "Email is required";
//     // if (!/\S+@\S+\.\S+/.test(formData.email)) newErrors.formData.email = "Email format is invalid";
//     if (!formData.phone) newErrors.phone = "Phone is required";
//     if (!formData.message) newErrors.message = "Please leave us a message";
//     setErrors(newErrors);
//     return Object.keys(newErrors).length === 0;
//   };


//   const handleFormSubmit = async (e) => {
//     e.preventDefault();
//     console.log("API URL:", process.env.REACT_APP_API_URL);
//     if (validateForm()) {
//       setLoading(true);
//       try {
//         const response = await axios.post(
//           `${process.env.REACT_APP_API_URL}/rsvp`,  // Using the environment variable
//           formData,
//           {
//             headers: {
//               "Content-Type": "application/json",
//             },
//           }
//         );
//         setConfirmation(response.data.message);
//         // toggleModal();
//       } catch (error) {
//         console.error("There was an error!", error);
//         setErrors({ submit: "There was an error submitting the form." });
//       } finally {
//         setLoading(false);
//       }
//     }
//   };


//   return (
//     <>
//     <section className="about-section" ref={el => sectionRefs.current[3] = el}>
        // <div className="container">
        //   <div className="row align-items-center">
        //     <div className="col-lg-6 col-md-12">
        //       <h2 className="reveal-text">About Us</h2>
        //       <p className="reveal-text">Somos un equipo dedicado a ofrecer soluciones digitales de alta calidad.</p>
        //       <p className="reveal-text">Nuestra misión es transformar tu negocio a través de la tecnología.</p>
        //     </div>
        //     <div className="col-lg-6 col-md-12">
        //       <img src={yourImage} alt="Our company" className="img-fluid" />
        //     </div>
        //   </div>
        // </div>
//       </section>
//       <section className="block services-block contactUs-section" ref={el => sectionRefs.current[4] = el}>
//       <Container fluid>
//         <Form onSubmit={handleFormSubmit} className="confirmationForm">
          // <div className="title-holder" id="title-confirm">
          // <h2>{t('confirmationsTitle')}</h2>
          //   <h4>{t('confirmationsSubtitle')}</h4>
          // </div>
//           <FormGroup>
//             <Label for="name">{t('formName')}</Label>
//             <Input
//               type="text"
//               name="name"
//               placeholder="Enter your name"
//               value={formData.name}
//               onChange={handleInputChange}
//             />
//             {errors.name && <div style={{ color: "red" }}>{errors.name}</div>}
//           </FormGroup>
//           <FormGroup>
//             <Label for="email">{t('formEmail')}</Label>
//             <Input
//               type="text"
//               name="email"
//               placeholder="Enter your email address"
//               value={formData.email}
//               onChange={handleInputChange}
//             />
//             {errors.email && <div style={{ color: "red" }}>{errors.email}</div>}
//           </FormGroup>
//           <FormGroup>
//             <Label for="phone">{t('formPhone')}</Label>
//             <Input
//               type="text"
//               name="phone"
//               placeholder="Enter your phone"
//               value={formData.phone}
//               onChange={handleInputChange}
//             />
//             {errors.phone && <div style={{ color: "red" }}>{errors.phone}</div>}
//           </FormGroup>
//           <FormGroup>
//             <Label for="message">{t('formMessage')}</Label>
//             <Input
//               type="textarea"
//               rows="5"
//               name="message"
//               className="confirmBox"
//               placeholder=""
//               value={formData.message}
//               onChange={handleInputChange}
//             >
//             </Input>
//             {errors.message && <div style={{ color: "red" }}>{errors.message}</div>}
//           </FormGroup>
//           <Button
//             type="submit"
//             className="btn btn-primary"
//             id="confirmButton"
//             disabled={loading} // Disable button while loading
//           >
//             {loading ? (
//               <>
//                 <Spinner
//                   as="span"
//                   animation="border"
//                   size="sm"
//                   role="status"
//                   aria-hidden="true"
//                   className="mr-2"
//                 />
//                 Submitting...
//               </>
//             ) : (
//               "Confirm"
//             )}
//           </Button>
//         </Form>
//       </Container>
//     </section>
//     </>
//   );
// };

// export default ContactUs;


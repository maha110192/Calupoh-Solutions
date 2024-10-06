import yourImage from '../assets/images/apps1.jpg';
import React, { useRef, useEffect, useState } from 'react';
import axios from "axios";
import { useTranslation } from 'react-i18next';
import {
  Container,
  Spinner,
  Alert
} from "react-bootstrap";
import { Button, Form, FormGroup, Input, Label } from "reactstrap";
import "bootstrap/dist/css/bootstrap.min.css";

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
      if (timeoutId) clearTimeout(timeoutId); // Clear timeout on unmount
    };
  }, [timeoutId]);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const validateForm = () => {
    const newErrors = {};
    if (!formData.name) newErrors.name = "Name is required";
    if (!formData.email) newErrors.email = "Email is required";
    else if (!/\S+@\S+\.\S+/.test(formData.email)) newErrors.email = "Email format is invalid";
    if (!formData.phone) newErrors.phone = "Phone is required";
    if (!/\d{10}/.test(formData.phone)) newErrors.phone = "Phone must be 10 digits";
    if (!formData.message) newErrors.message = "Please leave us a message";
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleFormSubmit = async (e) => {
    e.preventDefault();
    if (validateForm()) {
      setLoading(true);
      try {
        const response = await axios.post(`${process.env.REACT_APP_API_URL}/rsvp`, formData, { headers: { "Content-Type": "application/json" } });
        setAlert({ type: 'success', message: response.data.message });
        setFormData({ name: "", email: "", phone: "", message: "" }); // Reset form

        // Clear alert after 4 seconds
        const id = setTimeout(() => {
          setAlert({ type: '', message: '' });
        }, 4000);
        setTimeoutId(id);
      } catch (error) {
        setAlert({ type: 'danger', message: "There was an error submitting the form." });
       // Clear alert after 4 seconds
       const id = setTimeout(() => {
        setAlert({ type: '', message: '' });
      }, 4000);
      setTimeoutId(id);
      } finally {
        setLoading(false);
      }
    }
  };

  return (
    <>
      <section className="about-section" ref={el => sectionRefs.current[3] = el}>
      <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-6 col-md-12">
              <h2 className="reveal-text">About Us</h2>
              <p className="reveal-text">Somos un equipo dedicado a ofrecer soluciones digitales de alta calidad.</p>
              <p className="reveal-text">Nuestra misión es transformar tu negocio a través de la tecnología.</p>
            </div>
            <div className="col-lg-6 col-md-12">
              <img src={yourImage} alt="Our company" className="img-fluid" />
            </div>
          </div>
        </div>
      </section>
      <section className="contactUs-section" ref={el => sectionRefs.current[4] = el}>
        <Container fluid>
          {alert.message && <Alert variant={alert.type}>{alert.message}</Alert>}
          <Form onSubmit={handleFormSubmit} className="confirmationForm">
              <div className="title-holder" id="title-confirm">
                {/* <h2>{t('confirmationsTitle')}</h2> */}
                <h4>{t('confirmationsSubtitle')}</h4>
              </div>
            <FormGroup>
              <Label for="name">{t('formName')}</Label>
              <Input type="text" name="name" placeholder="Enter your name" value={formData.name} onChange={handleInputChange} />
              {errors.name && <div className="text-danger">{errors.name}</div>}
            </FormGroup>
            <FormGroup>
              <Label for="email">{t('formEmail')}</Label>
              <Input type="email" name="email" placeholder="Enter your email" value={formData.email} onChange={handleInputChange} />
              {errors.email && <div className="text-danger">{errors.email}</div>}
            </FormGroup>
            <FormGroup>
              <Label for="phone">{t('formPhone')}</Label>
              <Input type="tel" name="phone" placeholder="Enter your phone" value={formData.phone} onChange={handleInputChange} />
              {errors.phone && <div className="text-danger">{errors.phone}</div>}
            </FormGroup>
            <FormGroup>
              <Label for="message">{t('formMessage')}</Label>
              <Input type="textarea" name="message" rows="5" placeholder="Your message..." value={formData.message} onChange={handleInputChange} />
              {errors.message && <div className="text-danger">{errors.message}</div>}
            </FormGroup>
            <Button type="submit" className="btn btn-primary" id="confirmButton" disabled={loading}>
              {loading ? <Spinner as="span" animation="border" size="sm" /> : "Confirm"}
            </Button>
          </Form>
        </Container>
      </section>
    </>
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


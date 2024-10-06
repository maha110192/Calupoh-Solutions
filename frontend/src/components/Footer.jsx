import Container from 'react-bootstrap/Container';
import React, { useEffect, useState } from 'react';
import { useTranslation } from 'react-i18next';
import yourImage from '../assets/images/logo.png';

export default function Footer() {
    const { t } = useTranslation();
    const [show, setShow] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY > 700) {
                setShow(true);
            } else {
                setShow(false);
            }
        };

        window.addEventListener('scroll', handleScroll);
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    function goTop() {
        window.scrollTo({
            top: 0,
            behavior: 'smooth',
        });
    }

    const whatsappNumber = process.env.REACT_APP_WHATSAPP_NUMBER; // Accediendo a la variable de entorno
    const whatsappMessage = 'Hello, I need help with designing a web invitation.';
    const whatsappURL = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(whatsappMessage)}`;

    return (
        <Container fluid className="Footer">
            <div className="row align-items-center" style={{ justifyContent: 'space-between', padding: '20px 0' }}>
                <div className="col-lg-4 col-md-12">
                    <div className="socials">
                        <ul>
                            <li><a href='https://www.linkedin.com/in/miguel-ahumada-803a87116/' target='_blank' rel="noreferrer"><i className="fab fa-linkedin-in"></i></a></li>
                            <li><a href='https://www.linkedin.com/in/miguel-ahumada-803a87116/' target='_blank' rel="noreferrer"><i className="fab fa-instagram"></i></a></li>
                            <li><a href='https://www.linkedin.com/in/miguel-ahumada-803a87116/' target='_blank' rel="noreferrer"><i className="fab fa-facebook"></i></a></li>
                            <li><a href={whatsappURL} target="_blank" rel="noreferrer"><i className="fab fa-whatsapp"></i></a></li>
                        </ul>
                    </div>
                    <p id='copyright'><small>© 2024 Calupoh+Solutions. All Rights Reserved.</small></p>
                </div>
                <div className="col-lg-4 col-md-12 text-center">
                    <div className='logo-footer'>
                        <img src={yourImage} alt="Our company" className="img-fluid" style={{ maxHeight: '50px' }} />
                    </div>
                </div>
                <div className="col-lg-4 col-md-12 text-right">
                    <p style={{ margin: 0 }}>Contact: <a href="mailto:info@calupoh.com">info@calupoh.com</a></p>
                </div>
            </div>
            {show && (<div className='go-top' onClick={goTop}></div>)}
        </Container>
    );
}

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

    const whatsappNumber = process.env.REACT_APP_WHATSAPP_NUMBER; 
    const whatsappMessage = 'Hello, I need help with my idea.';
    const whatsappURL = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(whatsappMessage)}`;

    return (
        <Container fluid className="Footer">
            <div className="row align-items-center" style={{ padding: '20px 0' }}>
                <div className="col-12 col-md-4  mb-3">
                    <div className="socials">
                        <ul>
                            {/* <li><a href='https://www.linkedin.com/in/miguel-ahumada-803a87116/' target='_blank' rel="noreferrer"><i className="fab fa-linkedin-in"></i></a></li> */}
                            <li><a href='https://www.linkedin.com/in/miguel-ahumada-803a87116/' target='_blank' rel="noreferrer"><i className="fab fa-instagram"></i></a></li>
                            <li><a href='https://www.linkedin.com/in/miguel-ahumada-803a87116/' target='_blank' rel="noreferrer"><i className="fab fa-facebook"></i></a></li>
                            <li><a href={whatsappURL} target="_blank" rel="noreferrer"><i className="fab fa-whatsapp"></i></a></li>
                        </ul>
                    </div>
                    <p id='copyright'><small>© 2024 Calupoh+Solutions. All Rights Reserved.</small></p>
                </div>
                <div className="col-12 col-md-4 text-center mb-3">
                    <div className='logo-footer'>
                        <img src={yourImage} alt="Our company" className="img-fluid logoFooter" />
                    </div>
                </div>
                <div className="col-12 col-md-4 text-center mb-3">
                    <p style={{ margin: 0 }}>Contact: <a href="mailto:info@calupoh.com">info@calupoh.com</a></p>
                </div>
            </div>
            {show && (<div className='go-top' onClick={goTop}></div>)}
        </Container>
    );
}

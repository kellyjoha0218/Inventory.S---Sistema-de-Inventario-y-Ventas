import React from "react"; 
import { useNavigate } from 'react-router-dom';
import './footer.css'

import { Container, Row, Col } from 'react-bootstrap';
import FacebookIcon from '../../assets/icons/Facebook.svg';
import InstagramIcon from '../../assets/icons/Instagram.svg';
import LinkedInIcon from '../../assets/icons/LinkedIn.svg';
import TwitterIcon from '../../assets/icons/WhatsApp.svg';
import { Link } from 'react-router-dom';



export const FooterLoginComponent = () =>{

  
    
        return (
          <footer className="bg-dark text-white py-4">
  <Container>
    <Row className="justify-content-between"> {/* Cambié justify-content-center por justify-content-between */}
      
      {/* Columna 1: Logo y Derechos Reservados */}
      <Col md={4} sm={12} className="text-center mb-3">
        <h5 className="mt-2">Inventory.S</h5>
        <p className="derechos">© 2024 Derechos reservados</p>
        <p className="derechos">Diseñado por CaliByte</p>
        <p className="derechos">
          <a href="mailto:info@calibyte.com.co" className="text-light">
            info@calibyte.com.co
          </a>
        </p>
      </Col>

      {/* Columna 2: Redes Sociales */}
      <Col md={4} sm={12} className="text-center mb-3">
        <h5>Síguenos en</h5>
        <div className="d-flex justify-content-center">
          <a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer" className="mx-2">
            <img src={FacebookIcon} alt="Facebook" width="60" height="40" />
          </a>
          <a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer" className="mx-2">
            <img src={InstagramIcon} alt="Instagram" width="50" height="40" />
          </a>
          <a href="https://www.linkedin.com" target="_blank" rel="noopener noreferrer" className="mx-2">
            <img src={LinkedInIcon} alt="LinkedIn" width="40" height="40" />
          </a>
          <a href="https://www.twitter.com" target="_blank" rel="noopener noreferrer" className="mx-2">
            <img src={TwitterIcon} alt="Twitter" width="30" height="40" />
          </a>
        </div>
      </Col>

      
    </Row>
  </Container>
</footer>

        );
      

    /*return(
        <> </>
            <div className="footer_container_login">
                <div className="footer1">
                    <div className="contact-info">
                        <p>Cel: 311 895 478</p>
                        <p>Tel: 01800 4757</p>
                        <p>Email: inventory.S123@gmail.com</p>
                    </div>
                </div>
                <div className="footer2">
                    <ul>
                        <li><i className="fab fa-facebook-f"></i></li>
                        <li><i className="fab fa-twitter"></i></li>
                        <li><i className="fab fa-instagram"></i></li>
                        <li><i className="fab fa-linkedin-in"></i></li>
                    </ul>
                </div>
                <div className="footer3">
                    <div className="rating">
                        <input value="5" name="rating" id="star5" type="radio" />
                        <label htmlFor="star5"></label>
                        <input value="4" name="rating" id="star4" type="radio" />
                        <label htmlFor="star4"></label>
                        <input value="3" name="rating" id="star3" type="radio" />
                        <label htmlFor="star3"></label>
                        <input value="2" name="rating" id="star2" type="radio" />
                        <label htmlFor="star2"></label>
                        <input value="1" name="rating" id="star1" type="radio" />
                        <label htmlFor="star1"></label>
                    </div>
                </div>
            </div>
    )*/
}



import React from "react"; 
import { useNavigate } from 'react-router-dom';
import './style.css'

export const FooterHomeComponent = () =>{

    return(
       <>
             <div className="footer_container">
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

       </>


    )
}
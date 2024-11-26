import React from "react"; 
import { useNavigate } from 'react-router-dom';
import './style.css'

export const HeaderLoginComponent = () =>{

    return (
        <>
            <div className="header_content">
                <div className="header_1">
                    <img src="/src/assets/login/titulo 1.png" alt="Título de la página" className="logo_login" />
                </div>
                <div className="header_2">
                    <a href="/Registro" className="registro">Registrarte</a>
                </div>
            </div>
         </>

    );
};

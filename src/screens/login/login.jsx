import React from "react"; 
import { useNavigate } from 'react-router-dom';

import { HeaderLoginComponent } from "./header/header";
import { BodyLoginComponent } from "./body/body";
import { FooterLoginComponent } from "../../shared/footer/footer";

export const LoginComponent = () =>{ 
    const navigate = useNavigate();  
    const navigateHome =() => {
        console.log("este es el onpress")  
        navigate('/Home') 

    }
    function validateForm() {
        // Obtener los valores de los campos de usuario y contraseña
     /*    var username = document.getElementById('username').value;
        var password = document.getElementById('password').value;
     */
        // Verificar si alguno de los campos está vacío
        if (username === '' || password === '') {
            // Mostrar una alerta si algún campo está vacío
            alert('Por favor, complete el usuario y la contraseña.');
            return false; // Evitar el envío del formulario si hay campos vacíos
        }
        
        // Si ambos campos están completos, permitir el envío del formulario
        return true;
    
    }
    
    return(
        <>
            <HeaderLoginComponent/>
            <BodyLoginComponent navigate={navigateHome}/>
            <FooterLoginComponent/> 
        </>
    );
};


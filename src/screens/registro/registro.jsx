import React from "react"; 
import { useNavigate } from 'react-router-dom';

import {HeaderRegistroComponent}from"./header/header";



export const RegistroComponent =() => {
    const navigate = useNavigate();  
    const navigateHome =() => {
        console.log("este es el onpress")  
        navigate('/Registro')
    } 

    return(
        <>
            <HeaderRegistroComponent/> 
        
        </>

    )
};
import React from "react"; 
import { useNavigate } from 'react-router-dom';

import { HeaderHomeComponent } from "../../shared/header/header";
import { BodyHomeComponent } from "./body/body";
import { FooterHomeComponent } from "./footer/footer";
import { FooterLoginComponent} from "../../shared/footer/footer";

export const HomeComponent =() => {
    const navigate = useNavigate();  
    const navigateHome =() => {
        console.log("este es el onpress")  
        navigate('/')   
    }
     
    return(
        <>
      
            <HeaderHomeComponent/>
            <BodyHomeComponent/>
            <FooterLoginComponent/> 

        </> 
    )
}
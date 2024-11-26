import React,{useState} from "react"; 


import { BodyVentasComponent} from "./boby/body";
import { FooterLoginComponent } from "../../shared/footer/footer";
import { HeaderHomeComponent } from "../../shared/header/header";

export const VentasComponent = () => {
   /*  const navigate = userNavigate();
    const navigateHome =() => {
        console.log("este es el onpress")
        navigate ('/Home') 
    } */
     // Estado para almacenar los datos del formulario
     const [formData, setFormData] =useState ({
        date: '',
        productCode: '',
        productName: '',
        productPrice: ''
    });

    // Estado para almacenar las ventas
    const [sales, setSales] = useState([]);

    // Función para manejar el envío del formulario
    
    return(
        <>
            <HeaderHomeComponent/>
            <BodyVentasComponent />
            <FooterLoginComponent/>
            
        </>

    );
}
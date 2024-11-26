import React , {useState} from "react"; 
import { HeaderHomeComponent } from "../../shared/header/header";
import { BodyInventarioComponent } from "./body/body";
import { FooterLoginComponent } from "../../shared/footer/footer";


export const InventarioComponent =() => {
    
    const [newProduct, setNewProduct] = useState({
        codigo: '',
        codAnexo: '',
        nombre: '',
        unidad: '',
        stock: '',
        moneda: '',
        precio: '',
    });

    const clearInput = () => {
        setNewProduct({
            codigo: '',
            codAnexo: '',
            nombre: '',
            unidad: '',
            stock: '',
            moneda: '',
            precio: '',
        });
    };
    
    

    const showNotification = (message) => {
        setNotification(message);
        setTimeout(() => setNotification(''), 5000); // Borrar notificación después de 5 segundos
    };

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setNewProduct({ ...newProduct, [name]: value });
    };
    

   return(

    <>
        <HeaderHomeComponent />
        <BodyInventarioComponent/>
        <FooterLoginComponent/> 
    </>

   ) 
}
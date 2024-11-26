import React, { useState } from "react";
import './style.css'
import { BrowserRouter as Router, Route, useNavigate } from "react-router-dom";
import axios from "axios"; // Si prefieres usar fetch, omite esta línea

export const BodyLoginComponent = ({navigate}) =>{
    //const[handleSubmit, setHandleSubmit]=useState ()
    //const navigate = useNavigate 
    // Estado para manejar los valores del formulario
    const [formData, setFormData] = useState({
        username: '',
        password: ''
    });

    // Manejar cambios en los campos del formulario
    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value // Actualiza el estado correspondiente
        });
    };

    // Manejar el envío del formulario
    const handleSubmit = async (e) => {
        e.preventDefault(); // Prevenir el comportamiento por defecto del formulario
        const {username,password} = formData
        console.log('Datos del formulario:',username,password);
        // las de tipo get sirven para traer datos 
        //no necesitas enviar algun parametro 

       /*  axios.get("http://localhost/db.php")
        .then(response => {
            console.log("esta es la respues a de la base de datos",response.data)
            
        })
        .catch(error => {

            console.error("Hubo un error al obtener los datos:", error);
        }); */


        axios.post("http://localhost/login.php", {
            username: username,
            password: password  // Cambia esto según lo que necesites enviar
          })
        .then(response => {
            console.log("esta es la respues a de la base de datos",response.data)
            if(response.data.mensaje){
                setFormData({ username: '', password: '' }); // Limpiar el formulario después del envío
                alert(response.data.mensaje)
            }else{
                setFormData({ username: '', password: '' }); // Limpiar el formulario después del envío
                navigate()
            }
        })
        .catch(error => {
            alert(error)
            console.error("Hubo un error al obtener los datos:", error);
        });

        
    };
    

 
    return(    
        <div className="body_container">
            <div className="izq">
                <div className="boby_container1">
                    <div className="h2_login">
                        <h2>El mejor sistema para el crecimiento financiero de tu empresa</h2>
                    </div>
                </div>
                <div className="boby_container2">   
                    <p>Tener a la mano la información que necesitas del inventario <br />y las ventas de tu negocio ahora es fácil y rápido.</p>
                </div>
            </div>
            <div className="der">
                <div className="container3">
                    <form className="form" onSubmit={handleSubmit}>
                        <p id="heading">Ingresa a tu cuenta</p>
                        <div className="input-group">
                            <input 
                                placeholder="Username" 
                                className="input_body"  
                                id="username" 
                                name="username" 
                                type="text" 
                                value={formData.username} 
                                onChange={handleChange}
                                required />
                        </div>
                        <div className="input-group">
                            <input 
                                placeholder="Password" 
                                className="input_body" 
                                id="password" 
                                name="password" 
                                type="password" 
                                value={formData.password} 
                                onChange={handleChange} 
                                required />
                        </div>
                        <div>
                            <span className="Olvide mi contraseña"><a href="#">Olvide mi contraseña?</a></span>
                        </div>
                        <button className="btn" type="submit" > Ingresar</button>
                    </form>
                </div>
            </div>
        </div>
    );
};
 
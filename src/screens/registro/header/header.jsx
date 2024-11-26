import React, { useState } from "react";
import axios from "axios";
import './style.css'

export const HeaderRegistroComponent = () => {
    const [formData, setFormData] = useState({
        nombre: "",
        username: "",
        email: "",
        telefono: "",
        password: "",
        confirmarPassword: "",
        genero: "",
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        if (formData.password !== formData.confirmarPassword) {
            alert("Las contraseñas no coinciden");
            return;
        }

        try {
            const response = await axios.post("http://localhost/register.php", formData);
            console.log("Respuesta del servidor:", response.data);
            if (response.data.success) {
                alert("Registro exitoso");
                setFormData({
                    nombre: "",
                    username: "",
                    email: "",
                    telefono: "",
                    password: "",
                    confirmarPassword: "",
                    genero: "",
                });
            } else {
                alert("Error: " + response.data.message);
            }
        } catch (error) {
            console.error("Error al registrar:", error);
            alert("Hubo un problema al procesar tu registro.");
        }
    };

    return (
        <div className="body_registro">
            <div className="container_registro">
                <div className="titulo1">Registro</div>
                <div className="content">
                    <form onSubmit={handleSubmit}>
                        <div className="user_registro">
                            <div className="cajas_registro">
                                <span className="details">Nombre completo</span>
                                <input 
                                    type="text" 
                                    placeholder="Introduzca su nombre" 
                                    name="nombre" 
                                    value={formData.nombre} 
                                    onChange={handleChange} 
                                    required 
                                />
                            </div>
                            <div className="cajas_registro">
                                <span className="details">Nombre de usuario</span>
                                <input 
                                    type="text" 
                                    placeholder="Ingrese su nombre de usuario" 
                                    name="username" 
                                    value={formData.username} 
                                    onChange={handleChange} 
                                    required 
                                />
                            </div>
                            <div className="cajas_registro">
                                <span className="details">Email</span>
                                <input 
                                    type="email" 
                                    placeholder="Introduce tu correo electrónico" 
                                    name="email" 
                                    value={formData.email} 
                                    onChange={handleChange} 
                                    required 
                                />
                            </div>
                            <div className="cajas_registro">
                                <span className="details">Número de teléfono</span>
                                <input 
                                    type="tel" 
                                    placeholder="Entra tu número" 
                                    name="telefono" 
                                    value={formData.telefono} 
                                    onChange={handleChange} 
                                    required 
                                />
                            </div>
                            <div className="cajas_registro">
                                <span className="details">Contraseña</span>
                                <input 
                                    type="password" 
                                    placeholder="Ingresa tu contraseña" 
                                    name="password" 
                                    value={formData.password} 
                                    onChange={handleChange} 
                                    required 
                                />
                            </div>
                            <div className="cajas_registro">
                                <span className="details">Confirmar contraseña</span>
                                <input 
                                    type="password" 
                                    placeholder="Confirmar la contraseña" 
                                    name="confirmarPassword" 
                                    value={formData.confirmarPassword} 
                                    onChange={handleChange} 
                                    required 
                                />
                            </div>
                        </div>
                        <div className="gender-details">
                         <span className="gender-title">Género</span>
                            <div className="category">
                                 <label htmlFor="dot-1">
                              <input
                                 type="radio"
                                name="genero"
                                id="dot-1"
                                value="Masculino"
                                checked={formData.genero === "Masculino"}
                                 onChange={handleChange}
                                />
                                Masculino
                             </label>
                             <label htmlFor="dot-2">
                            <input
                                type="radio"
                                name="genero"
                                id="dot-2"
                                value="Femenino"
                                checked={formData.genero === "Femenino"}
                                onChange={handleChange}
                            />
                            Femenino
                                </label>
                            <label htmlFor="dot-3">
                            <input
                                type="radio"
                                name="genero"
                                id="dot-3"
                                value="Prefiero no decir"
                                checked={formData.genero === "Prefiero no decir"}
                                onChange={handleChange}
                            />
                            Prefiero no decir
                            </label>
                            </div>
                        </div>
                        <div className="button1">
                         <input type="submit" value="Registrar" />
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
};

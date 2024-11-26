import { useState } from "react";


export const FormularioVentasComponent = ({setData}) =>{
  

    // Estado para almacenar los datos del formulario
    const [formData, setFormData] =useState ({
        fecha: '',
        nombreDelProducto: '',
        codigoDelProducto: '',
        precioUSD: ''
    });

    // Estado para almacenar las ventas
    const [sales, setSales] = useState([]);

    // Función para manejar el envío del formulario
    const handleSubmit = (e) => {
        e.preventDefault();
        console.log('Datos del formulario:', formData);

        // Calcular el IVA y el total
        const price = parseFloat(formData.precioUSD);
        const iva = price * 0.12;
        const total = price + iva;

        // Crear un nuevo objeto de venta
        const newSale = {
            fecha: formData.fecha,
            nombreDelProducto: formData.nombreDelProducto,
            codigoDelProducto: formData.codigoDelProducto,
            precioUSD: price,
            iva: iva,
            totalAPagar: total 
        };
        console.log("esto se va a guardar",newSale)
        setData(newSale)
        setFormData({
            fecha: '',
            nombreDelProducto: '',
            codigoDelProducto: '',
            precioUSD: ''
        });
    }

    const handleChange = (e) => {
        console.log("es es el ",e.target)
        const { name, value } = e.target;
        console.log("esto es handleChange name",name)
        console.log("esto es handleChange value",value)
        setFormData({
            ...formData,
            [name]: value // Actualiza el estado correspondiente
        });
    };

    return(
        <>
            <div>
                    <div className="ventas">
                        <h2>Movimientos Diarios de Ventas</h2>
                    </div>
                    
                    <div className="form-container">
                        <form id="sales-form" onSubmit={handleSubmit}>
                            <label htmlFor="date">Fecha:</label>
                            <input 
                                type="date" 
                                id="date" 
                                name="fecha"
                                value={formData.fecha} 
                                onChange={handleChange} required />

                            <label htmlFor="product-code">Código de Producto:</label>
                            <input 
                                type="text" 
                                id="product-code"
                                name="codigoDelProducto" 
                                value={formData.codigoDelProducto} 
                                onChange={handleChange} required />

                            <label htmlFor="product-name">Nombre del Producto:</label>
                            <input 
                                type="text" 
                                id="product-name"
                                name="nombreDelProducto" 
                                value={formData.nombreDelProducto} 
                                onChange={handleChange} required />

                            <label htmlFor="product-price">Precio (USD):</label>
                            <input 
                                type="number" 
                                id="product-price"
                                name="precioUSD" 
                                value={formData.precioUSD} 
                                onChange={handleChange} required />

                            <button 
                                type="submit">Registrar Venta</button>
                        </form>
                    </div>
            </div>
        </>
    )
}

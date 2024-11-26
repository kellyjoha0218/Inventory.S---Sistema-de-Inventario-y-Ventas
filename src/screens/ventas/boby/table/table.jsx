import React, { useEffect } from 'react'; 

export const TableVentasComponent = ({sales}) => {
useEffect(()=> {
    console.log("esto es la data",sales)
},[sales])
return (
    <>
        <div className='tabla_boby'>
            <table>
                <thead>
                    <tr>
                        <th>Fecha</th>
                        <th>Nombre del producto</th>
                        <th>Codigo del producto</th>
                        <th>Precio (USD)</th>
                        <th>IVA (12%)</th>
                        <th>Total a Pagar</th>
                    </tr>
                </thead>
                <tbody id="sales-list">
                    {sales.map((sale, index) => (
                        <tr key={index}>
                            <td>{ sale.fecha }</td>
                            <td>{sale.nombreDelProducto }</td>
                            <td>{sale.codigoDelProducto}</td>
                            <td>{sale.precioUSD ? sale.precioUSD.toFixed(2):0}</td>
                            <td>{sale.iva ? sale.iva.toFixed(2):0}</td>
                            <td>{sale.totalAPagar ? sale.totalAPagar.toFixed(2):0}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    </>
);
}
import React, { useState } from 'react'; 
import './style.css';
import '@fortawesome/fontawesome-free/css/all.min.css';
import { MenuComponent } from '../../../shared/menu/menu';
import { FormularioVentasComponent } from "./formulario/formulario"
import { TableVentasComponent } from "./table/table";
import { VENTAS } from '../../../constants/ventas';
export const BodyVentasComponent= () => {
  const [data,setData]= useState(VENTAS)
   /*  console.log("formData:", formData);
    console.log("sales:", sales); */
    // que es ese sales????


    return (
       
        <div className="container_bosy">
               <div className="container1">
                  <MenuComponent/>
                </div> 
                <div className="container2">
                    <FormularioVentasComponent setData={(newData)=>setData([...data, newData]) }/>
                    <TableVentasComponent sales={data}/>
                </div>
        </div>   
        
      
    );
};

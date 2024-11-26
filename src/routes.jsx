import React,{useEffect} from "react";
import { Route,Routes  } from 'react-router-dom';

import { LoginComponent } from "./screens/login/login";
import { HomeComponent } from "./screens/home/homeComponent";
import { RegistroComponent } from "./screens/registro/registro";
import { InventarioComponent } from "./screens/inventario/inventario";
import {VentasComponent} from "./screens/ventas/ventas";

const RoutesHome=()=>{

    return(
        <Routes>
             <Route exact path="/" element={<LoginComponent/>} />
             <Route exact path="/Home" element={<HomeComponent/>} />
             <Route exact path="/Registro" element={<RegistroComponent/>} />
             <Route exact path="/Inventario" element={<InventarioComponent/>} />
             <Route exact path="/ventas" element={<VentasComponent/>} />
        </Routes>
    )
}
export default RoutesHome;
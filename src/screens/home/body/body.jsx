import React from "react"; 
import { useNavigate } from 'react-router-dom';
import './style.css'
import { MenuComponent } from "../../../shared/menu/menu";

export const BodyHomeComponent = () =>{
      
    return (
            
         <div className="boby-container">
            <div className="container1">
                <MenuComponent/>
            </div>
      
            <div className="container2">
              <div className="padding">
                <div className="col-md-12">
                  <div
                    className="wow fadeInUp animated"
                    data-wow-duration="2s"
                    data-wow-delay="0.2s"
                    style={{
                      visibility: "visible",
                      animationDuration: "2s",
                      animationDelay: "0.2s",
                      animationName: "fadeInUp",
                    }}
                  >
                    
                    <h2>Bienvenido a Inventory S</h2>
                    <p> Hola, ¡bienvenido a tu increíble panel!. </p>
                    <hr/>
                  </div>
      
                  <div className="buttons-wrapper">
                    {/* Primera fila de botones */}
                    <div className="buttons">
                      <a
                        href="#"
                        className="btn btn-success btn-lg"
                        data-wow-duration="2s"
                        data-wow-delay="0.2s"
                      >
                        <a href="/Inventario" className="inventario"></a>
                        <img 
                          src="/src/assets/home/inventario.png" 
                          alt="inventario" 
                        className="imagenes"/>
                      </a>
                      <a
                        href="#"
                        className="btn btn-info btn-lg wow fadeInRight animated"
                        data-wow-duration="3s"
                        data-wow-delay="0.3s"
                      >
                          <img src="/src/assets/home/ventas.png" 
                          alt="ventas" 
                          className="imagenes"/>
                      </a>
                    </div>
      
                    {/* Segunda fila de botones */}
                    <div className="buttons">
                      <a
                        href="#"
                        className="btn btn-secondary btn-lg"
                        data-wow-duration="2s"
                        data-wow-delay="0.2s"
                      >
                         <img src="/src/assets/home/proveedores.png" 
                          alt="proveedores" 
                          className="imagenes"/>
                      </a>
                      <a
                        href="#"
                        className="btn btn-warning btn-lg"
                        data-wow-duration="3s"
                        data-wow-delay="0.3s"
                      >
                         <img src="/src/assets/home/facturacion.png" 
                          alt="facturacion" 
                          className="imagenes"/>
                      </a>
                      <a
                        href="#"
                        className="btn btn-danger btn-lg"
                        data-wow-duration="3s"
                        data-wow-delay="0.4s"
                      >
                         <img src="/src/assets/home/reportes.png" 
                          alt="reportes" 
                          className="imagenes"/>
                      </a>
                    </div>
                  </div>
                </div>
              </div>
      
              <section className="statistics">
                   <div className="row">
    <div className="col-12"> {/* Columna para la primera caja */}
      <div className="box d-flex rounded-2 align-items-center mb-4 p-3"> {/* Añadido padding */}
        <i className="fa-sharp fa-solid fa-hand-holding-dollar"></i>
        <div className="ms-3">
          <h3 className="mb-0">2.000.000</h3>
          <span className="d-block">Ventas</span>
        </div>
      </div>
    </div>
    <div className="col-12"> {/* Columna para la segunda caja */}
      <div className="box d-flex rounded-2 align-items-center mb-4 p-3"> {/* Añadido padding */}
        <i className="fa-sharp fa-solid fa-warehouse"></i>
        <div className="ms-3">
          <h3 className="mb-0">+134</h3>
          <span className="d-block">Stock</span>
        </div>
      </div>
    </div>
    <div className="col-12"> {/* Columna para la tercera caja */}
      <div className="box d-flex rounded-2 align-items-center mb-4 p-3"> {/* Añadido padding */}
        <i className="uil-users-alt fs-2 text-center bg-success rounded-circle"></i>
        <div className="ms-3">
          <h3 className="mb-0">5,245</h3>
          <span className="d-block">Users</span>
        </div>
      </div>
    </div>
                  </div>
              </section>

            </div>
         </div>

        );
      }
                   

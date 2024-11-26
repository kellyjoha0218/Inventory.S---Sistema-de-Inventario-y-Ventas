import React from "react"; 
import './style.css'
import '@fortawesome/fontawesome-free/css/all.min.css';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHome, faWarehouse,faThumbtack,faTags,faTruck, faChartLine,faReceipt,faGears  } from "@fortawesome/free-solid-svg-icons";


export const MenuComponent = () => {
    

    return(
        
            <div id="nav-bar">
                <input id="nav-toggle" type="checkbox" />
                <div id="nav-header">
                    <a id="nav-title" href="https://example.com/menu" target="_blank">
                    <i className="fas fa-caret-down"></i>Menu
                    </a>
                    <label htmlFor="nav-toggle">
                    <span id="nav-toggle-burger"></span>
                    </label>
                </div>
                <div id="nav-content_1">
                    <div className="icono_button">
                        <FontAwesomeIcon icon={faHome} />
                        <a href="/Home" className="inicio">Inicio</a>
                    </div>
                    <div className="icono_button">
                         <FontAwesomeIcon icon={faWarehouse} />
                        <a href="/Inventario" className="inventario">Inventario</a>
                    </div>
                    <div className="icono_button">
                        <FontAwesomeIcon icon={faThumbtack} /> 
                        <span>Artículos fijados</span>
                    </div>
                    <div className="icono_button">
                        <FontAwesomeIcon icon={faTags} />
                        <a href="/Ventas" className="ventas_1">Ventas</a>
                    </div>
                    <div className="icono_button">
                        <FontAwesomeIcon icon={faTruck} />
                        <span>Proveedores</span>
                    </div>
                    <div className="icono_button">
                        <FontAwesomeIcon icon={faChartLine} />
                        <span>Reportes</span>
                    </div>
                    <div className="icono_button">
                        <FontAwesomeIcon icon={faReceipt} />
                        <span>Facturación Electrónica</span>
                    </div>
                    <hr />
                    <div className="icono_button">
                        <FontAwesomeIcon icon={faGears} />
                        <span>Configuración</span>
                    </div>
                    <div id="fas fa-circle-ellipsis"></div>
                </div>
                <input id="nav-footer-toggle" type="checkbox" />
                <div id="nav-footer">
                    <div id="nav-footer-heading">
                        <div id="nav-footer-avatar">
                            <i className="fas fa-user"></i>
                        </div>
                        <div id="nav-footer-titlebox">
                            <a id="nav-footer-title" href="#" target="_blank">
                            Carlos Mosquera
                            </a>
                            <span id="nav-footer-subtitle">Admin</span>
                        </div>
                        <label htmlFor="nav-footer-toggle">
                            <i className="fas fa-caret-up"></i>
                        </label>
                    </div>
                    <div id="nav-footer-content"></div>
                </div>
            </div>
            
    )
}
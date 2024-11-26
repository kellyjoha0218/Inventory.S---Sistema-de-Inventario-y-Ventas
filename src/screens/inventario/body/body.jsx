import React, { useEffect, useState } from "react"; 
import './style.css'
import { INVENTORYDATA } from "../../../constants/inventory";
import { MenuComponent } from "../../../shared/menu/menu";
import axios from 'axios';






export const BodyInventarioComponent =() => {
    const [searchQuery, setSearchQuery] = useState(''); 
    const [notification, setNotification] = useState('');
    const [inventario, setInventario] = useState([]);
    const [searchTerm,setSearchTerm]=useState()
    const [showModal ,setShowModal ]=useState(false)
    const [newProduct ,setNewProduct ]=useState({
        codigo:'',
        codAnexo:'',
        nombre:'',
        unidad:'',
        stock:'',
        moneda:'',
        precio:''
    })
    const [filteredItems,setFilteredItems] = useState([])
    const [supplier,setSupplier]=useState()
    const [selectedValue, setSelectedValue] = useState('');

    useEffect(()=>{
        loadData()
    },[])
    
  /*   const loadData =()=>{
        console.log("esto es el loadData")
        //carga el inventario
        axios.get("http://localhost/searchInventory.php")
        .then(response => {
            console.log("searchInventory",response.data)
            if(response.data.mensaje){
                alert(response.data.mensaje)
            }else{
                setFilteredItems(response.data)
                setInventario(response.data)
            }
        })
        .catch(error => {
            console.error("Hubo un error al obtener los datos:", error);
        });
        //cargan los proovedores
        axios.get("http://localhost/searchSupplier.php")
        .then(response => {
            console.log("searchSupplier",response.data)
            if(response.data.mensaje){
                alert(response.data.mensaje)
            }else{
                setSupplier(response.data)
                //setFilteredItems(response.data)
                //setInventario(response.data)
            }
        })
        .catch(error => {

            console.error("Hubo un error al obtener los datos:", error);
        });

    } */
        const loadData = async () => {
            try {
                const [inventoryRes, supplierRes] = await Promise.all([
                    axios.get("http://localhost/searchInventory.php"),
                    axios.get("http://localhost/searchSupplier.php")
                ]);
                
                setInventario(inventoryRes.data);
                setFilteredItems(inventoryRes.data);
                setSupplier(supplierRes.data);
            } catch (error) {
                console.error("Hubo un error al obtener los datos:", error);
            }
        };
        const addNewProduct = async () => {
        const exists = inventario.some(
            (product) => product.codigo === newProduct.codigo || product.codAnexo === newProduct.codAnexo
        );
        if (exists) {
            alert('Este producto ya existe en el inventario.');
            return;
        }

        if (newProduct.stock < 0 || newProduct.precio < 0) {
            alert('El stock y el precio deben ser números positivos.');
            return;
        }
        console.log("selectedValue",selectedValue)
        newProduct.cod_proveedor=parseInt(selectedValue)
        console.log("newProduct",newProduct)
        try {
            const response = await axios.post("http://localhost/inventory.php", newProduct);
            console.log("Respuesta del servidor:", response.data);

            if (response.data.success) {
                alert("Producto registrado exitosamente");
                loadData()
                setNewProduct({
                    codigo: "",
                    codAnexo: "",
                    nombre: "",
                    unidad: "",
                    stock: "",
                    moneda: "",
                    precio: "",
                });
            } else {
                alert("Error: " + response.data.message);
            }
        } catch (error) {
            console.error("Error al registrar el producto:", error);
            alert("Hubo un problema al registrar el producto.");
        }
    };
    
    const  handleSearch = async (e) => {
        setSearchTerm(e.target.value);
        console.log("esto es e.target.value",e.target.value)
        if(e.target.value==""){
            setFilteredItems(inventario)
        }else{
            
            setFilteredItems(inventario.filter((item) =>
                item.codigo && typeof item.codigo === "string" &&item.codigo.toLowerCase().includes(searchTerm.toLowerCase())
        ))
        }
        console.log("esto es el filter",filteredItems)
    };
    const handleChange = (event) => {
        console.log("event.target.value",event.target.value)
        console.log("event.target.value.cod_proveedor",Object.keys(event.target.value))
        
        setSelectedValue(event.target.value);
      };

    const  handleDeleted= async(item)=>{
        console.log("item",item)
        try {
            const response = await axios.post("http://localhost/deletedProduct.php", {cod_productos:item.cod_productos});
            console.log("Respuesta del servidor:", response.data);

            if (response.data.success) {
                alert("Producto eliminado exitosamente");
                loadData()
                
            } else {
                alert("Error: " + response.data.message);
            }
        } catch (error) {
            console.error("Error al eliminar el producto:", error);
            alert("Hubo un problema al eliminar el producto.");
        }
    }
    return (

    < div> 
    
       

        <div className="container_body">
            <div className="container1">
                <MenuComponent />
            </div>
            <div className="container2">
                <div className="inventory-container">
                    <h2>Consulta de Inventario</h2>
                    <input
                        type="text"
                        id="searchBox"
                        placeholder="Buscar..."
                        value={searchTerm}
                        onChange={handleSearch}
                    />
                    <div className="table-container">
                        <table id="inventoryTable">
                            <thead>
                                <tr>
                                    <th>Código</th>
                                    <th>Código Anexo</th>
                                    <th>Producto</th>
                                    <th>UND</th>
                                    <th>Stock</th>
                                    <th>Moneda</th>
                                    <th>Precio (S/.)</th>
                                    <th>Valor del Inventario</th>
                                    <th>Acciones</th> {/* Nueva columna para acciones */}
                                </tr>
                            </thead>
                            <tbody>
                                {filteredItems.length > 0 ? (
                                    filteredItems.map((item, index) => (
                                        <tr key={index}>
                                            <td>{item.codigo}</td>
                                            <td>{item.codAnexo}</td>
                                            <td>{item.nombre}</td>
                                            <td>{item.unidad}</td>
                                            <td>{item.stock}</td>
                                            <td>{item.moneda}</td>
                                            <td>{item.precio}</td>
                                            <td>{item.stock * item.precio}</td>
                                            <div class="button-container">
                                            <button class="button_cancelar" onClick={() => handleDeleted(item)}>
                                            Delete
                                            </button>
                                        </div>
                                        </tr>
                                    ))
                                ) : (
                                    <tr>
                                        <td colSpan="9">No se ha encontrado nada</td>
                                    </tr>
                                )}
                            </tbody>
                        </table>
                    </div>
    
                    {notification && (
                        <div id="notificationContainer">
                            <p>{notification}</p>
                        </div>
                    )}
    
                    {/* Modal */}
                    {showModal && (
                        <div id="updateModal" className="modal">
                            <div className="modal-content">
                                <span className="close" onClick={closeModal}>
                                    &times;
                                </span>
                                <p id="updateDetails">{modalContent}</p>
                            </div>
                        </div>
                    )}

                    <h3>Añadir Producto al Inventario</h3>

                    <select id="dynamicSelect" value={selectedValue} onChange={handleChange}>
                        <option value="">Seleccione un proveedor</option>
                        {supplier?.map((item) => (
                        <option key={item.cod_proveedor} value={item.cod_proveedor}>
                            {item.nombre}
                        </option>
                        ))}
                    </select>
                    <div id="formulario">
                        <textarea
                            id="newCode"
                            placeholder="Código"
                            value={newProduct.codigo}
                            onChange={(e) => setNewProduct({ ...newProduct, codigo: e.target.value })}
                            required
                        />
                        <textarea
                            id="newCodAnexo"
                            placeholder="Código Anexo"
                            value={newProduct.codAnexo}
                            onChange={(e) => setNewProduct({ ...newProduct, codAnexo: e.target.value })}
                            required
                        />
                        <textarea
                            id="newName"
                            placeholder="Nombre del Producto"
                            value={newProduct.nombre}
                            onChange={(e) => setNewProduct({ ...newProduct, nombre: e.target.value })}
                            required
                        />
                        <input
                            id="newUnidad"
                            placeholder="UND"
                            value={newProduct.unidad}
                            onChange={(e) => setNewProduct({ ...newProduct, unidad: e.target.value })}
                            required
                        />
                        <input
                            id="newStock"
                            placeholder="Stock"
                            value={newProduct.stock}
                            onChange={(e) => setNewProduct({ ...newProduct, stock: e.target.value })}
                            required
                        />
                        <input
                            id="newMoneda"
                            placeholder="Moneda"
                            value={newProduct.moneda}
                            onChange={(e) => setNewProduct({ ...newProduct, moneda: e.target.value })}
                            required
                        />
                        <input
                            id="newPrecio"
                            placeholder="Precio"
                            value={newProduct.precio}
                            onChange={(e) => setNewProduct({ ...newProduct, precio: e.target.value })}
                            required
                        />
                    </div>
                    <button type="button" onClick={()=>addNewProduct()} className="button_añadir">
                        Añadir
                    </button>
                </div>
            </div>
        </div>
        </div> 
    );
    
 } 
  

 

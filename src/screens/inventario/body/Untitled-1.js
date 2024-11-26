 const addNewProduct = () => {
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

        setInventario([...inventario, { ...newProduct, stock: parseInt(newProduct.stock, 10), precio: parseFloat(newProduct.precio) }]);
        setFilteredItems([...inventario, { ...newProduct, stock: parseInt(newProduct.stock, 10), precio: parseFloat(newProduct.precio) }]);
        
        //showNotification('Nuevo producto añadido al inventario.');
        setNewProduct([]);
    };
        //Base de datos php
       //Formulario Producto
       const handleChange = (e) => {
        const { name, value } = e.target;
        setNewProduct({ ...newProduct, [name]: value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        // Validación de campos
        if (!newProduct.codigo || !newProduct.nombre || !newProduct.stock || !newProduct.precio) {
            alert("Por favor, complete todos los campos.");
            return;
        }

        // Convierte stock y precio a números
        newProduct.stock = parseInt(newProduct.stock, 10);
        newProduct.precio = parseFloat(newProduct.precio);

        try {
            const response = await axios.post("http://localhost/inventory.php", newProduct);
            console.log("Respuesta del servidor:", response.data);

            if (response.data.success) {
                alert("Producto registrado exitosamente");
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
    //eliminar 
    const handleCancel = (item) => {
        const updatedItems = filteredItems.filter(filteredItem => filteredItem.codigo !== item.codigo);
        setFilteredItems(updatedItems);
        setNotification(`Producto ${item.nombre} eliminado.`);
    };
    

[
    {
        cod_proveedor: "1",
        cod_rol:"2",
        contacto:"31225456",
        dirreccion:"calle 2 2 48",
        nit:"123",
        nombre:"juan",
    },
    {
    cod_proveedor:"2",
    cod_rol:"2",
    contacto:"311798558",
    dirreccion:"5554556",
    nit:"12365",
    nombre:"pepita",
    }
]
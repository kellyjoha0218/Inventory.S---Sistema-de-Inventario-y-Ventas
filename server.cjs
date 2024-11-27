const express = require('express');
const path = require('path');

const app = express();
const PORT = process.env.PORT || 3000; // Aquí se define el puerto

// Configurar la carpeta pública (por ejemplo, si usas Vite o React)
app.use(express.static(path.join(__dirname, 'dist')));

app.listen(PORT, '0.0.0.0', () => { // Asegúrate de que escucha en 0.0.0.0
  console.log(`Servidor corriendo en http://0.0.0.0:${PORT}`);
});

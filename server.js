const express = require('express');
const path = require('path');
const app = express();

// Servir los archivos estáticos construidos por Vite (frontend)
app.use(express.static(path.join(__dirname, 'dist')));

// Usar el puerto asignado por Render (o 3000 en local)
const port = process.env.PORT || 3000;

app.listen(port, '0.0.0.0', () => {
  console.log(`Servidor corriendo en el puerto ${port}`);
});

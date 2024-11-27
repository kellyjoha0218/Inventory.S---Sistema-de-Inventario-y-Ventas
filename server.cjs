import express from 'express';
const app = express()

// Define una ruta para servir los archivos estáticos del frontend
app.use(express.static(path.join(__dirname, 'dist')));

// Ruta para cualquier otra solicitud que no sea un archivo estático
app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, 'dist', 'index.html'));
});

// Configura el puerto usando `process.env.PORT` (necesario para Render)
const port = process.env.PORT || 3000;

// Inicia el servidor en `0.0.0.0`
app.listen(port, '0.0.0.0', () => {
  console.log(`Servidor corriendo en el puerto ${port}`);
});


import express from 'express';
import path from 'path';
import { fileURLToPath } from 'url';

const app = express();
const port = process.env.PORT || 3000;

// Obtener el directorio actual
const __dirname = path.dirname(fileURLToPath(import.meta.url));

// Servir los archivos estáticos generados por Vite
app.use(express.static(path.join(__dirname, 'dist')));

// Servir el archivo index.html para todas las rutas
app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, 'dist', 'index.html'));
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});

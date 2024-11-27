export default defineConfig({
  plugins: [react()],
  server: {
    host: '0.0.0.0',  // Permitir conexiones externas
    port: 3000,       // Solo para desarrollo local
  },
  build: {
    outDir: 'dist',    // Directorio de salida para los archivos construidos
  },
});

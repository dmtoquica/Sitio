const express = require('express');
const app = express();
const port = 3000;

// Datos de ejemplo que se enviarán al front-end
const datos = [
  { id: 1, nombre: 'Juan', edad: 30 },
  { id: 2, nombre: 'Ana', edad: 25 },
  { id: 3, nombre: 'Luis', edad: 40 }
];

// Endpoint para enviar datos en formato JSON
app.get('/api/datos', (req, res) => {
  res.json(datos);
});

// Servir archivos estáticos (front-end)
app.use(express.static('public'));

// Iniciar el servidor
app.listen(port, () => {
  console.log(`Servidor corriendo en http://localhost:${port}`);
});

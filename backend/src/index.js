const express = require('express');  // Cargamos la librería Express
const app = express();               // Creamos una aplicación Express
const port = 5000;                   // Puerto donde se ejecutará el servidor

// Ruta principal: cuando alguien accede a http://localhost:5000
app.get('/', (req, res) => {
  res.send('¡Backend funcionando!');
});

// Arrancar el servidor y mostrar un mensaje en la consola
app.listen(port, () => {
  console.log(`Servidor backend en http://localhost:${port}`);
});

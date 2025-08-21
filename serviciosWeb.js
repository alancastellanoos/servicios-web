const express = require("express");
const app = express();
const port = 3000;

// Middleware para manejar JSON
app.use(express.json());

// Endpoint básico
app.get("/", (req, res) => {
  res.send("Bienvenido a mi primer servicio web con NodeJS 🚀");
});

// Endpoint GET con JSON
app.get("/api/saludo", (req, res) => {
  res.json({ mensaje: "Hola desde el servicio web 👋" });
});

// Endpoint POST
app.post("/api/usuario", (req, res) => {
  const { nombre } = req.body;
  res.json({ mensaje: `Usuario ${nombre} creado en el servicio web ✅` });
});

// Iniciar servidor
app.listen(port, () => {
  console.log(`Servicio web escuchando en http://localhost:${port}`);
});

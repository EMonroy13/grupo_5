const express = require("express");
const app = express();
const path = require("path");
const indexRoute = require ("./routes/indexRoute");
const usersRoute = require ("./routes/usersRoute");
const productsRoute = require ("./routes/productsRoute");


//middlewares
app.use(express.static(path.join(__dirname, "../public"))); /* arreglando static */
app.set("view engine", "ejs");
app.use(express.json());

/* HOME */
app.use(indexRoute);
/* Login */
app.use(usersRoute);
/* Carrito de compras  */
app.use(productsRoute);


/* Necesitamos agregar app.listen method para probar en local */
app.listen(3000, () => console.log('Server is running in http://localhost:3000'));
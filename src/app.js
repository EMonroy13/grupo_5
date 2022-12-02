const express = require("express");
const app = express();
const path = require("path");

app.use(express.static('public'));

/* Necesitamos agregar app.listen method para probar en local */
app.listen(3000, () => console.log('Server is running in http://localhost:3000'));

/* HOME */
app.get("/", (req, res) => {
    res.sendFile(path.join(__dirname, "/views/index.html"));
});

/* LOGIN PAGE */
app.get("/login", (req, res) => {
    res.sendFile(path.join(__dirname, "/views/login.html"));
});

/* PRODUCT CART PAGE */
app.get("/productCart", (req, res) => {
    res.sendFile(path.join(__dirname, "/views/productCart.html"));
});

/* PRODUCT DETAIL PAGE */
app.get("/productDetail", (req, res) => {
    res.sendFile(path.join(__dirname, "/views/productDetail.html"));
});

/* REGISTER PAGE */
app.get("/register", (req, res) => {
    res.sendFile(path.join(__dirname, "/views/register.html"));
});
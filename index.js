const express = require("express");
const debug = require("debug")("app:server");

const { Config } = require("./src/config/index.js");
const { ProductsAPI } = require("./src/products/index");
const { UsersAPI } = require("./src/users/index");

const app = express();

app.use(express.json());

ProductsAPI(app);
UsersAPI(app);

// Modules

app.listen(Config.port, () => {
  debug(`Servidor escuchando en el puerto ${Config.port}`);
});

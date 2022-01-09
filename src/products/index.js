const express = require("express");

const router = express.Router();

const { ProductsController } = require("./controller");

module.exports.ProductsAPI = (app) => {
  router
    .get("/", ProductsController.getProducts)
    .get("/report", ProductsController.generateReport)
    .get("/:id", ProductsController.getProduct)
    .post("/", ProductsController.createProducts)
    .put("/:id", ProductsController.modifyProduct)
    .delete("/:id", ProductsController.deleteProduct);

  app.use("/api/products", router);
};

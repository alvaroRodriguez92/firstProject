const express= require('express')

const productController = require("../controllers/productController")

const productRouter = express.Router()

productRouter.get("/:categoria", productController.getProductsByCategory)
productRouter.get("/tipo/:tipo", productController.getProductsByTipo)
productRouter.get("/pelicula/:nombre", productController.getProductsByPelicula)



module.exports= productRouter
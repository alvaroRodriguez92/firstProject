const express= require('express')

const productController = require("../controllers/productController")

const productRouter = express.Router()

productRouter.get("/:categoria", productController.getProductsByCategory)


module.exports= productRouter
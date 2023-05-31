const express= require('express')

const productController = require("../controllers/productController")

const productRouter = express.Router()

productRouter.post("/upload", productController.uploadImage)

productRouter.get("/image/:id", productController.getImage);

productRouter.post("/", productController.addImage)


module.exports= productRouter
const express = require("express")
const dotenv = require("dotenv")
const logger = require("morgan")
const cookieParser = require("cookie-parser");
const userRouter = require('./routes/userRouter')
const productRouter = require('./routes/productRouter')
const fileUpload = require('express-fileupload')
const path = require('path')

dotenv.config();

const app = express();

app.use(logger("dev"));
app.use(express.json());
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')))

  
  app.use("/user", userRouter)
  app.use("/product", productRouter)
  
module.exports = app
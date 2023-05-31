const express = require("express");
const userController = require("../controllers/userController");

const userRouter = express.Router();

//Añadir usuario
userRouter.post("/", userController.addUser);
// Login de un usuario
userRouter.post("/login", userController.loginUser);
//Eliminar un usuario por id
userRouter.delete("/:id", userController.deleteUser);
// Modificar un usuario por su id
userRouter.patch("/:id", userController.updateUser);



module.exports = userRouter;

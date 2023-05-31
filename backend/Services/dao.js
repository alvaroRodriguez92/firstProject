const userQueries = require("../mysqlQueries/userQueries");

const dao = {}

// Buscar un usuario por el email
dao.getUserByEmail = async (email) => await userQueries.getUserByEmail(email);

// Buscar un usuario por el id
dao.getUserById = async (id) => await userQueries.getUserById(id);

// Añadir un nuevo usuario
dao.addUser = async (userData) => await userQueries.addUser(userData);

// Eliminar un usuario
dao.deleteUser = async (id) => await userQueries.deleteUser(id);
//Actualiza un usuario
dao.updateUser = async (id, userData) => await userQueries.updateUser(id, userData);

dao.addImage = async (imageData) => await productQueries.addImage(imageData);

// Obtener una imagen por su id
dao.getImageById = async (id) => await productQueries.getImageById(id);

//Añadir producto
dao.addProducto = async (id) => await productQueries.addProducto(id);

//Añadir producto por referencia
dao.getProductByReference = async (id) => await productQueries.getProductByReference(id);





module.exports = dao;

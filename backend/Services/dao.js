const productQueries = require("../mysqlQueries/productQueries");
const userQueries = require("../mysqlQueries/userQueries");

const dao = {}

//---------------------------------------------------------------------

//DAO PARA USERS: 
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

//--------------------------------------------------------------------

//DAO PARA PRODUCTOS:

dao.getProductsByCategory = async (category) => await productQueries.getProductsByCategory(category)
dao.getProductsByTipo = async (tipo) => await productQueries.getProductsByTipo(tipo)
dao.getProductsByPelicula = async(pelicula) =>await productQueries.getProductsByPelicula(pelicula)


module.exports = dao;

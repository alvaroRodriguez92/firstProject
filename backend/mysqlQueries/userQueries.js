const db = require("../Services/mysql");
const md5 = require('md5');
const moment = require('moment')
const utils= require("../utils/utils")

const userQueries = {};

userQueries.getUserByEmail = async (email) => {
    // Conectamos con la base de datos y buscamos si existe el usuario por el email.
    let conn = null
    try {
        conn = await db.createConnection()
        return await db.query('SELECT * FROM clientes WHERE email = ?', email, 'select', conn)
    } catch (e) {
        throw new Error(e)
    } finally {
        conn && await conn.end();
    }
}

userQueries.addUser = async (userData) => {
    // Conectamos con la base de datos y añadimos el usuario.
    let conn = null
    try {
        conn = await db.createConnection()
        // Creamos un objeto con los datos del usuario a guardar en la base de datos.
        // Encriptamos la password con md5 y usamos la libreria momentjs para registrar la fecha actual
        let userObj = {
           firstname: userData.firstname,
           lastname: userData.lastname,
           email: userData.email,
           password: md5(userData.password),
           address: userData.address,
           city: userData.city,
           postalcode: userData.postalcode,
           birthdate: userData.birthdate,
           userRole: "0",
           reg_date: moment().format("YYYY-MM-DD HH:mm:ss")
        }
        return await db.query('INSERT INTO clientes SET ?', userObj, 'insert', conn)
    } catch (e) {
       throw new Error(e)
    } finally {
        conn && await conn.end();
    }
}

// Borrar un usuario por su id
userQueries.deleteUser = async (id) => {
    // Conectamos con la base de datos y eliminamos el usuario por su id.
    let conn = null
    try {
        conn = await db.createConnection()
        return await db.query('DELETE FROM clientes WHERE id = ?', id, 'delete', conn)         
    } catch (e) {
        throw new Error(e)
    } finally {
        conn && await conn.end();
    }
};


userQueries.getUserById = async (id) => {
    // Conectamos con la base de datos y buscamos si existe el usuario por el id.
    let conn = null
    try {
        conn = await db.createConnection()
        return await db.query('SELECT * FROM clientes WHERE id = ?', id, 'select', conn)
    } catch (e) {
        throw new Error(e)
    } finally {
        conn && await conn.end();
    }
};

// Modificar un usuario por su id
userQueries.updateUser = async (id, userData) => {
    // Conectamos con la base de datos y añadimos el usuario.
    let conn = null
    try {
        conn = await db.createConnection();
        // Creamos un objeto con los datos que nos puede llegar del usuario a modificar en la base de datos.
        // Encriptamos la password con md5 si nos llega por el body, sino la declaramos como undefined
        // y usamos la libreria momentjs para actualizar la fecha.
        let userObj = {
           nombre: userData.nombre,
           apellidos: userData.apellidos,
           email: userData.email,
           password: userData.password ? md5(userData.password) : undefined,
           userRole: userData.userRole,
           update_date: moment().format("YYYY-MM-DD HH:mm:ss")
        }
        // Eliminamos los campos que no se van a modificar (no llegan por el body)
        userObj = await utils.removeUndefinedKeys(userObj)

        return await db.query('UPDATE clientes SET ? WHERE id = ?', [userObj, id], 'update', conn);
    } catch (e) {
       throw new Error(e);
    } finally {
        conn && await conn.end();
    }
};

module.exports= userQueries
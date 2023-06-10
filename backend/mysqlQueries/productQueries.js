const db = require("../Services/mysql");
const moment = require ("moment");

const productQueries = {};

productQueries.getProductsByCategory = async(category) =>{
    let conn = null

    try{
        conn = await db.createConnection()
        return await db.query('SELECT * FROM productos WHERE categoria = ?', category, 'select', conn)

    } catch (e) {
        throw new Error(e)
    } finally {
        conn && await conn.end();
    }
}

productQueries.getProductsByTipo = async(tipo) =>{
    let conn = null

    try{
        conn = await db.createConnection()
        return await db.query('SELECT * FROM productos WHERE tipoProducto = ?', tipo, 'select', conn)

    } catch (e) {
        throw new Error(e)
    } finally {
        conn && await conn.end();
    }
}

productQueries.getProductsByPelicula = async(pelicula) =>{
    let conn = null
    const peliculaSeparada = pelicula.split(" ")


    try{
        conn = await db.createConnection()
        for(let i=0;i<peliculaSeparada.length;i++){
            
            return await db.query(`SELECT * FROM productos WHERE (nombreProducto LIKE ?)`, `%${peliculaSeparada}%`, 'select', conn)
        }
        

    } catch (e) {
        throw new Error(e)
    } finally {
        conn && await conn.end();
    }
}
module.exports = productQueries;

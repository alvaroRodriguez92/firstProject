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

module.exports = productQueries;

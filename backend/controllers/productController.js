const dao = require('../Services/dao')
const path= require('path')

const productController={}

 
productController.getProductsByCategory = async (req, res)=>{
    const category = await dao.getProductsByCategory(req.params.categoria)
    try{
        if(!category){
            return res.status(400).send("No se ha encontrado categoria");
        }
        return res.send(category)


    } catch (e){
      console.log(e.message);
      return res.status(400).send(e.message);
    }
}

productController.getProductsByTipo = async (req, res)=>{
    const tipo = await dao.getProductsByTipo(req.params.tipo)
    try{
        if(!tipo){
            return res.status(400).send("No se ha encontrado el tipo");
        }
        return res.send(tipo)


    } catch (e){
      console.log(e.message);
      return res.status(400).send(e.message);
    }
}

productController.getProductsByPelicula = async (req, res)=>{
    const pelicula = await dao.getProductsByPelicula(req.params.nombre)
    try{
        if(!pelicula){
            return res.status(400).send("No se ha encontrado la pelicula");
        }
        return res.send(pelicula)


    } catch (e){
      console.log(e.message);
      return res.status(400).send(e.message);
    }
}


  

module.exports= productController
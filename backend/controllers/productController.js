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

// controlador para subir una imagen a nuestro servidor y guardar el path en la base de datos.
productController.uploadImage = async (req, res) => {
    // console.log(req.files);
    try {
      // Controlamos cuando el objeto files sea null
      // Controlamos si nos viene algún tipo de archivo en el objeto files
      if (!req.files || req.files===null || Object.keys(req.files).length === 0) {
        return res.status(400).send("No se ha cargado ningún archivo");
      }
      // 1 archivo [{}] , >1 archivo [[{},{},...]]
      // Obtenemos un array de objetos con todas las imagenes
      const images = !req.files.imagen.length
        ? [req.files.imagen]
        : req.files.imagen;
      // Recorremos el array para procesar cada imagen
      images.forEach(async (image) => {
        // Ya podemos acceder a las propiedades del objeto image.
        // Obtenemos la ruta de la imagen.
        let uploadPath = path.join(__dirname, "../public/product/" + image.name);
        // Usamos el método mv() para ubicar el archivo en nuestro servidor
        image.mv(uploadPath, (err) => {
          if (err) return res.status(500).send(err);
        });
        await dao.addImage({ name: image.name, path: uploadPath });
      });
      return res.send("Imagen subida!");
    } catch (e) {
      console.log(e.message);
      return res.status(400).send(e.message);
    }
  };

  // Controlador para obtener una imagen por su id
productController.getImageById = async (req, res) => {
  try {
    // Buscamos si el id de la imagen existe en la base de datos
    const image = await dao.getImageById(req.params.id);
    // Si no existe devolvemos un 404 (not found)
    if (image.length <= 0) return res.status(404).send("La imagen no existe");
    // Devolvemos la ruta donde se encuentra la imagen
    return res.send(image[0].path);
  } catch (e) {
    console.log(e.message);
    return res.status(400).send(e.message);
  }
};

  

module.exports= productController
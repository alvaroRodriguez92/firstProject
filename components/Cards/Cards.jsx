import {
  Card,
  CardContent,
  CardHeader,
  CardMedia,
  Typography,
  Grid,
  Button
} from "@mui/material";
import EuroIcon from "@mui/icons-material/Euro";
import ShoppingBagIcon from '@mui/icons-material/ShoppingBag';
import {useState, useEffect} from "react";

export default function Cards({nombre, detalles, material, precio}) {

  const [products, setProducts] = useState([])

    useEffect(()=>{
        console.log("Me renderizo!!!")
        fetch("http://localhost:8000/productos")
        .then((response)=>response.json())
        .then((data)=>setProducts(data))
    }, [])
 

  return(
      <>
        {products.map((productos, i) => {
          return (
            
            <Grid item xs={3}>
            <Card sx={{ width:400, height:750, p:4, m:4, border: "0.5px solid grey", borderRadius: "10px"}}>
              <CardHeader key={i} title={productos.nombreProducto} />
              <CardMedia
                component="img"

                height="256"
                width="256"
                image={productos.imagen}
                // alt="Paella dish"
              />
              <br></br>
              <CardContent sx={{display:"flex", flexDirection:"column"}}>
                <Typography variant="body1" color="text.secondary">
                 {productos.detallesProducto}
                </Typography>
                <br></br>
                <Grid container spacing={2}>
                  <Grid item xs={4}>
                <Typography variant="h6" color="secondary">
                {productos.precio}
                <EuroIcon fontSize="150" />
                </Typography>
                </Grid>
                <Grid item xs={8}>
                <Button variant="contained" alt="añadir a carrito" >Añadir a carrito<ShoppingBagIcon sx={{mb:"4px"}}/></Button>
                </Grid>
              </Grid>
              </CardContent>
              
              </Card>
              </Grid>
            
          );
        })}
        </>    
  );
}

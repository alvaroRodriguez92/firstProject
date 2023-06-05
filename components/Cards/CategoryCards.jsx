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
  
  export default function CategoryCards({products}) {
    

    return(
        <>
          {products?.map((productos, i) => {
            return (
              
              <Grid item 
              xs={12}
              sm={6}
              md={6}
              xl={3}>
              <Card sx={{ maxWidth:450, height:780, p:4, m:1, border: "0.5px solid grey", borderRadius: "10px"}}>
                <CardHeader key={i} title={productos.nombreProducto} />
                <CardMedia
                  component="img"
  

                  image={productos.imagen}
                  sx={{display:"flex", margin:"auto", objectFit:"cover", width:370, height: 400}}
                  // alt="Paella dish"
                  // maxWidth:"356px", maxHeight:"450px"
                />
                <br></br>
                <CardContent sx={{display:"flex", flexDirection:"column"}}>
                  <Typography sx={{"p": {height:"9rem", overflowY: "auto"}}} variant="body1" color="text.secondary">
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
  
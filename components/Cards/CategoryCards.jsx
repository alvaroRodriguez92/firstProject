import {
  Card,
  CardContent,
  CardHeader,
  CardMedia,
  Typography,
  Grid,
  Button,
  Box,
} from "@mui/material";
import EuroIcon from "@mui/icons-material/Euro";
import ShoppingBagIcon from "@mui/icons-material/ShoppingBag";
import { useState, useEffect } from "react";
import { useCartContext } from "../../context/CartContext";

export default function CategoryCards({ products }) {

  const {numeroCarrito} = useCartContext()

  return (
    <Box
      width="90%"
      sx={{ display: "flex", flexDirection: "row", margin: "0 auto" }}
    >
      {products?.map((productos, i) => {
        return (
          <Grid key={i} item sx={{ m: 1 }} xs={12} sm={6} md={6} xl={3}>
            <Card
              className="card-peli"
              sx={{
                maxWidth: 450,
                height: 780,
                p: 4,
                m: "0 auto",
                border: "0.5px solid grey",
                borderRadius: "10px",
                boxShadow: "5px 10px 10px, rgba(0,0,0,0.5)",
              }}
            >
              <CardHeader  title={productos.nombreProducto} />
              <CardMedia
                component="img"
                image={productos.imagen}
                sx={{
                  display: "flex",
                  margin: "auto",
                  objectFit: "cover",
                  width: 370,
                  height: 400,
                }}
               
              />
              <br></br>
              <CardContent sx={{ display: "flex", flexDirection: "column" }}>
                <Typography
                  sx={{ p: { height: "9rem", overflowY: "auto" } }}
                  variant="body1"
                  color="text.secondary"
                >
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
                    <Button onClick={()=>numeroCarrito(productos, productos.id)}variant="contained" alt="añadir a carrito">
                      Añadir a carrito
                      <ShoppingBagIcon sx={{ mb: "4px" }} />
                    </Button>
                  </Grid>
                </Grid>
              </CardContent>
            </Card>
          </Grid>
        );
      })}
    </Box>
  );
}

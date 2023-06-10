import {
    Card,
    CardContent,
    CardHeader,
    CardMedia,
    Typography,
    Grid,
    Button,
    Box,
    Input,
    TextField
  } from "@mui/material";
  import EuroIcon from "@mui/icons-material/Euro";
  import ShoppingBagIcon from "@mui/icons-material/ShoppingBag";
  import { useState, useEffect } from "react";
  import { useCartContext } from "../../context/CartContext";
  import { Link } from "react-router-dom";
  
  export default function CartCards({ products }) {
  
    const {addUnits, carritoResult} = useCartContext()
    const [total, setTotal] = useState([])
    
    let sumatorio= 0;

        useEffect(()=>{

            async function aplicarTotal(){
                carritoResult.map((item)=>{
                    sumatorio += item.unidades*item.precio
                })
                setTotal(sumatorio/2)
                

                
         }console.log(sumatorio)
         aplicarTotal();},[carritoResult]) 
        
        //  useEffect(()=>{
        //     async function categoryFetch(){
        //         const response = await fetch(`http://localhost:3001/product/${category}`)
        //         const data = await response.json()
        //         setResult(data)
        //     }
        //     categoryFetch()
        // }, [category])
        
            // const auxTotal = [...carritoResult]
            // const product = auxTotal.find(item=>item-id===id{
            //     setTotal()
            // })
            // carritoResult.map((item)=>{
    //             const auxTotal = [...carritoResult]
    //             const product = auxTotal.find(item=>item-id===id)
    //             setTotal(product.unidades)
    //             console.log(total,"TOTAAAAL")
    //         }
        
    // },[products.unidades])

    // function addUnits(e, id){
    //     const auxCarritoResult = [...carritoResult]
    
    //     const producto = auxCarritoResult.find(item=>item.id===id)
    //     producto.unidades=e.target.value
    //     setCarritoResult(auxCarritoResult)
    
    //     console.log(producto)
    //   }

    return (
        <>
      <Box
        width="90%"
        sx={{ display: "flex", flexDirection: "row", margin: "0 auto" }}
      >
        {products?.map((productos, i) => {
          return (
            <Grid item sx={{ m: 1 }} xs={12} sm={6} md={6} xl={3}>
              <Card
                className="card-peli"
                sx={{
                  maxWidth: 350,
                  height: 550,
                  p: 4,
                  m: "0 auto",
                  border: "0.5px solid grey",
                  borderRadius: "10px",
                  boxShadow: "5px 10px 10px, rgba(0,0,0,0.5)",
                }}
              >
                <CardHeader key={i} title={productos.nombreProducto} sx={{margin:"0 auto"}}/>
                <CardMedia
                  component="img"
                  image={productos.imagen}
                  sx={{
                    display: "flex",
                    margin: "auto",
                    objectFit: "cover",
                    width: 200,
                    height: 200,
                  }}
                 
                />
                <br></br>
                <CardContent sx={{ display: "flex", flexDirection: "column" }}>
                  {/* <Typography
                    sx={{ p: { height: "9rem", overflowY: "auto" } }}
                    variant="body1"
                    color="text.secondary"
                  >
                    {productos.detallesProducto}
                  </Typography> */}
                  <br></br>
                  <Grid width="100%">
                    <Grid item xs={4} width={"100%"}>
                      <Typography variant="h6" width={"100%"} sx={{fontSize:"16px", color:"black"}}>
                        Precio: 
                        <Typography variant="span" color="secondary"> {productos.precio}<EuroIcon color="secondary" fontSize="150" /></Typography>
                      </Typography>
                      </Grid>
                      </Grid>
                    <br></br>
                      <Grid container width="100" >
                        <Grid item xs={4}>
                      <Typography variant="h6" color="secondary" sx={{fontSize:"16px"}}>
                        Unidades:
                        </Typography>

                        </Grid>
                        <Grid item xs={3}>
                        <Input onChange={(e)=>{addUnits(e,productos.id)}} value={productos.unidades} defaultValue={productos.unidades} type="number" min={0} sx={{min:"0"}}/>
                        </Grid>
                        </Grid>

                    
                    {/* <Grid item xs={8}>
                      <Button onClick={()=>numeroCarrito(productos)}variant="contained" alt="añadir a carrito">
                        Añadir a carrito
                        <ShoppingBagIcon sx={{ mb: "4px" }} />
                      </Button>
                    </Grid> */}
                  <br></br>
              <Typography sx={{fontSize:"16px", color:"black"}} variant="h6">Total: {productos.unidades*productos.precio}€</Typography>
                </CardContent>
              </Card>
            </Grid>
          );
        })}
      </Box>
      <Typography sx={{fontSize:"16px", color:"black", ml:13, mt:3}} variant="h6">Total de la compra: {total}€</Typography>
        <br></br>
        <Link to="/compra"><Button variant="contained" sx={{ml:13}}>Finalizar la compra</Button></Link>
        </>
    );
  }
  
import Newsletter from "../../components/Newsletter/Newsletter";
import Privacidad from "../../components/Privacidad/Privacidad";
import Carrito from "../../components/Carrito/Carrito";
import Garantias from "../../components/Garantias/Garantias";
import { Grid, Typography, Box } from "@mui/material";
import Navmui from "../../components/Navmui/Navmui";
import  {useCartContext}  from "../../context/CartContext";
import CartCards from "../../components/Cards/CartCards"


export default function Cart(){

const {carritoResult} = useCartContext()

console.log(carritoResult)
    return(
        <>
    <header>
      <Navmui/>
      </header>
      <main className="principal">
      <Typography
        sx={{ pt: 5,mb:3, textAlign: "center", textDecoration: "bold" }}
        variant="h4"
      >
        Carrito
      </Typography>
        <CartCards products={carritoResult}/>
        <Garantias/>
      </main>
      <footer>
        <Grid container sx={{backgroundColor: "#0e0d0d;"}}>
          <Grid item xs={6} sx={{  pl:20, pt: 10, pb:10}}>
            <Privacidad size={28} />
          </Grid>
          <Grid item xs={6} sx={{ pl:28, pt: 10, pb:10 }}>
            <Newsletter size={52} color={"black"} />
          </Grid>
        </Grid>
      </footer>
    </>
  );
}

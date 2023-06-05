import Newsletter from "../../components/Newsletter/Newsletter";
import Privacidad from "../../components/Privacidad/Privacidad";
import Logo from "../../components/Logo/Logo";
import Carrito from "../../components/Carrito/Carrito";
import Buscador from "../../components/Buscador/Buscador";
import Cards from "../../components/Cards/Cards";
import UncontrolledExample from "../../components/Carousel/Carousel";
import Nav from "../../components/Nav/Nav";
import Garantias from "../../components/Garantias/Garantias";
import { Grid, Typography, Box } from "@mui/material";
import Navmui from "../../components/Navmui/Navmui";
import Carrusel from "../../components/Carrusel/Carrusel";


export default function Home() {
  return (
    <>
    <header>
      <Navmui/>
      </header>
      <main className="principal">
        <Box container width="90%" sx={{margin:"0 auto"}}>
      <Typography  sx={{pt:5, pb:5, textAlign: "center", textDecoration:"bold"}}variant="h4">Productos destacados</Typography>

      <Grid container spacing={4}>
      <Cards/>
      </Grid>
      <Garantias size={48} color={"pink"} />
      </Box>
      </main>
      <footer>
        <Grid container sx={{backgroundColor: "#1C4E81;"}}>
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
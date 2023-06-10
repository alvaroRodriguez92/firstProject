import Newsletter from "../../components/Newsletter/Newsletter";
import Privacidad from "../../components/Privacidad/Privacidad";
import Garantias from "../../components/Garantias/Garantias";
import { Grid, Typography, Box } from "@mui/material";
import Navmui from "../../components/Navmui/Navmui";
import Carrusel2 from "../../components/Carrusel/Carrusel2";
import RecomendadosHome from "../../components/RecomendadosHome/RecomendadosHome"


export default function Home() {
  const images = [{nombre:"Dune", src:"../../src/assets/dune.jpg", description:"Arrakis se ha convertido en el planeta más importante del universo. A su alrededor comienza una gigantesca lucha por el poder que culmina en una guerra interestelar."},
  {nombre:"Interstellar", src: "../../src/assets/interstellar3.jpg", description:"Un grupo de científicos y exploradores, se embarcan en un viaje espacial para encontrar un lugar  para reemplazar a la Tierra y comenzar una nueva vida allí." }, 
  {nombre:"The last of us", src:"../../src/assets/thelastofus.jpg", description:"Joel y Ellie se ven obligados a soportar circunstancias brutales y asesinos despiadados en un viaje por la América posterior a una pandemia."},
  {nombre:"John Wick", src: "../../src/assets/johnwick2.jpg", description:"El legendario asesino John Wick se ve obligado a salir de su retiro por un antiguo socio inmerso en un complot para controlar la siniestra hermandad internacional de asesinos."}]


  return (
    <>
    <header>
      <Navmui/>
      </header>
      <main className="principal">
        <Carrusel2 images={images}/>
        <RecomendadosHome/>
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
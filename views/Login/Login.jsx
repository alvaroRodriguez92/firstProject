import Buscador from "../../components/Buscador/Buscador";
import Carrito from "../../components/Carrito/Carrito";
import Garantias from "../../components/Garantias/Garantias";
import Newsletter from "../../components/Newsletter/Newsletter";
import Privacidad from "../../components/Privacidad/Privacidad";
import Sesion from "../../components/Sesion/sesion";
import {Grid, Box} from "@mui/material";
import Navmui from "../../components/Navmui/Navmui";
import LoginFormik from "../../components/FormFormik/LoginFormik";


export default function Login() {
  return (
    <>
      
      <header>
      <Navmui/>
      </header>
      <main className="principal">
      <Box sx={{width:"40%", margin:"auto", p:10}}>
      <LoginFormik/>
      </Box>
      <Garantias size={48} color={"pink"} />
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


import Garantias from "../../components/Garantias/Garantias";

import Newsletter from "../../components/Newsletter/Newsletter";
import Privacidad from "../../components/Privacidad/Privacidad";
import Registro from "../../components/Registro/Registro";
import {Grid, Box} from "@mui/material";
import Navmui from "../../components/Navmui/Navmui";


export default function Register() {
  
  return (
    <>
      
      <header>
      <Navmui/>
      </header>
      <Box sx={{width:"50%", margin:"auto", p:10}}>
      <Registro/>
      </Box>
      
      <Garantias size={48} color={"pink"} />
      <footer>
        <Grid container sx={{backgroundColor: "#0e0d0d"}}>
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
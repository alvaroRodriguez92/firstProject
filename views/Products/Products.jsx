import Garantias from "../../components/Garantias/Garantias";

import Newsletter from "../../components/Newsletter/Newsletter";
import Privacidad from "../../components/Privacidad/Privacidad";
import {Grid, Box} from "@mui/material";
import Navmui from "../../components/Navmui/Navmui";
import Category from "../../components/Category/Category";


export default function Products() {
  
  return (
    <>
      
      <header>
      <Navmui/>
      </header>
      <main className="principal">
        <Category/>
      
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
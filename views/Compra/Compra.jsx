import Newsletter from "../../components/Newsletter/Newsletter";
import Privacidad from "../../components/Privacidad/Privacidad";
import Garantias from "../../components/Garantias/Garantias";
import { Grid, Typography } from "@mui/material";
import Navmui from "../../components/Navmui/Navmui";
import AddTaskIcon from '@mui/icons-material/AddTask';
import DoneAllIcon from '@mui/icons-material/DoneAll';
import { DotLoader } from "react-spinners";
import { useCartContext } from "../../context/CartContext";
import {useState, useEffect} from "react";


export default function Compra(){
    const [loading, setLoading] = useState(true);

    function intervalo(){
        setLoading(false)
        console.log(loading)
    }
    useEffect(()=>{
        setInterval(intervalo,3000)
    },[])

    return(
        <>
    <header>
      <Navmui/>
      </header>
      <main className="principal">
      {loading ? (<DotLoader
          className="loader"
          loading={loading}
          color="#ffd90f"
          size="180px"
          
        />
      ):(
      <Typography
        sx={{ pt: 5,mb:3, textAlign: "center", textDecoration: "bold" }}
        variant="h4"
      >
        Gracias por comprar en BlueMania!!
        <br></br>
        <br></br>
        <DoneAllIcon color="secondary" sx={{width:"180px", height:"180px"}}/>
        
      </Typography>)}
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

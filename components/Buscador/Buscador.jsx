import { TextField } from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";
import {StyledTextField} from "../../Styles/StyledTextField"
import {Link} from "react-router-dom"
import {useState, useEffect} from "react"



export default function Buscador() {
  const [pelicula, setPelicula] = useState("")

  function handleInput(e){
    setPelicula(e.target.value)
  
  }
  console.log(pelicula)

  return (
    <><StyledTextField
      hiddenLabel
      placeholder="Inicia tu busqueda..."
      size="small"
      value={pelicula}
      onChange={handleInput}
      sx={{ width: "40%"  }} /><Link to={`/buscador/${pelicula}`}><SearchIcon sx={{ml:3, mr:6, color:"#fff"}}/></Link></>
  );
}



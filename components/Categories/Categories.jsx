import {Button, Grid} from "@mui/material"
import {useState, useEffec, useEffect} from "react"

export default function Categories(){
  
  const categories= ["Infantil", "Fantastico", "Ciencia ficción", "Acción y aventuras", "Anime", "Drama", "Terror", "Comedia"]

    return(  
      <>    
      <h1 className="tituloCentrado">Categories</h1>
      <ul >
        <Grid container spacing={1} sm={4} sx={{ margin:"0 auto"}}>
      {categories.map((item)=>{
        return(
            <Grid item xs={3} md={6}>
        <li className="sinEstilo"><Button size="large" color="secondary" sx={{border:"solid rgb(6 50 3) 2px", borderRadius:"16px", p:2, width:"100%", height:"100%"}}variant="contained">{item}</Button></li>
        </Grid>
        )
      })}
      </Grid>
      
      </ul>
      </>
    )
}
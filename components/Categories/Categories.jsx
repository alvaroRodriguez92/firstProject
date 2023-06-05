import {Button, Grid} from "@mui/material"

export default function Categories(){
  
  const categories= ["Infantil", "Fantastico", "Ciencia ficción", "Acción y aventuras", "Anime", "Drama", "Terror", "Comedia"]

    return(  
      <>    
      <h1 className="tituloCentrado">Categories</h1>
      
        <Grid container width="60%" sx={{margin:"0 auto", justifyContent:"center", p:5}}>
      {categories.map((item)=>{
        return(
            <Grid item md={4} sx={{m:2}}>
        <Button size="large" color="secondary" sx={{border:"solid rgb(6 50 3) 2px", borderRadius:"16px", p:2, width:"100%", height:"100%"}}variant="contained">{item}</Button>
        </Grid>
        )
      })}
      </Grid>
      
      </>
    )
}
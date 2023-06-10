import * as React from 'react';
import {Box, Typography, InputLabel, MenuItem, FormControl, Select,Grid} from '@mui/material';
import {useState, useEffect} from 'react';
import CategoryCards from '../Cards/CategoryCards';


export default function Category(){

        const [category, setCategory] = useState(1);
        const [result, setResult] = useState(null);
      
        const handleChange = (event) => {
          setCategory(event.target.value);
          console.log(category)
        };

        useEffect(()=>{
            async function categoryFetch(){
                const response = await fetch(`http://localhost:3001/product/${category}`)
                const data = await response.json()
                setResult(data)
            }
            categoryFetch()
        }, [category])
      

    const categories= [{nombre: "Infantil", numero: 1}, {nombre:"Fantastico", numero:2}, {nombre: "Ciencia ficción", numero:3}, {nombre: "Acción y aventuras", numero:4}, {nombre:"Anime", numero:5}, {nombre:"Drama",numero:6},{nombre: "Terror", numero:7}, {nombre:"Comedia", numero:8}]


    return(
        <>
    <Typography  sx={{pt:5, textAlign: "center", textDecoration:"bold"}}variant="h4">Productos</Typography>

    <Box container width="30%" sx={{ minWidth: 120, padding:2, m:"0 auto" }}>
      <FormControl fullWidth sx={{pd:3, mt:2}}>
        <InputLabel id="demo-simple-select-label">Categoría</InputLabel>
        <Select
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          value={category}
          label="Category"
          onChange={handleChange}
        >
            {categories.map((item,index)=><MenuItem key={index} value={item.numero}>{item.nombre}</MenuItem>)}

        </Select>
      </FormControl>
    </Box>
    <Grid container spacing={4} sx={{mt:3}}>

    <CategoryCards products={result}/>
    </Grid>
    </>
  );
}

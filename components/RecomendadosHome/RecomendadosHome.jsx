import {
  Box,
  Typography,
  InputLabel,
  MenuItem,
  FormControl,
  Select,
  Grid,
} from "@mui/material";
import { useState, useEffect } from "react";
import CategoryCards from "../Cards/CategoryCards";

export default function RecomendadosHome() {
  const [recomendados, setRecomendados] = useState(null);
  const [tendencias, setTendencias] = useState(null);
  const [vendidos, setVendidos] = useState(null);

  useEffect(() => {
    async function recomendadosFetch() {
      const response = await fetch(`http://localhost:3001/product/tipo/1`);
      const data = await response.json();
      setRecomendados(data);
    }
    recomendadosFetch();
  }, []);

  useEffect(() => {
    async function tendenciasFetch() {
      const response = await fetch(`http://localhost:3001/product/tipo/2`);
      const data = await response.json();
      setTendencias(data);
    }
    tendenciasFetch();
  }, []);

  useEffect(() => {
    async function vendidosFetch() {
      const response = await fetch(`http://localhost:3001/product/tipo/3`);
      const data = await response.json();
      setVendidos(data);
    }
    vendidosFetch();
  }, []);

  return (
    <>
      <Typography
        sx={{ pt: 5, mt:5, textAlign: "center", textDecoration: "bold" }}
        variant="h4"
      >
        Productos Recomendados:
      </Typography>
      <Grid container spacing={4} sx={{ mt: 3 }}>
        <CategoryCards products={recomendados} />
      </Grid>

      <Typography
        sx={{ pt: 5, textAlign: "center", textDecoration: "bold" }}
        variant="h4"
      >
        Productos Tendencia:
      </Typography>
      <Grid container spacing={4} sx={{ mt: 3 }}>
        <CategoryCards products={tendencias} />
      </Grid>
      <Typography
        sx={{ pt: 5, textAlign: "center", textDecoration: "bold" }}
        variant="h4"
      >
        Productos más Vendidos
      </Typography>

      <Grid container spacing={4} sx={{ mt: 3 }}>
        <CategoryCards products={vendidos} />
      </Grid>
    </>
  );
}

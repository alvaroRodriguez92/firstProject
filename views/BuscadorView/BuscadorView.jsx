import CategoryCards from "../../components/Cards/CategoryCards";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Newsletter from "../../components/Newsletter/Newsletter";
import Privacidad from "../../components/Privacidad/Privacidad";
import Carrito from "../../components/Carrito/Carrito";
import Buscador from "../../components/Buscador/Buscador";
import Garantias from "../../components/Garantias/Garantias";
import { Grid, Typography, Box } from "@mui/material";
import Navmui from "../../components/Navmui/Navmui";

export default function BuscadorView({ nombre }) {
  const params = useParams();
  const [result, setResult] = useState(null);

  useEffect(() => {
    async function resultFetch() {
      const response = await fetch(
        `http://localhost:3001/product/pelicula/${params.pelicula}`
      );
      const data = await response.json();
      setResult(data);
    }
    resultFetch();
  }, [params.pelicula]);

  return (
    <>
      <header>
        <Navmui />
      </header>
      <main className="principal">
        <CategoryCards products={result} />

        <Garantias />
      </main>
      <footer>
        <Grid container sx={{ backgroundColor: "#0e0d0d;" }}>
          <Grid item xs={6} sx={{ pl: 20, pt: 10, pb: 10 }}>
            <Privacidad size={28} />
          </Grid>
          <Grid item xs={6} sx={{ pl: 28, pt: 10, pb: 10 }}>
            <Newsletter size={52} color={"black"} />
          </Grid>
        </Grid>
      </footer>
    </>
  );
}

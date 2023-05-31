import { Grid, List, ListItem, ListItemText, Typography } from "@mui/material";
import AdbIcon from "@mui/icons-material/Adb";
export default function Privacidad({ size, color }) {
  return (
    <>
      <Grid container sx={{ m: 2 }}>
      <AdbIcon  fontSize="medium" sx={{color:"white", display: { xs: "none", md: "flex" }, mr: 1 }}/>
        <Typography variant="h5" sx={{ textDecoration:"overline",fontSize: "1.25rem",fontWeight: "700", letterSpacing: ".3rem",fontFamily:"openSans",color:"white",textAlign: "center" }}>
          BlueMania
        </Typography>
      </Grid>
      <Grid container>
        <Grid item>
          <List
            sx={{
              width: "100%",
              maxWidth: 360,
              position: "relative",
              overflow: "auto",
              maxHeight: 300,
              "& ul": { padding: 0 },
              color:"white"
            }}
            subheader={<li />}
          >
            <ListItem >
              <ListItemText primary={"Centro de ayuda"} />
            </ListItem>
            <ListItem>
              <ListItemText primary={"Servicio al consumidor"} />
            </ListItem>
            <ListItem>
              <ListItemText primary={"Escríbenos"} />
            </ListItem>
            <ListItem>
              <ListItemText primary={"Servicio telefónico"} />
            </ListItem>
          </List>
        </Grid>
        <Grid item>
          <List
            sx={{
              width: "100%",
              maxWidth: 360,
              position: "relative",
              overflow: "auto",
              maxHeight: 300,
              "& ul": { padding: 0 },
              color:"white"
            }}
            subheader={<li />}
          >
            <ListItem>
              <ListItemText primary={"Política de privacidad"} />
            </ListItem>
            <ListItem>
              <ListItemText primary={"Condiciones de compra"} />
            </ListItem>
            <ListItem>
              <ListItemText primary={"Opiniones de clientes"} />
            </ListItem>
            <ListItem>
              <ListItemText primary={"Aviso de privacidad y cookies"} />
            </ListItem>
          </List>
        </Grid>
      </Grid>
    </>
  );
}

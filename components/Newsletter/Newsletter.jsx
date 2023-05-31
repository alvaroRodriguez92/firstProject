import {
  Button,
  Checkbox,
  FormControlLabel,
  FormGroup,
  Grid,
  TextField,
  Typography,
} from "@mui/material";
import FacebookIcon from "@mui/icons-material/Facebook";
import TwitterIcon from "@mui/icons-material/Twitter";
import WhatsAppIcon from "@mui/icons-material/WhatsApp";
import InstagramIcon from "@mui/icons-material/Instagram";
export default function Newsletter({ color }) {
  return (
    <>
      <Grid>
        <Grid>
          <Typography variant="h6" sx={{ color: "white", mt: 2, mb: 2, ml: 2 }}>
            Suscríbete a la Newsletter
          </Typography>
          <TextField
            sx={{backgroundColor:"whitesmoke",m:2}}
            hiddenLabel
            id="filled-hidden-label-small"
            placeholder="Suscríbete a la Newsletter"
            variant="filled"
            size="small"
          />
          <Button variant="contained" size="large" sx={{ backgroundColor:"#579752", color:"white",mt: 2, mb: 2 }}>
            Suscríbete
          </Button>
        </Grid>
      </Grid>
      <FormGroup sx={{ m: 2, color:"white" }}>
        <FormControlLabel
        sx={{color:"white"}}
          control={<Checkbox sx={{ '& .MuiSvgIcon-root': { fontSize: 28, color:"white" } }}   />}
          label="Acepto política de privacidad"
        />
      </FormGroup>
      <FacebookIcon fontSize="large" sx={{ ml: 1.5, color:"white" }} />
      <TwitterIcon fontSize="large" sx={{ ml: 2, color:"white" }} />
      <WhatsAppIcon fontSize="large" sx={{ ml: 2, color:"white" }} />
      <InstagramIcon fontSize="large" sx={{ ml: 2,  color:"white" }} />
    </>
  );
}
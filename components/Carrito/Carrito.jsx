import { Button, Badge } from "@mui/material";
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import {Link} from "react-router-dom"
import { useCartContext } from "../../context/CartContext";


export default function Carrito() {
  const {carrito} = useCartContext()

  return (
    <Link to={"/cart"}><Button variant="contained" size="large" endIcon={<Badge color="secondary" badgeContent={carrito}><ShoppingCartIcon/></Badge>} sx={{m:2, ml:20}}>Carrito</Button></Link>
  );
}


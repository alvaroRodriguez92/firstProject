// import Nav from '../components/Nav';
// import Buscador from '../components/buscador';
// import Carrito from '../components/carrito';
// import Logo from '../components/logo';

import Home from "../views/Home/Home";
import Login from "../views/Login/Login";
import Register from "../views/Register/Register";
import Products from "../views/Products/Products";
import Cart from "../views/Cart/Cart";
import BuscadorView from "../views/BuscadorView/BuscadorView"
import Compra from "../views/Compra/Compra"
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import Navmui from "../components/Navmui/Navmui";
import { render } from "react-dom";
import { ThemeProvider, createTheme } from "@mui/material/styles";
import { theme } from "../Styles/styles";
import AuthContextProvider from "../context/AuthContext";
import CartContextProvider from "../context/CartContext";

function App() {
  return (
    <BrowserRouter>
    <CartContextProvider>
      <AuthContextProvider>
        <ThemeProvider theme={theme}>
          <div className="App">
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/login" element={<Login />} />
              <Route path="/register" element={<Register />} />
              <Route path="/products" element={<Products />} />
              <Route path="/buscador/:pelicula" element={<BuscadorView />} />
              <Route path="/cart" element={<Cart />} />
              <Route path="/compra" element={<Compra/>}/>
            </Routes>
          </div>
        </ThemeProvider>
      </AuthContextProvider>
      </CartContextProvider>
    </BrowserRouter>
  );
}

export default App;

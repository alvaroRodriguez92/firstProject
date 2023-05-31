// import Nav from '../components/Nav';
// import Buscador from '../components/buscador';
// import Carrito from '../components/carrito';
// import Logo from '../components/logo';

import Home from "../views/Home/Home";
import Login from "../views/Login/Login";
import Register from "../views/Register/Register";
import Products from "../views/Products/Products";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import Navmui from "../components/Navmui/Navmui";
import { render } from "react-dom";
import { ThemeProvider, createTheme } from "@mui/material/styles";
import { theme } from "../Styles/styles";
import AuthContextProvider  from "../context/AuthContext"


function App() {
  return (
    <AuthContextProvider>
    <ThemeProvider theme={theme}>
      <div className="App">
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/login" element={<Login />} />
            <Route path="/register" element={<Register />} />
            <Route path="/products" element={<Products />} />
            
          </Routes>
        </BrowserRouter>
      </div>
    </ThemeProvider>
    </AuthContextProvider>

  );
}

export default App;

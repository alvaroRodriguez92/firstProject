import { TextField, Box, Button, Typography, Checkbox } from "@mui/material";
import {useEffect, useState} from 'react'
import { useNavigate } from "react-router-dom";
import useFetch from "../../hooks/useFetch"

export default function Sesion() {
  // const[users, setUsers]=useState([]);
  // const[guid,setGuid] = useState([]);
  const [user, setUser]= useState(null);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  // setUser(useFetch("http://localhost:8000/clientes"));

  // async function userBbdd(){
  //       const response = await fetch(`http://localhost:8000/clientes`)
  //       const data = await response.json()
  //       setUser(data);
  // }

  // useEffect(()=>{
  //   userBbdd()
  //   console.log("me renderizoo!!!!")
  //   console.log(user)
    
  //   }, [])
  // console.log(user)

  // async  function login(user){
  //     const response = await fetch("http://localhost:8000/clientes",{
  //       method:"POST",
  //       header:{"Content-Type": "application/json"},
  //       body:JSON.stringify(user)
  //     });
  //     if(response.status === 200){
  //       const user = await response.json();
  //       setUser(user);
  //     }

    function login(){
      user.map((item)=>{
        if(email===item.email && password===item.password){
          console.log("registradisiiiimoo!!!")
        navigate("/")
        } else{
          console.log("los datos son incorrectos")
        }
      })  
    }

    function handleEmail(e){
      setEmail(e.target.value)
    }

    function handlePassword(e){
      setPassword(e.target.value)
    }

  return (
    <>
      <Typography variant="h5" sx={{ textAlign: "center" }}>
        Inicia Sesión
      </Typography>
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          p: 2,
          border: "1px solid grey",
          borderRadius: 2
        }}
      >
        <TextField onChange={handleEmail} value={email} label="Email" size="small" sx={{ mb: 2 }} />
        <TextField onChange={handlePassword} value={password} label="Password" size="small" sx={{ mb: 2 }} />
        <span>Recordar contraseña <Checkbox defaultChecked/></span>
        <Button onClick={login} variant="contained" sx={{ mb: 2 }} >Login</Button>
      </Box>
    </>
  );
}


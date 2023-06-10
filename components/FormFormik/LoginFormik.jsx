import { useFormik } from "formik";
import { FormSchema } from "./FormSchema";
import { initialValues } from "./initialValues";
import { TextField, Box, Button, Typography, Checkbox } from "@mui/material";
import { useAuthContext } from "../../context/AuthContext";
import {Link} from "react-router-dom";

export default function LoginFormik() {

  const{login} = useAuthContext()

  const {
    values,
    touched,
    errors,
    handleChange,
    handleBlur,
    handleSubmit,
    isSubmitting,
  } = useFormik({
    initialValues,
    validationSchema: FormSchema,
    onSubmit:login,
  });

  return (
    <>
    <Typography variant="h5" sx={{ textAlign: "center" }}>
      Inicia Sesión
    </Typography>
    <form onSubmit={handleSubmit}>
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        p: 2,
        border: "1px solid grey",
        borderRadius: 2
      }}
    >
    
      <TextField
        id="email"
        error={errors.email&&touched.email}        
        name="email"
        onChange={handleChange}
        onBlur={handleBlur}
        value={values.email}
        label="Email"
        size="small" 
        sx={{ mb: 2 }}
        helperText={errors.email}
      />
      <TextField
        id="password"
        name="password"
        type="password"
        error={errors.password&&touched.password} 
        onChange={handleChange}
        onBlur={handleBlur}
        value={values.password}
        label="Password"
        size="small" 
        sx={{ mb: 2 }}
        helperText={errors.password}
      />
      <span>Remember password <Checkbox/></span>
      <Button disabled={isSubmitting} type="submit" variant="contained" sx={{ mb: 2 }}>Login</Button>
      <span>Si aún no tienes cuenta, puedes registrarte <Link to={"/register"}>aquí.</Link></span>
    </Box>
    </form>
    </>
  );
}


import { useState } from "react";
import { Link as RouterLink } from "react-router-dom";

import Form from "../components/Form/Form";
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";
import Stack from "@mui/material/Stack";
import Link from "@mui/material/Link";

const Login = () => {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const isValidEmail = (email) => {
    const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    return emailRegex.test(email);
  };

  const validateForm = () => {
    const { email, password } = formData;
    const validationErrors = {};
    if (!email) {
      validationErrors.email = "El email es obligatorio";
    } else if (!isValidEmail(email)) {
      validationErrors.email = "Email no válido";
    }

    if (!password) {
      validationErrors.password = "La contraseña es obligatoria";
    } else if (password.length < 8) {
      validationErrors.password =
        "La contraseña debe ser mínimo de 8 caracteres";
    }

    if (Object.values(validationErrors).length > 0) {
      return { isValid: false, validationErrors };
    }

    return { isValid: true, validationErrors };
  };

  const textFields = [
    {
      type: "text",
      name: "email",
      label: "Correo electrónico",
      value: formData.email,
      handleChange: handleChange,
    },
    {
      type: "password",
      name: "password",
      label: "Contraseña",
      value: formData.password,
      handleChange: handleChange,
    },
  ];

  const buttonSubmit = {
    label: "Inicia Sesión",
  };

  return (
    <>
      <Box
        sx={{
          width: "min(90%, 1200px)",
          marginInline: "auto",
        }}
      >
        <Typography
          variant="h2"
          component="h1"
          align="center"
          gutterBottom
          mt="4rem"
        >
          Iniciar Sesión
        </Typography>
        <Container maxWidth="xs">
          <Form
            textFields={textFields}
            buttonSubmit={buttonSubmit}
            validateForm={validateForm}
          />
          <Stack direction="row" justifyContent="space-between" mt="2rem">
            <Link
              component={RouterLink}
              to="/register"
              variant="body1"
              color="#000"
              underline="none"
            >
              Registrate
            </Link>
            <Link
              component={RouterLink}
              to="/reset-password"
              variant="body1"
              color="#000"
              underline="none"
            >
              Olvidaste tu contraseña
            </Link>
          </Stack>
        </Container>
      </Box>
    </>
  );
};

export default Login;

import { useState } from "react";
import { Link as RouterLink } from 'react-router-dom';

import Form from "../components/Form/Form";
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";
import Stack from "@mui/material/Stack";
import Link from "@mui/material/Link";

const ResetPassword = () => {
  const [formData, setFormData] = useState({
    email: ''
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
    const { email } = formData;
    const validationErrors = {};
    if (!email) {
      validationErrors.email = "El email es obligatorio";
    } else if (!isValidEmail(email)) {
      validationErrors.email = "Email no válido";
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
        handleChange: handleChange
    }
  ];

  const buttonSubmit = {
    label: 'Reestablecer'
  }

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
          Reestablece tu contraseña
        </Typography>
        <Container maxWidth="xs">
          <Form
            textFields={textFields}
            buttonSubmit={buttonSubmit}
            validateForm={validateForm}
          />
          <Stack direction="row" justifyContent="space-between" mt="2rem">
            <Link component={RouterLink} to="/login" variant="body1" color="#000" underline="none">
              Inicia Sesión
            </Link>
            <Link component={RouterLink} to="/register" variant="body1" color="#000" underline="none">
              Registrate
            </Link>
          </Stack>
        </Container>
      </Box>
    </>
  );
};

export default ResetPassword;

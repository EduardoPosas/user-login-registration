import { useState } from "react";

import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";


function RegistrationForm({ textFields, buttonSubmit, validateForm }) {
  const [formErrors, setFormErrors]  = useState({});

  const handleSubmit = (event) => {
    event.preventDefault();

    const {isValid, validationErrors} = validateForm();

    if(!isValid) {
      setFormErrors(validationErrors);
      console.log(validationErrors);
      return;
    }

    setFormErrors({});
    console.log('Mandar los datos al back', isValid);
    // setIsFormValid(isValid);
  };

  return (
    <form onSubmit={handleSubmit}>
      {textFields.map((field, i) => {
        const { type, name, label, value, handleChange } = field;
        return (
          <TextField
            key={i}
            type={type}
            name={name}
            label={label}
            variant="outlined"
            fullWidth
            margin="normal"
            value={value}
            onChange={(e) => handleChange(e)}
            error={formErrors[name]}
            helperText={formErrors[name]}
          />
        );
      })}

      <Button type="submit" variant="contained" color="primary" size="large">
        {buttonSubmit.label}
      </Button>
    </form>
  );
}

export default RegistrationForm;

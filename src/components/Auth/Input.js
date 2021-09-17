import React from "react";
import { TextField, IconButton } from "@material-ui/core";
import Visibility from "@material-ui/icons/Visibility";
import VisibilityOff from "@material-ui/icons/VisibilityOff";
const Input = ({ name, handleChange, label, type, handleShowPassword }) => (
  <section id="auth__inputs">
    <TextField
      name={name}
      onChange={handleChange}
      variant="outlined"
      required
      fullWidth
      label={label}
      type={type}
      InputProps={
        name === "password"
          ? {
              endAdornment: (
                <IconButton onClick={handleShowPassword}>
                  {type === "password" ? <Visibility /> : <VisibilityOff />}
                </IconButton>
              ),
            }
          : null
      }
    />
  </section>
);
export default Input;

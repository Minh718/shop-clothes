import React from "react";
import { Snackbar, Alert } from "@mui/material";
export const MySnackbar = ({ open, setSnackbar, message, mode }) => {
  return (
    <Snackbar
      autoHideDuration={3000}
      open={open}
      onClose={(e, reason) => {
        reason === "clickaway" ||
          setSnackbar({ open: false, message: "", mode: "success" });
      }}
    >
      <Alert
        onClose={() =>
          setSnackbar({ open: false, message: "", mode: "success" })
        }
        severity={mode}
      >
        {message}
      </Alert>
    </Snackbar>
  );
};

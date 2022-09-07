import {
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle,
} from "@mui/material";
import React from "react";

export const MyModal = ({ handleDeleteById, setOpenModal, openModal }) => {
  return (
    <Dialog
      open={openModal}
      onClose={() => setOpenModal(false)}
      sx={{
        ".MuiPaper-root": {
          width: "350px",
        },
      }}
    >
      <DialogTitle sx={{ paddingRight: "50px" }}>DELETE</DialogTitle>

      <DialogContent>
        <DialogContentText>Bạn muốn xóa người dung này</DialogContentText>
      </DialogContent>
      <DialogActions>
        <Button
          variant="contained"
          color="warning"
          onClick={() => {
            setOpenModal(false);
            handleDeleteById();
          }}
        >
          Xóa
        </Button>
        <Button variant="outlined" onClick={() => setOpenModal(false)}>
          Hủy
        </Button>
      </DialogActions>
    </Dialog>
  );
};

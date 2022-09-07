import {
  Dialog,
  DialogContent,
  DialogTitle,
  TextField,
  Button,
  Grid,
  IconButton,
  Slide,
} from "@mui/material";
import axios from "axios";
import React, { useState } from "react";
import ClearIcon from "@mui/icons-material/Clear";
const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="up" ref={ref} {...props} />;
});
export const Register = ({ open, onClose }) => {
  const [name, setName] = useState("");
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [phone, setPhone] = useState("");
  const handleRegister = async () => {
    try {
      await axios.post("http://localhost:8800/api/auth/register", {
        name,
        username,
        password,
        phone,
      });
      onClose();
    } catch (err) {
      console.log("err", err.response.data);
    }
  };
  return (
    <Dialog
      open={open}
      onClose={() => onClose()}
      TransitionComponent={Transition}
    >
      <DialogTitle
        display="flex"
        alignItems="center"
        justifyContent="space-between"
      >
        Đăng ký tài khoản{" "}
        <IconButton onClick={() => onClose()}>
          <ClearIcon />
        </IconButton>
      </DialogTitle>
      <DialogContent sx={{ pt: "10px" }}>
        <Grid container spacing={1}>
          <Grid item xs={6}>
            <TextField
              type="text"
              label="Tên người dùng"
              variant="outlined"
              fullWidth
              size="small"
              sx={{ marginTop: "10px" }}
              onChange={(e) => {
                setName(e.target.value);
              }}
            />
          </Grid>
          <Grid item xs={6}>
            <TextField
              type="text"
              label="Số điểm thoại"
              variant="outlined"
              fullWidth
              size="small"
              sx={{ marginTop: "10px" }}
              onChange={(e) => setPhone(e.target.value)}
            />
          </Grid>
        </Grid>
        <TextField
          type="text"
          label="Tên đăng nhập"
          variant="outlined"
          fullWidth
          size="small"
          sx={{ marginTop: "10px" }}
          onChange={(e) => setUsername(e.target.value)}
        />
        <TextField
          type="password"
          label="Mật khẩu"
          variant="outlined"
          fullWidth
          size="small"
          sx={{ margin: "15px 0" }}
          onChange={(e) => setPassword(e.target.value)}
        />
        <Button
          fullWidth
          onClick={handleRegister}
          variant="contained"
          sx={{ marginTop: "15px" }}
        >
          Đăng ký
        </Button>
      </DialogContent>
    </Dialog>
  );
};

import {
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
  Grid,
  TextField,
  Button,
  MenuItem,
} from "@mui/material";
import axios from "axios";
import React, { useState } from "react";

export const EditClient = ({
  open,
  onClose,
  setSnackbar,
  element,
  clients,
  setClients,
}) => {
  const [name, setName] = useState(element.name);
  const [phone, setPhone] = useState(element.phone);
  const [username, setUsername] = useState(element.username);
  const [password, setPassword] = useState(element.password);
  const [isAdmin, setIsAdmin] = useState(element.isAdmin);
  const handleUpdateClient = async (id) => {
    try {
      await axios.put(`http://localhost:8800/api/users/update/${id}`, {
        name,
        phone,
        username,
        password,
        isAdmin,
      });

      setClients(
        clients.map((client) => {
          if (client.id === id) {
            return {
              id,
              name,
              phone,
              username,
              password,
              isAdmin,
            };
          } else return client;
        })
      );
      onClose();
      setSnackbar({
        open: true,
        message: "Đã sửa thành công",
        mode: "success",
      });
    } catch (err) {
      console.log("lỗi", err.response.data);
    }
  };
  return (
    <Dialog open={open} onClose={() => onClose()}>
      <DialogTitle>Chỉnh sửa người dùng</DialogTitle>
      <DialogContent>
        <Grid container spacing={2} sx={{ marginTop: "5px" }} maxWidth="400px">
          <Grid item xs={6}>
            <TextField
              label="Tên khách hàng"
              type="text"
              variant="outlined"
              size="small"
              fullWidth
              value={name}
              autoFocus
              onChange={(e) => setName(e.target.value)}
            />
          </Grid>

          <Grid item xs={6}>
            <TextField
              label="Số điện thoại"
              type="text"
              variant="outlined"
              size="small"
              value={phone}
              fullWidth
              onChange={(e) => setPhone(e.target.value)}
            />
          </Grid>
          <Grid item xs={12}>
            <TextField
              fullWidth
              label="Tên đăng nhập"
              type="text"
              variant="outlined"
              size="small"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
            />
          </Grid>
          <Grid item xs={12}>
            <TextField
              fullWidth
              label="Mật khẩu"
              type="text"
              variant="outlined"
              size="small"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </Grid>
          <Grid item xs={12}>
            <TextField
              fullWidth
              size="small"
              select
              value={isAdmin}
              label="Vai trò"
              onChange={(e) => setIsAdmin(e.target.value)}
            >
              <MenuItem value={0}>Customer</MenuItem>
              <MenuItem value={1}>Admin</MenuItem>
            </TextField>
          </Grid>
        </Grid>
      </DialogContent>
      <DialogActions>
        <Button
          variant="contained"
          color="secondary"
          onClick={() => {
            handleUpdateClient(element.id);
          }}
        >
          Cập nhật
        </Button>
        <Button variant="outlined" onClick={() => onClose()}>
          Hủy
        </Button>
      </DialogActions>
    </Dialog>
  );
};

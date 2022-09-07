import {
  Box,
  Container,
  styled,
  Grid,
  Typography,
  TextField,
  Button,
} from "@mui/material";
import React, { useEffect, useState } from "react";
import { Navbar } from "../../components/Navbar";
import { useDiglogModal } from "../../hooks/useDiglogModal";
import { Register } from "../../components/register";
import axios from "axios";
import { useGlobalContext } from "../../context";
const ContainerLogin = styled(Container)(({ theme }) => ({
  height: "calc(100vh - 124px)",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  background: "#E4E4E4",
  [theme.breakpoints.down("md")]: {
    height: "calc(100vh - 99px)",
  },
  [theme.breakpoints.down("sm")]: {
    height: "calc(100vh - 74px)",
  },
}));
const ContainerForm = styled(Box)(({}) => ({
  background: "#fff",
  textAlign: "center",
  padding: "16px",
}));
const MyImg = styled("img")({
  width: "100%",
});
export const Login = () => {
  const { setUser } = useGlobalContext();
  const [openLogin, ShowDiglogRegister] = useDiglogModal(Register);
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const handleSubmit = async () => {
    try {
      const res = await axios.post("http://localhost:8800/api/auth/login", {
        username,
        password,
      });
      setUser(res.data);
    } catch (err) {
      console.log("lỗi rồi", err.response.data);
    }
  };
  return (
    <>
      <Navbar />
      <ContainerLogin>
        <Grid
          container
          spacing={{ xs: 1, sm: 4 }}
          alignItems="center"
          justifyContent="center"
        >
          <Grid item lg={7.5} md={7} sm={6} xs={10}>
            <MyImg src="./images/sales.jpg" />
          </Grid>
          <Grid item lg={4.5} md={5} sm={6} xs={10}>
            <ContainerForm>
              <Typography variant="h5" mb="15px">
                Đăng nhập
              </Typography>
              <TextField
                type="text"
                label="Tên đăng nhập"
                variant="outlined"
                fullWidth
                size="small"
                autoFocus
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
                onKeyDown={(e) => "Enter" === e.key && handleSubmit()}
              />
              <Button
                onClick={handleSubmit}
                fullWidth
                variant="contained"
                color="warning"
              >
                đăng nhập
              </Button>
              <Button
                onClick={() => openLogin()}
                fullWidth
                variant="contained"
                sx={{ marginTop: "15px" }}
              >
                Đăng ký
              </Button>
            </ContainerForm>
          </Grid>
        </Grid>
      </ContainerLogin>
      <ShowDiglogRegister />
    </>
  );
};

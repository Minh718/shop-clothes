import React, { useState } from "react";
import { Navbar } from "../components/Navbar";
import { ContainerBody, BodyLeft, BodyRight, MyLink } from "../styles";
import { Sidebar } from "../components/Sidebar";
import {
  CardContent,
  Grid,
  Typography,
  Card,
  CardActions,
  Button,
} from "@mui/material";

export const Admin = () => {
  const [openSidebar, setOpenSidebar] = useState(true);
  return (
    <>
      <Navbar openSidebar={openSidebar} setOpenSidebar={setOpenSidebar} />
      <ContainerBody>
        <Sidebar openSidebar={openSidebar} />
        <BodyRight>
          <Typography variant="h4" sx={{ mb: "12px" }}>
            Trang admin
          </Typography>
          <Grid container spacing={3}>
            <Grid item xs={6}>
              <Card>
                <CardContent>
                  <Typography variant="h6" sx={{ mb: "10px" }}>
                    Khách hàng
                  </Typography>
                  <Typography variant="body1" color="text.secondary">
                    Danh sách tài khoản khách hàng.
                  </Typography>
                </CardContent>
                <CardActions>
                  <MyLink to="/admin/client">
                    <Button variant="outlined">Danh sách khách hàng</Button>
                  </MyLink>
                </CardActions>
              </Card>
            </Grid>
            <Grid item xs={6}>
              <Card>
                <CardContent>
                  <Typography variant="h6" sx={{ mb: "10px" }}>
                    Sản phẩm
                  </Typography>
                  <Typography variant="body1" color="text.secondary">
                    Thêm sản phẩm mới và xem danh sách sản phẩm.
                  </Typography>
                </CardContent>
                <CardActions>
                  <MyLink to="/admin/AddProduct">
                    <Button variant="outlined" sx={{ mr: "10px" }}>
                      Thêm sản phẩm
                    </Button>
                  </MyLink>
                  <MyLink to="/admin/product">
                    <Button variant="outlined">Danh sách sản phẩm</Button>
                  </MyLink>
                </CardActions>
              </Card>
            </Grid>
            <Grid item xs={6}>
              <Card>
                <CardContent>
                  <Typography variant="h6" sx={{ mb: "10px" }}>
                    Danh mục
                  </Typography>
                  <Typography variant="body1" color="text.secondary">
                    Thêm Danh mục và xem danh sách danh mục.
                  </Typography>
                </CardContent>
                <CardActions>
                  <MyLink to="/admin/addCategory">
                    <Button variant="outlined" sx={{ mr: "10px" }}>
                      Thêm danh mục
                    </Button>
                  </MyLink>
                  <MyLink to="/admin/category">
                    <Button variant="outlined">Danh sách danh mục</Button>
                  </MyLink>
                </CardActions>
              </Card>
            </Grid>
          </Grid>
        </BodyRight>
      </ContainerBody>
    </>
  );
};

import { Box, Button } from "@mui/material";
import React from "react";
import {
  ContainerLinks,
  ContainerRight,
  ImgLogo,
  LinkNav,
} from "../../styles/navbar";

export const NavbarDesktop = () => {
  return (
    <>
      <Box flexGrow={1}>
        <ImgLogo src="./images/logobk.jpg" />
      </Box>
      <ContainerLinks>
        <LinkNav>Trang chủ</LinkNav>
        <LinkNav>Sản phẩm</LinkNav>
        <LinkNav>Phân loại</LinkNav>
        <LinkNav>Blog</LinkNav>
        <LinkNav>liên hệ</LinkNav>
      </ContainerLinks>
      <ContainerRight>
        {/* <ShoppingCartIcon />
          <Sum>0 VNĐ</Sum> */}
        <Button variant="contained" color="primary">
          Đăng nhập
        </Button>
      </ContainerRight>
    </>
  );
};

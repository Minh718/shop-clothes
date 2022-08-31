import { Box, IconButton } from "@mui/material";
import React from "react";
import { ImgLogo } from "../../styles/navbar";
import { AppDrawer } from "../drawer";
import MenuIcon from "@mui/icons-material/Menu";
import { useGlobalContext } from "../../context";
export const NavbarMobile = () => {
  const { setOpenDrawer } = useGlobalContext();
  return (
    <>
      <Box flexGrow={1}>
        <ImgLogo src="./images/logobk.jpg" />
      </Box>
      <IconButton onClick={() => setOpenDrawer(true)}>
        <MenuIcon />
      </IconButton>
      {/* <Drawer open={true}>
        <LinkNav>Trang chủ</LinkNav>
        <LinkNav>Sản phẩm</LinkNav>
        <LinkNav>Phân loại</LinkNav>
        <LinkNav>Blog</LinkNav>
        <LinkNav>liên hệ</LinkNav>
      </Drawer> */}
      {/* <AppDrawer /> */}
    </>
  );
};

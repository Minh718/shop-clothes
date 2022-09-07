import {
  Box,
  Button,
  Divider,
  Icon,
  IconButton,
  Menu,
  MenuItem,
  Typography,
} from "@mui/material";
import React, { useState } from "react";
import {
  ContainerLinks,
  ContainerRight,
  ImgLogo,
  LinkNav,
  LinkTo,
} from "../../styles/navbar";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import PersonIcon from "@mui/icons-material/Person";
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";
import { useGlobalContext } from "../../context";
export const NavbarDesktop = () => {
  const { user, setUser } = useGlobalContext();
  const [anchorEl, setAnchorEl] = useState(null);
  const openSetting = Boolean(anchorEl);
  return (
    <>
      <Box flexGrow={1}>
        <LinkTo to="/">
          <ImgLogo src="./images/logobk.jpg" />
        </LinkTo>
      </Box>
      <ContainerLinks>
        <LinkTo to="/">
          <LinkNav>Trang chủ</LinkNav>
        </LinkTo>
        <LinkTo to="/">
          <LinkNav>Sản phẩm</LinkNav>
        </LinkTo>
        <LinkTo to="/">
          <LinkNav>Phân loại</LinkNav>
        </LinkTo>
        <LinkTo to="/">
          <LinkNav>Blog</LinkNav>
        </LinkTo>
        <LinkTo to="/">
          <LinkNav>liên hệ</LinkNav>
        </LinkTo>
      </ContainerLinks>
      <ContainerRight>
        {user ? (
          <Box display="flex" alignItems="center">
            <IconButton color="inherit">
              <ShoppingCartIcon />
            </IconButton>
            <Typography variant="h6" sx={{ fontSize: "16px" }}>
              0 VNĐ
            </Typography>
            <IconButton
              color="inherit"
              sx={{ borderRadius: "0", marginLeft: "10px" }}
              onClick={(e) => setAnchorEl(e.currentTarget)}
            >
              <PersonIcon />
              <ArrowDropDownIcon />
            </IconButton>
          </Box>
        ) : (
          <LinkTo to="/login">
            <Button variant="contained" color="primary">
              Đăng nhập
            </Button>
          </LinkTo>
        )}
      </ContainerRight>
      <Menu
        open={openSetting}
        onClose={() => setAnchorEl(null)}
        anchorEl={anchorEl}
        anchorOrigin={{
          vertical: "bottom",
          horizontal: "right",
        }}
        transformOrigin={{
          vertical: "top",
          horizontal: "right",
        }}
      >
        <LinkTo to="/" onClick={() => setAnchorEl(null)}>
          <MenuItem>Hồ sơ của tôi</MenuItem>
        </LinkTo>
        <LinkTo to="/" onClick={() => setAnchorEl(null)}>
          <MenuItem>Đơn hàng</MenuItem>
        </LinkTo>
        {user && Boolean(user.isAdmin) && (
          <LinkTo to="/admin" onClick={() => setAnchorEl(null)}>
            <MenuItem>Trang admin</MenuItem>
          </LinkTo>
        )}
        <Divider sx={{ background: "#ccc" }} />
        <LinkTo
          to="/"
          onClick={() => {
            setAnchorEl(null);
            setUser(null);
          }}
        >
          <MenuItem>Đăng xuất</MenuItem>
        </LinkTo>
      </Menu>
    </>
  );
};

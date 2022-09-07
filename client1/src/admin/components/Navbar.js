import {
  styled,
  Typography,
  IconButton,
  MenuItem,
  Divider,
  Menu,
} from "@mui/material";
import { Box } from "@mui/system";
import React, { useState } from "react";
import MenuIcon from "@mui/icons-material/Menu";
import PersonIcon from "@mui/icons-material/Person";
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";
import { MyLink } from "../styles";
import { useGlobalContext } from "../../context";
const ContainerNav = styled(Box)({
  padding: "8px 16px",
  display: "flex",
  justifyContent: "space-between",
  alignItems: "center",
  background: "#212529",
  position: "fixed",
  top: 0,
  right: 0,
  left: 0,
  zIndex: "99",
});
const LogoNav = styled(Typography)({
  fontSize: "25px",
  fontWeight: "500",
  color: "#fff",
});
export const Navbar = ({ setOpenSidebar, openSidebar }) => {
  const [anchorEl, setAnchorEl] = useState(null);
  const { setUser } = useGlobalContext();
  const open = Boolean(anchorEl);
  return (
    <ContainerNav>
      <IconButton onClick={() => setOpenSidebar(!openSidebar)}>
        <MenuIcon sx={{ color: "#fff" }} />
      </IconButton>
      <MyLink to="/admin">
        <LogoNav component="h3">Fashion admin</LogoNav>
      </MyLink>
      <IconButton
        disableRipple
        sx={{ color: "#fff" }}
        onClick={(e) => setAnchorEl(e.currentTarget)}
      >
        <PersonIcon />
        <ArrowDropDownIcon />
      </IconButton>
      <Menu
        open={open}
        anchorEl={anchorEl}
        anchorOrigin={{
          vertical: "bottom",
          horizontal: "right",
        }}
        transformOrigin={{
          vertical: "top",
          horizontal: "right",
        }}
        onClose={() => setAnchorEl(null)}
      >
        <MyLink to="/">
          <MenuItem>Trang chủ website</MenuItem>
        </MyLink>
        <Divider sx={{ background: "#ccc" }} />
        <MenuItem onClick={() => setUser(null)}>Đăng xuất</MenuItem>
      </Menu>
    </ContainerNav>
  );
};

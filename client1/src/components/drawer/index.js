import { useTheme } from "@emotion/react";
import styled from "@emotion/styled";
import {
  Drawer,
  List,
  ListItem,
  ListItemButton,
  ListItemText,
  Stack,
  useMediaQuery,
  Button,
  Divider,
  IconButton,
} from "@mui/material";
import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import ClearIcon from "@mui/icons-material/Clear";
import { useGlobalContext } from "../../context";
const MyLink = styled(Link)({
  color: "inherit",
  textDecoration: "none",
});
export const AppDrawer = () => {
  const { openDrawer, setOpenDrawer } = useGlobalContext();
  const theme = useTheme();
  const matchs = useMediaQuery(theme.breakpoints.up("sm"));
  const MyIconButton = styled(IconButton)({
    position: "absolute",
    top: "4px",
    left: "195px",
    color: "#fff",
  });
  useEffect(() => {
    matchs && setOpenDrawer(false);
  }, [matchs]);
  return (
    <Drawer open={openDrawer}>
      {openDrawer && (
        <MyIconButton onClick={() => setOpenDrawer(false)}>
          <ClearIcon />
        </MyIconButton>
      )}
      <List sx={{ width: "220px" }}>
        <MyLink to="/oke">
          <ListItemButton>
            <ListItemText>Trang chủ</ListItemText>
          </ListItemButton>
        </MyLink>
        <Divider />
        <MyLink to="#">
          <ListItemButton>
            <ListItemText>Sản phẩm</ListItemText>
          </ListItemButton>
        </MyLink>
        <Divider />
        <MyLink to="#">
          <ListItemButton>
            <ListItemText>Phân loại</ListItemText>
          </ListItemButton>
        </MyLink>
        <Divider />
        <MyLink to="#">
          <ListItemButton>
            <ListItemText>Blog</ListItemText>
          </ListItemButton>
        </MyLink>
        <Divider />
        <MyLink to="#">
          <ListItemButton>
            <ListItemText>Đơn hàng</ListItemText>
          </ListItemButton>
        </MyLink>
        <Divider />
      </List>

      <Button variant="contained">Đăng nhập</Button>
      {/* </Stack> */}
    </Drawer>
  );
};

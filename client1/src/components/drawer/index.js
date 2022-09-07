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
  Accordion,
  AccordionSummary,
  AccordionDetails,
} from "@mui/material";
import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import ClearIcon from "@mui/icons-material/Clear";
import { useGlobalContext } from "../../context";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import { colors } from "../../styles/theme";
const MyLink = styled(Link)({
  color: "inherit",
  textDecoration: "none",
});
export const AppDrawer = () => {
  const { openDrawer, setOpenDrawer, user } = useGlobalContext();
  const MyIconButton = styled(IconButton)({
    position: "absolute",
    top: "4px",
    left: "195px",
    color: "#fff",
  });
  const { setUser } = useGlobalContext();
  return (
    <Drawer open={openDrawer}>
      {openDrawer && (
        <MyIconButton onClick={() => setOpenDrawer(false)}>
          <ClearIcon />
        </MyIconButton>
      )}
      <List sx={{ width: "220px" }}>
        <MyLink to="/">
          <ListItemButton onClick={() => setOpenDrawer(false)}>
            <ListItemText>Trang chủ</ListItemText>
          </ListItemButton>
        </MyLink>
        <Divider />
        <MyLink to="#">
          <ListItemButton onClick={() => setOpenDrawer(false)}>
            <ListItemText>Sản phẩm</ListItemText>
          </ListItemButton>
        </MyLink>
        <Divider />
        <MyLink to="#">
          <ListItemButton onClick={() => setOpenDrawer(false)}>
            <ListItemText>Phân loại</ListItemText>
          </ListItemButton>
        </MyLink>
        <Divider />
        <MyLink to="#">
          <ListItemButton onClick={() => setOpenDrawer(false)}>
            <ListItemText>Blog</ListItemText>
          </ListItemButton>
        </MyLink>
        <Divider />
        <MyLink to="#">
          <ListItemButton onClick={() => setOpenDrawer(false)}>
            <ListItemText>Đơn hàng</ListItemText>
          </ListItemButton>
        </MyLink>
        <Divider />
        {user && (
          <Accordion
            disableGutters
            sx={{
              color: "inherit",

              boxShadow: "none",
            }}
          >
            <AccordionSummary
              expandIcon={<ExpandMoreIcon sx={{ color: "#fff" }} />}
              sx={{ background: colors.secondary }}
            >
              <ListItemText>Cài đặt</ListItemText>
            </AccordionSummary>
            <AccordionDetails
              sx={{ background: "fff", color: colors.secondary }}
            >
              <List disablePadding>
                <MyLink to="/" onClick={() => setOpenDrawer(false)}>
                  <ListItemButton>Hồ sơ của tôi</ListItemButton>
                </MyLink>
                <MyLink to="/" onClick={() => setOpenDrawer(false)}>
                  <ListItemButton>Đơn hàng</ListItemButton>
                </MyLink>
                {user && Boolean(user.isAdmin) && (
                  <MyLink to="/admin" onClick={() => setOpenDrawer(false)}>
                    <ListItemButton>Trang admin</ListItemButton>
                  </MyLink>
                )}
                <Divider sx={{ background: colors.primary }} />
                <MyLink
                  to="/"
                  onClick={() => {
                    setUser(null);
                    setOpenDrawer(false);
                  }}
                >
                  <ListItemButton inset>Đăng xuất</ListItemButton>
                </MyLink>
              </List>
            </AccordionDetails>
          </Accordion>
        )}
      </List>

      {!user && (
        <MyLink to="/login">
          <Button
            onClick={() => setOpenDrawer(false)}
            variant="contained"
            sx={{ width: "100%" }}
          >
            Đăng nhập
          </Button>
        </MyLink>
      )}
      {/* </Stack> */}
    </Drawer>
  );
};

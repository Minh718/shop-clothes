import { styled } from "@mui/material/styles";
import { colors } from "../theme";
import { Container, Box, Button, Typography } from "@mui/material";
export const ContainerAll = styled(Container)(({ theme }) => ({
  padding: "80px 24px",
  display: "flex",
  //   justifyContent: "center",
  flexWrap: "wrap",
  //   alignItems: "center",
  [theme.breakpoints.down("sm")]: {
    justifyContent: "center",
  },
}));
export const ContainerProductRight = styled(Box)(({ theme }) => ({
  position: "relative",
  display: "flex",
  alignItems: "center",
  marginBottom: "30px",
  "&:hover": {
    ".MuiButtonBase-root::after": {
      width: "30%",
      background: colors.warning,
    },
  },
  [theme.breakpoints.down("sm")]: {
    alignItems: "start",
    justifyContent: "start",
    flexDirection: "column",
  },
}));
export const ContainerImgLeft = styled(Box)(({ theme }) => ({
  [theme.breakpoints.down("lg")]: {
    width: "80%",
  },
  [theme.breakpoints.down("md")]: {
    width: "70%",
  },
  [theme.breakpoints.down("sm")]: {
    width: "100%",
  },
}));
export const NameProduct = styled(Typography)({
  fontSize: "35px",
  fontWeight: "500",
});
export const ContainerProductLeft = styled(Box)(({ theme }) => ({
  position: "relative",
  marginTop: "-100px",
  marginBottom: "30px",

  "&:hover": {
    ".MuiButtonBase-root::after": {
      width: "30%",
      background: colors.warning,
    },
  },
  [theme.breakpoints.down("md")]: {
    marginTop: "0px",
  },
}));
export const ImgProduct = styled("img")({
  width: "100%",
});
export const ContainerContent = styled(Box, {
  shouldForwardProp: (prop) => prop != "position",
})(({ position, theme }) => ({
  maxWidth: "320px",
  position: position ? "absolute" : "initial",
  left: "-170px",
  [theme.breakpoints.down("sm")]: {
    position: "initial",
  },
}));
export const MyButton = styled(Button)({
  position: "relative",
  color: "#000",
  letterSpacing: "4px",
  "&::after": {
    position: "absolute",
    width: "100%",
    height: "2px",
    content: '""',
    background: "#000",
    bottom: 0,
    left: 0,
    transition: "all 0.2s linear",
  },
});

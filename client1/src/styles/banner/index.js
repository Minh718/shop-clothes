import { Typography, Button } from "@mui/material";
import { styled } from "@mui/material/styles";
import { Box } from "@mui/system";
import { aniContaierBanner, aniText } from "../../animations";
import { colors } from "../theme";
export const ContainerBanner = styled(Box, {
  shouldForwardProp: (prop) => prop != "src",
})(({ src, theme }) => ({
  display: "flex",
  alignItems: "center",
  background: `url(./images/banner/${src}) no-repeat center / cover`,
  justifyContent: "center",
  height: "100%",
  [theme.breakpoints.down("sm")]: {
    background: `url(./images/banner/${src}) no-repeat 50% / cover`,
    // alignItems: "start",
    padding: "20px",
  },
}));
export const ContainerAll = styled(Box)(({ theme }) => ({
  height: "100vh",
  background: "#F3F2EE",
  overflow: "hidden",
  [theme.breakpoints.down("sm")]: {
    height: "70vh",
  },
}));
export const ContainerContent = styled(Box)(({ theme }) => ({
  flexGrow: "5",
}));
export const TextContentTop = styled(Typography)({
  color: colors.warning,
  textTransform: "uppercase",
  fontWeight: "500",
  fontSize: "16px",
  marginBottom: "20px",
  animation: `${aniText} 10s ease-out`,
});
export const TextTitle = styled(Typography)(({ theme }) => ({
  textTransform: "capitalize",
  fontSize: "55px",
  fontWeight: "500",
  maxWidth: "450px",
  marginBottom: "20px",
  [theme.breakpoints.down("md")]: {
    maxWidth: "350px",
    fontSize: "45px",
  },
  [theme.breakpoints.down("sm")]: {
    maxWidth: "330px",
    fontSize: "40px",
    lineHeight: "1.2",
  },
}));
export const TextDescrip = styled(Typography)(({ theme }) => ({
  fontSize: "15px",
  opacity: "0.8",
  maxWidth: "450px",
  marginBottom: "20px",
  [theme.breakpoints.down("md")]: {
    maxWidth: "350px",
  },
  [theme.breakpoints.down("sm")]: {
    maxWidth: "220px",
  },
}));
export const ContainerArrow = styled(Box)(({ theme }) => ({
  flexGrow: "1",
  display: "flex",
  justifyContent: "center",
  [theme.breakpoints.down("sm")]: {
    display: "none",
  },
}));
export const MyButton = styled(Button)({
  color: colors.white,
  background: colors.black,
  padding: "15px 40px",
  borderRadius: "0",
  opacity: 0.9,
  "&:hover": {
    background: colors.black,
    opacity: 1,
  },
});

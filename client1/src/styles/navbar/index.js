import { styled } from "@mui/material/styles";
import { Container } from "@mui/material";
import { colors } from "../theme";
import { Box } from "@mui/system";
export const ContainerNavbar = styled(Container)(({ theme }) => ({
  display: "flex",
  justifyContent: "space-between",
  alignItems: "center",
  [theme.breakpoints.down("md")]: {
    paddingLeft: "0",
    paddingRight: "16px",
  },
  [theme.breakpoints.down("sm")]: {
    paddingLeft: "16px",
    paddingRight: "20px",
  },
}));

export const ImgLogo = styled("img")(({ theme }) => ({
  height: "100px",
  [theme.breakpoints.down("md")]: {
    height: "75px",
  },
  [theme.breakpoints.down("sm")]: {
    height: "50px",
  },
}));
export const LinkNav = styled("span")({
  position: "relative",
  cursor: "pointer",
  fontSize: "18px",
  fontWeight: "600",
  textTransform: "capitalize",
  "&::after": {
    content: '""',
    position: "absolute",
    bottom: "-3px",
    left: "0",
    height: "2px",
    width: "100%",
    background: colors.warning,
    transform: "scale(0)",
    transition: "all 0.5s",
  },
  "&:hover": {
    "&::after": {
      transform: "scale(1)",
    },
  },
});
export const ContainerLinks = styled(Box)({
  display: "flex",
  justifyContent: "space-between",
  alignItems: "center",
  gap: "5px",
  flexGrow: "1.5",
});
export const Sum = styled("span")({
  fontSize: "18px",
  fontWeight: "600",
});
export const ContainerRight = styled(Box)({
  display: "flex",
  justifyContent: "end",
  alignItems: "center",
  gap: "5px",
  flexGrow: "1",
});

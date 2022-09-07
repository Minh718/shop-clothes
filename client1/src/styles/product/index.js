import { Box, Button, IconButton, styled, Typography } from "@mui/material";
import { aniBtnBuy, aniBtns } from "../../animations";
import { colors } from "../theme";
export const NameProduct = styled(Typography)({
  textTransform: "capitalize",
  fontWeight: "450",
  fontSize: "17px",
  marginBottom: "5px",
});
export const MyIconBtn = styled(IconButton)({
  borderRadius: "0",
  background: "#fff",
});
export const BtnBuy = styled(Button, {
  shouldForwardProp: (prop) => prop != "mobile",
})(({ mobile }) => ({
  textTransform: "capitalize",
  position: mobile ? "relative" : "absolute",
  left: 0,
  top: mobile ? "0px" : "-35px",
  marginTop: mobile && "10px",
  fontSize: "16px",
  color: colors.warning,
  border: mobile && `1px solid ${colors.warning}`,
  animation: !mobile && `${aniBtnBuy} 0.5s ease-out`,
}));
export const ContainerBtns = styled(Box, {
  shouldForwardProp: (prop) => prop != "mobile",
})(({ mobile }) => ({
  display: "flex",
  flexDirection: "column",
  position: "absolute",
  gap: "5px",
  top: mobile ? "10px" : "15px",
  right: mobile ? "5px" : "15px",
  animation: !mobile && `${aniBtns} 0.5s ease-out`,
}));
export const PriceProduct = styled(Typography)({
  fontSize: "20px",
  fontWeight: "bold",
  display: "flex",
  alignItems: "center",
  marginLeft: "-5px",
});

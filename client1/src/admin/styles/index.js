import { Accordion, ListItemButton } from "@mui/material";
import { Box, styled } from "@mui/system";
import { Link } from "react-router-dom";
export const MyLabel = styled("label")({
  cursor: "pointer",
  display: "flex",
  alignItems: "center",
  gap: "10px",
});
export const MyImg = styled("img")({
  width: "100%",
  height: "100px",
  objectFit: "cover",
});
export const ContainerBody = styled(Box)({
  display: "flex",
  marginTop: "56px",
});
export const BodyLeft = styled(Box, {
  shouldForwardProp: (prop) => prop != "open",
})(({ theme, open }) => ({
  width: open ? "225px" : "0px",
  flexShrink: "0",
  transition: "all 0.3s ease-out",
}));
export const BodyRight = styled(Box)({
  padding: "24px",
  flex: 1,
});
export const MyLink = styled(Link)({
  textDecoration: "none",
  color: "inherit",
});
export const BodyLeftIn = styled(Box, {
  shouldForwardProp: (prop) => prop != "open",
})(({ theme, open }) => ({
  paddingTop: "30px",
  position: "fixed",
  top: "56px",
  left: open ? "0" : "-225px",
  bottom: "0",
  width: "225px",
  background: "#212529",
  color: "#ffffff40",
  transition: "all 0.3s ease-out",
}));
export const MyAccordion = styled(Accordion)({
  background: "inherit",
  boxShadow: "none",
  color: "inherit",
});
export const MyListItemButton = styled(ListItemButton)({
  transition: "all 0.3s linear",
  "&:hover": {
    color: "#fff",
  },
});
export const ContainerModal = styled(Box)({
  width: "300px",
});

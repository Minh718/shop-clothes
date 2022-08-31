import { Paper, useMediaQuery, useTheme } from "@mui/material";
import React from "react";
import { ContainerNavbar } from "../../styles/navbar";
import { NavbarDesktop } from "./NavbarDesktop";
import { NavbarMobile } from "./NavbarMobile";
export const Navbar = () => {
  const theme = useTheme();
  const matchs = useMediaQuery(theme.breakpoints.down("sm"));
  return (
    <Paper elevation={2} sx={{ padding: "10px 0px" }}>
      <ContainerNavbar>
        {matchs ? <NavbarMobile /> : <NavbarDesktop />}
      </ContainerNavbar>
    </Paper>
  );
};

import React, { useEffect, useState } from "react";
import { styled } from "@mui/material/styles";
import { Container, Typography, Box } from "@mui/material";
import { display } from "@mui/system";
import { PriceProduct } from "../../styles/product";
import AttachMoneyIcon from "@mui/icons-material/AttachMoney";
import { TextContentTop } from "../../styles/banner";
import { MyButton } from "../../styles/banner";
import { countdown } from "./countdown";
const MyContainer = styled(Container)(({ theme }) => ({
  display: "flex",
  alignItems: "center",
  justifyContent: "space-between",
  paddingTop: "80px",
  paddingBottom: "80px",
  gap: "20px",
  [theme.breakpoints.down("md")]: {
    flexDirection: "column",
  },
}));
const NameProduct = styled(Typography)(({ theme }) => ({
  fontSize: "30px",
  fontWeight: "500",
  flexShrink: "0",
  [theme.breakpoints.down("md")]: {
    fontSize: "25px",
  },
}));
const DesProduct = styled(Typography)(({ theme }) => ({
  fontSize: "40px",
  fontWeight: "500",
  //   [theme.breakpoints.down("lg")]: {
  //     // fontSize: "35px",
  //   },
  //   [theme.breakpoints.down("md")]: {
  //     fontSize: "35px",
  //   },
}));
const ContainerCountdown = styled(Box)({
  marginTop: "20px",
  display: "flex",
  justifyContent: "center",
  height: "80px ",
  marginLeft: "-30px",
  marginRight: "-30px",
  paddingBottom: "25px",
});
const ContainerTime = styled(Box)({
  position: "relative",
  display: "flex",
  flexDirection: "column",
  justifyContent: "space-between",
  alignItems: "center",
  flexGrow: 1,
});
const ImgProduct = styled("img")({
  width: "100%",
});
const MyDivider = styled(Box)({
  position: "absolute",
  top: "-4px",
  right: "-4.5px",
  fontSize: "40px",
});
const CircleSale = styled(Box)({
  position: "absolute",
  width: "100px",
  height: "100px",
  borderRadius: "50%",
  background: "#000",
  color: "#fff",
  display: "flex",
  alignItems: "center",
  justifyContent: " center",
  flexDirection: "column",
  top: "0",
  right: "0",
});
export const Sales = () => {
  const [timeRemain, setTimeRemain] = useState({
    days: "00",
    hours: "00",
    minutes: "00",
    seconds: "00",
  });
  const dayFuture = new Date(2022, 8, 10, 11, 30, 0);
  useEffect(() => {
    const interval = setInterval(() => {
      setTimeRemain(countdown(dayFuture));
    }, 1000);
    return () => clearInterval(interval);
  }, []);
  return (
    <Box sx={{ background: "#F3F2EE" }}>
      <MyContainer>
        <NameProduct component="h3"> Bags beautiful</NameProduct>
        <Box sx={{ position: "relative" }}>
          <ImgProduct src="./images/clothes/product-sale.png" />
          <CircleSale>
            <Typography variant="body1">Sale of</Typography>
            <PriceProduct>
              <AttachMoneyIcon />
              99.99
            </PriceProduct>
          </CircleSale>
        </Box>
        <Box
          sx={{ maxWidth: { lg: "360px", md: "300px" }, textAlign: "center" }}
        >
          <TextContentTop>DEAL OF THE WEEK</TextContentTop>
          <DesProduct>Multi-pocket Chest Bag Black</DesProduct>
          <ContainerCountdown>
            <ContainerTime>
              <DesProduct>{timeRemain.days}</DesProduct>
              <Typography variant="body2" sx={{ opacity: 0.8 }}>
                Days
              </Typography>
              <MyDivider>:</MyDivider>
            </ContainerTime>
            <ContainerTime>
              <DesProduct>{timeRemain.hours}</DesProduct>
              <Typography variant="body2" sx={{ opacity: 0.8 }}>
                Hours
              </Typography>
              <MyDivider>:</MyDivider>
            </ContainerTime>
            <ContainerTime>
              <DesProduct>{timeRemain.minutes}</DesProduct>
              <Typography variant="body2" sx={{ opacity: 0.8 }}>
                Minutes
              </Typography>
              <MyDivider>:</MyDivider>
            </ContainerTime>

            <ContainerTime>
              <DesProduct>{timeRemain.seconds}</DesProduct>
              <Typography variant="body2" sx={{ opacity: 0.8 }}>
                Seconds
              </Typography>
            </ContainerTime>
          </ContainerCountdown>
          <MyButton
            onClick={() =>
              setTimeRemain({
                days: "00",
                hours: "00",
                minutes: "00",
                seconds: "00",
              })
            }
          >
            Shop Now
          </MyButton>
        </Box>
      </MyContainer>
    </Box>
  );
};

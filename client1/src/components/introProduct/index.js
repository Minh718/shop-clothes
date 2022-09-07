import React from "react";
import { Container, Box } from "@mui/material";
import {
  ContainerAll,
  ContainerProductRight,
  ContainerProductLeft,
  ImgProduct,
  ContainerContent,
  MyButton,
  ContainerImgLeft,
  NameProduct,
} from "../../styles/introProducts";
export const IntroProduct = () => {
  return (
    <ContainerAll>
      <ContainerProductRight sx={{ ml: { sm: "50%" } }}>
        <Box>
          <ImgProduct src="./images/banner/banner-1.jpg" />
        </Box>
        <ContainerContent position={true}>
          <NameProduct>Clothing Collections 2030</NameProduct>
          <MyButton>shop now</MyButton>
        </ContainerContent>
      </ContainerProductRight>
      <ContainerProductLeft>
        <ContainerImgLeft>
          <ImgProduct src="./images/banner/banner-2.jpg" />
        </ContainerImgLeft>
        <ContainerContent position={false}>
          <NameProduct>Accessories</NameProduct>
          <MyButton>shop now</MyButton>
        </ContainerContent>
      </ContainerProductLeft>
      <ContainerProductRight
        sx={{ ml: { sm: "35%", lg: "200px" }, mt: { lg: "120px" } }}
      >
        <Box>
          <ImgProduct src="./images/banner/banner-3.jpg" />
        </Box>
        <ContainerContent position={true}>
          <NameProduct>Shoes Spring</NameProduct>
          <MyButton>shop now</MyButton>
        </ContainerContent>
      </ContainerProductRight>
    </ContainerAll>
  );
};

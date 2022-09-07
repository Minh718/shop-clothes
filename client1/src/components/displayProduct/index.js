import React, { useState } from "react";
import {
  Container,
  Grid,
  styled,
  Tab,
  useMediaQuery,
  useTheme,
  Tabs,
} from "@mui/material";
import { Product } from "../product";
import { ProductMobile } from "../product/ProductMobile";
const imgs = [
  "product-1.jpg",
  "product-2.jpg",
  "product-3.jpg",
  "product-4.jpg",
  "product-5.jpg",
  "product-6.jpg",
  "product-4.jpg",
];
const MyContainer = styled(Container)(({ theme }) => ({
  paddingBottom: "80px",
  [theme.breakpoints.down("lg")]: {
    maxWidth: "900px",
  },
  [theme.breakpoints.down("md")]: {
    maxWidth: "600px",
  },
}));
export const DisplayProduct = () => {
  const theme = useTheme();
  const matches = useMediaQuery(theme.breakpoints.down("sm"));
  const [valueTab, setValueTab] = useState(0);
  return (
    <MyContainer maxWidth="lg">
      <Tabs
        value={valueTab}
        onChange={(e, newValue) => setValueTab(newValue)}
        centered
        sx={{ marginBottom: "16px" }}
      >
        <Tab label="best sellers" />
        <Tab label="new arrivals" />
        <Tab label="Your tym" />
      </Tabs>
      <Grid
        container
        spacing={{ lg: 3, md: 4, sm: 5, xs: 5 }}
        justifyContent={{ xs: "center", sm: "start" }}
      >
        {imgs.map((img, index) => {
          return (
            <Grid item key={index} lg={3} md={4} sm={6} xs={10}>
              {matches ? <ProductMobile img={img} /> : <Product img={img} />}
            </Grid>
          );
        })}
      </Grid>
    </MyContainer>
  );
};

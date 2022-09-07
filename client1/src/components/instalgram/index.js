import React from "react";
import { Container, Grid, Grow, Typography } from "@mui/material";
import { styled } from "@mui/system";
import { colors } from "../../styles/theme";
const MyImg = styled("img")({
  width: "100%",
});
const imgs = [
  "instagram-1.jpg",
  "instagram-2.jpg",
  "instagram-3.jpg",
  "instagram-4.jpg",
  "instagram-5.jpg",
  "instagram-6.jpg",
];
const TextRed = styled(Typography)(({ theme }) => ({
  color: colors.warning,
  fontSize: "30px",
  fontWeight: "bold",
  marginTop: "50px",
  [theme.breakpoints.down("md")]: {
    marginTop: "25px",
    fontSize: "25px",
  },
}));
export const Intergram = () => {
  return (
    <Container>
      <Grid
        container
        spacing={4}
        sx={{ padding: { md: "100px 0px", xs: "60px 0px" } }}
        justifyContent="center"
        alignItems={"center"}
      >
        <Grid item md={8} sm={10} xs={11}>
          <Grid container spacing={0}>
            {imgs.map((img, index) => {
              return (
                <Grid key={index} item sm={4} xs={6} display="flex">
                  <MyImg src={`./images/clothes/${img}`} />
                </Grid>
              );
            })}
          </Grid>
        </Grid>
        <Grid item md={4} sm={10} xs={11}>
          <Typography
            variant="h4"
            fontWeight="500"
            mb={{ md: "35px", sx: "15px" }}
          >
            Instagram
          </Typography>
          <Typography variant="cacption">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua.
          </Typography>
          <TextRed>#Male_Fashion</TextRed>
        </Grid>
      </Grid>
    </Container>
  );
};

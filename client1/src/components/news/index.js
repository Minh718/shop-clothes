import { Box, Button, Grid, styled, Typography } from "@mui/material";
import { Container } from "@mui/system";
import React from "react";
import EventIcon from "@mui/icons-material/Event";
const imgs = ["blog-1.jpg", "blog-2.jpg", "blog-3.jpg"];
const MyImg = styled("img")({
  width: "100%",
});
const ContainerInfo = styled(Box)({
  width: "70%",
  marginTop: "-35px",
  background: "#fff",
  padding: "32px 20px",
});
export const News = () => {
  return (
    <Container sx={{ textAlign: "center", paddingBottom: "80px" }}>
      <Typography variant="button" sx={{ fontSize: "20px", color: "#e53637" }}>
        LATEST NEWS
      </Typography>
      <Typography variant="h4" sx={{ fontWeight: "bold", mb: "30px" }}>
        Fashion New Trends
      </Typography>
      <Grid
        container
        spacing={{ sm: 4 }}
        alignItems="center"
        justifyContent={"center"}
        textAlign="left"
      >
        {imgs.map((img, index) => {
          return (
            <Grid
              item
              md={4}
              sm={6}
              xs={10}
              key={index}
              display="flex"
              alignItems="center"
              flexDirection={"column"}
            >
              <MyImg src={`./images/news/${img}`} />
              <ContainerInfo>
                <Typography
                  variant="caption"
                  sx={{
                    display: "flex",
                    alignItems: "center",
                    gap: "5px",
                    color: "#3d3d3d",
                    marginBottom: "10px",
                  }}
                >
                  <EventIcon fontSize="small" />
                  16 February 2020
                </Typography>
                <Typography variant="h6" sx={{ mb: "10px" }}>
                  What Curling Irons Are The Best Ones
                </Typography>
                <Button variant="outlined" color="warning">
                  Read Now
                </Button>
              </ContainerInfo>
            </Grid>
          );
        })}
      </Grid>
    </Container>
  );
};

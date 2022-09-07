import React from "react";
import {
  Container,
  Grid,
  styled,
  Box,
  Typography,
  List,
  ListItem,
  TextField,
  InputAdornment,
  IconButton,
} from "@mui/material";
import { colors } from "../../styles/theme";
import FacebookIcon from "@mui/icons-material/Facebook";
import InstagramIcon from "@mui/icons-material/Instagram";
import TwitterIcon from "@mui/icons-material/Twitter";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import EmailIcon from "@mui/icons-material/Email";
import CallIcon from "@mui/icons-material/Call";
const MyImg = styled("img")({
  width: "100%",
});
const SubscribeTf = styled(TextField)(() => ({
  ".MuiInputLabel-root": {
    color: "#B7B7B7",
  },

  ".MuiInput-root::before": {
    borderBottom: `1px solid #B7B7B7`,
  },
}));
const TextMain = styled(Typography)({
  color: "#b7b7b7",
  fontSize: "14px",
  lineHeight: "2",
});
const TextHeader = styled(Typography)({
  color: "#fff",
  fontSize: "17px",
  textTransform: "uppercase",
  marginBottom: "8px",
  fontWeight: "500",
  letterSpacing: "1.4px",
});
export const Footer = () => {
  return (
    <Box sx={{ background: "#111111 " }}>
      <Container sx={{ padding: "40px 0px" }}>
        <Grid container spacing={2} justifyContent="center">
          <Grid item md={4} sm={6} xs={6}>
            <List width={{ md: "70%" }}>
              <ListItem>
                <MyImg src={`./images/logobk.jpg`} />
              </ListItem>
              <ListItem>
                <TextMain sx={{ marginTop: "20px" }}>
                  The customer is at the heart of our unique business model,
                  which includes design.
                </TextMain>
              </ListItem>
              <ListItem>
                <Grid container sx={{ color: "#B7B7B7", marginTop: "10px" }}>
                  <Grid item xs={2.4}>
                    <FacebookIcon />
                  </Grid>
                  <Grid item xs={2.4}>
                    <InstagramIcon />
                  </Grid>

                  <Grid item xs={2.4}>
                    <TwitterIcon />
                  </Grid>

                  <Grid item xs={2.4}>
                    <LocationOnIcon />
                  </Grid>
                  <Grid item xs={2.4}>
                    <CallIcon />
                  </Grid>
                </Grid>
              </ListItem>
            </List>
          </Grid>
          <Grid item md={2} sm={3} xs={6}>
            <List>
              <ListItem>
                <TextHeader>SHOPPING</TextHeader>
              </ListItem>
              <ListItem>
                <TextMain>Clothing Store</TextMain>
              </ListItem>
              <ListItem>
                <TextMain>Trending Shoes</TextMain>
              </ListItem>
              <ListItem>
                <TextMain>Accessories</TextMain>
              </ListItem>
              <ListItem>
                <TextMain>Sale</TextMain>
              </ListItem>
            </List>
          </Grid>

          <Grid item md={2} sm={3} xs={6}>
            <List>
              <ListItem>
                <TextHeader>support</TextHeader>
              </ListItem>
              <ListItem>
                <TextMain>Contact Us</TextMain>
              </ListItem>
              <ListItem>
                <TextMain>Payment Methods</TextMain>
              </ListItem>
              <ListItem>
                <TextMain>Delivery</TextMain>
              </ListItem>
              <ListItem>
                <TextMain>Return Product</TextMain>
              </ListItem>
              <ListItem>
                <TextMain>Exchanges</TextMain>
              </ListItem>
            </List>
          </Grid>
          <Grid item md={4} sm={8} xs={6} sx={{ color: "#fff" }}>
            <List>
              <ListItem>
                <TextHeader>NEWLETTER</TextHeader>
              </ListItem>
              <ListItem>
                <TextMain>
                  Be the first to know about new arrivals, look books, sales &
                  promos!
                </TextMain>
              </ListItem>
              <ListItem>
                <SubscribeTf
                  variant="standard"
                  sx={{ width: "100%" }}
                  label="Your email"
                  InputProps={{
                    endAdornment: (
                      <InputAdornment position="end">
                        <IconButton>
                          <EmailIcon sx={{ color: "#B7B7B7" }} />
                        </IconButton>
                      </InputAdornment>
                    ),
                  }}
                />
              </ListItem>
            </List>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
};

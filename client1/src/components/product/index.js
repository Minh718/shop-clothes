import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import SearchIcon from "@mui/icons-material/Search";
import SyncAltIcon from "@mui/icons-material/SyncAlt";
import { Card, CardContent, CardMedia, Rating } from "@mui/material";
import React, { useState } from "react";
import {
  BtnBuy,
  ContainerBtns,
  MyIconBtn,
  NameProduct,
  PriceProduct,
} from "../../styles/product";
import FavoriteIcon from "@mui/icons-material/Favorite";
import AttachMoneyIcon from "@mui/icons-material/AttachMoney";
export const Product = ({ img, matches }) => {
  const [show, setShow] = useState(false);
  const [isLiked, setIsLiked] = useState(false);
  return (
    <Card
      sx={{ position: "relative" }}
      onPointerEnter={() => setShow(true)}
      onPointerLeave={() => setShow(false)}
    >
      <CardMedia
        component={"img"}
        image={`./images/clothes/${img}`}
        alt="oke"
        // height="270"
      />
      {show && (
        <ContainerBtns mobile={false}>
          <MyIconBtn onClick={() => setIsLiked(!isLiked)}>
            {isLiked ? <FavoriteIcon /> : <FavoriteBorderIcon />}
          </MyIconBtn>
          <MyIconBtn>
            <SyncAltIcon />
          </MyIconBtn>
          <MyIconBtn>
            <SearchIcon />
          </MyIconBtn>
        </ContainerBtns>
      )}
      <CardContent sx={{ position: "relative" }}>
        {show && <BtnBuy>+ add to cart</BtnBuy>}
        <NameProduct variant="h4">áo khoác đẹp mắt</NameProduct>
        <Rating name="simple-controlled" value={3} size="small" readOnly />
        <PriceProduct>
          <AttachMoneyIcon /> 99.25
        </PriceProduct>
      </CardContent>
    </Card>
  );
  //   };

  const DisplayMobile = () => {
    return (
      <Card sx={{ position: "relative" }}>
        <CardMedia
          component={"img"}
          image={`./images/clothes/${img}`}
          alt="oke"
          // height="270"
        />
        <ContainerBtns mobile={true}>
          <MyIconBtn onClick={() => setIsLiked(!isLiked)}>
            {isLiked ? (
              <FavoriteIcon fontSize="large" />
            ) : (
              <FavoriteBorderIcon fontSize="large" />
            )}
          </MyIconBtn>
          <MyIconBtn>
            <SyncAltIcon fontSize="large" />
          </MyIconBtn>
          <MyIconBtn>
            <SearchIcon fontSize="large" />
          </MyIconBtn>
        </ContainerBtns>
        <CardContent sx={{ position: "relative" }}>
          <NameProduct variant="h4">áo khoác đẹp mắt</NameProduct>
          <Rating name="simple-controlled" value={3} size="small" readOnly />
          <PriceProduct>
            <AttachMoneyIcon /> 99.25
          </PriceProduct>
          <BtnBuy mobile={true}>+ add to cart</BtnBuy>
        </CardContent>
      </Card>
    );
  };
  //   return false ? <DisplayMobile /> : <DisplayDesktop />;
  //   return <DisplayDesktop />;
};

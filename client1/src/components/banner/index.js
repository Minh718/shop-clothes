import { IconButton, Box, Slide } from "@mui/material";
import React, { useEffect, useState } from "react";
import {
  ContainerBanner,
  ContainerContent,
  TextContentTop,
  TextTitle,
  TextDescrip,
  ContainerArrow,
  MyButton,
  ContainerAll,
} from "../../styles/banner";
import WestIcon from "@mui/icons-material/West";
import ShortcutIcon from "@mui/icons-material/Shortcut";
import EastIcon from "@mui/icons-material/East";
const imgs = ["hero-1.jpg", "hero-2.jpg", "hero-1.jpg", "hero-2.jpg"];
export const Banner = () => {
  const [indexImg, setIndexImg] = useState(0);
  const [reset, setReset] = useState(false);
  const handleType = (index) => {
    if (index === indexImg) return "center";
    else if (
      (index === 0 && indexImg === imgs.length - 1) ||
      indexImg === index - 1
    )
      return "after";
    else return "before";
  };
  useEffect(() => {
    const interval = setInterval(() => {
      setIndexImg((prev) => {
        console.log(prev);
        return prev >= imgs.length - 1 ? 0 : prev + 1;
      });
    }, 5000);
    return () => clearInterval(interval);
  }, [reset]);
  return (
    <ContainerAll>
      {imgs.map((img, index) => {
        return (
          <ContainerBanner key={index} src={img} type={handleType(index)}>
            <ContainerArrow>
              <IconButton
                onClick={() => {
                  setReset(!reset);
                  indexImg === 0
                    ? setIndexImg(imgs.length - 1)
                    : setIndexImg(indexImg - 1);
                }}
              >
                <WestIcon fontSize="large" />
              </IconButton>
            </ContainerArrow>
            <ContainerContent>
              <TextContentTop>summer collection</TextContentTop>
              <TextTitle component="h1">
                fall - winter collections 2030
              </TextTitle>
              <TextDescrip>
                A specialist label creating luxury essentials. Ethically crafted
                with an unwavering commitment to exceptional quality.
              </TextDescrip>
              <MyButton endIcon={<ShortcutIcon />}>mua ngay</MyButton>
            </ContainerContent>
            <ContainerArrow>
              <IconButton
                onClick={() => {
                  setReset(!reset);
                  indexImg >= imgs.length - 1
                    ? setIndexImg(0)
                    : setIndexImg(indexImg + 1);
                }}
              >
                <EastIcon fontSize="large" />
              </IconButton>
            </ContainerArrow>
          </ContainerBanner>
        );
      })}
    </ContainerAll>
  );
};

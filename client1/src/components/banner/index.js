import { IconButton, Box, Slide } from "@mui/material";
import React, { useState } from "react";
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
const imgs = ["hero-1.jpg", "hero-2.jpg"];
export const Banner = () => {
  const [show, setShow] = useState(true);
  const [index, setIndex] = useState(0);
  const [reset, setReset] = useState(true);
  // React.useEffect(() => {
  //   setTimeout(() => {
  //     setShow(false);
  //   }, 3300);
  //   let timeOut;
  //   const InterVal = setInterval(() => {
  //     setShow(true);
  //     setIndex((prev) => (prev + 1) % imgs.length);
  //     timeOut = setTimeout(() => {
  //       setShow(false);
  //     }, 3300);
  //   }, 4000);
  //   return () => {
  //     clearTimeout(timeOut);
  //     clearInterval(InterVal);
  //   };
  // }, [reset]);
  return (
    <ContainerAll>
      <Slide
        in={show}
        direction={show ? "right" : "left"}
        timeout={{ enter: 600, exit: 600 }}
      >
        <ContainerBanner src={imgs[index]}>
          <ContainerArrow>
            <IconButton
              onClick={() => {
                setReset(!reset);
                index <= 0 ? setIndex(imgs.length - 1) : setIndex(index - 1);
              }}
            >
              <WestIcon fontSize="large" />
            </IconButton>
          </ContainerArrow>
          <ContainerContent>
            <TextContentTop>summer collection</TextContentTop>
            <TextTitle component="h1">fall - winter collections 2030</TextTitle>
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
                index >= imgs.length - 1 ? setIndex(0) : setIndex(index + 1);
              }}
            >
              <EastIcon fontSize="large" />
            </IconButton>
          </ContainerArrow>
        </ContainerBanner>
      </Slide>
    </ContainerAll>
  );
};

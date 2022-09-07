import React from "react";
import { Banner } from "../../components/banner";
import { DisplayProduct } from "../../components/displayProduct";
import { AppDrawer } from "../../components/drawer";
import { Footer } from "../../components/footer";
import { Intergram } from "../../components/instalgram";
import { IntroProduct } from "../../components/introProduct";
import { Navbar } from "../../components/Navbar";
import { News } from "../../components/news";
import { Sales } from "../../components/sales";

export const Home = () => {
  return (
    <>
      <Navbar />
      <Banner />
      <IntroProduct />
      <DisplayProduct />
      <Sales />
      <Intergram />
      <News />
      <Footer />
    </>
  );
};

import React from "react";
import { Banner } from "../../components/banner";
import { AppDrawer } from "../../components/drawer";
import { Navbar } from "../../components/Navbar";

export const Home = () => {
  return (
    <>
      <Navbar />
      <Banner />
      <AppDrawer />
    </>
  );
};

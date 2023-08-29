"use client";

import React from "react";
import HeroSection from "./HeroSection/HeroSection";
import ChefSpecial from "./ChefSpecial/ChefSpecial";

function HomePage({ sliderData, favouriteMenuData }) {
  const orderOnlineLink = sliderData[0].acf.order_online_link;
  return (
    <>
      <HeroSection sliderData={sliderData} />
      <ChefSpecial
        favouriteMenuData={favouriteMenuData}
        orderOnlineLink={orderOnlineLink}
      />
    </>
  );
}

export default HomePage;

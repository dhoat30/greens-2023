import HomePage from "@/Components/IndianPage/HomePage/HomePage";
import React from "react";

async function page() {
  // slider data
  const response = await fetch(
    `${process.env.url}/wp-json/wp/v2/slider?slider=1417`,
    {
      next: { revalidate: 86400 },
    }
  );
  const sliderData = await response.json();

  // favourite menu
  const favouriteMenu = await fetch(
    `${process.env.url}/wp-json/wp/v2/menu?menu-category-slug=indian-favourite`,
    {
      next: { revalidate: 86400 },
    }
  );
  const favouriteMenuData = await favouriteMenu.json();
  console.log(favouriteMenuData);
  return (
    <>
      <HomePage sliderData={sliderData} favouriteMenuData={favouriteMenuData} />
    </>
  );
}

export default page;

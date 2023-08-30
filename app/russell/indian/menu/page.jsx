import React from "react";
import MenuPage from "@/Components/IndianPage/IndianMenuPage/MenuPage";
async function page() {
  //menu images
  const menuImages = await fetch(
    `${process.env.url}/wp-json/wp/v2/menu_images?menu-images-category-slug=indian-russell`,
    {
      next: { revalidate: 86400 },
    }
  );
  const menuData = await menuImages.json();

  return <MenuPage menuData={menuData} />;
}

export default page;

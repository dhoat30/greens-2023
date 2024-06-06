import React from "react";
import MenuPage from "@/Components/ThaiPage/MenuPage/MenuPage";
import AboutPage from "@/Components/ThaiPage/AboutPage/AboutPage";
async function page() {
  // chef
  const pages = await fetch(`${process.env.url}/wp-json/wp/v2/pages`, {
    next: { revalidate: 60 },
  });
  const indianPages = await pages.json();
  let aboutPageData;
  if (indianPages.length > 0) {
    aboutPageData = indianPages.filter((item) =>
      item.title.rendered.includes("About Us Thai Paihia")
    );
  }

  return <AboutPage aboutPageData={aboutPageData} />;
}

export default page;

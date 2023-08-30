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

  // indian russell information post has this tag id 1422
  let contactInfoData = await fetch(
    `${process.env.url}/wp-json/wp/v2/info?info_tag=1422`
  );
  let contactInfo = await contactInfoData.json();

  // testimonial
  const testimonial = await fetch(
    `${process.env.url}/wp-json/wp/v2/testimonial?testimonial-category-slug=russell-indian`,
    {
      next: { revalidate: 86400 },
    }
  );
  const testimonialData = await testimonial.json();

  // gallery
  const gallery = await fetch(`${process.env.url}/wp-json/wp/v2/gallery`, {
    next: { revalidate: 86400 },
  });
  const indianGallery = await gallery.json();
  let galleryData;
  if (indianGallery.length > 0) {
    galleryData = indianGallery.filter((item) =>
      item.title.rendered.includes("Russell Indian")
    );
  }
  // brands seciton
  const pages = await fetch(
    `${process.env.url}/wp-json/wp/v2/pages?slug=brands-section`,
    {
      next: { revalidate: 86400 },
    }
  );
  const brandsData = await pages.json();
  return (
    <>
      <HomePage
        sliderData={sliderData}
        favouriteMenuData={favouriteMenuData}
        contactInfoData={contactInfo[0]}
        testimonialData={testimonialData}
        galleryData={galleryData[0]}
        brandsData={brandsData[0]}
      />
    </>
  );
}

export default page;

import React from "react";
import Home from "@/Components/ThaiPage/Home/Home";
async function page() {
  // slider data
  const response = await fetch(`${process.env.url}/wp-json/wp/v2/slider`, {
    next: { revalidate: 60 },
  });
  const data = await response.json();
  const sliderData = data.filter((item) =>
    item.title.rendered.includes("Thai Paihia")
  );
  // slogan
  const sloganResponse = await fetch(
    `${process.env.url}/wp-json/wp/v2/slogan?slogan-category=1292`,
    {
      next: { revalidate: 60 },
    }
  );
  const sloganData = await sloganResponse.json();

  // favourite menu
  const favouriteMenu = await fetch(
    `${process.env.url}/wp-json/wp/v2/menu?menu-category-slug=thai-favourite`,
    {
      next: { revalidate: 60 },
    }
  );
  const favouriteMenuData = await favouriteMenu.json();

  //menu images
  const menuImages = await fetch(
    `${process.env.url}/wp-json/wp/v2/menu_images?menu-images-category-slug=thai-paihia`,
    {
      next: { revalidate: 60 },
    }
  );
  const menuImagesData = await menuImages.json();

  //menu images
  const usp = await fetch(`${process.env.url}/wp-json/wp/v2/usp?_embed`, {
    next: { revalidate: 60 },
  });
  const uspData = await usp.json();

  //Banner data
  const banner = await fetch(
    `${process.env.url}/wp-json/wp/v2/banner?banner-category-slug=thai-paihia&_embed`,
    {
      next: { revalidate: 60 },
    }
  );
  const bannerData = await banner.json();

  // testimonial
  const testimonial = await fetch(
    `${process.env.url}/wp-json/wp/v2/testimonial?testimonial-category-slug=thai-paihia`,
    {
      next: { revalidate: 60 },
    }
  );
  const testimonialData = await testimonial.json();

  // chef
  const chef = await fetch(
    `${process.env.url}/wp-json/wp/v2/chef?chef-category-slug=thai-paihia`,
    {
      next: { revalidate: 60 },
    }
  );
  const chefData = await chef.json();

  // chef
  const gallery = await fetch(`${process.env.url}/wp-json/wp/v2/gallery`, {
    next: { revalidate: 60 },
  });
  const indianGallery = await gallery.json();
  let galleryData;
  if (indianGallery.length > 0) {
    galleryData = indianGallery.filter((item) =>
      item.title.rendered.includes("Thai Paihia")
    );
  }

  let contactInfoData = await fetch(`${process.env.url}/wp-json/wp/v2/info`, {
    next: { revalidate: 60 },
  });
  let contactInfo = await contactInfoData.json();
  contactInfo = contactInfo.filter(
    (item) => item.slug === "greens-thai-paihia"
  );

  return (
    <Home
      sliderData={sliderData}
      sloganData={sloganData[0]}
      favouriteMenuData={favouriteMenuData}
      menuImagesData={menuImagesData}
      uspData={uspData}
      bannerData={bannerData[0]}
      testimonialData={testimonialData}
      chefData={chefData[0]}
      galleryData={galleryData[0]}
      contactInfoData={contactInfo[0]}
    />
  );
}

export default page;

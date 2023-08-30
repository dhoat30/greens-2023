"use client";

import HeroSection from "./HeroSection/HeroSection";
import ChefSpecial from "./ChefSpecial/ChefSpecial";
import BookTableSection from "./BookTableSection/BookTableSection";
import TestimonialSection from "./TestimonialSection/TestimonialSection";
import IndianGallerySection from "./IndianGallerySection/IndianGallerySection";
import BrandsSection from "./BrandsSection/BrandsSection";
import MapSection from "./MapSection/MapSection";

function HomePage({
  sliderData,
  favouriteMenuData,
  contactInfoData,
  testimonialData,
  galleryData,
  brandsData,
}) {
  const orderOnlineLink = sliderData[0].acf.order_online_link;
  const mapURL = contactInfoData.acf.google_map_url;
  return (
    <>
      <HeroSection sliderData={sliderData} />
      <ChefSpecial
        favouriteMenuData={favouriteMenuData}
        orderOnlineLink={orderOnlineLink}
      />
      <BookTableSection contactInfoData={contactInfoData} />
      <TestimonialSection testimonialData={testimonialData} />
      <IndianGallerySection galleryData={galleryData} />
      <BrandsSection brandsData={brandsData} />
      <MapSection mapURL={mapURL} />
    </>
  );
}

export default HomePage;

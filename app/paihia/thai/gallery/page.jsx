import React from "react";
import GalleryPage from "@/Components/ThaiPage/GalleryPage/GalleryPage";
async function page() {
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

  return <GalleryPage galleryData={galleryData[0]} />;
}

export default page;

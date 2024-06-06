import React from "react";
import Contact from "@/Components/ThaiPage/Contact/Contact";
async function page() {
  let contactInfoData = await fetch(`${process.env.url}/wp-json/wp/v2/info`, {
    next: { revalidate: 60 },
  });
  let contactInfo = await contactInfoData.json();
  contactInfo = contactInfo.filter(
    (item) => item.slug === "greens-thai-kerikeri"
  );
  return <Contact contactInfoData={contactInfo[0]} />;
}

export default page;

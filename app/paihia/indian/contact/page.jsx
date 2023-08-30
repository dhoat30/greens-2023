import React from "react";
import Contact from "@/Components/IndianPage/ContactIndian/Contact";
async function page() {
  // indian russell information post has this tag id 1422
  let contactInfoData = await fetch(
    `${process.env.url}/wp-json/wp/v2/info?info_tag=1428`,
    {
      next: { revalidate: 86400 },
    }
  );
  let contactInfo = await contactInfoData.json();
  return <Contact contactInfoData={contactInfo[0]} />;
}

export default page;

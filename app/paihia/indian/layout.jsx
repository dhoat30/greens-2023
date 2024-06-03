import { Poppins } from "next/font/google";

import IndianHeader from "@/Components/IndianPage/IndianHeader";
import IndianFooter from "@/Components/IndianPage/IndianFooter";
import Script from "next/script";
import Head from "next/head";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "800", "900"],
});

export const metadata = {
  title: "Greens Indian Restaurant – Paihia | Byo | Gluten Free Options",
  description:
    "Indulge in the vibrant tastes of India at Greens Paihia. Nestled in Paihia, we offer genuine India cuisine, combining tradition with New Zealand's fresh ingredients. A must-visit dining experience!",
  openGraph: {
    title: "Greens Indian Restaurant – Paihia | Byo | Gluten Free Options",
    description:
      "Indulge in the vibrant tastes of India at Greens Paihia. Nestled in Paihia, we offer genuine India cuisine, combining tradition with New Zealand's fresh ingredients. A must-visit dining experience!",
    images: ["/indian-logo-paihia.webp"],
  },
};

export default async function RootLayout({ children }) {
  // indian russell information post has this tag id
  let contactInfoData = await fetch(
    `${process.env.url}/wp-json/wp/v2/info?info_tag=1428`,
    {
      next: { revalidate: 60 },
    }
  );
  let contactInfo = await contactInfoData.json();
  return (
    <html lang="en">
      <body className={poppins.className}>
        <IndianHeader contactData={contactInfo[0]} />
        {children}
        <IndianFooter contactData={contactInfo[0]} />
      </body>
    </html>
  );
}

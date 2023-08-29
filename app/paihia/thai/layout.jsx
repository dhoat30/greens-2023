import { Poppins } from "next/font/google";

import Header from "@/Components/Header/Header";
import Footer from "@/Components/Footer/Footer";
const poppins = Poppins({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "800", "900"],
});

export const metadata = {
  title: "Greens Paihia - Thai: Authentic Thai Dining in Paihia",
  description:
    "Indulge in the vibrant tastes of Thailand at Greens Paihia - Thai. Nestled in Paihia, we offer genuine Thai cuisine, combining tradition with New Zealand's fresh ingredients. A must-visit dining experience!",
  openGraph: {
    title: "Greens Paihia - Thai: Authentic Thai Dining in Paihia",
    description:
      "Indulge in the vibrant tastes of Thailand at Greens Paihia - Thai. Nestled in Paihia, we offer genuine Thai cuisine, combining tradition with New Zealand's fresh ingredients. A must-visit dining experience!",
    images: ["/thai-logo-paihia.webp"],
  },
};

export default async function RootLayout({ children }) {
  let contactInfoData = await fetch(`${process.env.url}/wp-json/wp/v2/info`);
  let contactInfo = await contactInfoData.json();

  return (
    <html lang="en">
      <body className={poppins.className}>
        <Header contactData={contactInfo} />
        {children}
        <Footer contactData={contactInfo} />
      </body>
    </html>
  );
}

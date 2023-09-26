import "./globals.css";
import { Poppins } from "next/font/google";
import StyledComponentsRegistry from "./registery";
import "bootstrap/dist/css/bootstrap.min.css";
import Script from "next/script";
import Head from "next/head";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "800", "900"],
});

export const metadata = {
  title:
    "Choose Your Preferred Greens Indian or Thai Restaurant Location | Paihia & Russells",
  description:
    "Select your desired Greens Indian or Thai Restaurant location in Paihia or Russell, New Zealand. Explore exquisite Indian and Thai cuisine in the heart of the Bay of Islands. Click to choose and discover authentic flavors!",
  openGraph: {
    title:
      "Choose Your Preferred Greens Indian or Thai Restaurant Location | Paihia & Russells",
    description:
      "Select your desired Greens Indian or Thai Restaurant location in Paihia or Russell, New Zealand. Explore exquisite Indian and Thai cuisine in the heart of the Bay of Islands. Click to choose and discover authentic flavors!",
    images: ["/Greens-Logo.png"],
  },
};

export default async function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        {/* google tag  */}

        <Script id="google-analytics-tag" strategy="afterInteractive">
          {`(window.dataLayer = window.dataLayer || [];
function gtag(){dataLayer.push(arguments);}
    gtag('js', new Date());
    gtag('config', 'G-XKMM7NJFPH');)`}
        </Script>
      </head>
      <body className={poppins.className}>
        <StyledComponentsRegistry>{children}</StyledComponentsRegistry>
      </body>
    </html>
  );
}

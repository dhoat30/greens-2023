import "./globals.css";
import { Poppins } from "next/font/google";
import StyledComponentsRegistry from "./registery";
import "bootstrap/dist/css/bootstrap.min.css";

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
    images: ["/Greens-Logo.png"],
  },
};
export default async function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={poppins.className}>
        <StyledComponentsRegistry>{children}</StyledComponentsRegistry>
      </body>
    </html>
  );
}

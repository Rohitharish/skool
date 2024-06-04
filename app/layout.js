import { Montserrat } from "next/font/google";
import "./globals.css";
import Navbar from "./Navbar";

const montserrat = Montserrat({ subsets: ["latin"] });

export const metadata = {
  title: "Portfolio",
  description: " By rh",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={montserrat.className}>
        <Navbar />
        {children}
      </body>
    </html>
  );
}

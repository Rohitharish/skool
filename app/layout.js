import Navbar from "./Components/Navbar/Navbar";
import Contact from "./Components/subpages/Contact";
import "./globals.css";

export const metadata = {
  title: "Portfolio",
  description: " By rh",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className=" font-sk-modernist m-[2%] ">
        <Navbar />
        {children}
        <Contact />
      </body>
    </html>
  );
}

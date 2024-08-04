import "./globals.css";
import Navbar from "./Navbar";

export const metadata = {
  title: "Portfolio",
  description: " By rh",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className=" font-sk-modernist">
        <Navbar />
        {children}
      </body>
    </html>
  );
}

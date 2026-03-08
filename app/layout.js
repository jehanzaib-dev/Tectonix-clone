import "./globals.css";
import Navbar from "@/components/Navbar";

export const metadata = {
  title: "Tectonix Clone",
  description: "Software company website clone",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <Navbar />
        {children}
      </body>
    </html>
  );
}
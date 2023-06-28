import Header from "@/components/Header";
import "./globals.css";

export const metadata = {
  title: "Mohan Gurung",
  description: "Portfolio Website",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="relative">
        <Header />
        {children}
      </body>
    </html>
  );
}

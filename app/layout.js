import Header from "@/components/Header";
import "./globals.css";
import Theme from "@/components/Theme";

export const metadata = {
  title: "Mohan Gurung",
  description: "Portfolio Website",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="relative">
        <Theme>
          <Header />
          {children}
        </Theme>
      </body>
    </html>
  );
}

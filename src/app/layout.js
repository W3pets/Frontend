import ConditionalLayout from "./components/ConditionalLayout";
import { Roboto } from "next/font/google";
import "./globals.css";

const roboto = Roboto({ subsets: ["latin"], weight: ["100", "300", "400", "500", "700", "900"], });

export const metadata = {
  title: "W3Pets Marketplace",
  description: "Find Your Perfect Pet Companion",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={roboto.className}>
      <ConditionalLayout>{children}</ConditionalLayout>
      </body>
    </html>
  );
}

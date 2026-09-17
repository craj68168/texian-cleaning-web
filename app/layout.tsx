import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Texian Cleaning | Commercial Cleaning Solutions in Texas",
  description:
    "Texian Cleaning provides professional commercial cleaning for offices, warehouses, construction sites and business facilities across the Dallas-Fort Worth area and Texas.",
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}

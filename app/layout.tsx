import "./globals.css";
import { ReactNode } from "react";

export const metadata = {
  title: "ELO Trail",
  description: "Track Age of Empires IV ELO history"
};

export default function RootLayout({
  children
}:{
  children:ReactNode
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}

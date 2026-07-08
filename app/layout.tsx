import "./globals.css";

import {
  ReactNode
} from "react";

import Providers
from "./providers";

import AppShell
from "@/components/layout/app-shell";


export const metadata = {

  title:
    "ELO Trail | Age of Empires IV Rankings",

  description:
    "Track Age of Empires IV ELO history over time"

};


export default function RootLayout({
  children
}: {
  children: ReactNode;
}) {

  return (

    <html
      lang="en"
      suppressHydrationWarning
    >

      <body>

        <Providers>

          <AppShell>

            {children}

          </AppShell>

        </Providers>

      </body>

    </html>

  );

}

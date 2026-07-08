"use client";

import {
  ReactNode
} from "react";

import QueryProvider
from "@/providers/query-provider";

import ThemeProvider
from "@/providers/theme-provider";


export default function Providers({
  children
}: {
  children: ReactNode;
}) {

  return (
    <ThemeProvider>

      <QueryProvider>

        {children}

      </QueryProvider>

    </ThemeProvider>
  );
}

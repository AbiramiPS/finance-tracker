import type { Metadata } from "next";
import { Geist, Geist_Mono, IBM_Plex_Serif } from "next/font/google";



export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {return(
  <main>
    SIDEBAR
    {children}
  </main>
  );
}

import SideBar from "@/components/ui/SideBar";
import type { Metadata } from "next";
import { Geist, Geist_Mono, IBM_Plex_Serif } from "next/font/google";



export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const loggedIn = { firstName : 'Abi', lastName : 'PS'}
  return(
  <main className="flex h-screen w-full font-inter">
    <SideBar user = {loggedIn}/>
    {children}
  </main>
  );
}

import Image from "next/image";
import Navbar from "./navbar/navbar";

export default function Home() {
  return (
   <div>
    {/* Sidebar component */}
      <Navbar />
      {/* Main content of the homepage */}
      <div className="p-4">
        {/* Title */}
        <h1 className="text-3xl font-bold mb-4"></h1>
        {/* Additional content */}
        <p></p>
      </div>
   </div>
  )
}

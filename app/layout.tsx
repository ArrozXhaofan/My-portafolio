import type { Metadata } from "next";
import "./globals.css";

import Navigatore from "@/Components/Nav/Nav";

export const metadata: Metadata = {
  title: "My Projects",
  description: "Jeanpiere Laura's projects",
  icons: {
    icon: 'jl-icon.ico',
    apple: 'jl-icon.ico',
  }
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es">
      <body
      //className={`antialiased`}
      >
        {
          <div className=" min-h-screen min-w-screen max-w-screen  bg-black flex flex-col items-center justify-start cover 
        overflow-hidden relative pt-12">

            <Navigatore />

            {
              children
            }
          </div>

        }
      </body>
    </html>
  );
}

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
          <div>
            <Navigatore/>
            {
              children
            }
          </div>
          
        }
      </body>
    </html>
  );
}

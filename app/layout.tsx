import type { Metadata } from "next";
import "./globals.css";

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
          <div className=" 
          min-h-screen min-w-screen max-w-screen  bg-black
           flex flex-col items-center justify-center  
          overflow-hidden relative">

            {children}
           
          </div>

        }
      </body>
    </html>
  );
}

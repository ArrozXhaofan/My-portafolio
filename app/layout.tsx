import type { Metadata } from "next";
import "./globals.css";
import { url } from "inspector";


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
    <html lang="en">
      <body
        //className={`antialiased`}
      >
        {children}
      </body>
    </html>
  );
}

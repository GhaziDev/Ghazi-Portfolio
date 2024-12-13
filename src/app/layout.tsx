import type { Metadata } from "next";
import "./globals.css";
import { NextSessionProvider } from "./nextsessprovider"
import { connect } from "./db/utils";


await connect()


export const metadata: Metadata = {
  title: "My Portfolio",
  description: "",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={` antialiased overflow-x-hidden`}
      >
        <NextSessionProvider>
        {children}
        </NextSessionProvider>
      </body>
    
    </html>
  );
}

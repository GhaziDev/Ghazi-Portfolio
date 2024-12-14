import type { Metadata } from "next";

import "./globals.css";
import { NextSessionProvider } from "./nextsessprovider"
import { connect } from "./db/utils";


await connect()


export const metadata:Metadata = {
  title:'GhaziDev',
  description:'A passionate Software Engineer',
  creator:'Ghazi',
  keywords:'Personal Blog'
}

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

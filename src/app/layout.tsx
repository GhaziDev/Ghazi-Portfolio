import type { Metadata } from "next";

import "./globals.css";
import { NextSessionProvider } from "./nextsessprovider"
import { connect } from "./db/utils";


await connect()


export const metadata:Metadata = {
  twitter:{
    title:'GhaziDev Portfolio',
    description:'A Passionate Software Engineer',
    creator:'Ghazi',
    site:'GhaziDev',
    images:'/mainimg.png'

  }
 
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

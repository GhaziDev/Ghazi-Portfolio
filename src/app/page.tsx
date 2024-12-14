import { NextUIProvider } from "@nextui-org/react";
import MainPage from "./sections/main";
import { Suspense } from "react";
import FetchBlogs from "./mycomponents/blogs/serverblog";
import LoadingBlogs from "./mycomponents/blogs/loading";




export default function Home(
){


  return (
    <NextUIProvider>
       <head>
              <meta name="twitter:card" content='summary'/>
              <meta name="twitter:title" content="Welcome to my Portfolio"/>
              <meta name='twitter:description' content='A Passionate Software Engineer'/>
              <meta name='twitter:image' content='mainimg.png' />
              <meta name='twitter:creator' content='Ghazi'/>
              </head>
      <MainPage>
        <Suspense fallback={<LoadingBlogs />}>
          <FetchBlogs   />
        </Suspense>
      </MainPage>
    </NextUIProvider>
  );
}

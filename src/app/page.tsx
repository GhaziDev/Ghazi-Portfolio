import { NextUIProvider } from "@nextui-org/react";
import MainPage from "./sections/main";
import { Suspense } from "react";
import FetchBlogs from "./mycomponents/blogs/serverblog";
import LoadingBlogs from "./mycomponents/blogs/loading";

export default function Home(
){


  return (
    <NextUIProvider>
      <MainPage>
        <Suspense fallback={<LoadingBlogs />}>
          <FetchBlogs   />
        </Suspense>
      </MainPage>
    </NextUIProvider>
  );
}

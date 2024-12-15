import { NextUIProvider } from "@nextui-org/react";
import MainPage from "./components/main";
import { Suspense } from "react";
import FetchBlogs from "./components/blogs/serverblog";
import LoadingBlogs from "./components/blogs/loading";





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

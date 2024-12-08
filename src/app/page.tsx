import { NextUIProvider } from "@nextui-org/react";
import MainPage from "./sections/main";
import { Suspense } from "react";
import FetchBlogs from "./mycomponents/blogs/serverblog";
import LoadingBlogs from "./mycomponents/blogs/loading";

export default function Home(context:any
){

  console.log('this is context')

  console.log(context)

  return (
    <NextUIProvider>
      <MainPage>
        <Suspense fallback={<LoadingBlogs />}>
          <FetchBlogs selectedPage={context} />
        </Suspense>
      </MainPage>
    </NextUIProvider>
  );
}

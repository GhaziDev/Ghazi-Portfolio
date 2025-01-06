import { NextUIProvider } from "@nextui-org/react";
import MainPage from "./components/main";
import { Suspense } from "react";
import FetchBlogs from "./components/blogs/serverblog";
import LoadingBlogs from "./components/blogs/loading";
import {ThemeProvider} from "next-themes";





export default function Home(
){


  return (
    <NextUIProvider>
      <ThemeProvider attribute='class' defaultTheme="dark" >
      <MainPage>
        <Suspense fallback={<LoadingBlogs />}>
          <FetchBlogs   />
        </Suspense>
      </MainPage>
      </ThemeProvider>
    </NextUIProvider>
  );
}

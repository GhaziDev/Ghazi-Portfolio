import { Skeleton } from "@nextui-org/skeleton";

export default function LoadingBlogs() {
  const mapSkeletons = () => {
    return Array.from([0, 1, 2]).map((blog, index) => {
      return (
        <div
          key={index}
          className=" font-mono bg-box border-none  flex flex-row flex-wrap gap-4 justify-between rounded-[5px] hover:scale-105 transition-all duration-200 w-[700px] box-border"
        >
          <div className=" flex flex-wrap flex-col gap-4 w-[50%] p-4">
            <Skeleton className=" w-[300px] h-[30px] rounded-[5px] text-gray-700 bg-gray-500 "></Skeleton>
            <div id="tags" className="flex gap-5 justify-start">
              {Array.from([0, 1, 2]).map((tag, index) => {
                return (
                  <Skeleton
                    key={index}
                    className="  border-none w-[70px] h-[20px]  p-1 rounded-[5px] text-[12px]"
                  ></Skeleton>
                );
              })}
            </div>
            <div className="text-gray-400 text-[12px]"></div>
          </div>

          <Skeleton className="object-cover w-[200px] h-[fill] rounded-[5px] " />

          <div id="pagination"></div>
        </div>
      );
    });
  };

  return mapSkeletons();
}

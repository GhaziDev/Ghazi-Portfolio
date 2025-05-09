import {NextResponse } from "next/server";
import { BlogModel } from "@/app/models/Blog";
export const revalidate = 60


export const GET = async () => {
  //const page = req.nextUrl.searchParams.get("page") as unknown as number; //supposed to be page number

  const blogs = await BlogModel.find({})
    .select(["title", "date", "tags", "image", "slug"])
    //.skip(3 * page - 3)
    //.limit(3) // pagination in database
  // basically if you are in p.1 skip nothing, and query over the first 3 documents, in p.2 skip the first 3 and query over the 2nd 3 documents and so on

  const blogsCount = await BlogModel.find({}).countDocuments()

  return NextResponse.json({ data: blogs, pages:blogsCount}, { status: 200 });
};


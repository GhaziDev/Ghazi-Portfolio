import { NextRequest, NextResponse } from "next/server";
import { BlogModel } from "@/app/models/Blog";

export const GET = async (req: NextRequest, res: NextResponse) => {
  const page = req.nextUrl.searchParams.get("page") as unknown as number; //supposed to be page number

  const blogs = await BlogModel.find({})
    .select(["title", "date", "tags", "image", "slug"])
    .skip(3 * page - 3) // pagination in database
  // basically if you are in p.1 skip nothing, and query over the first 3 documents, in p.2 skip the first 3 and query over the 2nd 3 documents and so on

  return NextResponse.json({ data: blogs }, { status: 200 });
};

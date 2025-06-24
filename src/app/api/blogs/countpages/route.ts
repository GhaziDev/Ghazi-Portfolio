export const dynamic = "force-dynamic";

import { NextResponse } from "next/server";
import { BlogModel } from "@/app/models/Blog";
import { connect } from "@/app/db/utils";



export async function GET(){
    await connect()
    const pagesCount = await BlogModel.find({}).countDocuments()
    return NextResponse.json({count:pagesCount},{status:200})
    
}
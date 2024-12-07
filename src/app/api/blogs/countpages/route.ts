import { NextRequest,NextResponse } from "next/server";
import { BlogModel } from "@/app/models/Blog";



export async function GET(req:NextRequest, res:NextResponse){
    const pagesCount = await BlogModel.find({}).countDocuments()
    return NextResponse.json({count:pagesCount},{status:200})
    
}
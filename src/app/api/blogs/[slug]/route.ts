import { NextRequest,NextResponse } from "next/server";
import { BlogModel } from "@/app/models/Blog";


export async function GET(req:NextRequest, {params}:Promise<{params:{slug:string}}>){

    try{

    const {slug} = await params

    const pullBlog = await BlogModel.findOne({slug:slug})

    return NextResponse.json({data:pullBlog},{status:200})
    }
    catch(err){

        return NextResponse.json({data:err},{status:400})
    }


}
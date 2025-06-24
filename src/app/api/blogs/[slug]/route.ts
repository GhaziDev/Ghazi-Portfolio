export const dynamic = "force-dynamic";

import { NextRequest,NextResponse } from "next/server";
import { BlogModel } from "@/app/models/Blog";
import { connect } from "@/app/db/utils";


export async function GET(req:NextRequest, {params}:{params:{slug:string}}){
    await connect()

    try{

    const {slug} = params

    const pullBlog = await BlogModel.findOne({slug:slug})

    return NextResponse.json({data:pullBlog},{status:200})
    }
    catch(err){

        return NextResponse.json({data:err},{status:400})
    }


}
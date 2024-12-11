import { NextRequest,NextResponse } from "next/server";
import { BlogModel } from "@/app/models/Blog";


export async function GET(req:NextRequest, {params}:Promise<{params:{slug:string}}>){
    console.log('is it reaching the backend')

    try{

    console.log(params)

    const pullBlog = await BlogModel.findOne({slug:'welcome-to-my-website'})
    console.log(pullBlog)

    return NextResponse.json({data:pullBlog},{status:200})
    }
    catch(err){
        console.log(err)

        return NextResponse.json({data:err},{status:400})
    }


}
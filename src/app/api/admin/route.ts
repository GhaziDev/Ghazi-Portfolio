import { NextRequest,NextResponse } from "next/server";
import { BlogModel } from "@/app/models/Blog";


export const POST = async (req:NextRequest) => {
    const blog = await req.json()
    console.log(blog)
    const newBlog = new BlogModel({
        title: blog?.title,

        slug: blog?.slug,
        description: blog?.description,
        date: new Date(Date.now()), //some number
        tags:blog?.tags,
        image: blog?.image,
    
      })
  
     newBlog.save()

     return NextResponse.json({message:'Data saved successfully in DB!'},{status:200})



}
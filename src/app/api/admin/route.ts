import { NextRequest,NextResponse } from "next/server";
import { BlogModel } from "@/app/models/Blog";
import fs from 'node:fs/promises'


export const POST = async (req:NextRequest) => {
    const blog = await req.formData()
    const image = blog.get('image') as File
    const arrayBuffer = await image.arrayBuffer()
    const buffer = new Uint8Array(arrayBuffer)
    await fs.writeFile(`./public/blog_images/${image.name}`,buffer)

    console.log(blog)
    const newBlog = new BlogModel({
        title: blog.get('title'),

        slug: blog.get('slug'),
        description: blog.get('description'),
        date: new Date(Date.now()), //some number
        tags:JSON.parse(blog.get('tags') as string),
        image: `./public/blog_images/${image.name}`,
    
      })
  
     newBlog.save()

     return NextResponse.json({message:'Data saved successfully in DB!'},{status:200})



}
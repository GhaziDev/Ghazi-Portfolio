'use client'
import { useState } from "react"
import { Blog } from "../interfaces/interfaces"
import dayjs from "dayjs"
import relativeTime from 'dayjs/plugin/relativeTime'
import { MarkdownRenderer } from "../[admin]/createblog"
import { useRouter } from "next/navigation"
import { IoArrowBackCircleSharp } from "react-icons/io5";


dayjs.extend(relativeTime)

// a client component for addining motion for later

export default function ClientBlog({data}:{data:Blog}){
    const [blog,setBlog] = useState<Blog>(data)
    const route = useRouter()

    return (
        <div id='mainblog' className='flex flex-col flex-wrap gap-9 items-center justify-center'>
            <div className='absolute w-[40px] h-[40px]  top-0 left-0 cursor-pointer z-[3]'> 

                <IoArrowBackCircleSharp size='30px' onClick={()=>route.back()}></IoArrowBackCircleSharp>

            </div>

            <div id='blogheader' className='flex flex-col flex-wrap  gap-[30px] '>
                <div id='titleimg'>
                    <img className=' object-cover w-[500px] h-[500px] rounded-[5px]' src={blog.image}/>
                    </div>
                    <div className='text-[36px] text-wrap flex justify-center '>
                        {blog.title}
                    </div>

                    <div id='tags' className="flex gap-5">
                        {
                            blog.tags?.map((tag)=>{
                                return(
                                    <div key={tag} className=''>
                                        <div className=' border-outcolor border-[1px] rounded-[5px] w-[110px] h-[35px] bg-box text-selectorcolor p-1 text-center  '>{tag}</div>

                                    </div>
                                )
                            })
                        }
                    </div>
                    <div id='date' className='text-slate-500'>Posted {dayjs(blog.date).fromNow()}</div>

                
            </div>
            <div className='w-[50%] h-[1px] bg-slate-600'></div>
            <div className='w-[65ch] text-wrap break-words'>

                <MarkdownRenderer>
                {blog.description}
                </MarkdownRenderer>
            </div>
            
        </div>
    )


}
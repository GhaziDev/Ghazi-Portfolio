'use client'
//import { useState } from "react"
import { Blog } from "../interfaces/interfaces"
import dayjs from "dayjs"
import relativeTime from 'dayjs/plugin/relativeTime'
import { MarkdownRenderer } from "../admin/createblog"
import { useRouter } from "next/navigation"
import { IoArrowBackCircleSharp } from "react-icons/io5";


dayjs.extend(relativeTime)

// a client component for addining motion for later

export default function ClientBlog({data}:{data:Blog}){
    //const [blog,setBlog] = useState<Blog>(data) // for later use with animations
    const route = useRouter()


    return (
        <div id='mainblog' className='flex flex-col flex-wrap gap-9 items-center justify-center'>
            <div className='flex justify-start w-[100%] sticky top-0 p-10 cursor-pointer ' onClick={()=>route.push('/')}> 

                <IoArrowBackCircleSharp size='40px' ></IoArrowBackCircleSharp>

            </div>

            <div id='blogheader' className='flex flex-col flex-wrap  gap-[30px] '>
                <div id='titleimg'>
                    <img className=' object-cover w-[500px] h-[500px] rounded-[5px]' src={data.image}/>
                    </div>
                    <div className='text-[36px] text-wrap flex justify-center '>
                        {data.title}
                    </div>

                    <div id='tags' className="flex gap-5">
                        {
                            data.tags?.map((tag)=>{
                                return(
                                    <div key={tag} className=''>
                                        <div className=' border-outcolor border-[1px] rounded-[5px] w-[110px] h-[35px] bg-box text-selectorcolor p-1 text-center  '>{tag}</div>

                                    </div>
                                )
                            })
                        }
                    </div>
                    <div id='date' className='text-slate-500'>Posted {dayjs(data.date).fromNow()}</div>

                
            </div>
            <div className='w-[50%] h-[1px] bg-slate-600'></div>
            <div className='w-[65ch] text-wrap break-words'>

                <MarkdownRenderer>
                {data.description}
                </MarkdownRenderer>
            </div>
            
        </div>
    )


}
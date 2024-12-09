'use client'
import React, {useState, useEffect} from 'react'

import {Pagination} from "@nextui-org/react"
import { PartialBlog } from '../interfaces/interfaces'

import dayjs from 'dayjs'
import relativeTime from 'dayjs/plugin/relativeTime'
import { useRouter } from 'next/navigation'
import {motion} from 'motion/react'

dayjs.extend(relativeTime)






export default function Blogs({data}:{data:Array<PartialBlog>}){
    const [pages,setPages] = useState<number>(1)
    const [selectedPage,setSelectedPage] = useState<number>(1)
    //const route = useRouter()
    useEffect(()=>{
        fetch('/api/blogs/countpages/',{headers:{'Accept': 'application/json'}}).then((res)=>{
            res.json().then((count)=>{
                setPages(count.count)

                
            })
        })




    },[])

    
    const mapBlogs = ()=>{
        const skip = selectedPage*3-3 //starting index
        const limit = skip+3 //ending index
        const slicedBlogs = data.slice(skip,limit)

        return(
            slicedBlogs?.map((blog:PartialBlog,index:number)=>{
            
                return(
                    <div  key={index} className=' font-mono bg-box border-outcolor border-[1px]  flex flex-row flex-wrap gap-4 justify-between rounded-[5px] hover:scale-105 transition-all duration-200 w-[700px] box-border' >
                        <div className=' flex flex-wrap flex-col gap-4 w-[50%] p-4'>
                        <div className=' text-[16px] font-semibold'>{blog.title}</div>
                        <div id='tags' className='flex gap-5 justify-start'>
                        {

                            blog.tags.map((tag,index)=>{
                                return(
                                    <div key={index} className=' bg-black border-outcolor text-selectorcolor border-[1px]  p-1 rounded-[4px] text-[12px]'>{tag}</div>
                                )
                            })
                        }
                        </div>
                        <div className='text-gray-400 text-[12px]'>Posted {dayjs(blog.date).fromNow()}</div>
                        </div>

                        <img src={blog.image} alt={'someimg'} className='object-cover w-[200px] h-[fill] rounded-[5px] ' />

    
                    </div>
                )

            })
        )
}










    

    return (

        <div className='flex flex-wrap flex-col gap-5 justify-center items-center'>
            <motion.div className='flex flex-col gap-5 relative' initial={{opacity:0,left:-200}} whileInView={{opacity:1,left:0}} transition={{duration:0.5,delay:0.4}}>
            {mapBlogs()}
            </motion.div>
       
            <Pagination  classNames={{item:" text-amber-white bg-black rounded-[5px] [&[data-hover=true]:not([data-active=true])]:bg-transparent  [&[data-hover=true]:not([data-active=true])]:border-outcolor [&[data-hover=true]:not([data-active=true])]:border-[1px]     ", cursor:' hover:bg-transparent hover:border-outcolor hover:border-[1px] border-outcolor border-[1px] bg-transparent shadow-boxshadow shadow-[1px_1px_3px] '}}  page={selectedPage} onChange={setSelectedPage} total={pages/3}></Pagination>
        </div>
    )



}
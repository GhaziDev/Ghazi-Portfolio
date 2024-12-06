import {useState, useEffect} from 'react'
import { PartialBlog } from '../interfaces/interfaces'

import {motion} from 'motion/react'
import { useRouter } from 'next/navigation'

import dayjs from 'dayjs'

import relativeTime from 'dayjs/plugin/relativeTime'

import {Pagination, PaginationItem, PaginationCursor} from "@nextui-org/react"
import { Suspense } from 'react'




dayjs.extend(relativeTime)



export default function Blogs(){
    const [blogs,setBlogs] = useState<Array<PartialBlog>>()
    const router = useRouter()
    const [pages,setPages] = useState<number>(1)
    const [selectedPage,setSelectedPage] = useState<number>(1)

    useEffect(()=>{
        fetch(`/api/blogs?page=${selectedPage}`,{headers: {'Accept': 'application/json'}}).then((res)=>{
            res.json().then((res)=>{
                setBlogs(res.data)
                setPages(res.pages)


            })

        })

    },[selectedPage])

    const mapBlogs = ()=>{
        return(
            blogs?.map((blog,index)=>{
                console.log(blog.image)
                return(
                    <motion.div onClick={()=>{router.push(`/${blog.slug}`)}} key={index} className=' font-mono bg-box border-outcolor border-[1px]  flex flex-row flex-wrap gap-4 justify-between rounded-[5px] hover:scale-105 transition-all duration-200 w-[700px] box-border' transition={{duration:0.5,delay:0.07*index+1}} initial={{left:'-50px',opacity:0}} whileInView={{left:0,opacity:1}}>
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

                        <div id='pagination' >
                            
                        </div>
                    </motion.div>
                )

            })
        )

    }

    if(!blogs){
        return <Suspense fallback={<div>Loading...</div>}></Suspense>
    }

    return (

        <div className='flex flex-wrap flex-col gap-5 justify-center items-center'>
            <Suspense fallback={<div>Loading...</div>}>
            {mapBlogs()}
            </Suspense>
            <Pagination key={'red'} page={selectedPage} onChange={setSelectedPage} total={pages/3}></Pagination>
        </div>
    )


}
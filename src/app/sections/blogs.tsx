import React, {useState, useEffect,createContext} from 'react'
import { PartialBlog } from '../interfaces/interfaces'

import {motion} from 'motion/react'
import { useRouter } from 'next/navigation'

import dayjs from 'dayjs'

import relativeTime from 'dayjs/plugin/relativeTime'

import {Pagination, PaginationItem, PaginationCursor} from "@nextui-org/react"
import { Suspense } from 'react'
import FetchBlogs from '../mycomponents/blogs/serverblog'
import LoadingBlogs from '../mycomponents/blogs/loading'
import { ReactNode } from 'react'

export const PageContext = createContext<number>(1)




dayjs.extend(relativeTime)



export default function Blogs({children}:{children:ReactNode}){
    const [pages,setPages] = useState<number>(1)
    const [selectedPage,setSelectedPage] = useState<number>(1)
    useEffect(()=>{
        fetch('/blogs/countpages/',{headers:{'Accept': 'application/json'}}).then((res)=>{
            res.json().then((count)=>{
                setPages(count.count)

                
            })
        })



    },[])


    

    return (

        <PageContext.Provider value={selectedPage}>
      
        <div className='flex flex-wrap flex-col gap-5 justify-center items-center'>
            {children}
            <Pagination key={'red'} page={selectedPage} onChange={setSelectedPage} total={pages/3}></Pagination>
        </div>
        </PageContext.Provider>
    )



}
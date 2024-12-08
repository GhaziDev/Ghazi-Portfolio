'use client'
import React, {useState, useEffect} from 'react'

import {Pagination} from "@nextui-org/react"
import { PartialBlog } from '../interfaces/interfaces'

import dayjs from 'dayjs'
import relativeTime from 'dayjs/plugin/relativeTime'
import { useRouter } from 'next/navigation'
dayjs.extend(relativeTime)






export default function Blogs(){
    const [pages,setPages] = useState<number>(1)
    const [selectedPage,setSelectedPage] = useState<number>(1)
    const route = useRouter()
    useEffect(()=>{
        fetch('/blogs/countpages/',{headers:{'Accept': 'application/json'}}).then((res)=>{
            res.json().then((count)=>{
                setPages(count.count)

                
            })
        })





    },[])


    useEffect(()=>{
        if(selectedPage === undefined) return
         route.push(`/api/blogs?page=${selectedPage}/`)
     },[selectedPage])








    

    return (
       
            <Pagination  page={selectedPage} onChange={setSelectedPage} total={pages/3}></Pagination>
        
    )



}
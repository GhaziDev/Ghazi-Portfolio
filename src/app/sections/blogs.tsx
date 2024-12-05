import {useState, useEffect} from 'react'
import { PartialBlog } from '../interfaces/interfaces'



export default function Blogs(){
    const [blogs,setBlogs] = useState<Array<PartialBlog>>()

    useEffect(()=>{
        fetch('/api/admin',{headers: {'Accept': 'application/json'}}).then((res)=>{
            res.json().then((res)=>{
                console.log(res.data)
                setBlogs(res.data)


            })

        })

    },[])

    return (
        <div>
            Hello world! this is blogs section
        </div>
    )


}
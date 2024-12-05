import {useState, useEffect} from 'react'
import { PartialBlog } from '../interfaces/interfaces'

import {motion} from 'motion/react'




export default function Blogs(){
    const [blogs,setBlogs] = useState<Array<PartialBlog>>()

    useEffect(()=>{
        fetch('/api/blogs?page=1',{headers: {'Accept': 'application/json'}}).then((res)=>{
            res.json().then((res)=>{
                setBlogs(res.data)


            })

        })

    },[])

    const mapBlogs = ()=>{
        return(
            blogs?.map((blog,index)=>{
                console.log(blog.image)
                return(
                    <motion.div key={index} className='flex flex-row flex-wrap gap-5 border-outcolor border-[1px] rounded-[5px] hover:scale-105 transition-all duration-200 ' transition={{duration:0.5,delay:0.1*index+1}} initial={{left:'-50px',opacity:0}} whileInView={{left:0,opacity:1}}>
                        <div className=''>{blog.title}</div>
                        {
                            blog.tags.map((tag,index)=>{
                                return(
                                    <div key={index} className=''>{tag}</div>
                                )
                            })
                        }
                        <img src={blog.image} alt={'someimg'}/>
                    </motion.div>
                )
            })
        )

    }

    return (

        <div className='flex flex-wrap flex-col gap-2'>
            {mapBlogs()}
        </div>
    )


}
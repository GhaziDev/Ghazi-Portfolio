//serve component
import { PartialBlog } from '@/app/interfaces/interfaces'
import Blogs from '@/app/sections/blogs'
import dayjs from 'dayjs'
import relativeTime from 'dayjs/plugin/relativeTime'
dayjs.extend(relativeTime)

export default async function FetchBlogs(){



    const data = await fetch(`http://127.0.0.1:3000/api/blogs/`)

    const awaitData = await data.json()
    const blogs = await awaitData.data
    console.log(blogs)
    

    

return(
 
        <Blogs data={blogs}></Blogs>


    
)







}
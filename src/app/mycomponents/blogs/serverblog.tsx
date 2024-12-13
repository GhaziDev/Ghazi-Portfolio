//serve component
import Blogs from '@/app/sections/blogs'
import dayjs from 'dayjs'
import relativeTime from 'dayjs/plugin/relativeTime'
dayjs.extend(relativeTime)

export default async function FetchBlogs(){



    const data = await fetch(`http://localhost:3000/api/blogs/`,{next:{revalidate:3600}})


    const awaitData = await data.json()
    const blogs = await awaitData.data
    

    

return(
 
        <Blogs data={blogs}></Blogs>


    
)







}
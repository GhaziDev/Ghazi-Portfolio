//serve component
import Blogs from '@/app/sections/blogs'
import dayjs from 'dayjs'
import relativeTime from 'dayjs/plugin/relativeTime'
import { BlogModel } from '@/app/models/Blog'
dayjs.extend(relativeTime)

export default async function FetchBlogs(){
    

    
  const blogs = await BlogModel.find({})
  .select(["title", "date", "tags", "image", "slug"])
  //.skip(3 * page - 3)
  //.limit(3) // pagination in database
// basically if you are in p.1 skip nothing, and query over the first 3 documents, in p.2 skip the first 3 and query over the 2nd 3 documents and so on
const blogsCount = await BlogModel.find({}).countDocuments()
    

return(
 
        <Blogs data={blogs} pages={blogsCount}></Blogs>


    
)







}
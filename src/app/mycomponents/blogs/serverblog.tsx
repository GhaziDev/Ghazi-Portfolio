//serve component
import { PartialBlog } from '@/app/interfaces/interfaces'
import dayjs from 'dayjs'
import relativeTime from 'dayjs/plugin/relativeTime'
dayjs.extend(relativeTime)

export default async function FetchBlogs({selectedPage}:{selectedPage:number}){



    const data = await fetch(`/api/blogs?page=${selectedPage}/`,{'headers':{'Accept': 'application/json'}})

    const awaitData = await data.json()
    const blogs = await awaitData.data

    const mapBlogs = ()=>{

            return(
                blogs?.map((blog:PartialBlog,index:number)=>{
                
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
    
                            <div id='pagination' >
                                
                            </div>
                        </div>
                    )
    
                })
            )
            
    }

    return(
        mapBlogs()
    )




}
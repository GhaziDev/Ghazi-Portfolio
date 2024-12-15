import ClientBlog from "../clientComp"

import { BlogModel } from "@/app/models/Blog"


export default async function ServerBlog({params}:{params:{slug:string}}){

    try{

        const {slug} = params
    
        const pullBlog = await BlogModel.findOne({slug:slug})
        return(

            <ClientBlog data={pullBlog}></ClientBlog>
    
        )
    
        }
        catch(err){
    
            console.log(err)
            return null
        }
    
    


    

}
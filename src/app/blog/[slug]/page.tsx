import ClientBlog from "../clientComp"


export default async function ServerBlog({params}:{params:Promise<{slug:string}>}){
    const p = await params
    const reqData = await fetch(`http://localhost:3000/api/blogs/${p.slug}/`)
    const fetchData = await reqData.json()
    const data = await fetchData.data

    console.log(data)

    return(

        <ClientBlog data={data}></ClientBlog>

    )

}
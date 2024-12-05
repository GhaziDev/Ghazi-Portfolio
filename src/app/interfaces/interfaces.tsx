
export interface HoverProps{
    id:string,
    onMouseEnter:(e:React.SyntheticEvent<HTMLElement>)=>void,
    onMouseLeave:(e:React.SyntheticEvent<HTMLElement>)=>void,
}


export interface ClickProps{
    id:string,
    onClick:(e:React.SyntheticEvent<HTMLElement>)=>void,
} 



export interface Blog{
    slug:string, // slug for blog
    title:string,
    tags: Array<string>
    date:Date, // x days ago
    description:string,
    image:string //uploaded locally to the project, even when deployed on aws


}

export type PartialBlog = Pick<Blog, 'title'|'date'|'image'|'tags'|'slug'>


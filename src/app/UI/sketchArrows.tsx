import { ReactNode } from "react"
export function RightArrow({children}:{children:ReactNode}){
    return(
        <div className=' flex flex-wrap flex-col items-center gap-3'>

            <p className='text-[20px]'>{children}</p>
        <svg width='200' height='200' viewBox="0 0 200 200">
  <path d='M 0 0 C 600 -500, -90 140, 80 80 M 75 75 l 20 0 M 75 90 l 20 -15 ' className='fill-none stroke-white stroke-[3px]'  stroke-linecap="round"></path>
</svg>
</div>
    )
}


export function LeftArrow(){
    return(
        null
    )
}
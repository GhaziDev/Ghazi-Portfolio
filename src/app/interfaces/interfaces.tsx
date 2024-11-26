
export interface HoverProps{
    id:string,
    onMouseEnter:(e:React.SyntheticEvent<HTMLElement>)=>void,
    onMouseLeave:(e:React.SyntheticEvent<HTMLElement>)=>void,
}


export interface ClickProps{
    id:string,
    onClick:(e:React.SyntheticEvent<HTMLElement>)=>void,
} 




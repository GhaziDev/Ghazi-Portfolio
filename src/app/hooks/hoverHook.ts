import { useState } from "react";
import { HoverProps } from "../interfaces/interfaces";

export default function useHover(){ //id comes from e.target.id which is a string
    const [hoveredElement,setHoveredElement] = useState<string>('');

    const handleHover = (e:React.SyntheticEvent<HTMLElement>)=>{
        
        setHoveredElement(e.target.id)
    }

    const cancelHover = ()=>{
        setHoveredElement('')
    }

    const hoverProps:HoverProps = {
        id:hoveredElement,
        onMouseEnter:handleHover,
        onMouseLeave:cancelHover
    }

    return hoverProps


}
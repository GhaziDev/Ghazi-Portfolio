import {useState} from 'react'
import { ClickProps} from '../interfaces/interfaces'

export default function useClick(){
    const [clickedElement,setClickedElement] = useState<string>('')

    function handleClick(e:React.SyntheticEvent<HTMLElement>):void{
        setClickedElement((prevId) => (prevId === (e.target as HTMLElement).id ? "" : (e.target as HTMLElement).id));

    }

    const clickProps:ClickProps = {
        id:clickedElement,
        onClick:handleClick,
    }

    return clickProps


}
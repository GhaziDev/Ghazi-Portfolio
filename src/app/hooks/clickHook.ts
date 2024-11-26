import {useState} from 'react'
import { ClickProps} from '../interfaces/interfaces'

export default function useClick(){
    const [clickedElement,setClickedElement] = useState<string>('')

    function handleClick(e:React.SyntheticEvent<HTMLElement>):void{
        setClickedElement(e.target.id)
    }

    const clickProps:ClickProps = {
        id:clickedElement,
        onClick:handleClick,
    }

    return clickProps


}
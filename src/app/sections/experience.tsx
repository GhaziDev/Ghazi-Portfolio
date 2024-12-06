'use client'
import useClick from '../hooks/clickHook'
import ExperienceComp from '../mycomponents/experience/exp'

export default function Experience(){
  const clickedElement = useClick()
    return(
        

       
        <div id='expwrapper' className='flex flex-col flex-wrap gap-6 justify-center  items-center pt-[300px] '>
        
          <ExperienceComp clickedElement={clickedElement}></ExperienceComp>
        

        </div>
  
  
        
    
    )
}
'use client'
import {motion} from 'motion/react'
import useClick from '../hooks/clickHook'
import ExperienceSection from '../components/experience/exp'

export default function Experience(){
  const clickedElement = useClick()
    return(
        <motion.div className='fonts-serif' id='expsec'>

        <motion.div  whileInView={{opacity:1, left:'0px'}} transition={{duration:1.5, type:'spring',stiffness:100,damp:10,bounce:0.1}} initial={{opacity:0,left:'-100px'}} id='exptitle' className=' relative text-[60px] font-serif'>Experience</motion.div>
        <div id='expwrapper' className='flex flex-col flex-wrap gap-6 justify-center  items-center pt-[300px] '>
        
          <ExperienceSection clickedElement={clickedElement}></ExperienceSection>
        

        </div>
  
  
        
        </motion.div>
    )
}
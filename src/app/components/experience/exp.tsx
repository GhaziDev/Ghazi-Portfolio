'use client'
import {motion} from 'motion/react'
import { FaAngleDoubleUp, FaAngleDoubleDown } from 'react-icons/fa'
import ExpDescription from './expinfo'
import { ClickProps } from '@/app/interfaces/interfaces'



export default function ExperienceSection({clickedElement}){

    const mapExp = ()=>{
        return ExpDescription.map((exp)=>{
            return(
<div key={exp.title} className='flex flex-wrap flex-col w-[600px]   p-[40px]'>
                <motion.div key={exp.title}  whileHover={{scale:1.03}} whileInView={{opacity:1}} transition={{duration:0.3}} initial={{opacity:0}} className='flex  items-center justify-center rounded-md gap-6 ' id='ta'>

        
          <motion.div className='bg-slate-50 p-[10px] rounded-md h-fit w-fit' id='left'>
            <img   className=' w-[40px] h-[40px] rounded-md'  src={exp.icon} alt='ta'></img>
          </motion.div>
          <motion.div id='right' className='w-[600px]'>
          <motion.div id='title' className='text-[16px]'>
            {exp.title} at <b>{exp.location}</b>
  
          </motion.div>
          <motion.div id='date' className='text-[12px] text-gray-400'>
          Period: {exp.period}
          </motion.div>
          <div className='flex w-[100%] justify-center items-center cursor-pointer p-2'>{clickedElement.id ==exp.title?<FaAngleDoubleUp className='text-outcolor' {...clickedElement} id=''></FaAngleDoubleUp>:<FaAngleDoubleDown className='text-outcolor' {...clickedElement} id={exp.title}></FaAngleDoubleDown>}</div>
          </motion.div>
      
        
        </motion.div>
        <motion.div className='bg-incolor border-[2px] border-outcolor rounded-[2px] p-4 mb-4 mt-4 overflow-hidden' id='description' initial={{height:'0px',width:'65ch',opacity:0}} animate={{height:clickedElement.id==exp.title?'180px':'0px',opacity:clickedElement.id==exp.title?1:0}} transition={{duration:0.4}} >
            {exp.description}
  
        </motion.div>
        <div className='bg-outcolor w-[600px] h-[1px] ' id='separator'></div>
        </div>

            )
        })
    }


    return(
        mapExp()
        
      
    )
}
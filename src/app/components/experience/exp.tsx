'use client'
import {motion} from 'motion/react'
import { FaAngleDoubleUp, FaAngleDoubleDown } from 'react-icons/fa'
import ExpDescription from './expconfig'
import { ClickProps } from '@/app/interfaces/interfaces'



export default function ExperienceComp({clickedElement}){

    const mapExp = ()=>{
        return ExpDescription.map((exp)=>{
            return(
<div key={exp.title} className='flex flex-wrap flex-col w-[600px]   p-[40px]'>
                <motion.div key={exp.title}  whileHover={{scale:1.05}} whileInView={{opacity:1}} transition={{duration:0.5}} initial={{opacity:0}} className='flex  items-center justify-center rounded-md gap-6 ' id='ta'>

        
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
          <div className='flex w-[100%] justify-center items-center cursor-pointer pt-4'>{clickedElement.id ==exp.title?<div  {...clickedElement} id='' className=' z-10 w-[100%] flex justify-center'><FaAngleDoubleUp className=' pointer-events-none text-outcolor'></FaAngleDoubleUp></div>:<div className=' z-10 w-[100%] flex justify-center' {...clickedElement} id={exp.title}><FaAngleDoubleDown className=' pointer-events-none text-outcolor' ></FaAngleDoubleDown></div>}</div>
          </motion.div>
      
        
        </motion.div>
        <div className='bg-outcolor w-[600px] h-[1px] mt-6 ' id='separator'></div>

         <motion.div className='w-[600px] bg-incolor border-[2px] border-outcolor rounded-[2px] p-4 mb-2 mt-5  overflow-hidden' id='description' initial={{height:'0px',width:'65ch',opacity:0}} animate={{height:clickedElement.id==exp.title?'180px':'0px',opacity:clickedElement.id==exp.title?1:0}} transition={{duration:0.4}} >
            {exp.description}

  
        </motion.div>
        </div>

            )
        })
    }


    return(
        mapExp()
        
      
    )
}
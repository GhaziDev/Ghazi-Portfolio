'use client'
import useHover from '../hooks/hoverHook'
import {motion} from 'motion/react'
import { FaFileArrowDown } from 'react-icons/fa6'
export default function Header(){
  const hoveredElement = useHover()


    return(
        <div id='headersec' className='flex flex-row flex-nowrap  '>
        <div className="bubbles">
        <div className="bubble"></div>
      <div className="bubble"></div>
      <div className="bubble"></div>
      <div className="bubble"></div>
      <div className="bubble"></div>
      <div className="bubble"></div>
      <div className="bubble"></div>
      <div className="bubble"></div>
      <div className="bubble"></div>
      <div className="bubble"></div>
      
    </div>
          <div id='left' className='flex flex-col flex-wrap gap-5'>
            <div id='fullname' className="flex flex-col flex-wrap text-[70px] ">
              <motion.div initial={{width:'0%'}} animate={{width:'100%'}} transition={{duration:2, delay:2}} id='firstname' className=' bg-box text-selectorcolor pl-5 border-none flex flex-row flex-nowrap relative rounded-[5px] border-[1px]' >
  
                <motion.p className='relative' initial={{left:'-100px', opacity:0}} animate={{left:'0px',opacity:1}} transition={{type:'spring',stifness:200,damp:20,duration:2}}>
                  A
                  </motion.p>
                  <motion.p className='relative' initial={{top:'-100px',opacity:0}} animate={{top:'0px',opacity:1}} transition={{duration:2}}>
                  B
                  </motion.p>
                  <motion.p className='relative' initial={{top:'-100px',opacity:0}} animate={{top:'0px',opacity:1}} transition={{duration:2,delay:0.2}}>
                  C
                  </motion.p>
                  <motion.p className='relative' initial={{top:'-100px',opacity:0}} animate={{top:'0px',opacity:1}} transition={{duration:2,delay:0.3}}>
                  D
                  </motion.p>
                  <motion.p className='relative' initial={{top:'-100px',opacity:0}} animate={{top:'0px',opacity:1}} transition={{duration:2,delay:0.4}}>
                  E
                  </motion.p>
                
              </motion.div>
              <div id='lastname' className="flex">
              <motion.p className='relative' initial={{opacity:0,bottom:'-100px'}} animate={{opacity:1,bottom:'0px'}} transition={{duration:2}}>
                  F
                  </motion.p>
                  <motion.p className='relative' initial={{bottom:'-100px',opacity:0}} animate={{opacity:1,bottom:'0px'}} transition={{duration:2,delay:0.2}}>
                  A
                  </motion.p>
                  <motion.p className='relative' initial={{opacity:0,bottom:'-100px'}} animate={{bottom:'0px',opacity:1}} transition={{duration:2,delay:0.3}}>
                  S
                  </motion.p>
                  <motion.p className='relative' initial={{opacity:0,bottom:'-100px'}} animate={{opacity:1,bottom:'0px'}} transition={{duration:2,delay:0.4}}>
                  A
                  </motion.p>
                  <motion.p className='relative' initial={{bottom:'-100px',opacity:0}} animate={{bottom:'0px',opacity:1}} transition={{duration:2,delay:0.5}}>
                  A
                  </motion.p>
  
                  <motion.p className='relative' initial={{bottom:'-100px',opacity:0}} animate={{opacity:1,bottom:'0px'}} transition={{duration:2,delay:0.6}}>
                  A
                  </motion.p>
                  <motion.p className='relative' initial={{bottom:'-100px',opacity:0}} animate={{bottom:'0px',opacity:1}} transition={{duration:2,delay:0.7}}>
                  N
                  </motion.p>
                  <motion.p className='relative' initial={{right:'-100px',opacity:0}} animate={{right:'0px',opacity:1}} transition={{duration:2,delay:0.8}}>
                  I
                  </motion.p>
                 
  
              </div>
  
            </div>
            <motion.div id='job' className=' gap-1 flex flex-row flex-nowrap '>
              <motion.div className='text-blue-300 overflow-hidden whitespace-nowrap text-[30px]'  initial={{width:0}} animate={{width:'250px'}}
             transition={{duration:2,delay:3}}>Software Engineer</motion.div>
              <motion.div className='w-[2px] h-[40px] bg-slate-100' initial={{opacity:0}} animate={{opacity:1}} transition={{repeat:Infinity,duration:1}}></motion.div>
  
            </motion.div>
            <motion.div id='cvdownload' className='flex'>
  
              <motion.button  transition={{duration:0.22}} {...hoveredElement} id='download'  whileHover={{boxShadow:'5px 5px 4px rgba(0, 255, 255, 0.8)'}} className={` bg-box  border-[1px] border-outcolor rounded-[5px]  text-[20px] gap-3 flex w-[fit] h-[fit] p-3 text-selectorcolor  hover:scale-105   cursor-pointer `}>Download CV<motion.div initial={{opacity:0}} animate={{opacity:hoveredElement.id=='download'?1:0}} transition={{duration:0.5, ease:'linear'}}><FaFileArrowDown size={'30px'}></FaFileArrowDown></motion.div></motion.button>
            </motion.div>
          </div>
          <div id='right'>
  
            <div id='img'>
              IMAGE HERE
            </div>
          </div>
        </div>
    )
}
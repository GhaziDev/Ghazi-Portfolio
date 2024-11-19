'use client';
import Image from "next/image";
import {motion} from 'motion/react'
import { FaFileArrowDown } from "react-icons/fa6";



import {useState} from 'react'



export default function Home() {


  const [isHover, setIsHover] = useState<boolean>(false)
  return (
    <div id='mainpage' className="flex flex-wrap flex-col p-[100px]">
      
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
          <div id='fullname' className="flex flex-col flex-wrap text-[70px]">
            <motion.div id='firstname' className='flex flex-row flex-nowrap relative' >

              <motion.p className='relative' initial={{left:'-1000px', opacity:0}} animate={{left:'0px',opacity:1}} transition={{duration:2}}>
                A
                </motion.p>
                <motion.p className='relative' initial={{top:'-1000px'}} animate={{top:'0px'}} transition={{duration:2.5}}>
                B
                </motion.p>
                <motion.p className='relative' initial={{top:'-1000px'}} animate={{top:'0px'}} transition={{duration:2.6}}>
                C
                </motion.p>
                <motion.p className='relative' initial={{top:'-1000px'}} animate={{top:'0px'}} transition={{duration:2.7}}>
                D
                </motion.p>
                <motion.p className='relative' initial={{top:'-1000px'}} animate={{top:'0px'}} transition={{duration:2.8}}>
                E
                </motion.p>
              
            </motion.div>
            <div id='lastname' className="flex">
            <motion.p className='relative' initial={{bottom:'-1000px'}} animate={{bottom:'0px'}} transition={{duration:2}}>
                F
                </motion.p>
                <motion.p className='relative' initial={{bottom:'-1000px'}} animate={{bottom:'0px'}} transition={{duration:2.5}}>
                A
                </motion.p>
                <motion.p className='relative' initial={{bottom:'-1000px'}} animate={{bottom:'0px'}} transition={{duration:2.6}}>
                S
                </motion.p>
                <motion.p className='relative' initial={{bottom:'-1000px'}} animate={{bottom:'0px'}} transition={{duration:2.7}}>
                A
                </motion.p>
                <motion.p className='relative' initial={{bottom:'-1000px'}} animate={{bottom:'0px'}} transition={{duration:2.8}}>
                A
                </motion.p>

                <motion.p className='relative' initial={{bottom:'-1000px'}} animate={{bottom:'0px'}} transition={{duration:2}}>
                A
                </motion.p>
                <motion.p className='relative' initial={{bottom:'-1000px'}} animate={{bottom:'0px'}} transition={{duration:2.5}}>
                N
                </motion.p>
                <motion.p className='relative' initial={{right:'-2000px'}} animate={{right:'0px'}} transition={{duration:2.6}}>
                I
                </motion.p>
               

            </div>

          </div>
          <motion.div id='job' className=' gap-1 flex flex-row flex-nowrap '>
            <motion.div className='text-blue-300 overflow-hidden whitespace-nowrap text-[30px]'  initial={{width:0}} animate={{width:'250px'}}
           transition={{duration:3}}>Software Engineer</motion.div>
            <motion.div className='w-[2px] h-[40px] bg-slate-100' initial={{opacity:0}} animate={{opacity:1}} transition={{repeat:Infinity,duration:1}}></motion.div>

          </motion.div>
          <motion.div id='cvdownload' className='flex'>

            <button onMouseLeave={()=>{setIsHover(false)}} onMouseEnter={()=>{setIsHover(true)}} className={` text-[20px] gap-3 flex w-[300px] h-[50px] text-slate-50 hover:scale-105 hover:bg-slate-[rgba(3, 85, 145, 0.98)]  cursor-pointer `}>Download CV {isHover?<motion.div initial={{opacity:0}} animate={{opacity:1}} transition={{duration:1.5, ease:'linear'}} exit={{opacity:0}}><FaFileArrowDown size={'30px'}></FaFileArrowDown></motion.div>:null}</button>

          </motion.div>
        </div>
        <div id='right'>
          <div id='img'>
            IMAGE HERE
          </div>
        </div>
      </div>

      <div id='aboutme' className='flex flex-col flex-wrap gap-5'>
        <div id='top' className='text-[60px]'>About Me</div>
        <div id='bottom' className=' text-[20px] font-[Lacquer]'>
          <div id='introduction' className=''>Hello, My name is Ghazi</div>

        </div>

      </div>
    </div>
  );
}

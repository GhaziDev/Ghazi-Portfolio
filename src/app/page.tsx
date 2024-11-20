'use client';
import Image from "next/image";
import {motion} from 'motion/react'
import { FaFileArrowDown } from "react-icons/fa6";
import { FaSquareGithub } from "react-icons/fa6";
import { FaLinkedin } from "react-icons/fa";






import {useState} from 'react'



export default function Home() {

interface Click {
  string:boolean
}
  const [hoverELement, setHoverElement] = useState<string>('')
  const [clickElement,setClickElement] = useState<string>("")
  const controlHover = (e,id:string)=>{
    setHoverElement(e.target.id)
  }

  const controlClick = (e)=>{

    setClickElement(e.target.id)

  }
  return (
    <div id='mainpage' className="flex flex-wrap flex-col p-[100px] gap-[500px] overflow-x-hidden">
      
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

              <motion.p className='relative' initial={{left:'-1000px', opacity:0}} animate={{left:'0px',opacity:1}} transition={{type:'spring',stifness:200,damp:20,duration:2}}>
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

            <button onMouseLeave={()=>{setHoverElement('')}} onMouseEnter={()=>{setHoverElement('download')}} className={` text-[20px] gap-3 flex w-[300px] h-[50px] text-slate-50 hover:scale-105 hover:bg-slate-[rgba(3, 85, 145, 0.98)]  cursor-pointer `}>Download CV<motion.div initial={{opacity:0}} animate={{opacity:hoverELement=='download'?1:0}} transition={{duration:1.5, ease:'linear'}}><FaFileArrowDown size={'30px'}></FaFileArrowDown></motion.div></button>

          </motion.div>
        </div>
        <div id='right'>
          <div id='img'>
            IMAGE HERE
          </div>
        </div>
      </div>

      <motion.div initial={{scale:0.1}} whileInView={{scale:1}} transition={{duration:1,type:'spring',stifness:200, damp:20}} id='aboutme' className='flex flex-row flex-wrap  content-center w-full items-center '>
        <div id='right' className='  relative left-[200px] bottom-[200px] z-[-1] bg-glasscolor w-[350px] h-[350px] text-[60px] p-7 rounded-lg shadow-outcolor shadow-md'><div className=''>About Me</div> <div className=''></div> </div>
        <div id='left' className='text-slate-950 bg-slate-200 w-fit h-[450px] rounded-lg p-7'>
          <div id='introduction' className='text-slate-950 text-[30px] font-cavaet'>Hello, My name is George St-Pierre</div>
       
        <div id="description" className=' w-[60ch] h-[400px] break-words leading-[180%] text-[16px] '>
          I am passionate software engineer, with experience in tech field, 
          In my last job I had worked as a teacher assistant for Auckland University of Technology, 
          where I taught a programming based paper to students in lab sessions, 
          I had an internship before that as a Web Developer for United Nation, 
          where I had to develop an SME-Toolkit website using javascript, php tools like Drupal, HTML and CSS,
           I have experience in full-stack development, 
           as I have developed number of websites using different tools, like node.js, Django, React, Next, HTML, CSS, and Tailwind CSS, in addition to my experience in database both in sql and non-sql such as postgreSQL and MongoDB. I also deploy most of my websites using AWS tools.

           <div id='socialbtns' className='flex gap-10 w-[100%] justify-center items-center'>
          <div onMouseEnter={()=>setHoverElement('linkedin')} onMouseLeave={()=>{setHoverElement('')}} id='linkedinwrapper' className=' cursor-pointer flex bg-incolor rounded box-border border-[1.5px] border-outcolor '><motion.div animate={{rotateY:hoverELement=='linkedin'?'360deg':'0'}} transition={{duration:1.5}}><FaLinkedin size='30'  className='' color='white' ></FaLinkedin></motion.div><motion.button id='linkedin' initial={{width:'0px',height:'30px'}} animate={{width:hoverELement=='linkedin'?'150px':'0px',color:hoverELement=='linkedin'?'white':'transparent'}} transition={{type:'spring', stiffness:200,duration:1.5, damping:10}}  className=' border-solid border-1 bg-incolor border-outcolor rounded-sm flex text-slate-50 pr-4 justify-center items-center text-[12px]'>Visit my LinkedIn</motion.button></div>
          <div onMouseEnter={(e)=>{controlHover(e,'github')}} onMouseLeave={()=>{setHoverElement('')}} id='githubinwrapper' className=' cursor-pointer flex bg-black rounded box-border border-[1.5px] border-black '><motion.div animate={{rotateY:hoverELement=='github'?'360deg':'0'}} transition={{duration:1.5}}><FaSquareGithub size='30'  className='' color='white' ></FaSquareGithub></motion.div><motion.button id='github' initial={{width:'0px',height:'30px'}} animate={{width:hoverELement=='github'?'150px':'0px',color:hoverELement=='github'?'white':'transparent'}} transition={{type:'spring', stiffness:200,duration:1.5, damping:10}}  className=' border-solid border-1 bg-black border-black rounded-sm flex text-slate-50 pr-4 justify-center items-center text-[12px]'>Visit my Github</motion.button></div>
        </div>

        </div>

        </div>

      </motion.div>

      <motion.div className='fonts-serif' id='expsec'>

      <motion.div  whileInView={{scale:1}} transition={{duration:1.5, type:'spring',stiffness:100,damp:10,bounce:10}} initial={{scale:0.01}} id='exptitle' className='text-[60px] font-serif'>Experience</motion.div>
      <div id='innerwrapper' className='flex flex-col flex-wrap gap-6 justify-center items-center pt-[100px] '>
      
      <motion.div whileHover={{scale:1.03}} whileInView={{opacity:1}} transition={{duration:1}} initial={{opacity:0}} className='flex rounded-md gap-5 ' id='ta'>
        <motion.div className='bg-slate-50 p-[10px] rounded-md h-fit w-fit' id='left'>
          <img   className=' w-[40px] h-[40px] rounded-md'  src='/images/AUT.png' alt='ta'></img>
        </motion.div>
        <motion.div id='right' className=' '>
        <motion.div id='title' className='text-[16px]'>
          Teacher Assistant at <b>Auckland Univeristy of Technology</b>

        </motion.div>
        <motion.div id='date' className='text-[12px] text-gray-400'>
        Period: July 2023 - November 2023

        </motion.div>

        </motion.div>
      </motion.div>
      <div className='bg-gray-500 w-[500px] h-[1px]' id='separator'></div>
      <motion.div id='description' initial={{height:0,width:200}} >
        As a teacher assistant I was responsible for teaching students the correct approaches to solve problems, in addition to help TA's peers and the lecturer to provide seamless educational experience to all students. I was also responsible for grading students assignments.

      </motion.div>
      </div>
      <motion.div></motion.div>
      <motion.div></motion.div>
      </motion.div>
    </div>
  );
}

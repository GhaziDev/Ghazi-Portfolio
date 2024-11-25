'use client';
import Image from "next/image";
import {motion} from 'motion/react'
import { FaFileArrowDown } from "react-icons/fa6";
import { FaSquareGithub } from "react-icons/fa6";
import { FaLinkedin } from "react-icons/fa";
import { FaAngleDoubleUp } from "react-icons/fa";
import { FaAngleDoubleDown } from "react-icons/fa";
import { CiServer } from "react-icons/ci";
import { SiNextui } from "react-icons/si";
import { GoStack } from "react-icons/go";
import { PiRobot } from "react-icons/pi";
import { FaLongArrowAltDown } from "react-icons/fa";
import { TbBrandTypescript } from "react-icons/tb";
import { FaReact } from "react-icons/fa";
import { TbBrandDjango } from "react-icons/tb";
import { RiNextjsLine } from "react-icons/ri";
import { AiOutlinePython } from "react-icons/ai";
import { RiTailwindCssLine } from "react-icons/ri";
import { TbBrandAws } from "react-icons/tb";
import { PiFileSqlThin } from "react-icons/pi";








import {useState} from 'react'
import Link from "next/link";
import AboutMe from "./sections/aboutme";
import Experience from "./sections/experience";



export default function Home() {

interface Click {
  string:boolean
}
  const [hoverELement, setHoverElement] = useState<string>('')
  const [clickElement,setClickElement] = useState<string>("")
  const controlHover = (id:string)=>{
    setHoverElement(id)
  }
  const controlHoverx = (e)=>{
    setHoverElement(e.target.id)
  }

  const controlClick = (id:string)=>{
    console.log(id)

    setClickElement(id)
    console.log(clickElement)


  }
  const controlClickx = (e)=>{
    setClickElement(e.target.id)
  }
  return (
    <div id='mainpage' className="  flex flex-wrap flex-col p-[100px] gap-[500px] overflow-hidden ">
      
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
            <motion.div initial={{width:'0%'}} animate={{width:'100%'}} transition={{duration:2, delay:2}} id='firstname' className=' bg-incolor pl-5 flex flex-row flex-nowrap relative rounded-[2%] border-[1px] border-outcolor' >

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

            <motion.button onMouseLeave={()=>{setHoverElement('')}} transition={{duration:0.22}} onMouseEnter={()=>{setHoverElement('download')}} initial={{background:'transparent'}} whileHover={{background:'rgba(3, 85, 145, 0.98)',boxShadow:'10px 10px 2px rgba(58, 147, 211, 0.98)'}} className={` border-[1px] border-outcolor  text-[20px] gap-3 flex w-[fit] h-[fit] p-3 text-slate-50 hover:scale-105 hover:bg-slate-[rgba(3, 85, 145, 0.98)]  cursor-pointer `}>Download CV<motion.div initial={{opacity:0}} animate={{opacity:hoverELement=='download'?1:0}} transition={{duration:0.5, ease:'linear'}}><FaFileArrowDown size={'30px'}></FaFileArrowDown></motion.div></motion.button>

          </motion.div>
        </div>
        <div id='right'>

          <div id='img'>
            IMAGE HERE
          </div>
        </div>
      </div>
      <AboutMe></AboutMe>

      <motion.div className='fonts-serif' id='expsec'>

      <motion.div  whileInView={{opacity:1, left:'0px'}} transition={{duration:1.5, type:'spring',stiffness:100,damp:10,bounce:0.1}} initial={{opacity:0,left:'-100px'}} id='exptitle' className=' relative text-[60px] font-serif'>Experience</motion.div>
      <div id='expwrapper' className='flex flex-col flex-wrap gap-6 justify-center items-center pt-[300px] '>
      
      <motion.div  whileHover={{scale:1.03}} whileInView={{opacity:1}} transition={{duration:1}} initial={{opacity:0}} className='flex rounded-md gap-6 w-[600px] ' id='ta'>
        <motion.div className='bg-slate-50 p-[10px] rounded-md h-fit w-fit' id='left'>
          <img   className=' w-[40px] h-[40px] rounded-md'  src='/images/AUT.png' alt='ta'></img>
        </motion.div>
        <motion.div id='right' className='w-[600px]'>
        <motion.div id='title' className='text-[16px]'>
          Teacher Assistant at <b>Auckland Univeristy of Technology</b>

        </motion.div>
        <motion.div id='date' className='text-[12px] text-gray-400'>
        Period: July 2023 - November 2023

        </motion.div>
        <div className='flex w-[100%] justify-center items-center cursor-pointer pt-4'>{clickElement =='ta'?<FaAngleDoubleUp className='text-outcolor' onClick={()=>{controlClick('')}}></FaAngleDoubleUp>:<FaAngleDoubleDown className='text-outcolor' onClick={()=>controlClick('ta')}></FaAngleDoubleDown>}</div>
        </motion.div>
        
      </motion.div>
      <div className='bg-outcolor w-[600px] h-[1px]' id='separator'></div>
      <motion.div className='bg-incolor border-[2px] border-outcolor rounded-[2px] p-4 overflow-hidden' id='description' initial={{height:'0px',width:'65ch',opacity:0}} animate={{height:clickElement=='ta'?'180px':'0px',opacity:clickElement=='ta'?1:0}} transition={{duration:1}} >
        As a teacher assistant I was responsible for teaching students the correct approaches to solve problems, in addition to help TA's peers and the lecturer to provide seamless educational experience to all students. I was also responsible for grading students assignments.

      </motion.div>


      <motion.div  whileHover={{scale:1.03}} whileInView={{opacity:1}} transition={{duration:1}} initial={{opacity:0}} className='flex rounded-md gap-6 w-[600px] ' id='wd'>
        <motion.div className='bg-slate-50 p-[10px] rounded-[2px] h-fit w-fit' id='left'>
          <img   className=' w-[40px] h-[40px] rounded-md'  src='/images/un.png' alt='un'></img>
        </motion.div>
        <motion.div id='right' className=' w-[600px]'>
        <motion.div id='title' className='text-[16px]'>
          Web Developr at <b>United Nations-ESCWA</b>

        </motion.div>
        <motion.div id='date' className='text-[12px] text-gray-400'>
        Period: July 2020 - October 2020

        </motion.div>
        <div className='flex w-[100%] justify-center items-center cursor-pointer pt-4'>{clickElement =='wd'?<FaAngleDoubleUp className='text-outcolor' onClick={()=>{controlClick('')}}></FaAngleDoubleUp>:<FaAngleDoubleDown className='text-outcolor' onClick={()=>controlClick('wd')}></FaAngleDoubleDown>}</div>
        </motion.div>
        
      </motion.div>
      <div className='bg-outcolor w-[600px] h-[1px]' id='separator'></div>
      <motion.div className='bg-incolor rounded-[2px] border-[2px] border-outcolor  p-4 overflow-hidden' id='description' initial={{height:'0px',width:'65ch',opacity:0}} animate={{height:clickElement=='wd'?'180px':'0px',opacity:clickElement=='wd'?1:0}} transition={{duration:1}} >
        As a Web Developer, I worked with a proffesional team to develop an SME-Toolkit website using variety of tools such as Javascript, PHP, HTML, and CSS. In addition to meeting with clients on weekly basis to get feedback and requirements for the project. Throughout this job, Agile methodology has been utilized for project planning and task making.

      </motion.div>


      <motion.div  whileHover={{scale:1.03}} whileInView={{opacity:1}} transition={{duration:1}} initial={{opacity:0}} className='flex rounded-md gap-6 w-[600px] ' id='sa'>
        <motion.div className='bg-slate-50 p-[10px] rounded-md h-fit w-fit' id='left'>
          <img   className=' w-[40px] h-[40px] rounded-md'  src='/images/AUT.png' alt='aut'></img>
        </motion.div>
        <motion.div id='right' className=' w-[600px]'>
        <motion.div id='title' className='text-[16px]'>
          Student Ambassador at <b>Auckland University of Technology</b>

        </motion.div>
        <motion.div id='date' className='text-[12px] text-gray-400'>
        Period: July 2023 - July 2024

        </motion.div>
        <div className='flex w-[100%] justify-center items-center cursor-pointer pt-4'>{clickElement =='sa'?<FaAngleDoubleUp className='text-outcolor' onClick={()=>{controlClick('')}}></FaAngleDoubleUp>:<FaAngleDoubleDown className='text-outcolor' onClick={()=>controlClick('sa')}></FaAngleDoubleDown>}</div>
        </motion.div>
        
      </motion.div>

      <div className='bg-outcolor w-[600px] h-[1px]' id='separator'></div>
      <motion.div className='bg-incolor border-[2px] border-outcolor rounded-[2px] p-4 overflow-hidden' id='description' initial={{height:'0px',width:'65ch',opacity:0}} animate={{height:clickElement=='sa'?'180px':'0px',opacity:clickElement=='sa'?1:0}} transition={{duration:1}} >
        As a Student Ambassador, I was tasked to help students during their first day at the university, from leading them to their destinations, to helping them with study materials, also, collaborated with fellow ambassadors and seniors to organize events, in addition to demonstrating effective communication and team-work. 
      </motion.div>

      
      </div>


      
      </motion.div>

      <div>TEST SECTION UNDERNEATH</div>
      <Experience></Experience>

      <motion.div className='' id='projectsec'>
      <motion.div  whileInView={{opacity:[0.2,0.4,0.6,0.8,1],left:['-80px','-60px','-40px','-20px','0px']}} transition={{duration:0.7}} initial={{opacity:0,left:'-100px'}} id='projecttitle' className='relative text-[60px] font-serif'>Project</motion.div>

      <div id='projectWrapper' className='flex gap-5 justify-center items-center flex-wrap pt-[350px]'>
        <motion.div  whileInView={{opacity:1,left:'0px'}} initial={{opacity:0,left:'-100px'}} transition={{delay:0.2,duration:1.5,type:'spring',bounce:5, stiffness:100,damp:20}} id='project1'  className='flex flex-col flex-wrap items-center justify-center gap-5 p-2 relative w-[350px] h-[350px] rounded-md border-[2px] border-outcolor hover:bg-incolor cursor-pointer'>
          <div id='icon'><CiServer size='170' color='#3a93d3fa' ></CiServer></div>
          
          <div id='title' className='text-[20px] '>Backend Project</div>

          <div id='stack' className='flex gap-5 flex-wrap justify-center'>
            <div className=' pt-1 text-center align-middle text-[12px] w-[70px] h-[30px] bg-[#6cc24a] text-slate-50 rounded-sm'>Node.ts</div>
            <div className=' pt-1 text-[12px] text-center align-middle w-[70px] h-[30px] bg-[#3178C6] text-slate-50 rounded-sm'>Typescript</div>
            <div className='pt-1 text-[12px] text-center align-middle w-[70px] h-[30px] bg-[#646cff] text-slate-50 rounded-sm'>Vite</div>
            <div className='pt-1 text-[12px] text-center align-middle w-[70px] h-[30px] bg-black text-slate-50 rounded-sm'>Express</div>
            <div className=' pt-1 text-[12px] text-center align-middle w-[70px] h-[30px] bg-[#336791] text-slate-50 rounded-sm'>Postgres</div>
          </div>


        </motion.div>

        <motion.div   whileInView={{opacity:1,left:'0px'}} initial={{opacity:0,left:'-100px'}} transition={{duration:1.5,delay:0.3,type:'spring',bounce:5, stiffness:100,damp:20}} id='project1'  className='flex flex-col flex-wrap items-center justify-center gap-5 p-2 relative w-[350px] h-[350px] rounded-md border-[2px] border-outcolor hover:bg-incolor cursor-pointer'>
          <div id='icon'><SiNextui size='170' color='#3a93d3fa' ></SiNextui></div>
          

          <div id='title' className='text-[20px] '>Frontend Project</div>

          <div id='stack' className='flex gap-5 flex-wrap justify-center'>
            <div className=' pt-1 text-[12px] text-center align-middle w-[70px] h-[30px] bg-[#3178C6] text-slate-50 rounded-sm'>Typescript</div>
            <div className='pt-1 text-[12px] text-center align-middle w-[70px] h-[30px] bg-[#646cff] text-slate-50 rounded-sm'>Vite</div>
            <div className='pt-1 text-[12px] text-center align-middle w-[70px] h-[30px] bg-black text-slate-50 rounded-sm'>Next</div>
            <div className='pt-1 text-[12px] text-center align-middle w-[70px] h-[30px] bg-[#61dafb] text-slate-50 rounded-sm'>React</div>
            <div className='pt-1 text-[12px] text-center align-middle w-[70px] h-[30px] bg-[#FF9900] text-slate-50 rounded-sm'>AWS</div>
          </div>


        </motion.div>
        
        <motion.div whileHover={{boxShadow:'10px 10px 2px red'}}  whileInView={{opacity:1,left:'0px'}} initial={{opacity:0,left:'-100px'}} transition={{duration:1,delay:0.5,type:'spring',bounce:5, stiffness:100,damp:20}} id='project1'  className='flex flex-col flex-wrap items-center justify-center gap-5 p-2 relative w-[350px] h-[350px] rounded-md border-[2px] border-outcolor hover:bg-incolor cursor-pointer'>
          <div id='icon'><GoStack size='170' color='#3a93d3fa' ></GoStack></div>
          

          <div id='title' className='text-[20px] '>Fullstack Project</div>

          <div id='stack' className='flex gap-5 flex-wrap justify-center'>
          <div className=' pt-1 text-[12px] text-center align-middle w-[70px] h-[30px] bg-[#3178C6] text-slate-50 rounded-sm'>Javascript</div>
            <div className='pt-1 text-[12px] text-center align-middle w-[70px] h-[30px] bg-black text-slate-50 rounded-sm'>Next</div>
            <div className='pt-1 text-[12px] text-center align-middle w-[70px] h-[30px] bg-[#61dafb] text-slate-50 rounded-sm'>React</div>
            <div className='pt-1 text-[12px] text-center align-middle w-[70px] h-[30px] bg-[#FF9900] text-slate-50 rounded-sm'>AWS</div>
            <div className=' pt-1 text-[12px] text-center align-middle w-[70px] h-[30px] bg-[#092E20] text-slate-50 rounded-sm'>Django</div>
            <div className=' pt-1 text-[12px] text-center align-middle w-[70px] h-[30px] bg-[#336791] text-slate-50 rounded-sm'>Postgres</div>
          </div>


        </motion.div>
        
        <motion.div  whileInView={{opacity:1,left:'0px'}} initial={{opacity:0,left:'-100px'}} transition={{duration:1.5,delay:0.6,type:'spring',bounce:5, stiffness:100,damp:20}} id='project1'  className='flex flex-col flex-wrap items-center justify-center gap-5 p-2 relative w-[350px] h-[350px] rounded-md border-[2px] border-outcolor hover:bg-incolor cursor-pointer'>
          <div id='icon'><PiRobot size='170' color='#3a93d3fa' ></PiRobot></div>
          
          <div id='title' className='text-[20px] '>AI Project</div>

          <div id='stack' className='flex gap-5 flex-wrap justify-center'>
          <div className=' pt-1 text-[12px] text-center align-middle w-[70px] h-[30px] bg-[#FFD43B] text-slate-50 rounded-sm'>Python</div>
            <div className='pt-1 text-[12px] text-center align-middle w-[70px] h-[30px] bg-[#150458] text-slate-50 rounded-sm'>Pandas</div>
            <div className='pt-1 text-[12px] text-center align-middle w-[70px] h-[30px] bg-[#61dafb] text-slate-50 rounded-sm'>React</div>
            <div className='pt-1 text-[12px] text-center align-middle w-[70px] h-[30px] bg-[#FF6F00] text-slate-50 rounded-sm'>Tensorflow</div>
            <div className=' pt-1 text-[12px] text-center align-middle w-[70px] h-[30px] bg-[#EA4335] text-slate-50 rounded-sm'>BERT</div>
          </div>


        </motion.div>
      </div>

      </motion.div>

      <motion.div id='skillsec' className='flex flex-col flex-wrap gap-5 p-5'>
      <motion.div id='title' className=''>Skills</motion.div>

      <div className='flex justify-center items-center w-[100%]'>
      <motion.div id='skills' className=' grid grid-cols-[repeat(6,0fr)] '>
        
      <motion.div  onClick={(e)=>controlClickx(e)} animate={{width:clickElement=='nextskill'?'300px':'140px',zIndex:clickElement=='nextskill'?3:0}} whileTap={{scale:0.9, borderBottom:'0px'}} onMouseEnter={(e)=>controlHoverx(e)} onMouseLeave={(e)=>controlHoverx(e)} whileHover={{width:'300px'}}  id='nextskill' className={` pt-4 col-start-1 col-end-4 row-start-1 row-end-1 bg-incolor relative  justify-center items-center flex flex-row flex-wrap gap-2 w-[140px] h-[140px] border-t-[1px] rounded-tl-[5px] rounded-tr-[5px]  border-r-[1px] border-l-[1px] border-b-[0px]  border-outcolor`}>
        
      <div ><RiNextjsLine size='40px'></RiNextjsLine></div>
      <div >Next</div>

      <motion.div id='nextskilldesc' className=' bg-incolor border-[1px] border-r-outcolor border-l-outcolor border-b-[1px] border-b-outcolor border-t-[0px] p-4 ' initial={{width:'300px',height:'0px',opacity:0}}  animate={{opacity:clickElement=='nextskill'?1:0,height:clickElement=='nextskill'?'300px':'0px'}} transition={{duration:0.7,}}>
        I decided to get into Next framework when I realised I needed a powerful tool for server side rendering, and to make a full-stack application in one place.
        <FaAngleDoubleUp onClick={(e)=>controlClickx(e)} className='text-outcolor'></FaAngleDoubleUp>
      </motion.div>

      </motion.div>

   

      <motion.div onClick={(e)=>controlClickx(e)} animate={{width:clickElement=='tskill'?'300px':'140px',zIndex:clickElement=='tskill'?3:0}} whileTap={{scale:0.9, borderBottom:'0px'}} onMouseEnter={(e)=>controlHoverx(e)} onMouseLeave={(e)=>controlHoverx(e)} whileHover={{width:'300px'}}  id='tskill' className={` pt-4 col-start-3 col-end-6 row-start-1 row-end-1 bg-incolor relative  justify-center items-center flex flex-row flex-wrap gap-2 w-[140px] h-[140px] border-t-[1px] rounded-tl-[5px] rounded-tr-[5px]  border-r-[1px] border-l-[1px] border-b-[0px]  border-outcolor`}>
        
        <div ><TbBrandTypescript size='40px'></TbBrandTypescript></div>
        <div >Typescript</div>
        <motion.div id='tskilldesc' className='bg-incolor border-[1px] border-r-outcolor border-l-outcolor border-b-[1px] border-b-outcolor border-t-[0px] p-4 ' initial={{width:'300px',height:'0px',opacity:0}}  animate={{opacity:clickElement=='tskill'?1:0,height:clickElement=='tskill'?'300px':'0px'}} transition={{duration:0.7,}}>
          I decided to get into Next framework when I realised I needed a powerful tool for server side rendering, and to make a full-stack application in one place.
          <FaAngleDoubleUp onClick={(e)=>controlClickx(e)} className='text-outcolor'></FaAngleDoubleUp>
        </motion.div>

  
        </motion.div>
  
        
        
        <motion.div onClick={(e)=>controlClickx(e)} animate={{width:clickElement=='reactskill'?'300px':'140px',zIndex:clickElement=='reactskill'?3:0}} whileTap={{scale:0.9, borderBottom:'0px'}} onMouseEnter={(e)=>controlHoverx(e)} onMouseLeave={(e)=>controlHoverx(e)} whileHover={{width:'300px'}}  id='reactskill' className={` pt-4 col-start-5 col-end-8 row-start-1 row-end-1 bg-incolor relative  justify-center items-center flex flex-row flex-wrap gap-2 w-[140px] h-[140px] border-t-[1px] rounded-tl-[5px] rounded-tr-[5px]  border-r-[1px] border-l-[1px] border-b-[0px]  border-outcolor`}>
        
        <div ><FaReact size='40px'></FaReact></div>
        <div >React</div>
        <motion.div id='reactskilldesc' className='bg-incolor border-[1px] border-r-outcolor border-l-outcolor border-b-[1px] border-b-outcolor border-t-[0px] p-4 ' initial={{width:'300px',height:'0px',opacity:0}}  animate={{opacity:clickElement=='reactskill'?1:0,height:clickElement=='reactskill'?'300px':'0px'}} transition={{duration:0.7,}}>
          I decided to get into Next framework when I realised I needed a powerful tool for server side rendering, and to make a full-stack application in one place.
          <FaAngleDoubleUp onClick={(e)=>controlClickx(e)} className='text-outcolor'></FaAngleDoubleUp>
        </motion.div>
  
        </motion.div>
  
        
        
        <motion.div onClick={(e)=>controlClickx(e)} animate={{width:clickElement=='awskill'?'300px':'140px',zIndex:clickElement=='awskill'?3:0}} whileTap={{scale:0.9, borderBottom:'0px'}} onMouseEnter={(e)=>controlHoverx(e)} onMouseLeave={(e)=>controlHoverx(e)} whileHover={{width:'300px'}}  id='awskill' className={` pt-4 col-start-7 col-end-10 row-start-1 row-end-1 bg-incolor relative  justify-center items-center flex flex-row flex-wrap gap-2 w-[140px] h-[140px] border-t-[1px] rounded-tl-[5px] rounded-tr-[5px]  border-r-[1px] border-l-[1px] border-b-[0px]  border-outcolor`}>
        
        <div ><TbBrandAws size='40px'></TbBrandAws></div>
        <div >AWS</div>
        <motion.div id='awskilldesc' className='bg-incolor border-[1px] border-r-outcolor border-l-outcolor border-b-[1px] border-b-outcolor border-t-[0px] p-4 ' initial={{width:'300px',height:'0px',opacity:0}}  animate={{opacity:clickElement=='awskill'?1:0,height:clickElement=='awskill'?'300px':'0px'}} transition={{duration:0.7,}}>
          I decided to get into Next framework when I realised I needed a powerful tool for server side rendering, and to make a full-stack application in one place.
          <FaAngleDoubleUp onClick={(e)=>controlClickx(e)} className='text-outcolor'></FaAngleDoubleUp>
        </motion.div>
        </motion.div>
  
        
        

      <motion.div onClick={(e)=>controlClickx(e)} animate={{width:clickElement=='twskill'?'300px':'140px',zIndex:clickElement=='twskill'?3:0}} whileTap={{scale:0.9, borderBottom:'0px'}} onMouseEnter={(e)=>controlHoverx(e)} onMouseLeave={(e)=>controlHoverx(e)} whileHover={{width:'300px'}}  id='twskill' className={` pt-4 col-start-8 col-end-11 row-start-1 row-end-1 bg-incolor relative  justify-center items-center flex flex-row flex-wrap gap-2 w-[140px] h-[140px] border-t-[1px] rounded-tl-[5px] rounded-tr-[5px]  border-r-[1px] border-l-[1px] border-b-[0px]  border-outcolor`}>
        
      <div ><RiTailwindCssLine size='40px'></RiTailwindCssLine></div>
      <div >Tailwind</div>
      <motion.div id='twskilldesc' className='bg-incolor border-[1px] border-r-outcolor border-l-outcolor border-b-[1px] border-b-outcolor border-t-[0px] p-4 ' initial={{width:'300px',height:'0px',opacity:0}}  animate={{opacity:clickElement=='twskill'?1:0,height:clickElement=='twskill'?'300px':'0px'}} transition={{duration:0.7,}}>
        I decided to get into Next framework when I realised I needed a powerful tool for server side rendering, and to make a full-stack application in one place.
        <FaAngleDoubleUp onClick={(e)=>controlClickx(e)} className='text-outcolor'></FaAngleDoubleUp>
      </motion.div>

      </motion.div>

      
     

      <motion.div onClick={(e)=>controlClickx(e)} animate={{width:clickElement=='sqlskill'?'300px':'140px',zIndex:clickElement=='twskill'?3:0}} whileTap={{scale:0.9, borderBottom:'0px'}} onMouseEnter={(e)=>controlHoverx(e)} onMouseLeave={(e)=>controlHoverx(e)} whileHover={{width:'300px'}}  id='sqlskill' className={` pt-4 col-start-10 col-end-13 row-start-1 row-end-1 bg-incolor relative  justify-center items-center flex flex-row flex-wrap gap-2 w-[140px] h-[140px] border-t-[1px] rounded-tl-[5px] rounded-tr-[5px]  border-r-[1px] border-l-[1px] border-b-[0px]  border-outcolor`}>
        
      <div ><PiFileSqlThin size='40px'></PiFileSqlThin></div>
      <div >SQL</div>
      <motion.div id='sqlskilldesc' className='bg-incolor border-[1px] border-r-outcolor border-l-outcolor border-b-[1px] border-b-outcolor border-t-[0px] p-4 ' initial={{height:'0px',opacity:0,width:'300px'}}  animate={{opacity:clickElement=='sqlskill'?1:0,height:clickElement=='sqlskill'?'300px':'0px'}} transition={{duration:0.7,}}>
        I decided to get into Next framework when I realised I needed a powerful tool for server side rendering, and to make a full-stack application in one place.
        <FaAngleDoubleUp onClick={(e)=>controlClickx(e)} className='text-outcolor'></FaAngleDoubleUp>
      </motion.div>

      </motion.div>
  


      
      


      </motion.div>
      </div>
      </motion.div>
    </div>
  );
}

'use client';
import {motion, useInView,inView} from 'motion/react'
import { FaFileArrowDown } from "react-icons/fa6";
import { createContext, useRef, } from 'react';







import {useState,useEffect} from 'react'
import Link from "next/link";
import AboutMe from "./sections/aboutme";
import Experience from "./sections/experience";
import Projects from "./sections/projects";
import Footer from "./sections/footer";
import Skill from "./sections/skills";
import Navigation, { NavWrapper, Wrapper } from './sections/nav';
import Blogs from './sections/blogs';


const SecId = createContext('')


export default function Home() {

  const [hoverELement, setHoverElement] = useState<string>('')
  const [id,setId] = useState<string|''>('')
 
  const aboutMeRef = useRef(null)
  const expRef = useRef(null)
  const proRef = useRef(null)
  const skillsRef = useRef(null)
  const headerRef = useRef(null)
  const blogRef = useRef(null)

  const isAboutMeInView = useInView(aboutMeRef)
  const expInView = useInView(expRef)
  const proInView = useInView(proRef)
  const skillsInView = useInView(skillsRef)
  const headerInView = useInView(headerRef)
  const blogInView = useInView(blogRef)


  useEffect(()=>{
    if(isAboutMeInView){
      setId(aboutMeRef?.current?.id)


    }

    if(expInView){
      setId(expRef?.current?.id)
    }

    if(proInView){
      setId(proRef?.current?.id)
    }
    if(skillsInView){
      setId(skillsRef?.current?.id)
    }

    if(headerInView){
      setId('headersec')
    }

    if(blogInView){
    setId(blogRef?.current?.id)
    }
  },[isAboutMeInView, expInView,proInView, skillsInView,headerInView,blogInView])



  return (

    <SecId.Provider value={id}>
      <Navigation></Navigation>
    <div id='mainpage' className="  flex flex-wrap flex-col p-[100px] gap-[500px] overflow-hidden ">
         
      
      <div id='headersec' ref={headerRef} className='flex flex-row flex-nowrap  '>
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
      <div></div>
      <motion.div
      ref={aboutMeRef}
      initial={{ opacity: 0, bottom: "-50px" }}
      whileInView={{ opacity: 1, bottom: "0px" }}
      transition={{ duration: 1 }}
      id="aboutme"
      className="relative  flex flex-row flex-wrap  content-center w-full items-center "
    >
      <motion.div

      initial={{bottom:'150px'}}
        whileInView={{ boxShadow: "10px 10px 2px rgba(58, 147, 211, 0.98)" ,bottom:'200px'}}
        transition={{ duration: 0.5, delay: 0.4 }}
        id="right"
        className=" relative left-[200px]  z-[-1] border-[2px] border-outcolor bg-incolor w-[350px] h-[350px] text-[60px] p-7 rounded-sm"
      >
        <div className="">About Me</div> <div className=""></div>{" "}
      </motion.div>
      <AboutMe></AboutMe>
      </motion.div>

      <motion.div ref={expRef} className='fonts-serif' id='expsec'>
      <motion.div  whileInView={{opacity:1, left:'0px'}} transition={{duration:1.5, type:'spring',stiffness:100,damp:10,bounce:0.1}} initial={{opacity:0,left:'-100px'}} id='exptitle' className=' relative text-[60px] font-serif'>Experience</motion.div>

      <Experience></Experience>
      </motion.div>

  
      <motion.div ref={proRef} className='' id='projectsec'>

      <motion.div  whileInView={{opacity:1,left:'0px'}} transition={{duration:0.8}} initial={{opacity:0,left:'-200px'}} id='projecttitle' className='relative text-[60px] font-serif'>Projects</motion.div>
      <Projects></Projects>
      </motion.div>
      <motion.div ref={skillsRef} id='skillsec' className='flex flex-col flex-wrap gap-5 p-5'>
       <motion.div  whileInView={{opacity:1,left:'0px'}} transition={{duration:0.8}} initial={{opacity:0,left:'-200px'}} id='projecttitle' className='relative text-[60px] font-serif'>Skills</motion.div>

      <Skill></Skill>
      </motion.div>


      <motion.div ref={blogRef} className='' id='blogsec'>

<motion.div  whileInView={{opacity:1,left:'0px'}} transition={{duration:0.8}} initial={{opacity:0,left:'-200px'}} id='blogtitle' className='relative text-[60px] font-serif'>Blogs</motion.div>
<Blogs></Blogs>
</motion.div>

      <Footer></Footer>
    </div>
    </SecId.Provider>
  );
}

export {SecId}
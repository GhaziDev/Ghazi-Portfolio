'use client'
import { cloneElement, createContext, useContext, useEffect, useRef, useState } from "react";
import { useInView } from "motion/react";
import {motion} from 'motion/react'

import AboutMe from "./aboutme";
import Experience from "./experience";
import Projects from "./projects";
import Skill from "./skills";
import Blogs, { PageContext } from "./blogs";
import Footer from "./footer";
import Navigation from "./nav";
import Header from "./header";
export const NavContext = createContext('')


export default function MainPage({children}:{children:React.Node}){
    const [id,setId] = useState<string>('')
    const aboutMeRef = useRef(null)
    const expRef = useRef(null)
    const proRef = useRef(null)
    const skillsRef = useRef(null)
    const blogsRef = useRef(null)
    
    const aboutMeView = useInView(aboutMeRef)
    const expInView = useInView(expRef)
    const proInView = useInView(proRef)
    const skillsInView = useInView(skillsRef)
    const blogsInView = useInView(blogsRef)


    useEffect(()=>{
        if(aboutMeView){
            setId('aboutme')
        }
        else if(expInView){
            console.log('expref')
            setId('expsec')
        }

        else if(proInView){
            setId('projectsec')
        }
        else if(skillsInView){
            setId('skillsec')
        }
        else if(blogsInView){
            setId('blogsec')
        }

        else{
            setId('')
        }

    },[aboutMeView,expInView,proInView,skillsInView,blogsInView,id])




    return(
        <NavContext.Provider value={id}>
            <Navigation></Navigation>

            <div id='mainpage' className="  flex flex-wrap flex-col p-[100px] gap-[500px] overflow-hidden ">

           <Header></Header>    

<motion.div


initial={{ opacity: 0, bottom: "-150px" }}
whileInView={{ opacity: 1, bottom: "0px" }}
transition={{ duration: 1 }}
id="aboutme"
className="relative  flex flex-row flex-wrap  content-center w-full items-center z-[3] "
ref={aboutMeRef}


>
<motion.div

initial={{bottom:'150px'}}
  whileInView={{ boxShadow: "6px 6px 4px rgba(0, 255, 255, 0.8)" ,bottom:'200px'}}
  transition={{ duration: 0.5, delay: 0.4 }}
  id="right"
  className=" text-selectorcolor relative left-[200px]  z-[-1] border-[1px] border-outcolor bg-black w-[350px] h-[350px] text-[60px] p-5 rounded-[5px]"
>
  <div className="">About Me</div> <div className=""></div>{""}
</motion.div>

      <AboutMe ></AboutMe>
    </motion.div>



    <motion.div className='fonts-serif' id='expsec' ref={expRef}>
    <motion.div  whileInView={{opacity:1, left:'0px'}} transition={{duration:1.5, type:'spring',stiffness:100,damp:10,bounce:0.1}} initial={{opacity:0,left:'-100px'}} id='exptitle' className=' relative text-[60px] font-serif'>Experience</motion.div>
    <Experience ></Experience>
    </motion.div>
    

    <motion.div  className='' id='projectsec' ref={proRef}>

<motion.div  whileInView={{opacity:1,left:'0px'}} transition={{duration:0.8}} initial={{opacity:0,left:'-200px'}} id='projecttitle' className='relative text-[60px] font-serif'>Projects</motion.div>
    <Projects ></Projects>
    </motion.div>

    <motion.div  id='skillsec' className='flex flex-col flex-wrap gap-5 p-5' ref={skillsRef}>
       <motion.div  whileInView={{opacity:1,left:'0px'}} transition={{duration:0.8}} initial={{opacity:0,left:'-200px'}} id='projecttitle' className='relative text-[60px] pb-[200px] font-serif'>Skills</motion.div>
    <Skill ></Skill>
    </motion.div>



    <motion.div ref={blogsRef}  className='' id='blogsec'>


<motion.div  whileInView={{opacity:1,left:'0px'}} transition={{duration:0.8}} initial={{opacity:0,left:'-200px'}} id='blogtitle' className='relative text-[60px] font-serif pb-[200px]'>Blogs</motion.div>
{children}

   


</motion.div>



    <Footer></Footer>
    </div>
    


        </NavContext.Provider>
    )
}
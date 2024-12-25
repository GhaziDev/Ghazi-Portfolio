'use client'
import {  createContext,useEffect, useRef, useState } from "react";
import { useInView } from "motion/react";
import {motion} from 'motion/react'

import AboutMe from "./aboutme";
import Experience from "./experience/experience";
import Projects from "./projects/projects";
import Skill from "./skills/skills";
import Footer from "./footer";
import Navigation from "./nav";
import Header from "./header/header";
import SectionFadeIn from "../UI/fadeInWrapper";
import { RightArrow } from "../UI/sketchArrows";
export const NavContext = createContext('')


export default function MainPage({children}:{children:React.ReactNode}){
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


initial={{ opacity: 0, scale:0}}
whileInView={{ opacity: 1, scale:1}}
transition={{ duration: 0.6 }}
id="aboutme"
className="relative  flex flex-row flex-wrap  content-center w-full items-center z-[3] "
ref={aboutMeRef}


>
<motion.div

initial={{bottom:'0px',opacity:0}}
  whileInView={{ boxShadow: "6px 6px 4px rgba(0, 255, 255, 0.8)" ,bottom:'200px',opacity:1}}
  transition={{ duration: 0.5, delay: 1 }}
  id="right"
  className=" text-selectorcolor relative left-[200px]  z-[-1] border-[1px] border-outcolor bg-black w-[350px] h-[350px] text-[60px] p-5 rounded-[5px]"
>
  <div className="">About Me</div> <div className=""></div>{""}
</motion.div>

      <AboutMe ></AboutMe>
    </motion.div>



    <motion.div  id='expsec' ref={expRef}>
    <SectionFadeIn>Experience</SectionFadeIn>
    <Experience ></Experience>
    </motion.div>
    

    <motion.div  id='projectsec' ref={proRef}>

<SectionFadeIn>Projects</SectionFadeIn>
    <Projects ></Projects>
    </motion.div>

    <motion.div  id='skillsec' className='flex flex-col flex-wrap gap-5 p-5' ref={skillsRef}>
       <SectionFadeIn>Skills</SectionFadeIn>

       
    <Skill ></Skill>
    </motion.div>



    <motion.div ref={blogsRef}  id='blogsec'>


<SectionFadeIn>Blog</SectionFadeIn>
{children}

   


</motion.div>



    <Footer></Footer>
    </div>
    


        </NavContext.Provider>
    )
}
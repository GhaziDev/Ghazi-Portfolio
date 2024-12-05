"use client";
import { useState, useEffect, useContext } from "react";

import { motion, useAnimate } from "motion/react";
import { BiArrowFromLeft } from "react-icons/bi";
import { BiArrowFromRight } from "react-icons/bi";
import { SecId } from "../page";

import { useRouter } from "next/router";

export function Wrapper() {
  return <div></div>;
}
export function NavWrapper() {
  return (
    <motion.div className="z-3  sticky top-0 flex w-[100vw] p-10 justify-end"></motion.div>
  );
}

export default function Navigation() {
  const divId = useContext(SecId);
  const [aboutme, aboutmeAnimate] = useAnimate();
  const [exp, expAnimate] = useAnimate();
  const [pro, proAnimate] = useAnimate();
  const [skills, skillsAnimate] = useAnimate();
  const [blog, blogAnimate] = useAnimate();
  const [isShrinked,setIsShrinked] = useState<boolean>(false)
  const [loaded,setLoaded] = useState<boolean>(false)
  const shrinkNavigationBar = (e)=>{
    if(e.target.id =='shrink'){
        setIsShrinked(true)

    }
    else{
    setIsShrinked(false)
  }
}

  useEffect(() => {
    setLoaded(true)
    if(loaded){
    if (aboutme.current && divId == "aboutme") {
      aboutmeAnimate(
        aboutme.current,
        { boxShadow: "5px 5px 2px rgba(58, 147, 211, 0.98)" },
        { duration: 3, ease: "easeInOut" }
      );
    } 
    else {
      if(aboutme.current){
      aboutmeAnimate(
        aboutme.current,
        { boxShadow: "0px 0px 0px transparent" },
        { duration: 1 }
      );
    }

      
      
    }

    if (exp.current && divId == "expsec") {
        expAnimate(
          exp.current,
          { boxShadow: "5px 5px 2px rgba(58, 147, 211, 0.98)" },
          { duration: 3, ease: "easeInOut" }
        );
      } else {
        if(exp.current){
        expAnimate(
          exp.current,
          { boxShadow: "0px 0px 0px transparent" },
          { duration: 1 }
        );
      }
  
        
        
      }
      if (pro.current && divId == "projectsec") {
        proAnimate(
          pro.current,
          { boxShadow: "5px 5px 2px rgba(58, 147, 211, 0.98)" },
          { duration: 3, ease: "easeInOut" }
        );
      } else {
        if(pro.current){
        proAnimate(
          pro.current,
          { boxShadow: "0px 0px 0px transparent" },
          { duration: 1 }
        );
      }
  
        
        
      }
      if (skills && divId == "skillsec") {
        skillsAnimate(
          skills.current,
          { boxShadow: "5px 5px 2px rgba(58, 147, 211, 0.98)" },
          { duration: 3, ease: "easeInOut" }
        );
      } else {
        if(skills.current){
        skillsAnimate(
          skills.current,
          { boxShadow: "0px 0px 0px transparent" },
          { duration: 1 }
        );
      }
  
        
        
      }

     

      if(blog && divId=='blogsec'){

        blogAnimate(
          blog.current,
          { boxShadow: "5px 5px 2px rgba(58, 147, 211, 0.98)" },
          { duration: 3, ease: "easeInOut" }
        );

      }

      else{
        if(blog.current){
        blogAnimate(
          blog.current,
          {boxShadow: "0px 0px 0px transparent"},
          {duration:1}
        )

      }
    }
    }
  }, [divId]);

  if(!isShrinked){

    return (
        <motion.div className="z-[1000]  sticky top-0 flex w-[100vw] p-10 justify-end">
          <motion.div
            id="navmain"
            className=" z-[1000000] sticky top-0 right-0 justify-center items-center p-7  flex flex-row-reverse gap-[70px] border-outcolor border-[1px] rounded-[5px]  "
            initial={{ opacity: 0, height: "50px", width: "0px" }}
            animate={{ width: "800px", opacity: 1 }}
            transition={{ delay: 0.5, duration: 1 }}
          >
            <motion.div
              ref={aboutme}
              className="p-[5px] flex justify-center border-outcolor border-[2px] rounded-[3px] hover:scale-105 cursor-pointer transition-[all ] duration-300 "
              initial={{ opacity: 0 ,boxShadow:'0px 0px 0px transparent'}}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5, delay: 1.5 }}
            >
              About Me
            </motion.div>
            <motion.div
            ref={exp}
            className="p-[4px] flex justify-center border-outcolor border-[2px] rounded-[3px] hover:scale-105 cursor-pointer transition-[all ] duration-300 "
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5, delay: 1.5 }}
            >
              Experience
            </motion.div>
            <motion.div
            ref={pro}
            className="p-[4px] flex justify-center border-outcolor border-[2px] rounded-[3px] hover:scale-105 cursor-pointer transition-[all ] duration-300 "
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5, delay: 1.5 }}
            >
              Projects
            </motion.div>
            <motion.div
            ref={skills}
            className="p-[4px] flex justify-center border-outcolor border-[2px] rounded-[3px] hover:scale-105 cursor-pointer transition-[all ] duration-300 "
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5, delay: 1.5 }}
            >
              Skills
            </motion.div >


            <motion.div
            ref={blog}
            className="p-[4px] flex justify-center border-outcolor border-[2px] rounded-[3px] hover:scale-105 cursor-pointer transition-[all ] duration-300 "
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5, delay: 1.5 }}
            >
              Blogs
            </motion.div >
            <BiArrowFromLeft className='cursor-pointer' id='shrink' color="white" onClick={shrinkNavigationBar}></BiArrowFromLeft>
          </motion.div>
        </motion.div>
      )
    }


  return(
    <motion.div className='z-[1000]  sticky top-0 flex w-[100vw] p-10 justify-end' >
      <motion.div  className=" cursor-pointer z-[1000000] sticky top-0 right-0 justify-center items-center p-7  flex flex-row-reverse gap-[70px] border-outcolor border-[1px] rounded-[5px]  " initial={{width:'0px',height:'50px'}} animate={{width:'80px'}} transition={{duration:0.1}}>
      <BiArrowFromRight id='expand' color='white' onClick={shrinkNavigationBar} ></BiArrowFromRight>
      </motion.div>
       

    </motion.div>
  )

}



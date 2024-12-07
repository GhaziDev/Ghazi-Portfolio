"use client";
import { useState, useEffect, useContext } from "react";

import { motion, useAnimate } from "motion/react";
import { BiArrowFromLeft } from "react-icons/bi";
import { BiArrowFromRight } from "react-icons/bi";
import { NavContext } from "./main";

import { useRouter } from "next/router";

import {clsx} from 'clsx/lite'


export default function Navigation() {
  const divId = useContext(NavContext);


 
  const [isShrinked,setIsShrinked] = useState<boolean>(false)
  const shrinkNavigationBar = (e)=>{
    if(e.target.id =='shrink'){
        setIsShrinked(true)

    }
    else{
    setIsShrinked(false)
  }
}


  useEffect(()=>{
    console.log(divId)
    console.log('here')

  },[divId])

  if(!isShrinked){

    return (
        <motion.div className="z-[1000]  sticky top-0 flex w-[100vw] p-10 justify-end">
          <motion.div
            id="navmain"
            className=" z-[1000000] bg-transparent sticky top-0 right-0 justify-center items-center p-5  flex flex-row-reverse gap-[70px] border-none rounded-[5px]  "
            initial={{ opacity: 0, height: "50px", width: "0px" }}
            animate={{ width: "800px", opacity: 1 }}
            transition={{ delay: 0.5, duration: 1 }}
          >
            <motion.div

              className={` bg-black text-selectorcolor p-[5px] flex justify-center border-outcolor border-[1px] rounded-[5px] hover:scale-105 cursor-pointer transition-[all ] duration-300 ${clsx(divId=='aboutme'?'shadow-[4px_4px_4px] shadow-boxshadow':'')} `}
              initial={{ opacity: 0 ,boxShadow:'0px 0px 0px transparent'}}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5, delay: 1.5 }}
            >
              About Me
            </motion.div>
            <motion.div
            className={`p-[5px] text-selectorcolor flex justify-center bg-black border-outcolor border-[1px] rounded-[5px] hover:scale-105 cursor-pointer transition-[all ] duration-300 ${clsx(divId=='expsec'?'shadow-[4px_4px_4px] shadow-boxshadow':'')} `} 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5, delay: 1.5 }}
            >
              Experience
            </motion.div>
            <motion.div
            className={`p-[5px] flex justify-center bg-black text-selectorcolor border-outcolor border-[1px] rounded-[5px] hover:scale-105 cursor-pointer transition-[all ] duration-300 ${clsx(divId=='projectsec'?'shadow-[4px_4px_4px] shadow-boxshadow':'')}  `}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5, delay: 1.5 }}
            >
              Projects
            </motion.div>
            <motion.div
 
            className={`p-[5px] flex justify-center bg-black text-selectorcolor border-outcolor border-[1px] rounded-[5px] hover:scale-105 cursor-pointer transition-[all ] duration-300 ${clsx(divId=='skillsec'?'shadow-[4px_4px_4px] shadow-boxshadow':'')}  `}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5, delay: 1.5 }}
            >
              Skills
            </motion.div >


            <motion.div
            className={`p-[5px] flex justify-center text-selectorcolor bg-black border-outcolor border-[1px] rounded-[5px] hover:scale-105 cursor-pointer transition-[all ] duration-300 ${clsx(divId=='blogsec'?'shadow-[4px_4px_4px] shadow-boxshadow':'')}  `}
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
      <motion.div  className=" cursor-pointer z-[1000000] sticky top-0 right-0 justify-center items-center p-7  flex flex-row-reverse gap-[70px] border-outcolor border-[1px] rounded-[5px]  " initial={{width:'0px',height:'50px'}} animate={{width:'80px'}} transition={{duration:0.3}}>
      <BiArrowFromRight id='expand' color='white' onClick={shrinkNavigationBar} ></BiArrowFromRight>
      </motion.div>
       

    </motion.div>
  )

}



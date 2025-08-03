"use client";

import { motion } from "motion/react";
import useHover from "../hooks/hoverHook";

import { FaLinkedin } from "react-icons/fa6";
import { FaSquareGithub } from "react-icons/fa6";
import Link from "next/link";


export default function AboutMe() {
  const hoveredElement = useHover();

  return (

   
      <div
        id="left"
        className=" relative z-[2] bg-box  w-fit h-[450px] rounded-[5px] p-7  border-outcolor box-border border-[1.5px]  "
      >
        <div
          id="introduction"
          className=" text-[30px] font-cavaet"
        >
          Hello, My name is Ghazi
        </div>

        <div
          id="description"
          className=" w-[60ch] h-[400px] break-words  text-[16px] "
        >
          I am a motivated software engineer, with experience in full-stack development, cloud computing, and AI, I have developed several applications using variety of tools, like Nodejs, Django, React, HTML and CSS, in addition to using AWS as a deployment platform, I have had experience with many aws tools from server-based services to serverless services, I got interest into OpenAI recently, and I am building a project that integrate AI into its core.
          <div
            id="socialbtns"
            className="flex gap-10 w-[100%] justify-center items-center"
          >
            <div
              {...hoveredElement}
              id="linkedin"
              className=" cursor-pointer flex bg-incolor rounded box-border border-[1.5px] border-outcolor "
            >
              <motion.div

              
                animate={{
                  rotateY: hoveredElement.id == "linkedin" ? "360deg" : "0",
                }}
                transition={{ duration: 1.5 }}
                className='pointer-events-none '
              >
                <FaLinkedin className='z-[1]'  size="30" color="white"></FaLinkedin>
              </motion.div>
              <Link href={'https://www.linkedin.com/in/ghazi-zabalawi-424168219/'}><motion.button
                initial={{ width: "0px", height: "30px" }}
                animate={{
                  width: hoveredElement.id == "linkedin" ? "150px" : "0px",
                  color:
                    hoveredElement.id == "linkedin" ? "white" : "transparent",
                }}
                transition={{
                  type: "spring",
                  stiffness: 100,
                  duration: 1.5,
                  damping: 20,
                }}
                className=" pointer-events-none border-solid border-1 pr-3 bg-incolor border-outcolor rounded-sm flex text-slate-50 justify-center items-center text-[12px]"
              >
                Visit my LinkedIn
              </motion.button></Link>
            </div>
            <div
              {...hoveredElement}
              id="github"
              className=" cursor-pointer flex bg-black rounded box-border border-[1.5px] border-black "
            >
              <motion.div
                animate={{
                  rotateY: hoveredElement.id == "github" ? "360deg" : "0",
                }}
                transition={{ duration: 1.5 }}
                className='pointer-events-none'
              >
                <FaSquareGithub
                  size="30"
                  className=""
                  color="white"
                ></FaSquareGithub>
              </motion.div>
              <Link href={'https://github.com/GhaziDev'}><motion.button
                initial={{ width: "0px", height: "30px" }}
                animate={{
                  width: hoveredElement.id == "github" ? "150px" : "0px",
                  color:
                    hoveredElement.id == "github" ? "white" : "transparent",
                }}
                transition={{
                  type: "spring",
                  stiffness: 100,
                  duration: 1.5,
                  damping: 20,
                }}
                className=" pointer-events-none border-solid border-1 bg-black border-black rounded-sm flex text-slate-50 pr-3 justify-center items-center text-[12px]"
              >
                Visit my Github
              </motion.button></Link>
            </div>
          </div>
        </div>
      </div>
    
  );
}

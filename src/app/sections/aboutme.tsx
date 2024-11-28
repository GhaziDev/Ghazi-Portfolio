"use client";

import { motion } from "motion/react";
import useHover from "../hooks/hoverHook";

import { FaLinkedin } from "react-icons/fa6";
import { FaSquareGithub } from "react-icons/fa6";

export default function AboutMe() {
  const hoveredElement = useHover();

  return (
    <motion.div
      initial={{ opacity: 0, bottom: "-200px" }}
      whileInView={{ opacity: 1, bottom: "0px" }}
      transition={{ duration: 1 }}
      id="aboutme"
      className="relative  flex flex-row flex-wrap  content-center w-full items-center "
    >
      <motion.div
        whileInView={{ boxShadow: "10px 10px 2px rgba(58, 147, 211, 0.98)" }}
        transition={{ duration: 0.6, delay: 1 }}
        id="right"
        className=" relative left-[200px] bottom-[200px] z-[-1] border-[2px] border-outcolor bg-incolor w-[350px] h-[350px] text-[60px] p-7 rounded-sm"
      >
        <div className="">About Me</div> <div className=""></div>{" "}
      </motion.div>
      <div
        id="left"
        className="text-slate-950 bg-slate-200 w-fit h-[450px] rounded-lg p-7"
      >
        <div
          id="introduction"
          className="text-slate-950 text-[30px] font-cavaet"
        >
          Hello, My name is Ghazi
        </div>

        <div
          id="description"
          className=" w-[60ch] h-[400px] break-words  text-[16px] "
        >
          I am passionate software engineer, with experience in tech field, In
          my last job I had worked as a teacher assistant for Auckland
          University of Technology, where I taught a programming based paper to
          students in lab sessions, I had an internship before that as a Web
          Developer for United Nation, where I had to develop an SME-Toolkit
          website using javascript, php tools like Drupal, HTML and CSS, I have
          experience in full-stack development, as I have developed number of
          websites using different tools, like node.js, Django, React, Next,
          HTML, CSS, and Tailwind CSS, in addition to my experience in database
          both in sql and non-sql such as postgreSQL and MongoDB. I also deploy
          most of my websites using AWS tools.
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
              <motion.button
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
              </motion.button>
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
              <motion.button
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
              </motion.button>
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  );
}

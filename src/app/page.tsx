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






import {useState} from 'react'
import Link from "next/link";



export default function Home() {

interface Click {
  string:boolean
}
  const [hoverELement, setHoverElement] = useState<string>('')
  const [clickElement,setClickElement] = useState<string>("")
  const controlHover = (id:string)=>{
    setHoverElement(id)
  }

  const controlClick = (id:string)=>{
    console.log(id)

    setClickElement(id)
    console.log(clickElement)


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
            <motion.div initial={{width:0}} animate={{width:'100%'}} transition={{duration:2, delay:2}} id='firstname' className=' bg-outcolor  p-3 flex flex-row flex-nowrap relative' >

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
           transition={{duration:3}}>Software Engineer</motion.div>
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

      <motion.div initial={{scale:0.1}} whileInView={{scale:1}} transition={{bounce:0.4,duration:2,type:'spring',stifness:200, damp:20}} id='aboutme' className='flex flex-row flex-wrap  content-center w-full items-center '>
        <div id='right' className='  relative left-[200px] bottom-[200px] z-[-1] border-[2px] border-outcolor bg-incolor w-[350px] h-[350px] text-[60px] p-7 rounded-lg '><div className=''>About Me</div> <div className=''></div> </div>
        <div id='left' className='text-slate-950 bg-slate-200 w-fit h-[450px] rounded-lg p-7'>
          <div id='introduction' className='text-slate-950 text-[30px] font-cavaet'>Hello, My name is George St-Pierre</div>
       
        <div id="description" className=' w-[60ch] h-[400px] break-words  text-[16px] '>
          I am passionate software engineer, with experience in tech field, 
          In my last job I had worked as a teacher assistant for Auckland University of Technology, 
          where I taught a programming based paper to students in lab sessions, 
          I had an internship before that as a Web Developer for United Nation, 
          where I had to develop an SME-Toolkit website using javascript, php tools like Drupal, HTML and CSS,
           I have experience in full-stack development, 
           as I have developed number of websites using different tools, like node.js, Django, React, Next, HTML, CSS, and Tailwind CSS, in addition to my experience in database both in sql and non-sql such as postgreSQL and MongoDB. I also deploy most of my websites using AWS tools.

           <div id='socialbtns' className='flex gap-10 w-[100%] justify-center items-center'>
          <div onMouseEnter={()=>setHoverElement('linkedin')} onMouseLeave={()=>{setHoverElement('')}} id='linkedinwrapper' className=' cursor-pointer flex bg-incolor rounded box-border border-[1.5px] border-outcolor '><motion.div animate={{rotateY:hoverELement=='linkedin'?'360deg':'0'}} transition={{duration:1.5}}><FaLinkedin size='30'  className='' color='white' ></FaLinkedin></motion.div><motion.button id='linkedin' initial={{width:'0px',height:'30px'}} animate={{width:hoverELement=='linkedin'?'150px':'0px',color:hoverELement=='linkedin'?'white':'transparent'}} transition={{type:'spring', stiffness:100,duration:1.5, damping:20}}  className=' border-solid border-1 bg-incolor border-outcolor rounded-sm flex text-slate-50 pr-4 justify-center items-center text-[12px]'>Visit my LinkedIn</motion.button></div>
          <div onMouseEnter={()=>{controlHover('github')}} onMouseLeave={()=>{setHoverElement('')}} id='githubinwrapper' className=' cursor-pointer flex bg-black rounded box-border border-[1.5px] border-black '><motion.div animate={{rotateY:hoverELement=='github'?'360deg':'0'}} transition={{duration:1.5}}><FaSquareGithub size='30'  className='' color='white' ></FaSquareGithub></motion.div><motion.button id='github' initial={{width:'0px',height:'30px'}} animate={{width:hoverELement=='github'?'150px':'0px',color:hoverELement=='github'?'white':'transparent'}} transition={{type:'spring', stiffness:100,duration:1.5, damping:20}}  className=' border-solid border-1 bg-black border-black rounded-sm flex text-slate-50 pr-4 justify-center items-center text-[12px]'>Visit my Github</motion.button></div>
        </div>

        </div>

        </div>

      </motion.div>

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
        
        <motion.div  whileInView={{opacity:1,left:'0px'}} initial={{opacity:0,left:'-100px'}} transition={{duration:1.5,delay:0.5,type:'spring',bounce:5, stiffness:100,damp:20}} id='project1'  className='flex flex-col flex-wrap items-center justify-center gap-5 p-2 relative w-[350px] h-[350px] rounded-md border-[2px] border-outcolor hover:bg-incolor cursor-pointer'>
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

      <motion.div className='' id='certsec'>
        <motion.div className='text-[60px]' id='title'>Certificates</motion.div>
        <div className='flex gap-5 justify-center items-center' id='certwrapper'>
          <motion.div onMouseEnter={()=>{controlHover('autcert')}} onMouseLeave={()=>{controlHover('')}} className=' w-[300px] h-[300px] rounded-[5px] border-[1px] border-outcolor' id='autcert'>
          <motion.div className=' flex flex-col flex-wrap gap-7 w-[300px]  rounded-[5px] border-[1px] border-outcolor bg-incolor' initial={{opacity:1,height:'0px'}}
           animate={{height:hoverELement =='autcert'?'300px':'0px'}} transition={{delay:0.2,duration:1}} >
            <div id='provider'>Provider: Auckland University of Technology</div>
            <div id='obtained'>Obtained: 2nd of August 2024</div>

           </motion.div>
          </motion.div>
          
          <motion.div className='w-[300px] h-[300px] rounded-[5px] border-[1px] border-outcolor' id='AWS'></motion.div>
          <motion.div className=' w-[300px] h-[300px] rounded-[5px] border-[1px] border-outcolor' id='PMI'></motion.div>



        </div>
      </motion.div>

      <motion.div id='skillsec' className=''>

      </motion.div>
    </div>
  );
}

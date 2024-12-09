import { tools, projects } from "./projectsconfig"
import {motion} from 'motion/react'
import FrontendModal from "./projectsModal"
import { useState } from "react"
export default function ProjectComp(){

    const mapProjects = ()=>{
        const [isOpen, setIsOpen] = useState<boolean>(false)
        return(
        projects.map((project,index)=>{
            return(
            <motion.div onClick={()=>setIsOpen(true)} key={project.type}  whileInView={{opacity:1,left:'0px'}} initial={{opacity:0,left:'-100px'}} transition={{delay:0.2*(index+1),duration:1.5,type:'spring',bounce:5, stiffness:100,damp:20}} id='project1'  className=' bg-box border-[1px] border-outcolor flex flex-col flex-wrap items-center justify-center gap-5 p-2 relative w-[350px] h-[350px] rounded-md  hover:shadow-[6px_6px_6px] hover:shadow-boxshadow cursor-pointer'>
    <div id='icon' className='text-selectorcolor '><project.icon size='170' ></project.icon></div>
    
    <div id='title' className='text-[20px] '>{project.type} Project</div>

    <div id='stack' className='flex gap-5 flex-wrap justify-center'>
        {Object.keys(project.stack).map((tool)=>{
            return(
                <div key={tool[0]} className='bg-black pt-1 text-center align-middle text-[12px] w-[70px] h-[30px] border-outcolor border-[1px] rounded-[5px] text-selectorcolor'>{tool}</div>
            )
        })}

        <FrontendModal isOpen={isOpen} setIsOpen={setIsOpen}></FrontendModal>
            </div>



  </motion.div>
            )

        })
    )
    }


    
 return(
    <>
    {mapProjects()}
    </>
 )
}


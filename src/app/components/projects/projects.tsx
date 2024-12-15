//import ProjectComp from "../../mycomponents/projects/projects"
import { useState } from "react"
import { projects } from "./projectsconfig"
import {motion} from 'motion/react'
import ProjectModal from "./projectsModal"

export default function Projects(){

   const [isOpen, setIsOpen] = useState<{isOpen:boolean,id:string}>({isOpen:false,id:''})

  
  const mapProjects = ()=>{
        
    return(
    projects.map((project,index)=>{

        return(
        <motion.div id={`${project.type.toLocaleLowerCase()}`} onClick={()=>setIsOpen({isOpen:true,id:`${project.type.toLocaleLowerCase()}`})} key={project.type}  whileInView={{opacity:1,left:'0px'}} initial={{opacity:0,left:'-100px'}} transition={{delay:0.2*(index+1),duration:1.5,type:'spring',bounce:5, stiffness:100,damp:20}}  className=' bg-box border-[1px]  z-[5] border-outcolor flex flex-col flex-wrap items-center justify-center gap-5 p-2 relative w-[350px] h-[350px] rounded-md hover:scale-105 transition-transform duration-300  hover:shadow-[6px_6px_6px] hover:shadow-boxshadow cursor-pointer'>
         
<div id='icon' className='text-selectorcolor '><project.icon size='170' ></project.icon></div>

<div id='title' className='text-[20px] '>{project.type} Project</div>

<div id='stack' className='flex gap-5 flex-wrap justify-center'>
    {Object.keys(project.stack).map((tool)=>{
        return(
            <motion.div initial={{opacity:0,scale:0}} whileInView={{opacity:1,scale:[1.5,1]}} transition={{duration:0.5,delay:0.6,type:'spring'}} key={tool[0]} className='bg-black pt-1 text-center align-middle text-[12px] w-[70px] h-[30px] border-outcolor border-[1px] rounded-[5px] text-selectorcolor'>{tool}</motion.div>
        )
    })}

    

    <ProjectModal id={`${project.type.toLocaleLowerCase()}`} isOpen={isOpen.isOpen && isOpen.id==project.type.toLowerCase()} setIsOpen={setIsOpen}></ProjectModal>
        </div>



</motion.div>
        )

    })
)
}


    return(
        
    
      <div id='projectWrapper' className='flex gap-5 justify-center items-center flex-wrap pt-[350px]'>

        {mapProjects()}
        
      </div>
    

    )

}


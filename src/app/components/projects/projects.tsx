import { tools, projects } from "./projectsconfig"
import {motion} from 'motion/react'
export default function ProjectComp(){

    const mapProjects = ()=>{
        return(
        projects.map((project,index)=>{
            return(
            <motion.div key={project.type}  whileInView={{opacity:1,left:'0px'}} initial={{opacity:0,left:'-100px'}} transition={{delay:0.2*(index+1),duration:1.5,type:'spring',bounce:5, stiffness:100,damp:20}} id='project1'  className='flex flex-col flex-wrap items-center justify-center gap-5 p-2 relative w-[350px] h-[350px] rounded-md border-[2px] border-outcolor hover:bg-incolor cursor-pointer'>
    <div id='icon'><project.icon size='170' color='#3a93d3fa'></project.icon></div>
    
    <div id='title' className='text-[20px] '>{project.type} Project</div>

    <div id='stack' className='flex gap-5 flex-wrap justify-center'>
        {Object.keys(project.stack).map((tool)=>{
            {console.log(project.stack[tool])}
            const val = project.stack[tool]
            return(
                <div key={tool[0]} className={`pt-1 text-center align-middle text-[12px] w-[70px] h-[30px] bg-[${val}] text-slate-50 rounded-sm`}>{tool}</div>
            )
        })}
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


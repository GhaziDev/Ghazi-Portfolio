import ProjectComp from "../components/projects/projects"
import {motion} from 'motion/react'

export default function Projects(){

    return(
        <motion.div className='' id='projectsec'>
      <motion.div  whileInView={{opacity:1,left:'0px'}} transition={{duration:0.8}} initial={{opacity:0,left:'-200px'}} id='projecttitle' className='relative text-[60px] font-serif'>Projects</motion.div>

      <div id='projectWrapper' className='flex gap-5 justify-center items-center flex-wrap pt-[350px]'>
        <ProjectComp></ProjectComp>
      </div>

      </motion.div>
    )

}

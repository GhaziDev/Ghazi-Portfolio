import ProjectComp from "../components/projects/projects"
import {motion} from 'motion/react'

export default function Projects(){

    return(
        <motion.div className='' id='projectsec'>
      <motion.div  whileInView={{opacity:[0.2,0.4,0.6,0.8,1],left:['-80px','-60px','-40px','-20px','0px']}} transition={{duration:0.7}} initial={{opacity:0,left:'-100px'}} id='projecttitle' className='relative text-[60px] font-serif'>Project</motion.div>

      <div id='projectWrapper' className='flex gap-5 justify-center items-center flex-wrap pt-[350px]'>
        <ProjectComp></ProjectComp>
      </div>

      </motion.div>
    )

}

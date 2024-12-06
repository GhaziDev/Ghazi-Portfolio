import ProjectComp from "../mycomponents/projects/projects"
import {motion} from 'motion/react'

export default function Projects(){

    return(
        

      <div id='projectWrapper' className='flex gap-5 justify-center items-center flex-wrap pt-[350px]'>
        <ProjectComp></ProjectComp>
      </div>

    )

}

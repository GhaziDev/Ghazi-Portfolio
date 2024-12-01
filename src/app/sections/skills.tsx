import {motion} from 'motion/react'
import SkillComp from '../components/skills/skills'

export default function Skill(){

    return(
        
      <div className='flex justify-center items-center w-[100%]'>
      <motion.div id='skills' initial={{opacity:0,left:'-400px'}} whileInView={{opacity:1,left:'0px'}} transition={{duration:0.8,delay:0.5}} className='relative grid grid-cols-[repeat(5,0fr)] '>

        {<SkillComp></SkillComp>}


      

      


      </motion.div>
      </div>

    )
}
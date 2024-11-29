import {motion} from 'motion/react'
import SkillComp from '../components/skills/skills'

export default function Skill(){

    return(
        <motion.div id='skillsec' className='flex flex-col flex-wrap gap-5 p-5'>
       <motion.div  whileInView={{opacity:1,left:'0px'}} transition={{duration:0.8}} initial={{opacity:0,left:'-200px'}} id='projecttitle' className='relative text-[60px] font-serif'>Skills</motion.div>

      <div className='flex justify-center items-center w-[100%]'>
      <motion.div id='skills' className=' grid grid-cols-[repeat(5,0fr)] '>

        {<SkillComp></SkillComp>}


      

      


      </motion.div>
      </div>
      </motion.div>

    )
}
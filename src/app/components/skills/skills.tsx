import {motion} from 'motion/react'
import useClick from '../../hooks/clickHook'
import useHover from '../../hooks/hoverHook'
import skills from './skillsconfig'
export default function Skill(){


  const clickedElement = useClick()
  const hoveredElement  = useHover()

  const mapSkills = ()=>{
      
      return(
      Object.keys(skills).map((skill)=>{
          const [desc,Comp] = skills[skill]
          return(
              < motion.div   key={skill}  {...clickedElement}  animate={{width:clickedElement.id==skill?'300px':'140px',zIndex:clickedElement.id==skill?3:0}} whileTap={{scale:0.9, borderBottom:'0px'}} {...hoveredElement} whileHover={{width:'300px'}}  id={`${skill}`} className={` pt-5  cursor-pointer bg-box  justify-center items-center flex flex-row flex-wrap gap-2 w-[140px] h-[140px] border-t-[1px] rounded-tl-[5px] rounded-tr-[5px] rounded-br-[5px] border-r-[1px] border-l-[1px] border-b-[0px]  border-outcolor`}>
      
              <motion.div {...clickedElement} animate={{width:clickedElement.id==skill?'300px':'140px',zIndex:clickedElement.id==skill?3:0}}  className=' text-selectorcolor pointer-events-none  w-[100%] flex flex-col flex-wrap items-center justify-center' ><Comp  size='40px'></Comp></motion.div>
              <motion.div className='text-selectorcolor pointer-events-none'>{skill}</motion.div>
        
              <motion.div {...clickedElement} id={`${skill}desc`}  className=' bg-box border-[1px] border-r-outcolor pointer-events-none border-l-outcolor border-b-[1px] border-b-outcolor border-t-[0px] p-4 ' initial={{width:'300px',height:'0px',opacity:0}}  animate={{opacity:clickedElement.id==skill?1:0,height:clickedElement.id==skill?'fit-content':'0px'}} transition={{duration:0.7,}}>
                {desc}
              </motion.div>

        
              </motion.div>
        
              
          )
      })
  )

  }

    return(

      
        
      <div className='flex justify-center items-center w-[100%]'>
      <motion.div id='skills' initial={{opacity:0,left:'-400px'}} whileInView={{opacity:1,left:'0px'}} transition={{duration:0.8,delay:0.5}} className='relative grid grid-cols-[repeat(5,0fr)] '>

        {mapSkills()}



      

      


      </motion.div>
      </div>

    )
}
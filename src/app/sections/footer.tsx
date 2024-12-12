import { FaLinkedin } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { MdOutlineMail } from "react-icons/md";
import {motion} from 'motion/react'
import Link from "next/link";


export default function Footer(){

    return(
        <motion.div id='footer' transition={{duration:0.8}} whileInView={{top:0,opacity:1}} initial={{top:'-20px',opacity:0}} className='relative'>
            <motion.div transition={{duration:0.8}} initial={{width:'0px'}} whileInView={{width:'100%'}} id='pageSep' className=' h-[1px] bg-slate-400'></motion.div>
            <div id='footerwrapper' className='flex justify-evenly pt-10'>
                <motion.div id='trademark' transition={{delay:0.11,duration:0.5}} initial={{top:'-10px',opacity:0}} whileInView={{top:'0px',opacity:1}} className='relative'>
                Copyright © Ghazi Zabalawi 2024
                </motion.div>
                <div id='icons' className='flex gap-4'>
                    <Link href={'https://www.linkedin.com/in/ghazi-zabalawi-424168219/'}><motion.div  transition={{duration:0.7}} initial={{left:'-20px',opacity:0}} whileInView={{left:0,opacity:1}} className='relative cursor-pointer'><FaLinkedin size='30' ></FaLinkedin></motion.div></Link>
                    <Link href={'https://www.github.com/GhaziDev/'}><motion.div transition={{delay:0.2,duration:0.7}}   initial={{left:'-20px',opacity:0}} whileInView={{left:0,opacity:1}} className='relative cursor-pointer'><FaGithub size='30'></FaGithub></motion.div></Link>
                    <Link href={'mailto:@ghazi-z3balawi@outlook.com'}><motion.div transition={{delay:0.3,duration:0.7}} initial={{left:'-20px',opacity:0}} whileInView={{left:0,opacity:1}} className='relative cursor-pointer'><MdOutlineMail size='30'></MdOutlineMail></motion.div></Link>
                </div>
            </div>

        </motion.div>
    )
}
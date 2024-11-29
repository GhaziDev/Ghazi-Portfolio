'use client'
import {useState,useEffect} from 'react'

import {motion} from 'motion/react'
import { BiArrowFromLeft } from 'react-icons/bi'

import { useRouter } from 'next/router'
import { usePathname, useSearchParams } from "next/navigation";

export default function Navigation(){
    const search = useSearchParams()
    const pathname = usePathname()

    const [selectedSec,setSelectedSec] = useState<string>('')
    const [navState,setNavState] = useState<boolean>(false)

    useEffect(()=>{
        console.log(search.get('#'))
    },[search])


    return(
        <motion.div className='z-3  sticky top-0 flex w-[100vw] p-10 justify-end' >

<motion.div id='navmain' className=' z-[1000000] sticky top-0 right-0 justify-center items-center p-5  flex flex-row-reverse gap-[70px] border-outcolor border-[1px] rounded-[5px]  ' initial={{opacity:0,height:'50px',width:'0px'}}
animate={{width:'600px',opacity:1}} transition={{delay:0.5,duration:1}}>
<motion.div className='' initial={{opacity:0}} animate={{opacity:1}} transition={{duration:0.5,delay:1.5}}>About Me</motion.div>
<motion.div initial={{opacity:0}} animate={{opacity:1}} transition={{duration:0.5,delay:1.5}}>Experience</motion.div>
<motion.div initial={{opacity:0}} animate={{opacity:1}} transition={{duration:0.5,delay:1.5}}>Projects</motion.div>
<motion.div initial={{opacity:0}} animate={{opacity:1}} transition={{duration:0.5,delay:1.5}}>Skills</motion.div>
<BiArrowFromLeft color='white'></BiArrowFromLeft>
</motion.div>

</motion.div>
     
    )


    
    
}
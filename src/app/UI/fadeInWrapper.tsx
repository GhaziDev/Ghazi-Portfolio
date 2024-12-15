import {motion} from 'motion/react'
import React from 'react';

export default function SectionFadeIn({children}:{children:React.ReactNode}){
    return(
        <motion.div initial={{left:'-300px',opacity:0}} whileInView={{opacity:1,left:'0px'}}  className='relative text-[60px] pb-[100px]' transition={{duration:1.5, type:'spring',bounce:0.25}}>
            {children}
        </motion.div>
    )

}
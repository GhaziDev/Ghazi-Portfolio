import { TbBrandTypescript } from "react-icons/tb";
import { FaReact } from "react-icons/fa";
import { TbBrandDjango } from "react-icons/tb";
import { RiNextjsLine } from "react-icons/ri";
import { AiOutlinePython } from "react-icons/ai";
import { RiTailwindCssLine } from "react-icons/ri";
import { TbBrandAws } from "react-icons/tb";
import { PiFileSqlThin } from "react-icons/pi";
import { FaNode } from "react-icons/fa6";
import { RiJavascriptLine } from "react-icons/ri";



import { FC } from "react";

interface Skill {
    [key:string]:[string,FC]
}
const skills:Skill = {
    'Next':
    ['I decided to get into Next framework when I realised I needed a powerful tool for server side rendering, and to make a full-stack application in one place.',
        RiNextjsLine
    ],
    'Typescript':['I decided to get into Next framework when I realised I needed a powerful tool for server side rendering, and to make a full-stack application in one place.',
        TbBrandTypescript
    ],
    'React':['I decided to get into Next framework when I realised I needed a powerful tool for server side rendering, and to make a full-stack application in one place.',
        FaReact
    ],
    'Node':['I decided to get into Next framework when I realised I needed a powerful tool for server side rendering, and to make a full-stack application in one place.',
        FaNode
    ],
    'Django':['I decided to get into Next framework when I realised I needed a powerful tool for server side rendering, and to make a full-stack application in one place.',
        TbBrandDjango
    ],
    'Tailwind CSS':['I decided to get into Next framework when I realised I needed a powerful tool for server side rendering, and to make a full-stack application in one place.',
      RiTailwindCssLine
    ],
    'Python':['I decided to get into Next framework when I realised I needed a powerful tool for server side rendering, and to make a full-stack application in one place.',
        AiOutlinePython
    ],
    'Javascript':['I decided to get into Next framework when I realised I needed a powerful tool for server side rendering, and to make a full-stack application in one place.',
        RiJavascriptLine
    ],
    'SQL':['I decided to get into Next framework when I realised I needed a powerful tool for server side rendering, and to make a full-stack application in one place.',
        PiFileSqlThin
    ],
    'AWS':['I decided to get into Next framework when I realised I needed a powerful tool for server side rendering, and to make a full-stack application in one place.',
        TbBrandAws
    ],

}

export default skills

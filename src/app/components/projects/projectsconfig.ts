import { CiServer } from "react-icons/ci";
import { SiNextui } from "react-icons/si";
import { GoStack } from "react-icons/go";
import { PiRobot } from "react-icons/pi";



interface ProjectConfig{
    type:string,
    icon:React.FC,
    stack: Record<string,string>,
}

const tools = {
    Next:'black',
    React:'#61dafb',
    Django:'#092E20',
    AWS:'#FF9900',
    Postgres:'#336791',
    Javascript:'#3178C6',
    Typescript:'#3178C6',
    Vite:'#646cff',
    Python:'#FFD43B',
    Pandas:'#150458',
    TensorFlow:'#FF6F00',
    BERT:'#EA4335',
    Express:'black',
    Node:'#6cc24a'

}


const projects:Array<ProjectConfig> = [
    {
        type:'Frontend',
        icon:SiNextui,
        stack:{
            'React':tools.React,
            'Next':tools.Next,
            'AWS':tools.AWS,
            'Vite':tools.Vite,
            'Typescript':tools.Typescript

        }

    },


    {
        type:'Backend',
        icon:CiServer,
        stack:{
            
            'Express':tools.Express,
            'Typescript':tools.Typescript,
            'Postgres':tools.Postgres,
            'Node':tools.Node,
            'Vite':tools.Vite,
    }

        }

    ,

    {
        type:'Fullstack',
        icon:GoStack,
        stack:{
            'Django':tools.Django,
            'Javascript':tools.Javascript,
            'Next':tools.Next,
            'AWS':tools.AWS,
            'React':tools.React,
            'Postgres':tools.Postgres

        }
     
    },

    {
        type:'AI',
        icon:PiRobot,
        stack:{
            'Python':tools.Python,
            'Pandas':tools.Pandas,
            'TensorFlow':tools.TensorFlow,
            'BERT':tools.BERT

        }
    }

]
export {tools,projects}
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

import { IconBaseProps } from "react-icons/lib";

interface Skill {
  [key: string]: [string, React.ComponentType<IconBaseProps>];
}
const skills: Skill = {
  Next: [
    "I decided to get into Next framework when I realised I needed a suitable tool for server side rendering, and to make a full-stack application in one place. It made it easier for me to connect client and server together in one place.",
    RiNextjsLine,
  ],
  Typescript: [
    'When I used to casually code in Javascript and use it in tools like React, I used to face a lot of errors that were really hard to debug, most of these errors stem from the fact that "undefined" exists, thus I decided to apply typescript in my projects because typing out my code made my life easier and my code less error prone.',
    TbBrandTypescript,
  ],
  React: [
    "The first frontend library I decided to learn and apply , it was for the purpose of creating single paged applications with good data management API, this is my way to go library every time I want to create a full-stack project",
    FaReact,
  ],
  Node: [
    "Other than the fact it is useful to me for backend projects, It is also useful for testing purposes especially that Javascript by default is browser based, so node.js being run on server, made it easy for me to make small daily tests based on what I learn everyday.",
    FaNode,
  ],
  Django: [
    "This was the first time I decided to get into backend development, because I had python experience as a first language, I decided to learn Django, I have successfully created backend applications, and full-stack applications and deploying them using Django, it has a really great ORM system, and it is unique comparing to other libraries like Express, for example it follows the MVT design pattern.",
    TbBrandDjango,
  ],
  "Tailwind CSS": [
    "Once I had good experience using CSS, I found that Tailwind offered a better solution to code in CSS in a way that you dont have to waste your time switching between files, I now use Tailwind in every project.",
    RiTailwindCssLine,
  ],
  Python: [
    "Python is the first language I have learned and it was what motivated me into software engineering, with this language I have created backend applications, desktop applications, CLI applications, and packages.",
    AiOutlinePython,
  ],
  Javascript: [
    "I decided to get into Next framework when I realised I needed a powerful tool for server side rendering, and to make a full-stack application in one place.",
    RiJavascriptLine,
  ],
  SQL: [
    "An essential tool for storing data, I have experience in both SQL and No-SQL tools, each has their own uses.",
    PiFileSqlThin,
  ],
  AWS: [
    "When I decided to deploy my first full-stack application, I had to pick a tool to learn about deployment, thus Cloud Computing was my secondary passion after web development, so I picked AWS, and learned how to use variety of tools by studying for Developer-Associate Certificate and applying this knowledge in projects, some tools that I usually use in deployment: EC2, Elastic Beanstalk, S3, EBS, and Lambda.",
    TbBrandAws,
  ],
};

export default skills;

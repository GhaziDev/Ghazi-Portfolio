import { useState } from "react";

import { Modal, ModalContent, ModalBody, ModalFooter, ModalHeader } from "@nextui-org/react";
import Link from "next/link";
import { FaGithub, FaGlobe } from "react-icons/fa";
import {motion} from 'motion/react'
export default function ProjectModal({isOpen,setIsOpen,id}:{isOpen:boolean,setIsOpen:CallableFunction,id:string}){

  if(id=='frontend'){



    return(
        <Modal closeButton classNames={{closeButton:'sticky top-[5px]   rounded-[50%] text-slate-white bg-outcolor w-[30px] h-[70px] hover:bg-red-400 flex justify-center items-center '}} size={'full'} className='bg-black' isOpen={isOpen && id=='frontend'} onOpenChange={()=>setIsOpen({isOpen:!isOpen,id:id.length?'':'frontend'})}>
            <ModalContent className='p-[40px] overflow-y-scroll'>

           
            {(onClose) => (

             

            <motion.div className='relative' initial={{top:'-400px',opacity:0}} animate={{top:0,opacity:1}} transition={{duration:2}}>
               <button onClick={()=>setIsOpen({IsOpen:false,id:''})}></button>
              <ModalHeader className="flex flex-col gap-2 text-[50px] items-center justify-center">Personal Blog</ModalHeader>
              <div id='btns' className='flex flex-wrap flex-col gap-10 items-center'>
              <Link href={'https://github.com/GhaziDev/Ghazi-Portfolio'}><div className='border-[1px] border-outcolor rounded-[5px] w-[150px]  p-2 gap-3 bg-white flex hover:scale-105 transition-all duration-400 text-black cursor-pointer '><FaGithub size='25px' className='text-box'></FaGithub>Source code</div></Link>
              <div id='tools' className='flex flex-row flex-nowrap gap-5 w-[100%] justify-center'>
                <div className='bg-box border-outcolor border-[1px] text-selectorcolor rounded-[5px] w-[fit] pl-2 pr-2  '>Next</div>
                <div className='bg-box border-outcolor border-[1px] text-selectorcolor rounded-[5px] w-[fit] pl-2 pr-2  '>NextAuth</div>
                <div className='bg-box border-outcolor border-[1px] text-selectorcolor rounded-[5px] w-[fit] pl-2 pr-2  '>Typescript</div>
                <div className='bg-box border-outcolor border-[1px] text-selectorcolor rounded-[5px] w-[fit] pl-2 pr-2  '>TailwindCSS</div>
                <div className='bg-box border-outcolor border-[1px] text-selectorcolor rounded-[5px] w-[fit] pl-2 pr-2  '>AWS</div>
               

                              </div>
                              </div>
              <ModalBody>
                <div className='flex flex-wrap flex-col gap-5 w-[100%] justify-center items-center p-[100px] '>
                <div className='flex flex-col flex-wrap gap-[50px] w-[65ch]'>
                    <h2 className='text-[40px]'>Purpose</h2>
                    <p>This project aim to define me, my skills, experience, and projects I have made, in addition to adding a personal blog space for me to share knowledge about variety of topics! </p>

                </div>

                <div className='flex flex-col flex-wrap gap-[50px] w-[65ch]'>
                    <h2 className='text-[40px]'>Tools</h2>
                    <p>I have decided to use Next along with NextAuth and TailwindCSS, because these tools work well together, in addition to the fact that
                    I can work on every aspect of web development in one space, such that Next has the ability to interact with client and server, in addition to the ability to create backend API'S on Next server.
                    I have also used <Link href={'https://next-auth.js.org'} className='font-semibold hover:text-selectorcolor underline'>NextAuth</Link> for my admin page, this tool provide different authentication methods, I will explain in the Implementation section more about this.
                    For design I decided to go with tailwind, because it will save some space and time regarding making styles to the components, I can style every element on the HTML code rather than in a separate unorganized file.
                    Considering that I have decided to make personal blogs, I chose mongodb as my database because non relational databases give me the freedom of defining the structure of the documents whenever I wanted a change.
                    Finally, since I have some experience dealing with AWS, I decided to use tools like EC2, Elastic Beanstalk and S3 to deploy my website.

                    </p>
                </div>

                <div className='flex flex-col flex-wrap gap-[50px] w-[65ch]'>
                    <h2 className='text-[40px]'>Implementation</h2>
                <p>The first step after initial project creation, I worked on setting up the database, setting up .env file and making the repository on Github, then I decided to work on main page creation, by creating the header section and aboutme section of the website, going through this up until I finished the footer.
                    While I was creating these sections I have made a research on some UI/UX rules to make the website beautiful and user friendly, for example, I have ensured that the design pattern in the website is consistent, such that there is almost the same font family everywhere in the page, same button colors, same border radius, and consistent animation styles.
                    The final step was creating the blog section, the first thing I did was to setup the <Link href={'https://nextjs.org/docs/app/building-your-application/routing/route-handlers'} className=' underline font-semibold hover:text-selectorcolor hover:shadow-boxshadow hover:shadow-[2px_2px_2px]' >Routes Handlers</Link>, to make calls to the database and use the data in frontend.
                    After that, I had to make a blog creation page, considering this is a personal website, I created an admin route with admin API to fetch the user's credinitials on database, using one of NextAuth providers which is Email Provider, to make a seamless experience of authenticating, this method work by entering the email and submitting it, and then a database call is made to check if the email exist in the database, then a link is sent to your email to authenticate you on the website, basically it was a passwordless authentication method using magic links.
                    After the development phase has ended, it was time to deploy my application AWS, by deploying frontend code on S3, and backend code on EC2, and using Elastic Beanstalk for running the backend, while using Elastic Block Store to store the database </p>
                </div>

                <div className='flex flex-col flex-wrap gap-[50px] w-[65ch]'>
                
                <h2 className='text-[40px]'>Final Words and Future Plans</h2>
                <p>This project will add more and more features in the future, in the meanwhile I will be looking to enhance my skills to come back with better ideas for the website.
                    I have posted the github repository link above if you are interested in checking the source code.
                </p>
              </div>
                </div>
              </ModalBody>

             
              <ModalFooter>
     
              </ModalFooter>
            </motion.div>
          )}




            </ModalContent>
        </Modal>
    )

  }

  if(id=='backend'){
    return(
      <Modal size={'full'} className='bg-black' isOpen={isOpen &&id=='backend'} onOpenChange={()=>setIsOpen({isOpen:!isOpen,id:id.length?'':'backend'})}>

          <ModalContent className='p-[40px] overflow-y-scroll'>

         
          {(onClose) => (

          <motion.div className='relative' initial={{top:'-400px',opacity:0}} animate={{top:0,opacity:1}} transition={{duration:2}}>
            <ModalHeader className="flex flex-col gap-2 text-[50px] items-center justify-center">Backend Blog Website </ModalHeader>
            <div id='btns' className='flex flex-wrap flex-col gap-10 items-center'>
            <Link href={'https://github.com/GhaziDev/Ghazi-Portfolio'}><div className='border-[1px] border-outcolor rounded-[5px] w-[150px]  p-2 gap-3 bg-white flex hover:scale-105 transition-all duration-400 text-black cursor-pointer '><FaGithub size='25px' className='text-box'></FaGithub>Source code</div></Link>
            <div id='tools' className='flex flex-row flex-nowrap gap-5 w-[100%] justify-center'>
              <div className='bg-box border-outcolor border-[1px] text-selectorcolor rounded-[5px] w-[fit] pl-2 pr-2  '>Node</div>
              <div className='bg-box border-outcolor border-[1px] text-selectorcolor rounded-[5px] w-[fit] pl-2 pr-2  '>Express</div>
              <div className='bg-box border-outcolor border-[1px] text-selectorcolor rounded-[5px] w-[fit] pl-2 pr-2  '>Typescript</div>
              <div className='bg-box border-outcolor border-[1px] text-selectorcolor rounded-[5px] w-[fit] pl-2 pr-2  '>Vite</div>             

                            </div>
                            </div>
            <ModalBody>
              <div className='flex flex-wrap flex-col gap-5 w-[100%] justify-center items-center p-[100px] '>
              <div className='flex flex-col flex-wrap gap-[50px] w-[65ch]'>
                  <h2 className='text-[40px]'>Purpose</h2>
                  <p>This project create a fully fledged blog website on the backend, with authentication to authenticate users, database, and unit and integration testing, it was created for the purpose of integrating such backend application in different projects when needed </p>

              </div>

              <div className='flex flex-col flex-wrap gap-[50px] w-[65ch]'>
                  <h2 className='text-[40px]'>Tools</h2>
                  <p>I have decided to use Express with Node, considering that Express is a library that let you choose your own design principle (MVC,MVT...etc), it was an easy pick for that reason, such that Next has the ability to interact with client and server, in addition to the ability to create backend API'S on Next server.
                  I have also used <Link href={'https://www.vite.com'} className='font-semibold hover:text-selectorcolor underline'>Vite</Link> for making unit tests and some integration tests. For the database I have used relational database model using PostgreSQL considering this website let any authenticated user to create blogs, it was essintial to create relational database with fixed columns.
                  The authentication method that was implemented in the project is session based authentication, which is most suitable for storing sessions for temporary time in database.

                  </p>
              </div>

              <div className='flex flex-col flex-wrap gap-[50px] w-[65ch]'>
                  <h2 className='text-[40px]'>Implementation</h2>
              <p> I started by creating project folders structure to fit the Model-View-Controller model, thus i created controllers folder, models folder, routes folder, and middlewares folder, then I started making the models functions to make variety of database calls that will be used in controller. Next was implementing controllers API, each function in controller accept a request and response object to deal with client request, and return message, data, or error from database with a status code. The route folder has a route file where a router mini-application is defined under express main application, which is used to declare and define methods and connecting them with the controller.
                Testing has been done in Vite for its ease and flexiblity, I have put some important test cases, such as testing sign up method, login method, blog creation, deletion, and updating. </p>
              </div>


              <div className='flex flex-col flex-wrap gap-[50px] w-[65ch]'>
              
              <h2 className='text-[40px]'>Final Words and Future Plans</h2>
              <p> I am going to use this project as an integral part to other full-stack projects to skip re-inventing the wheel overhead. This project has soldified my expertise in Express and testing.

              </p>
            </div>
              </div>
            </ModalBody>

           
            <ModalFooter>
      
            </ModalFooter>
          </motion.div>
        )}




          </ModalContent>
      </Modal>
  )
  }


  if(id=='fullstack'){
    return(
      <Modal size={'full'} className='bg-black' isOpen={isOpen &&id=='fullstack'} onOpenChange={()=>setIsOpen({isOpen:!isOpen,id:id.length?'':'backend'})}>

          <ModalContent className='p-[40px] overflow-y-scroll'>

         
          {(onClose) => (

          <motion.div className='relative' initial={{top:'-400px',opacity:0}} animate={{top:0,opacity:1}} transition={{duration:2}}>
            <ModalHeader className="flex flex-col gap-2 text-[50px] items-center justify-center">Globe of Articles website</ModalHeader>
            <div id='btns' className='flex flex-wrap flex-col gap-10 items-center'>
            <Link href={'https://github.com/GhaziDev/Ghazi-Portfolio'}><div className='border-[1px] border-outcolor rounded-[5px] w-[150px]  p-2 gap-3 bg-white flex hover:scale-105 transition-all duration-400 text-black cursor-pointer '><FaGithub size='25px' className='text-box'></FaGithub>Source code</div></Link>
            <Link href={'https://globeofarticles.com'}><div className='border-[1px] border-outcolor rounded-[5px] w-[150px]  p-2 gap-3 bg-green-600 flex hover:scale-105 transition-all duration-400 text-white cursor-pointer '><FaGlobe size='25px' className='text-white'></FaGlobe>Website</div></Link>
            <div id='tools' className='flex flex-row flex-nowrap gap-5 w-[100%] justify-center'>
              <div className='bg-box border-outcolor border-[1px] text-selectorcolor rounded-[5px] w-[fit] pl-2 pr-2  '>Django</div>
              <div className='bg-box border-outcolor border-[1px] text-selectorcolor rounded-[5px] w-[fit] pl-2 pr-2  '>Python</div>
              <div className='bg-box border-outcolor border-[1px] text-selectorcolor rounded-[5px] w-[fit] pl-2 pr-2  '>React</div>
              <div className='bg-box border-outcolor border-[1px] text-selectorcolor rounded-[5px] w-[fit] pl-2 pr-2  '>Next</div>
              <div className='bg-box border-outcolor border-[1px] text-selectorcolor rounded-[5px] w-[fit] pl-2 pr-2  '>PostgreSQL</div>
              <div className='bg-box border-outcolor border-[1px] text-selectorcolor rounded-[5px] w-[fit] pl-2 pr-2  '>AWS</div>

             

                            </div>
                            </div>
            <ModalBody>
              <div className='flex flex-wrap flex-col gap-5 w-[100%] justify-center items-center p-[100px] '>
              <div className='flex flex-col flex-wrap gap-[50px] w-[65ch]'>
                  <h2 className='text-[40px]'>Purpose</h2>
                  <p>This was my first project, after I had created a simple CRUD application, I decided to create an official web application with variety of tools covering every end: frontend, backend, design, deployment, and database. The purpose of this is to expose myself to new challenges and to acknowledge what it means to create an official website </p>

              </div>

              <div className='flex flex-col flex-wrap gap-[50px] w-[65ch]'>
                  <h2 className='text-[40px]'>Tools</h2>
                  <p> Considering my previous experience and knowledge in Python, I rolled with Django for backend, Django differ from many other frameworks and libraries in a sense that it has a unique design principle which is Model-View-Template.
                    Template being the rendered part on the page. Also, Django uses and somehow enforces ORM, it made it easier for me at that time when I wasn't used to writing SQL queries, so everything was in python.
                    Also, I have used React initially to build a frontend, when I realised that I was missing so many optimizations and features that my website could use, such as dynamic meta data, server side rendering, and better route management, I decided to go with Next.js, I have used this framework after I deployed my website the first time, and then made some improvements.
                    I decided to design my website using ready-to-use components from NPM, and using HTML and CSS

                  </p>
              </div>

              <div className='flex flex-col flex-wrap gap-[50px] w-[65ch]'>
                  <h2 className='text-[40px]'>Implementation</h2>
              <p>
                The first thing to do as a Django developer when starting a project is to define the models, which is equivalent to creating tables in relational databases, and then migrating them, after that a typical Django developer would either write tests first or write the views, which is equivalent to routes in Express.
                Django has a REST API supporting library called Django-Rest-Framework, that made it easy for me to implement the authentication system on my website, it goes as easy as defining a list of authentications names that will be used in the project, thus, it was on very high level manner.
                Regarding the frontend, on my first deploy I used React to manage data from server, and display information, but as mentioned before I upgraded to Next and I used server side rendering, by using their API's such as getServerSideProps, to fetch data from server, and render HTML on Next.js server rather than browser, this would improve the performance of the webiste and open space to do other operations at the same time of rendering.

                 </p>
              </div>

              <div className='flex flex-col flex-wrap gap-[50px] w-[65ch]'>
              
              <h2 className='text-[40px]'>Final Words and Future Plans</h2>
              <p>I have completed this project, and I am not willing to update it anymore, I consider it a big milestone project that taught me a lot of mistakes that I had fixed in future projects.
                
              </p>
            </div>
              </div>
            </ModalBody>

           
            <ModalFooter>
    
            </ModalFooter>
          </motion.div>
        )}




          </ModalContent>
      </Modal>
  )
  }



  if(id=='ai'){
    return(
      <Modal size={'full'} className='bg-black' isOpen={isOpen &&id=='ai'} onOpenChange={()=>setIsOpen({isOpen:!isOpen,id:id.length?'':'backend'})}>

          <ModalContent className='p-[40px] overflow-y-scroll'>

         
          {(onClose) => (

          <motion.div className='relative' initial={{top:'-400px',opacity:0}} animate={{top:0,opacity:1}} transition={{duration:2}}>
            <ModalHeader className="flex flex-col gap-2 text-[50px] items-center justify-center">Personal Blog</ModalHeader>
            <div id='btns' className='flex flex-wrap flex-col gap-10 items-center'>
            <Link href={'https://github.com/GhaziDev/Ghazi-Portfolio'}><div className='border-[1px] border-outcolor rounded-[5px] w-[150px]  p-2 gap-3 bg-white flex hover:scale-105 transition-all duration-400 text-black cursor-pointer '><FaGithub size='25px' className='text-box'></FaGithub>Source code</div></Link>
            <div id='tools' className='flex flex-row flex-nowrap gap-5 w-[100%] justify-center'>
              <div className='bg-box border-outcolor border-[1px] text-selectorcolor rounded-[5px] w-[fit] pl-2 pr-2  '>Next</div>
              <div className='bg-box border-outcolor border-[1px] text-selectorcolor rounded-[5px] w-[fit] pl-2 pr-2  '>NextAuth</div>
              <div className='bg-box border-outcolor border-[1px] text-selectorcolor rounded-[5px] w-[fit] pl-2 pr-2  '>Typescript</div>
              <div className='bg-box border-outcolor border-[1px] text-selectorcolor rounded-[5px] w-[fit] pl-2 pr-2  '>TailwindCSS</div>
              <div className='bg-box border-outcolor border-[1px] text-selectorcolor rounded-[5px] w-[fit] pl-2 pr-2  '>AWS</div>
             

                            </div>
                            </div>
            <ModalBody>
              <div className='flex flex-wrap flex-col gap-5 w-[100%] justify-center items-center p-[100px] '>
              <div className='flex flex-col flex-wrap gap-[50px] w-[65ch]'>
                  <h2 className='text-[40px]'>Purpose</h2>
                  <p>This project aim to define me, my skills, experience, and projects I have made, in addition to adding a personal blog space for me to share knowledge about variety of topics! </p>

              </div>

              <div className='flex flex-col flex-wrap gap-[50px] w-[65ch]'>
                  <h2 className='text-[40px]'>Tools</h2>
                  <p>I have decided to use Next along with NextAuth and TailwindCSS, because these tools work well together, in addition to the fact that
                  I can work on every aspect of web development in one space, such that Next has the ability to interact with client and server, in addition to the ability to create backend API'S on Next server.
                  I have also used <Link href={'https://next-auth.js.org'} className='font-semibold hover:text-selectorcolor underline'>NextAuth</Link> for my admin page, this tool provide different authentication methods, I will explain in the Implementation section more about this.
                  For design I decided to go with tailwind, because it will save some space and time regarding making styles to the components, I can style every element on the HTML code rather than in a separate unorganized file.
                  Considering that I have decided to make personal blogs, I chose mongodb as my database because non relational databases give me the freedom of defining the structure of the documents whenever I wanted a change.
                  Finally, since I have some experience dealing with AWS, I decided to use tools like EC2, Elastic Beanstalk and S3 to deploy my website.

                  </p>
              </div>

              <div className='flex flex-col flex-wrap gap-[50px] w-[65ch]'>
                  <h2 className='text-[40px]'>Implementation</h2>
              <p>The first step after initial project creation, I worked on setting up the database, setting up .env file and making the repository on Github, then I decided to work on main page creation, by creating the header section and aboutme section of the website, going through this up until I finished the footer.
                  While I was creating these sections I have made a research on some UI/UX rules to make the website beautiful and user friendly, for example, I have ensured that the design pattern in the website is consistent, such that there is almost the same font family everywhere in the page, same button colors, same border radius, and consistent animation styles.
                  The final step was creating the blog section, the first thing I did was to setup the <Link href={'https://nextjs.org/docs/app/building-your-application/routing/route-handlers'} className=' underline font-semibold hover:text-selectorcolor hover:shadow-boxshadow hover:shadow-[2px_2px_2px]' >Routes Handlers</Link>, to make calls to the database and use the data in frontend.
                  After that, I had to make a blog creation page, considering this is a personal website, I created an admin route with admin API to fetch the user's credinitials on database, using one of NextAuth providers which is Email Provider, to make a seamless experience of authenticating, this method work by entering the email and submitting it, and then a database call is made to check if the email exist in the database, then a link is sent to your email to authenticate you on the website, basically it was a passwordless authentication method using magic links.
                  After the development phase has ended, it was time to deploy my application AWS, by deploying frontend code on S3, and backend code on EC2, and using Elastic Beanstalk for running the backend, while using Elastic Block Store to store the database </p>
              </div>

              <div className='flex flex-col flex-wrap gap-[50px] w-[65ch]'>
              
              <h2 className='text-[40px]'>Final Words and Future Plans</h2>
              <p>This project will add more and more features in the future, in the meanwhile I will be looking to enhance my skills to come back with better ideas for the website.
                  I have posted the github repository link above if you are interested in checking the source code.
              </p>
            </div>
              </div>
            </ModalBody>

           
            <ModalFooter>
    
            </ModalFooter>
          </motion.div>
        )}




          </ModalContent>
      </Modal>
  )
  }



}

export function BackendModal({isOpen,setIsOpen,id}:{isOpen:boolean,setIsOpen:CallableFunction,id:string}){




 



}

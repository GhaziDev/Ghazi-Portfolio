import { useState } from "react";

import { Modal, ModalContent, ModalBody, ModalFooter, ModalHeader } from "@nextui-org/react";
import Link from "next/link";
export default function FrontendModal({isOpen,setIsOpen}:{isOpen:boolean,setIsOpen:CallableFunction}){




    return(
        <Modal size={'full'} className='bg-black' isOpen={isOpen} onOpenChange={()=>setIsOpen(!isOpen)}>
            <ModalContent className='p-[40px] overflow-y-scroll'>

            {(onClose) => (
            <>
              <ModalHeader className="flex flex-col gap-2 text-[50px] items-center justify-center">Personal Blog</ModalHeader>
              <ModalBody>
                <div className='flex flex-wrap flex-col gap-5 w-[100%] justify-center items-center '>
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
                <button className='relative z-[10000]'  onClick={()=>setIsOpen(false) } >
                  Close
                </button>
                <button onClick={()=>setIsOpen(false)} >


                  Action
                </button>
              </ModalFooter>
            </>
          )}
            </ModalContent>
        </Modal>
    )



}
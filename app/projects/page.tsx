import React from 'react'
import { CardBody, CardContainer, CardItem } from '../../components/ui/3d-card'
import Image from 'next/image'
import { AnimatedTooltip } from '../../components/ui/animated-tooltip'
import Link from 'next/link'

const projects = () => {

const mernchatappstack = [

    {id: 1, name: "mongoDB",  image:"/assets/icons/mongoDB.png"},
    {id: 2, name: "ExpressJS",  image:"/assets/icons/expressjs.png"},
    {id: 3, name: "ReactJS",  image:"/assets/icons/react.png"},
    {id: 4, name: "NodeJS",  image:"/assets/icons/nodejs.jpg"},
    
    ]
    
    const promptopiastack = [
    
    {id: 1, name: "Nextjs",  image:"/assets/icons/nextjs.png"},
    {id: 2, name: "mongoDB",  image:"/assets/icons/mongoDB.png"},
    {id: 3, name: "GoogleCloudPlatform",  image:"/assets/icons/googlecloudplatform.jpg"},
    
    ]
    
    const notetakingstack = [
    
    {id: 1, name: ".NET",  image:"/assets/icons/net.png"},
    {id: 2, name: "BlazorWASM",  image:"/assets/icons/blazor.png"},
    {id: 3, name: "MS SQL Server",  image:"/assets/icons/mssqlserver.png"},
    
    ]
    
    const moviestack = [
    {id: 1, name: "Javascript",  image:"/assets/icons/javascript.png"},
    ]
    
    const hpcstack = [
    {id: 1, name: "Ubuntu",  image:"/assets/icons/ubuntuicon.png"},
    {id: 2, name: "SLURM",  image:"/assets/icons/slurm.png"},
    ]
  return (
    <>
    <div className="flex flex-col items-center" id="projects">
      
      <div className="text-5xl font-doto">SOME OF MY RECENT WORK</div>
      

    </div>
    
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 p-5 g-5">
      
      {/* -------------------------------------------------- CARD 1 --------------------------------------------------------------------------------------- */}
      <div>
      <CardContainer className="inter-var w-100">
        <CardBody className="bg-gray-50 relative group/card  dark:hover:shadow-2xl dark:hover:shadow-emerald-500/[0.1] dark:bg-black dark:border-white/[0.2] border-black/[0.1] w-auto sm:w-[20rem] h-auto rounded-xl p-6 border  ">
          <CardItem
            translateZ="50"
            className="text-xl font-bold text-neutral-600 dark:text-white"
          >
            Real Time Chat App
          </CardItem>
          <CardItem
            as="p"
            translateZ="60"
            className="text-neutral-500 text-sm max-w-sm mt-2 dark:text-neutral-300"
          >
            Real Time Chat App powered using WebSockets, Users can create accounts and communicate with other users either privately or via groups.
          </CardItem>
          <CardItem translateZ="100" className="w-full mt-4">
            <Image
              src="/assets/projects/mernchatapp.png"
              height="600"
              width="600"
              className="h-60 w-full object-contain rounded-xl group-hover/card:shadow-xl"
              alt="thumbnail"
            />
          </CardItem>
          <div className="flex justify-between items-center mt-20">
            <CardItem
              translateZ={20}
              as={Link}
              href="https://twitter.com/mannupaaji"
              target="__blank"
              className="px-4 py-2 rounded-xl text-xs font-normal dark:text-white"
            >
              <AnimatedTooltip items={mernchatappstack} />
            </CardItem>
            <CardItem
              translateZ={20}
              as={Link}
              className="px-4 py-2 rounded-xl bg-black dark:bg-white dark:text-black text-white text-xs font-bold"
              href="https://real-time-chat-app-mern-un4z.onrender.com/"
            >
              Visit
            </CardItem>
          </div>
        </CardBody>
      </CardContainer>
      
      </div>
      {/* -------------------------------------------------- CARD 2 --------------------------------------------------------------------------------------- */}
      
      <div>
      <CardContainer className="inter-var w-100">
        <CardBody className="bg-gray-50 relative group/card  dark:hover:shadow-2xl dark:hover:shadow-emerald-500/[0.1] dark:bg-black dark:border-white/[0.2] border-black/[0.1] w-auto sm:w-[20rem] h-auto rounded-xl p-6 border  ">
          <CardItem
            translateZ="50"
            className="text-xl font-bold text-neutral-600 dark:text-white"
          >
            AI-Prompt Sharing App
          </CardItem>
          <CardItem
            as="p"
            translateZ="60"
            className="text-neutral-500 text-sm max-w-sm mt-2 dark:text-neutral-300"
          >
            An App used to share useful AI-prompts between users. Users can log in using their Google Accounts and can view other users and their posts. Additionally, 
          </CardItem>
          <CardItem translateZ="100" className="w-full mt-4">
            <Image
              src="/assets/projects/promptopia_img.png"
              height="1000"
              width="1000"
              className="h-60 w-full object-contain rounded-xl group-hover/card:shadow-xl"
              alt="thumbnail"
            />
          </CardItem>
          <div className="flex justify-between items-center mt-20">
            <CardItem
              translateZ={20}
              as={Link}
              href="https://twitter.com/mannupaaji"
              target="__blank"
              className="px-4 py-2 rounded-xl text-xs font-normal dark:text-white"
            >
              <AnimatedTooltip items={promptopiastack} />
            </CardItem>
            <CardItem
              translateZ={20}
              as={Link}
              href="https://ai-prompt-tool-inky.vercel.app/"
              className="px-4 py-2 rounded-xl bg-black dark:bg-white dark:text-black text-white text-xs font-bold"
            >
              Visit
            </CardItem>
          </div>
        </CardBody>
      </CardContainer>
      
      </div>

      {/* -------------------------------------------------- CARD 3 --------------------------------------------------------------------------------------- */}
      
      <div>
      <CardContainer className="inter-var w-100">
        <CardBody className="bg-gray-50 relative group/card  dark:hover:shadow-2xl dark:hover:shadow-emerald-500/[0.1] dark:bg-black dark:border-white/[0.2] border-black/[0.1] w-auto sm:w-[20rem] h-auto rounded-xl p-6 border  ">
          <CardItem
            translateZ="50"
            className="text-xl font-bold text-neutral-600 dark:text-white"
          >
            Note taking App
          </CardItem>
          <CardItem
            as="p"
            translateZ="60"
            className="text-neutral-500 text-sm max-w-sm mt-2 dark:text-neutral-300"
          >
            Full stack Note taking App build using Blazor WebAseembly. Users can create, delete, categorise and update notes. App also has text-to-Speech and Limited Translation capabilities.
          </CardItem>
          <CardItem translateZ="100" className="w-full mt-4">
            <Image
              src="/assets/projects/notetakingapp_img.jpeg"
              height="1000"
              width="1000"
              className="h-60 w-full object-contain rounded-xl group-hover/card:shadow-xl"
              alt="thumbnail"
            />
          </CardItem>
          <div className="flex justify-between items-center mt-20">
            <CardItem
              translateZ={20}
              as={Link}
              href="https://twitter.com/mannupaaji"
              target="__blank"
              className="px-4 py-2 rounded-xl text-xs font-normal dark:text-white"
            >
              <AnimatedTooltip items={notetakingstack} />
            </CardItem>
            <CardItem
              translateZ={20}
              as={Link}
              href="https://github.com/Wertasile/NoteTakingAppWithLogin"
              className="px-4 py-2 rounded-xl bg-black dark:bg-white dark:text-black text-white text-xs font-bold"
            >
              GitHub
            </CardItem>
          </div>
        </CardBody>
      </CardContainer>
      
      </div>

      {/* -------------------------------------------------- CARD 4 --------------------------------------------------------------------------------------- */}
      
      <div>
      <CardContainer className="inter-var w-100">
        <CardBody className="bg-gray-50 relative group/card  dark:hover:shadow-2xl dark:hover:shadow-emerald-500/[0.1] dark:bg-black dark:border-white/[0.2] border-black/[0.1] w-auto sm:w-[20rem] h-auto rounded-xl p-6 border  ">
          <CardItem
            translateZ="50"
            className="text-xl font-bold text-neutral-600 dark:text-white"
          >
            Movie Catalogue App
          </CardItem>
          <CardItem
            as="p"
            translateZ="60"
            className="text-neutral-500 text-sm max-w-sm mt-2 dark:text-neutral-300"
          >
            Movie CAtalogue App built using TMDB API. 
          </CardItem>
          <CardItem translateZ="100" className="w-full mt-4">
            <Image
              src="/assets/projects/movie_img.png"
              height="1000"
              width="1000"
              className="h-60 w-full object-contain rounded-xl group-hover/card:shadow-xl"
              alt="thumbnail"
            />
          </CardItem>
          <div className="flex justify-between items-center mt-20">
            <CardItem
              translateZ={20}
              
              target="__blank"
              className="px-4 py-2 rounded-xl text-xs font-normal dark:text-white"
            >
              <AnimatedTooltip items={moviestack} />
            </CardItem>
            <CardItem
              translateZ={20}
              as={Link}
              className="px-4 py-2 rounded-xl bg-black dark:bg-white dark:text-black text-white text-xs font-bold"
              href="https://wertasile.github.io/Movie-Web-Catalogue.github.io/"
            >
              Visit
            </CardItem>
          </div>
        </CardBody>
      </CardContainer>
      
      </div>

      {/* -------------------------------------------------- CARD 5 --------------------------------------------------------------------------------------- */}
      
      <div>
      <CardContainer className="inter-var w-100">
        <CardBody className="bg-gray-50 relative group/card  dark:hover:shadow-2xl dark:hover:shadow-emerald-500/[0.1] dark:bg-black dark:border-white/[0.2] border-black/[0.1] w-auto sm:w-[20rem] h-auto rounded-xl p-6 border  ">
          <CardItem
            translateZ="50"
            className="text-xl font-bold text-neutral-600 dark:text-white"
          >
            High Performance Computer
          </CardItem>
          <CardItem
            as="p"
            translateZ="60"
            className="text-neutral-500 text-sm max-w-sm mt-2 dark:text-neutral-300"
          >
            High Performance Computer built using 4 motherboards, which could perform parallel tasks via SLURM.
          </CardItem>
          <CardItem translateZ="100" className="w-full mt-4">
            <Image
              src=""
              height="1000"
              width="1000"
              className="h-60 w-full object-cover rounded-xl group-hover/card:shadow-xl"
              alt="thumbnail"
            />
          </CardItem>
          <div className="flex justify-between items-center mt-20">
            <CardItem
              translateZ={20}
              as={Link}
              href="https://twitter.com/mannupaaji"
              target="__blank"
              className="px-4 py-2 rounded-xl text-xs font-normal dark:text-white"
            >
              <AnimatedTooltip items={hpcstack} />
            </CardItem>
            <CardItem
              translateZ={20}
              as={Link}
              href="https://github.com/Wertasile/HPC-Cluster"
              className="px-4 py-2 rounded-xl bg-black dark:bg-white dark:text-black text-white text-xs font-bold"
            >
              Visit
            </CardItem>
          </div>
        </CardBody>
      </CardContainer>
      
      </div>
      

    </div>
    </>
  )
}

export default projects
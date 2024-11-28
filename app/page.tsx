"use client"

import React from "react";
import "../styles/globals.css";
import Image from "next/image";
import Link from "next/link";
import { CardBody, CardContainer, CardItem } from "../components/ui/3d-card";
import { AnimatedTooltip } from "../components/ui/animated-tooltip";
import { TypewriterEffectSmooth } from "../components/ui/typewriter-efect";
import { Vortex } from "../components/ui/vortex";
import { TextGenerateEffect } from "../components/ui/text-generate-effect";
import { FloatingNav } from "../components/ui/floating-navbar";
import { BentoGrid, BentoGridItem } from "../components/ui/bento-grid";
import "../styles/globals.css";
import { IconHome, IconMessage, IconUser } from "@tabler/icons-react";
import {
  IconArrowWaveRightUp,
  IconBoxAlignRightFilled,
  IconBoxAlignTopLeft,
  IconClipboardCopy,
  IconFileBroken,
  IconSignature,
  IconTableColumn,
} from "@tabler/icons-react";
import Uppermenu from "../components/Uppermenu";
import { motion, useScroll, useSpring, Variants } from "framer-motion";
//import aa from "../public/assets/images/"

const transition = { duration: 4, yoyo: Infinity, ease: "easeInOut" };



const introduction = "Hi, I am Ahmed"
const motivation = "Aspiring FrontEnd Developer"
const currentJob = "IT Analyst"

const introwords = [
  {
    text: "Hi, ",
  },
  {
    text: "I",
  },
  {
    text: "am",
  },
  {
    text: "Ahmed.",
    className: "text-blue-500 dark:text-blue-500",
  }
];

const navItems = [
  {
    name: "Home",
    link: "/",
    icon: <IconHome className="h-4 w-4 text-neutral-500 dark:text-white" />,
  },
  {
    name: "About",
    link: "#about",
    icon: <IconUser className="h-4 w-4 text-neutral-500 dark:text-white" />,
  },
  {
    name: "Projects",
    link: "#projects",
    icon: (
      <IconMessage className="h-4 w-4 text-neutral-500 dark:text-white" />
    ),
  },
  {
    name: "Contact",
    link: "#contact",
    icon: (
      <IconMessage className="h-4 w-4 text-neutral-500 dark:text-white" />
    ),
  },
];

// -------------------- TECH STACKS ----------------------//
const Skeleton = () => (
  <div className="flex flex-1 w-full h-full min-h-[6rem] rounded-xl bg-gradient-to-br from-neutral-200 dark:from-neutral-900 dark:to-neutral-800 to-neutral-100"></div>
);

const ProgLang = () => (
  <div className="p-3 flex w-full h-full justify-around bg-[#2E236C] rounded-xl place-items-center">
    {/* <div>My Tech Skills which constantly improvce</div>
    <div className="flex flex-row gap-2"> */}
      <div className="flex flex-col gap-2">
        <div></div>
        <div className="skillbox">Javascript</div>
        <div className="skillbox">Java</div>
        <div className="skillbox">Python</div>

      </div>
      <div className="flex flex-col gap-5">
        <div></div>
        <div className="skillbox">C#</div>
        <div className="skillbox">C++</div>
        <div className="skillbox">SQL</div>
        
      </div>

      
    {/* </div> */}
  </div>
);

const Frameworks = () => (
  <div className="p-3 flex w-full h-full justify-around bg-[#2E236C] rounded-xl place-items-center">
    {/* <div>My Tech Skills which constantly improvce</div>
    <div className="flex flex-row gap-2"> */}
      <div className="flex flex-col gap-2">
        <div></div>
        <div className="skillbox">React</div>
        <div className="skillbox">Next.js</div>
        <div className="skillbox">.NET</div>

      </div>
      <div className="flex flex-col gap-5">
        <div></div>
        <div className="skillbox">Tailwind</div>
        <div className="skillbox">Node.js</div>
        <div className="skillbox">Blazor</div>
      </div>

      
    {/* </div> */}
  </div>
);

const DatabasesTools = () => (
  <div className="p-3 flex w-full h-full justify-around bg-[#2E236C] rounded-xl place-items-center">
    {/* <div>My Tech Skills which constantly improvce</div>
    <div className="flex flex-row gap-2"> */}
      <div className="flex flex-col gap-2">
        <div></div>
        <div className="skillbox">Git</div>
        <div className="skillbox">Android Studio</div>
        <div className="skillbox">Oracle APEX</div>

      </div>
      <div className="flex flex-col gap-5">
        <div></div>
        <div className="skillbox">MongoDB</div>
        <div className="skillbox">MS SQL Server</div>
        
      </div>

      
    {/* </div> */}
  </div>
);



const OperatingSystems = () => (
  <div className="p-3 flex w-full h-full justify-around bg-[#2E236C] rounded-xl place-items-center">
    {/* <div>My Tech Skills which constantly improvce</div>
    <div className="flex flex-row gap-2"> */}
      <div className="flex flex-col gap-2">
        <div></div>
        <div className="skillbox">Ubuntu</div>
        <div className="skillbox">Linux</div>
        

      </div>
      <div className="flex flex-col gap-5">
        <div></div>
        <div className="skillbox">SLURM</div>
      </div>

      
    {/* </div> */}
  </div>
);

const items = [
  {
    title: "Programming Languages",
    
    header: <ProgLang />,
    
  },
  {
    title: "Frameworks and Libraries",
    
    header: <Frameworks />,
    
  },
  {
    title: "Databases and OTher Tools",
    
    header: <DatabasesTools />,
    
  },
  {
    title: "Opearating Systems",
    
    header: <OperatingSystems />,
    
  },
  // {
  //   title: "The Joy of Creation",
  //   description: "Experience the thrill of bringing ideas to life.",
  //   header: <Skeleton />,
  //   icon: <IconBoxAlignTopLeft className="h-4 w-4 text-neutral-500" />,
  // },
  // {
  //   title: "The Spirit of Adventure",
  //   description: "Embark on exciting journeys and thrilling discoveries.",
  //   header: <Skeleton />,
  //   icon: <IconBoxAlignRightFilled className="h-4 w-4 text-neutral-500" />,
  // },
];



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
// -------------------- BACKGROUND --------------------//

const draw = {
  hidden: { pathLength: 0, opacity: 0 },
  visible: (i) => {
    const delay = 1 + i * 0.5;
    return {
      pathLength: 1,
      opacity: 1,
      transition: {
        pathLength: { delay, type: "spring", duration: 1.5, bounce: 0 },
        opacity: { delay, duration: 0.01 }
      }
    };
  }
};

// -------------------- CARDS ------------------------//
interface Props {
  image: string;
  hueA: number;
  hueB: number;
}

const cardVariants: Variants = {
  offscreen: {
    y: 400,
  },
  onscreen: {
    y: 50,
    rotate: -10,
    transition: {
      type: "spring",
      bounce: 0.4,
      duration: 0.8,
    },
  },
};

const hue = (h: number) => `hsl(${h}, 100%, 50%)`;

function Card({ image, hueA, hueB }: Props) {
  const background = `linear-gradient(306deg, ${hue(hueA)}, ${hue(hueB)})`;

  return (
    <motion.div
      className="card-container"
      initial="offscreen"
      whileInView="onscreen"
      viewport={{ once: true, amount: 0.8 }}
    >
      {/*<div className="splash" style={{ background }} />  this is the card backgrounds*/} 
      <motion.div className="card" variants={cardVariants}>
        <Image
            src={image}
            alt="Card image"
            width={128}
            height={128}
            className="rounded-full"
          />
        </motion.div>
    </motion.div>
  );
}


  // CARD TEXT, HUE1 AND HUE 2
const food: [string, number, number][] = [
  ["/assets/images/reactpng.png", 10, 10],
  ["/assets/images/reactpng.png", 20, 40],
  ["/assets/images/reactpng.png", 60, 90],
  ["/assets/images/reactpng.png", 80, 120],
  ["/assets/images/reactpng.png", 100, 140],
  ["/assets/images/reactpng.png", 205, 245],
  ["/assets/images/reactpng.png", 260, 290],
  ["/assets/images/reactpng.png", 290, 320],
  ["/assets/images/reactpng.png", 290, 320],
];

// -------------------- END CARDS ------------------------//

export default function Home() {

  

  {/* ---------------------------- variables for scroll bar -------------------------------------------------------- */}
  const { scrollYProgress } = useScroll();

  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });


  return (

    
    

    <div>

  <Vortex>

    <Uppermenu></Uppermenu>
    <FloatingNav navItems={navItems} />

      
    {/* ---------------------------- projects -------------------------------------------------------- */}

    {/* <Uppermenu></Uppermenu> */}

    {/* ---------------------------- introduction -------------------------------------------------------- */}


      
      <div className="flex flex-col p-20 h-full items-center h-screen">
        <div>
          <Image
              src="/assets/images/aremojicircular.jpg"
              alt="Profile"
              width={256}
              height={256}
              className="rounded-full"
            />
        </div>
        <div className="flex flex-col items-center">
            {/* <TextGenerateEffect words={introduction} />
            <TextGenerateEffect words={motivation} duration={1.5} />
            <TextGenerateEffect words={currentJob} duration={2} /> */}
            <TypewriterEffectSmooth words={introwords} />
            <div>Aspiring FrontEnd Developer</div>
            <div>IT Support Analyst at the University of Greenwich</div>
        </div> 


        {/* <div className="text-base">IT Support Analyst at University of Greenwich</div>
        <div className="text-base">Computer Engineering Graduate from the University of Greenwich</div> */}

      
      </div>   
      </Vortex>


      {/* ---------------------------- scroll bar -------------------------------------------------------- */}

      <motion.div className="progress-bar" style={{ scaleX }} />
    
    {/* ---------------------------- skills-card -------------------------------------------------------- */}

    {/* <div className="grid p-10 grid-cols-4 sm:grid-cols-8 gap-y-20">
      {food.map(([image, hueA, hueB]) => (
      <Card image={image} hueA={hueA} hueB={hueB} key={image} />
      ))}
    </div> */}
    <div className="flex flex-col items-center" id="about">
    <div className="text-5xl">Skills</div>
    <BentoGrid className="max-w-4xl p-5 mx-auto">
      {items.map((item, i) => (
        <BentoGridItem
          key={i}
          title={item.title}
          
          header={item.header}
          
          className={i === 0 || i === 6 ? "md:col-span-" : ""}   // wahtever is next to span value means the iten with index of that number will span that many grid blocks
        />
      ))}
    </BentoGrid>
    </div>
    

    
    {/* ---------------------------- projects -------------------------------------------------------- */}
    <div className="flex flex-col items-center" id="projects">
      
      <div className="text-5xl">Some of my recent projects</div>
      

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
    
    </div>
    
  );
}

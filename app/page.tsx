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
import Router
 from "next/router";
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
    className: "text-red-500",
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
    
    
    

    
    {/* ---------------------------- projects -------------------------------------------------------- */}
    
    
    </div>
    
  );
}

"use client"

import React from "react";
import "../styles/globals.css";
import Image from "next/image";
import { TypewriterEffectSmooth } from "../components/ui/typewriter-efect";
import { Vortex } from "../components/ui/vortex";

import "../styles/globals.css";

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


export default function Home() {

  return (

    <div>

  <Vortex>

      
      <div className="flex flex-col p-20 h-full items-center h-screen fadeInUp-animation">
        <div>
          <Image
              src="/assets/images/aremojicircular.jpg"
              alt="Profile"
              width={256}
              height={256}
              className="rounded-full"
            />
        </div>
        <div className="flex flex-col items-center " >
            <TypewriterEffectSmooth words={introwords} />
            <div className="text-3xl">Aspiring FrontEnd Developer</div>
            <div className="text-3xl">IT Support Analyst at the University of Greenwich</div>
            <div className="text-3xl">Contact Me!</div>
            <div className="flex flex-row text-6xl">
              <a href="https://www.linkedin.com/in/ahmed-mohamed-haniffa-arfan-989267202/"><i className="bi bi-linkedin p-5"></i></a>
              <a href="https://github.com/Wertasile"><i className="bi bi-github p-5"></i></a>
            </div>
        </div> 

      </div>   
      </Vortex>


    </div>
    
  );
}

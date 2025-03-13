"use client"

import React, { useState } from 'react'
import Image from 'next/image'
import Link from 'next/link'


const work = () => {

    const [image, setImage] = useState("mern-chat-app")
    
    const [fade, setFade] = useState(false)

    const handleImageChange = (imgurl) => {
        setFade(false);
        setTimeout(() => {
            setImage(imgurl)
            setFade(true)
        }, 250)
    }

  return (
    <>
    <div className="flex flex-col items-center" id="/assets/projects/mernchatapp.png">
      <div className="text-5xl font-doto p-4 fadeInUp-animation">SOME OF MY RECENT WORK</div>
    </div>

    <div className="grid lg:grid-cols-2 gap-4 p-4 fadeInUp-animation">
        {/* LEFT SIDE - WEBSITE IMAGE*/}
        <div className=''>
            <img src={image} className={`transition-opacity duration-500 ease-in-out ${fade ? "opacity-100" : "opacity-0"}`}/>
        </div>
        {/* RIGHT SIDE - LIST OF PROJECTS*/}
        <div className='lg:text-2xl font-inter'>
            
            <div onMouseEnter={() => handleImageChange("/assets/projects/mernchatapp.png")} className='object-cover py-4 border-b-4 border-indigo-500'>
                <Link href="/work/mernchatapp">MERN CHAT APP</Link>
            </div>
            <div onMouseEnter={() => handleImageChange("/assets/projects/mernchatapp.png")} className='py-4 border-b-4 border-indigo-500'>
                <Link href="/work/hpc">HIGH PERFORMANCE COMPUTER</Link>
            </div>
            <div onMouseEnter={() => handleImageChange("/assets/projects/mernchatapp.png")} className='py-4 border-b-4 border-indigo-500'>
                <Link href="/work/awsapi">AWS API</Link>AWS API
            </div>
            <div onMouseEnter={() => handleImageChange("/assets/projects/notetakingapp_img.jpeg")} className='py-4 border-b-4 border-indigo-500'>
                <Link href="/work/notetakingapp">BLAZOR WASM NOTE TAKING APP</Link>
            </div>
            <div onMouseEnter={() => handleImageChange("/assets/projects/promptopia_img.png")} className='py-4 border-b-4 border-indigo-500'>
                <Link href="/work/promptopia">PROMPTOPIA</Link>
            </div>
            <div onMouseEnter={() => handleImageChange("/assets/projects/movie_img.png")} className='py-4 border-b-4 border-indigo-500'>
                <Link href="/work/movieapp">MOVIE APP</Link>
            </div>
            

            
            
            
        </div>
    </div>

    </>
    
  )
}

export default work
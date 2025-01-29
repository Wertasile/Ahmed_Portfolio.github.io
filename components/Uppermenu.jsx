"use client"

import React, { useState } from 'react'
import "../styles/globals.css";
import { IconMenu2 } from '@tabler/icons-react';
import Link from 'next/link';
import Modal from './Modal'
import { useRouter } from 'next/navigation';

const Uppermenu = () => {

  const [modal, setModal] = useState(false)
  const [contactModal, setContactModal] = useState(false)



  return (
    <>
    <div className="flex p-5 g-5 sm:p-5 justify-between h-18 font-inter">
        <Link className='font-doto' href="/" >Ahmed Portfolio </Link>
        <div className='hidden sm:flex sm:justify-between md:w-2/3 lg:w-1/3'>
          <Link className="hover:border-solid hover:border-white hover:border-b-2 p-2" href="/">HOME</Link>
          <Link className="hover:border-solid hover:border-white hover:border-b-2 p-2" href="about">ABOUT ME</Link>
          <Link className="hover:border-solid hover:border-white hover:border-b-2 p-2" href="projects">PROJECTS</Link>
          <button className="hover:border-solid hover:border-white hover:border-b-2 p-2">CONTACT</button>
          {/* <button className="hover:border-solid hover:border-white hover:border-b-2 p-2" onClick={() => setContactModal(true)}>CONTACT</button> */}
        </div>
        <div className='sm:hidden'>
          <IconMenu2 stroke={2} onClick={() => setModal(!modal)}/>
        </div>
        
    
    </div>

    <Modal open={contactModal} onClose={() => setContactModal(false)}>
    </Modal>

    <div>
    
      
        </div>
    <div className='fixed items-end'>
      
        {modal ? 
          (<div className=' flex flex-col items-end w-screen p-2 relative z-10'>
            <Link href="#about" className='duration-500 transition-shadow shadow-md shadow-orange-400 hover:shadow-md hover:shadow-teal-400'>ABOUT ME</Link>
            <Link href="#projects">PROJECTS</Link>
            <Button className="duration-500 transition-shadow shadow-md shadow-orange-400 hover:shadow-xl hover:shadow-teal-400">CLICKME</Button> 
            {/* <Link href="" className='w-1/4' onClick={() => setModal(!modal)}>CONTACT</Link> */}
            </div>
          ):
          (<div>

          </div>
          )
        }


      
    </div>
    <div>
      
    </div>
    
    </>
    
  )
}

export default Uppermenu
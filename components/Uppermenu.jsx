"use client"

import React, { useState } from 'react'
import "../styles/globals.css";
import { IconMenu2 } from '@tabler/icons-react';

const Uppermenu = () => {

  const [modal, setModal] = useState(false)

  const openModal = () => {
    setModal(!modal)
  }
  return (
    <>
    <div className="flex p-5 g-5 justify-between h-18 font-inter">
        <div className=''>FIRST APP </div>
        <div className='hidden sm:flex sm:justify-between md:w-2/3 lg:w-1/3'>
          <div>HOME</div>
          <div>ABOUT ME</div>
          <div>PROJECTS</div>
          <div>CONTACT</div>
        </div>
        <div className='sm:hidden'>
          <IconMenu2 stroke={2} onClick={openModal}/>
        </div>
        
    </div>
    <div>
      
        {modal ? 
          (<div className='flex flex-col items-end p-5'>
            <div className='w-1/4'>ABOUT ME</div>
            <div className='w-1/4'>PROJECTS</div>
            <div className='w-1/4'>CONTACT</div>
            </div>
          ):
          (<div>

          </div>
          )
        }
      
    </div>
    
    </>
    
  )
}

export default Uppermenu
import React from 'react'
import "../styles/globals.css";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons';
import { faEnvelope } from '@fortawesome/free-regular-svg-icons';

const Modal = ({open, onClose, children}) => {
  if (!open) return null
  return (
    <div className='flex flex-row transition-colors fixed inset-0 bg-gray-500 bg-opacity-20 top-0 h-full w-full items-center justify-center' onClick={onClose}>
      {/* modal */}
      <div onClick={(e) => e.stopPropagation()} className='z-10 flex flex-col justify-between rounded-xl bg-black h-64 w-64 p-3' >
        <div className='self-end top-2 right-2' onClick={onClose}>
          X
        </div>
        <div className=''>
          GET IN TOUCH WITH ME !
        </div>
        <div className='flex flex-row gap-2 self-center'>
          <div><FontAwesomeIcon icon={faGithub} size="2xl"/></div>
          <div><FontAwesomeIcon icon={faLinkedin} size="2xl"/></div>
          <div><FontAwesomeIcon icon={faEnvelope} size="2xl"/></div>
        </div>
        
      </div>
       
    </div>
  )
}

export default Modal
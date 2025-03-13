import React from 'react'
import Projectdetails from '../../../components/projectdetails'
import { AnimatedTooltip } from '../../../components/ui/animated-tooltip'

const projectname = "mernchatapp"
const projectdescription = "Real Time Chat App powered using WebSockets, Users can create accounts and communicate with other users either privately or via groups."
const mernchatappstack = [
    {id: 1, name: "mongoDB",  image:"/assets/icons/mongoDB.png"},
    {id: 2, name: "ExpressJS",  image:"/assets/icons/expressjs.png"},
    {id: 3, name: "ReactJS",  image:"/assets/icons/react.png"},
    {id: 4, name: "NodeJS",  image:"/assets/icons/nodejs.jpg"},
    ]

const mernchatapp = () => {
  return (
    <div>
      <div className='grid justify-items-center'>
        <div>
          <img className='sm:max-h-96 rounded-lg fadeInUp-animation' src='/assets/projects/mernchatapp.png'/>
        </div>
        
      </div>
    <div>
        <Projectdetails projectname={projectname} projectdescription={projectdescription}>
            <div>
                <AnimatedTooltip items={mernchatappstack} />
            </div>
        </Projectdetails>
    </div>
    </div>
    
    
  )
}

export default mernchatapp
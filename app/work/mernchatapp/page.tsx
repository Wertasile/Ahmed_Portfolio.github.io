import React from 'react'
import Projectdetails from '../../../components/projectdetails'
import { AnimatedTooltip } from '../../../components/ui/animated-tooltip'

const projectname = "mernchatapp"
const projectdescription = "This project is a real-time Chatting App which was built using the MERN Stack. The FrontEnd UI that the user communicates with is built using React, a Javascript Framework. All Data is stored in a MongoDB database, which is a NoSQL Database. ExpressJS framework is used to facilitate the building of REST APIs, which allow from the communication between our FrontEnd (Client) and BackEnd (Database). The Application is powered using Node.js Rutime and Node Package Manager is used to get the required libraries to build an Application powered by NodeJS."
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
          <img className='sm:max-h-96 rounded-lg fadeInUp-animation' src='/assets/projects/mern-chat-app.jpg'/>
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
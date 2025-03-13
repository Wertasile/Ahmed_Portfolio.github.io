import React from 'react'
import Projectdetails from '../../../components/projectdetails'
import { AnimatedTooltip } from '../../../components/ui/animated-tooltip'

const projectname = "AI-Prompt Sharing App"
const projectdescription = "An App used to share useful AI-prompts between users. Users can log in using their Google Accounts and can view other users and their posts. Additionally,"
const notetakingstack = [
    
  {id: 1, name: ".NET",  image:"/assets/icons/net.png"},
  {id: 2, name: "BlazorWASM",  image:"/assets/icons/blazor.png"},
  {id: 3, name: "MS SQL Server",  image:"/assets/icons/mssqlserver.png"},
  
  ]

const promptopia = () => {
  return (
    <div className=''>
      <div className='grid justify-items-center'>
        <div>
          <img className='sm:max-h-96 rounded-lg fadeInUp-animation' src='/assets/projects/promptopia_img.png'/>
        </div>
        
      </div>
      <div className=''>
        <Projectdetails projectname={projectname} projectdescription={projectdescription}>
          <div>
             <AnimatedTooltip items={notetakingstack} />
          </div>
        </Projectdetails>
      </div>
        
    </div>
    
  )
}

export default promptopia
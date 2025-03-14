import React from 'react'
import Projectdetails from '../../../components/projectdetails'
import { AnimatedTooltip } from '../../../components/ui/animated-tooltip'

const projectname = "Note taking App"
const projectdescription = "Full stack Note taking App build using Blazor WebAseembly. FrontEnd is built using Blazor .NET 7. The Users data is stored in a MS SQL Server and a REST API controller has been built so that users can create, delete, categorise and update notes. App also has text-to-Speech and Limited Translation capabilities."
const notetakingstack = [
    
  {id: 1, name: ".NET",  image:"/assets/icons/net.png"},
  {id: 2, name: "BlazorWASM",  image:"/assets/icons/blazor.png"},
  {id: 3, name: "MS SQL Server",  image:"/assets/icons/mssqlserver.png"},
  
  ]

const notetakingapp = () => {
  return (
    <div>
      <div className='grid justify-items-center'>
        <div>
          <img className='sm:max-h-96 rounded-lg fadeInUp-animation' src='/assets/projects/notetakingapp_img.jpeg'/>
        </div>
        
      </div>
      <Projectdetails projectname={projectname} projectdescription={projectdescription}>
        <div>
          <AnimatedTooltip items={notetakingstack} />
        </div>
      </Projectdetails>
    </div>
    
  )
}

export default notetakingapp
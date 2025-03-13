import React from 'react'
import Projectdetails from '../../../components/projectdetails'
import { AnimatedTooltip } from '../../../components/ui/animated-tooltip'

const projectname = "Note taking App"
const projectdescription = "Full stack Note taking App build using Blazor WebAseembly. Users can create, delete, categorise and update notes. App also has text-to-Speech and Limited Translation capabilities."
const notetakingstack = [
    
  {id: 1, name: ".NET",  image:"/assets/icons/net.png"},
  {id: 2, name: "BlazorWASM",  image:"/assets/icons/blazor.png"},
  {id: 3, name: "MS SQL Server",  image:"/assets/icons/mssqlserver.png"},
  
  ]

const hpc = () => {
  return (
    <div>
        <Projectdetails projectname={projectname} projectdescription={projectdescription}>
            <div>
                <AnimatedTooltip items={notetakingstack} />
            </div>
        </Projectdetails>
    </div>
    
  )
}

export default hpc
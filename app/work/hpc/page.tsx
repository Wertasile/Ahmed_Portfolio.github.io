import React from 'react'
import Projectdetails from '../../../components/projectdetails'
import { AnimatedTooltip } from '../../../components/ui/animated-tooltip'

const projectname = "High Performance Computer Cluster"
const projectdescription = "High Performance Computer built using 4 motherboards, which could perform parallel tasks via SLURM."
const hpcstack = [
  {id: 1, name: "Ubuntu",  image:"/assets/icons/ubuntuicon.png"},
  {id: 2, name: "SLURM",  image:"/assets/icons/slurm.png"},
  ]

const hpc = () => {
  return (
    <div>
      <div className='grid justify-items-center'>
        <div>
          <img className='sm:max-h-96 rounded-lg fadeInUp-animation' src='/assets/projects/promptopia_img.png'/>
        </div>
        
      </div>
        <Projectdetails projectname={projectname} projectdescription={projectdescription}>
            <div>
                <AnimatedTooltip items={hpcstack} />
            </div>
        </Projectdetails>
    </div>
    
  )
}

export default hpc
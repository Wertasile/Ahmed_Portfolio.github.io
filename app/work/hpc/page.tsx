import React from 'react'
import Projectdetails from '../../../components/projectdetails'
import { AnimatedTooltip } from '../../../components/ui/animated-tooltip'

const projectname = "High Performance Computer Cluster"
const projectdescription = "The High Performance Computer cluster involves using 4 interconnected computers in a cluster to perform complex parallel computations. These clusters are nodes which are managed by SLURM Workload Manager to optimise resource usage. A DHCP Network is setup so that the head node can communicate with the other nodes. A TFTP server and NFS server are also setup so that the relevant files such as bootloader, image and kernel files can be loaded into computer nodes."
const hpcstack = [
  {id: 1, name: "Ubuntu",  image:"/assets/icons/ubuntuicon.png"},
  {id: 2, name: "SLURM",  image:"/assets/icons/slurm.png"},
  ]

const hpc = () => {
  return (
    <div>
      <div className='grid justify-items-center'>
        <div>
          <img className='sm:max-h-96 rounded-lg fadeInUp-animation' src='/assets/projects/hpc.jpeg'/>
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
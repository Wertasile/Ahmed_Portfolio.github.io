import React from 'react'

const Projectdetails = ({projectname, projectdescription, children}) => {
  return (
    <div className='md:px-20 px-3 py-8 fadeInUp-animation'>
        <div className='text-4xl font-doto p-4 gap-y-3'>{projectname}</div>
        <div className='sm:flex flex-row'>
            <div className='flex flex-col items-center gap-y-5 basis-1/3'>
                <div className='flex  flex-row basis-2/3'>
                    {children}
                </div>   
                <div>
                    <button className="buttons">VISIT WEBSITE</button>
                </div>
                <div className='basis-1/2'>
                    <button className="buttons">VISIT GITHUB</button>
                </div>
            </div>
            <div className='basis-2/3 text-2xl'>
                {projectdescription}
            </div>
        </div>
        
        

    </div>
    
  )
}

export default Projectdetails
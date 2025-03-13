import React from 'react'

const Projectdetails = ({projectname, projectdescription, children}) => {
  return (
    <div className='md:px-20 px-3 py-5 fadeInUp-animation'>
        <div className='text-4xl font-doto p-4 g-3'>{projectname}</div>
        <div className='sm:flex flex-row'>
            <div className='flex flex-col gap-y-3 basis-1/3'>
                
                
                    {/* FIRST ROW*/}
                    <div className='flex justify-center flex-row'>
                        <div className='basis-1/3'>
                            TECH STACK
                        </div>
                        <div className='flex justify-center flex-row basis-2/3'>
                            {children}
                        </div>
                    </div>
                    {/* SECOND ROW*/}
                    <div className='flex justify-around flex-row'>
                        <div className='basis-1/2'>
                            <button className="flex flex-row rounded-full p-2 bg-gray-400">
                                <div>
                                    <img src="/assets/icons/github.png" height="5px"/>
                                </div>
                                <div>
                                    GITHUB
                                </div>
                                
                            </button>
                        </div>
                        <div className='basis-1/2'>
                            <button className="rounded-full bg-gray-400">VISIT WEBSITE</button>
                        </div>
                    </div>
                    
                
                
            </div>
            
            <div className='basis-2/3'>
                {projectdescription}
            </div>
        </div>
        
        

    </div>
    
  )
}

export default Projectdetails
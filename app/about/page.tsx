import React from 'react'
import { BentoGrid, BentoGridItem } from '../../components/ui/bento-grid';

const About = () => {

    const ProgLang = () => (
        <div className="p-3 flex w-full h-full justify-around bg-[#2E236C] rounded-xl place-items-center">
          {/* <div>My Tech Skills which constantly improvce</div>
          <div className="flex flex-row gap-2"> */}
            <div className="flex flex-col gap-2">
              <div></div>
              <div className="skillbox">Javascript</div>
              <div className="skillbox">Java</div>
              <div className="skillbox">Python</div>
      
            </div>
            <div className="flex flex-col gap-5">
              <div></div>
              <div className="skillbox">C#</div>
              <div className="skillbox">C++</div>
              <div className="skillbox">SQL</div>
              
            </div>
      
            
          {/* </div> */}
        </div>
      );
      
      const Frameworks = () => (
        <div className="p-3 flex w-full h-full justify-around bg-[#2E236C] rounded-xl place-items-center">
          {/* <div>My Tech Skills which constantly improvce</div>
          <div className="flex flex-row gap-2"> */}
            <div className="flex flex-col gap-2">
              <div></div>
              <div className="skillbox">React</div>
              <div className="skillbox">Next.js</div>
              <div className="skillbox">.NET</div>
      
            </div>
            <div className="flex flex-col gap-5">
              <div></div>
              <div className="skillbox">Tailwind</div>
              <div className="skillbox">Node.js</div>
              <div className="skillbox">Blazor</div>
            </div>
      
            
          {/* </div> */}
        </div>
      );
      
      const DatabasesTools = () => (
        <div className="p-3 flex w-full h-full justify-around bg-[#2E236C] rounded-xl place-items-center">
          {/* <div>My Tech Skills which constantly improvce</div>
          <div className="flex flex-row gap-2"> */}
            <div className="flex flex-col gap-2">
              <div></div>
              <div className="skillbox">Git</div>
              <div className="skillbox">Android Studio</div>
              <div className="skillbox">Oracle APEX</div>
      
            </div>
            <div className="flex flex-col gap-5">
              <div></div>
              <div className="skillbox">MongoDB</div>
              <div className="skillbox">MS SQL Server</div>
              
            </div>
      
            
          {/* </div> */}
        </div>
      );
      
      
      
      const OperatingSystems = () => (
        <div className="p-3 flex w-full h-full justify-around bg-[#2E236C] rounded-xl place-items-center">
          {/* <div>My Tech Skills which constantly improvce</div>
          <div className="flex flex-row gap-2"> */}
            <div className="flex flex-col gap-2">
              <div></div>
              <div className="skillbox">Ubuntu</div>
              <div className="skillbox">Linux</div>
              
      
            </div>
            <div className="flex flex-col gap-5">
              <div></div>
              <div className="skillbox">SLURM</div>
            </div>
      
            
          {/* </div> */}
        </div>
      );
      
      const items = [
        {
          title: "Programming Languages",
          
          header: <ProgLang />,
          
        },
        {
          title: "Frameworks and Libraries",
          
          header: <Frameworks />,
          
        },
        {
          title: "Databases and OTher Tools",
          
          header: <DatabasesTools />,
          
        },
        {
          title: "Opearating Systems",
          
          header: <OperatingSystems />,
          
        },
      ];

  return (
    <div className="flex flex-col items-center sm:px-20 md:px-32 p-5 gap-10 fadeInUp-animation">
        <div className=''>
            <div className="text-5xl font-doto p-5">
            ABOUT
            </div>
            <div className='text-3xl'>
            My name is Ahmed, and I currently work as an IT Support Analyst 
            where I provide hardware and software solutions to my customers. 
            However, as a Computer Engineering Graduate my passion
            lies is creation i.e, creating and building software. I am currently pursuing a career is Front End Development, 
            always looking to upskill and develop into a better developer than i was yesterday.
            </div>
        </div>
        

        {/* <div className="items-center p-5" id="about">
            
            <BentoGrid className="max-w-4xl p-5 mx-auto">
            {items.map((item, i) => (
                <BentoGridItem
                key={i}
                title={item.title}
                
                header={item.header}
                
                className={i === 0 || i === 6 ? "md:col-span-" : ""}   // wahtever is next to span value means the iten with index of that number will span that many grid blocks
                />
            ))}
            </BentoGrid>
        </div> */}
        <div className="text-5xl font-doto p-5">
            SKILLS
        </div>

        <div className="grid grid-cols-11 justify-items-center gap-x-6 gap-y-6">


        <div className='skill opacity-0'></div>
          <div className='skill skill-left '><img src='/assets/icons/devtools/docker.png' style={{height:40}}/></div>
          <div className='skill skill-left'><img src='/assets/icons/devtools/aws.png' style={{height:40}}/></div>
          <div className='skill opacity-0'></div>
          <div className='skill skill-middle'><img src='/assets/icons/languages/java.png' style={{height:40}}/></div>
          <div className='skill skill-middle'><img src='/assets/icons/languages/c-sharp.png' style={{height:40}}/></div>
          <div className='skill skill-middle'><img src='/assets/icons/languages/sql.png' style={{height:40}}/></div>
          <div className='skill opacity-0'></div>
          <div className='skill opacity-0'><img src='/assets/icons/frameworks/react.png' style={{height:40}}/></div>
          <div className='skill skill-right'><img src='/assets/icons/blazor.png' style={{height:40}}/></div>
          <div className='skill opacity-0'></div>

          <div className='skill opacity-0'></div>
          <div className='skill skill-left'><img src='/assets/icons/devtools/git.png' style={{height:40}}/></div>
          <div className='skill skill-left'><img src='/assets/icons/googlecloudplatform.jpg' style={{height:40, borderRadius:10}}/></div>
          <div className='skill opacity-0'></div>
          <div className='skill opacity-0'></div>
          <div className='skill skill-middle'><img src='/assets/icons/languages/typescript.png' style={{height:40, borderRadius:20}}/></div>
          <div className='skill opacity-0'></div>
          <div className='skill opacity-0'></div>
          <div className='skill skill-right'><img src='/assets/icons/frameworks/net.png' style={{height:40, borderRadius:20}}/></div>
          <div className='skill skill-right'><img src='/assets/icons/nodejs.jpg' style={{height:40, borderRadius:10}}/></div>
          <div className='skill opacity-0'></div>

          <div className='skill opacity-0'></div>
          <div className='skill opacity-0'></div>
          <div className='skill opacity-0'></div>
          <div className='skill skill-left'><img src='/assets/icons/mongoDB.png' style={{height:40, borderRadius:20}}/></div>
          <div className='skill opacity-0'></div>
          <div className='skill skill-middle'><img src='/assets/icons/languages/js.png' style={{height:40, borderRadius:20}}/></div>
          <div className='skill opacity-0'></div>
          <div className='skill skill-right'><img src='/assets/icons/nextjs.png' style={{height:40}}/></div>
          <div className='skill opacity-0'></div>
          <div className='skill opacity-0'></div>
          <div className='skill opacity-0'></div>


          <div className='skill opacity-0'>HTML</div>
          <div className='skill opacity-0'>HTML</div>
          <div className='skill opacity-0'>HTML</div>
          <div className='skill opacity-0'>HTML</div>
          <div className='skill skill-left'><img src='/assets/icons/devtools/mssql-server.png' style={{height:40}}/></div>
          <div className='skill skill-middle'><img src='/assets/icons/languages/python.png' style={{height:40}}/></div>
          <div className='skill skill-right'><img src='/assets/icons/frameworks/react.png' style={{height:40}}/></div>
          <div className='skill opacity-0'>HTML</div>
          <div className='skill opacity-0'>HTML</div>
          <div className='skill opacity-0'>HTML</div>
          <div className='skill opacity-0'>HTML</div>

          <div className='skill opacity-0'>HTML</div>
          <div className='skill opacity-0'>HTML</div>
          <div className='skill opacity-0'>HTML</div>
          <div className='skill opacity-0'>HTML</div>
          <div className='skill opacity-0'>HTML</div>
          <div className='skill shadow-red'><img src='/assets/icons/jewelry.png' style={{height:40}}/></div>
          <div className='skill opacity-0'>HTML</div>
          <div className='skill opacity-0'>HTML</div>
          <div className='skill opacity-0'>HTML</div>
          <div className='skill opacity-0'>HTML</div>

        </div>
          
    </div>



    
  )
}

export default About
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
    <div className="flex flex-col items-center sm:px-20 md:px-32 p-5">
        <div className=''>
            <div className="text-5xl font-doto p-5">
            ABOUT
            </div>
            <div>
            My name is Ahmed, and I currently work as an IT Support Analyst 
            where I provide hardware and software solutions to my customers. 
            However, as a Computer Engineering Graduate my passion
            lies is creation i.e, creating and building software. I am currently pursuing a career is Front End Development, 
            always looking to upskill and develop into a better developer than i was yesterday.
            </div>
        </div>
        

        <div className="items-center p-5" id="about">
            
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
        </div>
          
    </div>



    
  )
}

export default About
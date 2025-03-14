import React from 'react'
import Projectdetails from '../../../components/projectdetails'
import { AnimatedTooltip } from '../../../components/ui/animated-tooltip'

const projectname = "EasyNote"
const projectdescription = `Full stack Note taking App build using Blazor WebAseembly. Users can create, delete, categorise and update notes. App also has text-to-Speech and Limited Translation capabilities. The main objective of this project, was to make use of AWS SAM (Serverless Application Model) to build and deploy serverless applications.

AWS SAM template is used to declare and build backend infrastructure such as the API Gateway to create a REST API so that user can interact with Data, AWS
Lambda Functions to Add, Edit, View and Retrieve Data, a DynamoDB Table to store manipulated Data and finally use
Cognito to secure the app and manage access (LogIn and Registration).

The FrontEnd of the application (User Interface) is built using Blazor WebAssembly (C# .NET7).`

const awsnotetakingstack = [
    
  {id: 1, name: ".NET",  image:"/assets/icons/net.png"},
  {id: 2, name: "BlazorWASM",  image:"/assets/icons/blazor.png"},
  {id: 3, name: "AWS",  image:"/assets/icons/devtools/aws.png"},
  
  ]

const awsnotetakingapp = () => {
  return (
    <div>
      <div className='grid justify-items-center'>
        <div>
          <img className='sm:max-h-96 rounded-lg fadeInUp-animation' src='/assets/projects/aws-note-app.jpg'/>
        </div>
        
      </div>
      <Projectdetails projectname={projectname} projectdescription={projectdescription}>
        <div>
          <AnimatedTooltip items={awsnotetakingstack} />
        </div>
      </Projectdetails>
    </div>
    
  )
}

export default awsnotetakingapp
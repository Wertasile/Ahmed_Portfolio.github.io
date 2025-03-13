import React from 'react'
import Projectdetails from '../../../components/projectdetails'
import { AnimatedTooltip } from '../../../components/ui/animated-tooltip'

const projectname = "Movie Catalogue App"
const projectdescription = "Movie CAtalogue App built using TMDB API."
const moviestack = [
    {id: 1, name: "Javascript",  image:"/assets/icons/javascript.png"},
    ]

const hpc = () => {
  return (
    <div>
      <div className='grid justify-items-center'>
        <div>
          <img className='sm:max-h-96 rounded-lg fadeInUp-animation' src='/assets/projects/movie_img.png'/>
        </div>
        
      </div>
      <Projectdetails projectname={projectname} projectdescription={projectdescription}>
        <div>
          <AnimatedTooltip items={moviestack} />
        </div>
      </Projectdetails>
    </div>
    
  )
}

export default hpc
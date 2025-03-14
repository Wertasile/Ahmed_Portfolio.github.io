import React from 'react'
import Projectdetails from '../../../components/projectdetails'
import { AnimatedTooltip } from '../../../components/ui/animated-tooltip'

const projectname = "Movie Catalogue App"
const projectdescription = "A standard Movie Catalogue App has been built using TMDB API. Users can search for movies and TV shows and can get in depth information regarding Production, Episodes and Trailer related to movie."
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
import { useEffect, useState } from 'react'
import './App.css'
import axios from 'axios'
import getRandomNumber from './utils/getRandomNumber'
import LocationInfo from './assets/components/locationInfo'
import ResidentCard from './assets/components/ResidentCards'
import FormLocation from './assets/components/FormLocation'
import headerImage from './assets/imagen-ram.jpg'; 


function App() {
  const [location, setLocation] = useState ()
  const [idLocation, setIdLocation] = useState (getRandomNumber(126))
  const [hasError, setHasError] = useState(false)
  const [isLoading, setIsLoading] = useState (true)

  useEffect(()   => {  
    const url = `https://rickandmortyapi.com/api/location/${idLocation}`
    setIsLoading(true)
    axios.get(url)
    .then(res => {  
      setLocation(res.data)
      setHasError(false) 
      })
    .catch(err => { 
      console.log(err)
      setHasError(true)
       })
       .finally(() => {
        setIsLoading (false)
       } )
     }, [idLocation]) 
 
  return (
     
    <div>
      <div className='app-container'>
      <div className="header-container">
      <img src={headerImage} alt="Cabecera" className='header-image'/>
     <h1>Rick and Morty App</h1>
    <FormLocation 
      setIdLocation={setIdLocation}
    />
    {
      isLoading
      ? (<h2>Loading ... </h2>)
      : (
          hasError
          ? (<h3> 💋 Hey! you must provide an id from 1 to 126 😢</h3>)
        : (
          <>  
    
           <LocationInfo
              location= {location} 
           />
           <div className='resident-container'>
          {
                location?.residents.map( url => (
                  <ResidentCard 
                    url = {url}
                    key={url}
                  />
                ))
             }
          </div>
         </>
         )
        )
      }   
    </div>
    </div>
    </div>  
  )


 
}
  
export default App

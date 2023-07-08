import { useEffect, useState } from 'react'
import './App.css'
import axios from 'axios'
import getRandomNumber from './utils/getRandomNumber'
import LocationInfo from './assets/components/locationInfo'
import ResidentCard from './assets/components/ResidentCards'



function App() {
  const [location, setLocation] = useState ()

  useEffect(() => {  
    const url = `https://rickandmortyapi.com/api/location/${getRandomNumber(126)}`
    axios.get(url)
    .then(res => setLocation(res.data))
    .catch(err => console.log(err))
     }, []) 

    console.log(location)
    
  return (
    <div>
     <h1>Rick and Morty App</h1>
     <LocationInfo
     location= {location} 
      />
      <div>
         {
          location?.residents.map( url => (
              <ResidentCard 
              Key={url}
              key={url}
              />
          ))
         }
      </div>
    </div>
  )


 
}
  
export default App

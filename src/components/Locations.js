import { useState, useEffect } from 'react'
import axios from "axios";

export default function Locations() {

          const [locations, setLocations] = useState([])

          async function FetchData() {
                    const data = await axios.get(`https://rickandmortyapi.com/api/location`);
                    const content = data.data.results
                    setLocations(content)
          }

          useEffect(() => {
                    FetchData()
                    return () => {
                              console.log('Component mounted! Horray!')
                    }
          }, [])

          return (

                    <>
                              {locations.map(location => {
                                        return <div key={location.id}>

                                                  <h1>{location.name}</h1>
                                                  <h2>{location.type}</h2>
                                                  <h2>{location.dimension}</h2>

                                        </div>

                              })}

                    </>

          )
}


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

                    <section className="container">
                              {locations.map(location => {
                                        return <div className="card" key={location.id}>

                                                  <div class="info">
                                                            <h3>Name: <span>{location.name}</span></h3>
                                                            <h3>Type: <span>{location.type}</span></h3>
                                                            <h3>Dimension: <span>{location.dimension}</span></h3>
                                                  </div>

                                        </div>

                              })}

                    </section>

          )
}


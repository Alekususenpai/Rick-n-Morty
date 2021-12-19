import { useState, useEffect } from 'react'
import axios from "axios";

export default function Episodes() {

          const [episodes, setEpisodes] = useState([])

          async function FetchData() {
                    const data = await axios.get(`https://rickandmortyapi.com/api/episode`);
                    const content = data.data.results
                    setEpisodes(content)
          }

          useEffect(() => {
                    FetchData()
                    return () => {
                              console.log('Component mounted! Horray!')
                    }
          }, [])

          return (

                    <>
                              {episodes.map(episode => {
                                        return <div key={episode.id}>

                                                  <h1 >{episode.name}</h1>
                                                  <h2>{episode.air_date}</h2>
                                                  <h2>{episode.episode}</h2>
                                        </div>

                              })}

                    </>

          )
}


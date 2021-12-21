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

                    <section className="container">
                              {episodes.map(episode => {
                                        return <div className="card" key={episode.id}>

                                                  <div class="info">
                                                            <h3>Name: <span>{episode.name}</span></h3>
                                                            <h3>Air date: <span>{episode.air_date}</span></h3>
                                                            <h3><span>{episode.episode}</span></h3>
                                                  </div>
                                        </div>

                              })}

                    </section>

          )
}


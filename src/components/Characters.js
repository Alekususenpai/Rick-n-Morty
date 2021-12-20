import { useState, useEffect } from 'react'
import axios from "axios";

export default function Characters() {

          const [characters, setCharacters] = useState([])

          async function FetchData() {
                    const data = await axios.get(`https://rickandmortyapi.com/api/character`);
                    const content = data.data.results
                    setCharacters(content)
          }

          useEffect(() => {
                    FetchData()
                    return () => {
                              console.log('Component mounted! Horray!')
                    }
          }, [])

          return (

                    <section className="container">
                              {characters.map(ch => {
                                        return <div className="card" key={ch.id}>
                                                  <div className="img">
                                                            <img src={ch.image} alt="img"></img>
                                                  </div>

                                                  <div className="info">
                                                            <h1>{ch.name}</h1>
                                                            <p>Status: {ch.status}</p>
                                                            <p>Species: {ch.species}</p>
                                                            <p>Location: {ch.location.name}</p>
                                                  </div>
                                        </div>

                              })}

                    </section>

          )
}


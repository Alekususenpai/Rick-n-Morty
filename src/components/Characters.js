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
                                                  <div className="img" style={{ backgroundImage: `url("${ch.image}")` }}>
                                                  </div>

                                                  <div className="info">
                                                            <h1>{ch.name}</h1>
                                                            <p>Status: <span>{ch.status}</span></p>
                                                            <p>Species: <span>{ch.species}</span></p>
                                                            <p>Location: <span>{ch.location.name}</span></p>
                                                  </div>
                                        </div>

                              })}

                    </section>

          )
}


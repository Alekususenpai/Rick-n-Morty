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

                    <>
                              {characters.map(ch => {
                                        return <div key={ch.id}>
                                                  <img src={ch.image} alt="img"></img>
                                                  <h1>{ch.name}</h1>
                                                  <h2>Status: {ch.status}</h2>
                                                  <h2>Species: {ch.species}</h2>
                                                  <h2>Location: {ch.location.name}</h2>
                                        </div>

                              })}

                    </>

          )
}


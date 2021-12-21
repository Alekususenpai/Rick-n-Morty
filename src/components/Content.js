import { Route, Routes } from "react-router-dom";
import "../App.css";
import React from 'react'
import Characters from "./Characters";
import Locations from "./Locations";
import Episodes from "./Episodes";
import Homepage from "./Homepage";



export default function Content() {

          return (
                    <div>
                              <Routes>
                                        <Route path="/" element={<Homepage />} />
                                        <Route path="/characters" element={<Characters />} />
                                        <Route path="/locations" element={<Locations />} />
                                        <Route path="/episodes" element={<Episodes />} />

                              </Routes></div>
          );
};



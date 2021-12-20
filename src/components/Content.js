import { Route, Routes } from "react-router-dom";
import "../App.css";
import React from 'react'
import Characters from "./Characters";
import Locations from "./Locations";
import Episodes from "./Episodes";



export default function Content() {

          return (
                    <div>
                              <Routes>
                                        <Route path="/" element={<h2>Hi, this is home</h2>} />
                                        <Route path="/characters" element={<Characters />} />
                                        <Route path="/locations" element={<Locations />} />
                                        <Route path="/episodes" element={<Episodes />} />

                              </Routes></div>
          );
};



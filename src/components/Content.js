import { Route, Routes } from "react-router-dom";
import "../App.css";
import CardList from './CardList';
import React from 'react'
import Card from "./Card";



export default function Content() {

          return (
                    <React.Fragment>
                              <div className="MainContent">
                                        <Routes>

                                                  <Route path="/(characters|locations|episodes)/"  //problem here!//
                                                            element={<CardList />} />
                                                  <Route
                                                            path="/(character|location|episode)/:resourceId"
                                                            element={(props) => <Card {...props} />}
                                                  ></Route>
                                                  <Route
                                                            path="/(about|who|contact)/"
                                                            element={() => <h1>This is our About page!</h1>}
                                                  />

                                                  <Route
                                                            path="/home"
                                                            element={() => <h1>Welcome to our App</h1>}
                                                  />
                                                  <Route element={() => <h1>Page not found</h1>} />
                                        </Routes></div>
                    </React.Fragment>
          );
};



import React, { useEffect, useState } from "react";
import { Button } from "@mui/material";
import { Link, NavLink } from "react-router-dom";
import axios from "axios"
import "../App.css";

export default function Header() {
          return (
                    <header className="Header">
                    <h2>Rick and Morty API</h2>
                    <ul>
                              <li>
                                        <Button className="NavButton">
                                                  <NavLink exact to="/">🏠</NavLink>
                                        </Button>
                              </li>
                              <li>
                                        <Button className="NavButton">
                                                  <NavLink
                                                            to={{
                                                                      pathname: "/characters",
                                                            }}
                                                            activeClassName="my-custom-active-classsss"
                                                  >
                                                            Characters
                                                  </NavLink>
                                        </Button>
                              </li>
                              <li>
                                        <Button className="NavButton">
                                                  <NavLink to="/locations">Locations</NavLink>
                                        </Button>
                              </li>
                              <li>
                                        <Button className="NavButton">
                                                  <NavLink to="/episodes" activeStyle={{color: 'blue'}}>Episodes</NavLink>
                                        </Button>
                              </li>
                    </ul>
          </header>
);
};

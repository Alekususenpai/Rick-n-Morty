import { Button } from "@mui/material";
import { NavLink } from "react-router-dom";
import "../App.css";

export default function Header() {
          return (
                    <header className="Header">
                              <h1>Rick and Morty API</h1>
                              <ul>
                                        <li>
                                                  <Button className="NavButton">
                                                            <NavLink to="/">🏠</NavLink>
                                                  </Button>
                                        </li>
                                        <li>
                                                  <Button className="NavButton">
                                                            <NavLink to="/characters" activeclassname="my-custom-active-classsss">
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
                                                            <NavLink to="/episodes" activestyle={{ color: 'blue' }}>Episodes</NavLink>
                                                  </Button>
                                        </li>
                              </ul>
                    </header>
          );
};

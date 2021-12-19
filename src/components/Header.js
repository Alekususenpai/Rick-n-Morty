import { Button } from "@mui/material";
import { Link } from "react-router-dom";
import "../App.css";

export default function Header() {
          return (
                    <header className="Header">
                              <h2>Rick and Morty API</h2>
                              <ul>
                                        <li>
                                                  <Button className="NavButton">
                                                            <Link to="/">🏠</Link>
                                                  </Button>
                                        </li>
                                        <li>
                                                  <Button className="NavButton">
                                                            <Link to="/characters" activeclassname="my-custom-active-classsss">
                                                                      Characters
                                                  </Link>
                                                  </Button>
                                        </li>
                                        <li>
                                                  <Button className="NavButton">
                                                            <Link to="/locations">Locations</Link>
                                                  </Button>
                                        </li>
                                        <li>
                                                  <Button className="NavButton">
                                                            <Link to="/episodes" activestyle={{ color: 'blue' }}>Episodes</Link>
                                                  </Button>
                                        </li>
                              </ul>
                    </header>
          );
};

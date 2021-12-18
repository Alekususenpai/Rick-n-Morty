import { useState } from 'react'

import { Route, Routes, Navigate } from "react-router-dom";
import { Button } from "@mui/material";
import "../App.css";


export default function Content() {

          const [isUserAuth, setIsUserAuth] = useState(false);
          const AuthButton = <Button onClick={() => setIsUserAuth(!isUserAuth)}>Auth me</Button>


          return (
                    <React.Fragment>
                              <Header></Header>
                              <div className="MainContent"></div>
                              <Switch>
                                        {isUserAuth ? (
                                                  <Route
                                                            exact
                                                            path="/(characters|locations|episodes)/"
                                                            render={(props) => <CardList {...props} />}
                                                  />
                                        ) : <Button onClick={() => setIsUserAuth(!isUserAuth)}>Auth me</Button>}

                                        <Route
                                                  path="/(character|location|episode)/:resourceId"
                                                  render={(props) => <Card {...props} />}
                                        ></Route>
                                        <Route
                                                  path="/(about|who|contact)/"
                                                  render={() => <h1>This is our About page!</h1>}
                                        />

                                        <Route
                                                  path="/home"
                                                  render={() => <h1>Welcome to our App</h1>}
                                        />
                                        <Redirect from="/" to="/home" />
                                        <Route render={() => <h1>Page not found</h1>} />
                              </Switch>
                    </React.Fragment>
          );
};



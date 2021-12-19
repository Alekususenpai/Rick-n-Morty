import React, { useEffect, useState } from "react";
import { Button } from "@mui/material";
import { useNavigate } from "react-router-dom";
import "../App.css";
import axios from "axios";
import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";

export default function CardList(props) {
          const [dataList, setDataList] = useState([]);
          const navigate = useNavigate();


          async function fetchData() {
                    const { pathname } = props.location;
                    const apiResource = pathname.substring(1, pathname.length - 1);

                    const {
                              data: { results },
                    } = await axios.get(`/${apiResource}`);

                    const data = results.map((entry) => {
                              return { name: entry.name, id: entry.id };
                    });
                    setDataList(data);
          };


          useEffect(() => {
                    fetchData();
                    console.log(`[debug] Card list ${props.data} `, props);
          }, [props, fetchData]);


          let CardList = <p>Not data loaded</p>;

          const navigateToSpecificResourceHandler = (id) => {
                    // props.history.replace(`/characters/` + id);
                    const { pathname } = props.location;
                    const apiResource = pathname.substring(1, pathname.length - 1);
                    navigate(`/${apiResource}/` + id);
          };
          if (dataList.length !== 0) {
                    CardList = dataList.map((data) => (
                              <Box sx={{ minWidth: 200 }} key={data.id}>
                                        <Card variant="outlined">
                                                  <CardContent>
                                                            <h3>{data.name}</h3>
                                                  </CardContent>
                                                  <CardActions>
                                                            <Button
                                                                      size="small"
                                                                      onClick={() => navigateToSpecificResourceHandler(data.id)}
                                                            >
                                                                      Show me more
						</Button>
                                                  </CardActions>
                                        </Card>
                              </Box>
                    ));
          }

          return <div className="CardListContainer">{CardList}</div>;
};
import React, { useEffect, useState } from "react";
import { useNavigate, useLocation, useParams } from "react-router-dom";
import { Button } from "@mui/material";
import axios from "axios";


export default function Card() {
          const [resourceData, setResourceData] = useState([]);
          const navigate = useNavigate();
          const location = useLocation();
          const params = useParams();


          async function fetchData() {
                    const { data } = await axios.get(location.pathname);
                    console.log('props data: ', params);
                    setResourceData(data)
          };


          useEffect(() => {
                    fetchData();
          });


          return (
                    <div>
                              <Button onClick={() => { navigate(-1) }}>Go back</Button>
                              <p>I'm am {resourceData.name}</p>
                    </div>
          );
};

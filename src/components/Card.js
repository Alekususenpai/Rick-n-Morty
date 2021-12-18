import React, { useEffect, useState } from "react";
import { withRouter, useHistory, useLocation, useParams } from "react-router-dom";
import { Button } from "@mui/material";

import axios from "axios";


export default function Card() {
	const [resourceData, setResourceData] = useState([]);
	const history = useHistory();
	const location = useLocation();
	const params = useParams();
	useEffect(() => {
		fetchData();
	}, []);

	const fetchData = async () => {
		const {data} = await axios.get(location.pathname);
		console.log('props data: ', params);
		setResourceData(data)
	};

	return (
		<div>
			<Button  onClick={() => history.goBack()}>Go back</Button>
			<p>I'm am {resourceData.name}</p>
		</div>
	);
};

import React, { useEffect, useState } from 'react';

import axios from 'axios';

import {
	Card,
	CardActionArea,
	CardContent,
	Grid,
	Typography
} from '@mui/material';

import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';
import './Pages.scss';
import { useParams } from 'react-router';

const Details = () => {
	const [country, setCountry] = useState();
	const params = useParams();

	useEffect(() => {
		axios
			.get(`https://restcountries.com/v3.1/name/${params.name.toLowerCase()}`)
			.then((res) => {
				setCountry(res.data[0]);
			});
	}, [params.name]);
	//checking
	if (!country) {
		return <div>Loading details...</div>;
	}

	const { currencies } = country;

	// Take keys from object
	const currencyNames = Object.keys(currencies);
	return (
		<>
			<Grid container className="details">
				<Grid item className="detailsCountry">
					<CardActionArea className="detailsArrow" href="/">
						<Card className="detailsLinkHome">
							<ArrowBackIosIcon />
							Back to Home
						</Card>
					</CardActionArea>
					{/* Card items */}
					<Card className="detailsCard">
						<CardContent className="detailsPage">
							{/* Object information for card */}
							<Typography variant="h5" component="h5" className="detailsText">
								Capital:
								<span>{country.capital?.[0]}</span>
							</Typography>
							<Typography variant="h5" component="h5">
								Name:
								<span>{country.name?.common}</span>
							</Typography>
							{currencyNames.map((currency, index) => {
								return (
									<div key={index}>
										{/* Details object information */}
										<Typography variant="h5" component="h5">
											Currency Code:
											<span>{currency}</span>
										</Typography>
										<Typography variant="h5" component="h5">
											Currency Name:
											<span>{currencies[currency]?.name}</span>
										</Typography>
										<Typography variant="h5" component="h5" gutterBottom>
											Currency Symbol:
											<span>{currencies[currency]?.symbol}</span>
										</Typography>
									</div>
								);
							})}
						</CardContent>
					</Card>
				</Grid>
			</Grid>
		</>
	);
};

export default Details;

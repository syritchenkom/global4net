import React, { useEffect, useState } from 'react';

import axios from 'axios';

import {
	Container,
	Card,
	CardActionArea,
	CardContent,
	Grid,
	Link,
	Typography
} from '@mui/material';

import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';
import '../scss/Countries.scss';
import { useParams } from 'react-router';

const Details = () => {
	// const [country, setCountry] = useState({});
	const [country, setCountry] = useState({});
	const params = useParams();

	useEffect(() => {
		axios
			.get(
				`https://restcountries.com/v3.1/name/${params.country.toLowerCase()}`
			)
			.then((res) => {
				// console.log(res);
				setCountry(res.data[0]);
			});
	}, [params.country]);
	return (
		<>
			<Grid container className="details">
				<Grid item className="detailsArrow">
					<Link className="detailsLink" href="/">
						<ArrowBackIosIcon />
						Back to Home
					</Link>
				</Grid>
				<Grid item>
					{console.log(setCountry)}
					<Card className="countryCard">
						<CardActionArea className="countryButton">
							<CardContent className="countryPage">
								<Typography variant="h5" component="h5">
									Capital:
									<span>{country.capital?.[0]}</span>
									<span>{console.log(country)}</span>
								</Typography>
								<Typography variant="h4" component="h4">
									Name:
									<span>{country.name?.common}</span>
								</Typography>

								<Typography variant="h5" component="h5">
									Currency Code:
									<span>{country?.currencies?.[0]}</span>
									<span>{console.log(country.currencies.toString())}</span>
								</Typography>
								<Typography variant="h5" component="h5">
									Currency Name:
									{/* <span>{state.currency?.name}</span> */}
								</Typography>
								{/* <Typography variant="h5" component="h5" gutterBottom>
									Currency Symbol:
									<span>{currency?.[currencyCode]?.symbol}</span>
								</Typography> */}
							</CardContent>
						</CardActionArea>
					</Card>

					{/* <Card className="countryCard">
						<CardActionArea className="countryButton">
							<CardContent className="countryPage">
								<Typography variant="h5" component="h5">
									Capital:
									<span>{country.capital?.[0]}</span>
									<span>{console.log(country)}</span>
								</Typography>
								<Typography variant="h4" component="h4">
									Name:
									<span>{country.name?.common}</span>
								</Typography>

								<Typography variant="h5" component="h5">
									Currency Code:
									<span>{country.currency}</span>
									<span>{console.log(country.currencies?.[0])}</span>
								</Typography>
								<Typography variant="h5" component="h5">
									Currency Name:
									 <span>{state.currency?.name}</span> 
								</Typography>
								 <Typography variant="h5" component="h5" gutterBottom>
									Currency Symbol:
									<span>{currency?.[currencyCode]?.symbol}</span>
								</Typography> 
							</CardContent>
						</CardActionArea>
					</Card> */}
				</Grid>
			</Grid>
		</>
	);
};

export default Details;

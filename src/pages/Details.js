import React from 'react';
import { Timeline } from '@mui/lab';
import {
	Card,
	CardActionArea,
	CardContent,
	Grid,
	Typography
} from '@mui/material';
import '../scss/Countries.scss';

const Details = ({ country, setCountry, countries, setCountries }) => {
	return (
		<>
			<Timeline className="countriesUl">
				{countries.map((country, index) => {
					const { capital, name, currencies, region } = country;
					const currencyCode = Object.keys(currencies || {})[0];
					return (
						<Card key={index} className="countryCard">
							<CardActionArea
								className="countryButton"
								href={`/details/${name}`}>
								<CardContent className="countryPage">
									<Typography
										variant="h3"
										component="h3"
										className="countryTitle">
										<span>{name.common}</span>
									</Typography>
									<Typography variant="h5" component="h5">
										Capital:
										<span>{capital?.[0]}</span>
									</Typography>
									<Typography variant="h5" component="h5">
										Currency Code:
										<span>{currencyCode}</span>
									</Typography>
									<Typography variant="h5" component="h5">
										Currency Name:
										<span>{currencies?.[currencyCode]?.name}</span>
									</Typography>
									<Typography variant="h5" component="h5" gutterBottom>
										Currency Symbol:
										<span>{currencies?.[currencyCode]?.symbol}</span>
									</Typography>
									<Typography variant="h5" component="h5" gutterBottom>
										Currency Region:
										<span>{region}</span>
									</Typography>
								</CardContent>
							</CardActionArea>
						</Card>
					);
				})}
			</Timeline>
		</>
	);
};

export default Details;

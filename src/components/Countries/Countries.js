import React from 'react';
import { Timeline } from '@mui/lab';
import {
	Card,
	CardActionArea,
	CardContent,
	Grid,
	Typography
} from '@mui/material';
import './Countries.scss';

const Countries = ({ countries, setCountries }) => {
	return (
		<>
			<Grid item className="countries">
				<Timeline className="countriesUl">
					{countries.map((country, index) => {
						const { capital, name, region } = country;
						return (
							<Card key={index} className="countryCard">
								<CardActionArea
									className="countryButton"
									href={`/global4net/details_${name.common}`}>
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
										<Typography variant="h5" component="h5" gutterBottom>
											Region:
											<span>{region}</span>
										</Typography>
									</CardContent>
								</CardActionArea>
							</Card>
						);
					})}
				</Timeline>
			</Grid>
		</>
	);
};

export default Countries;

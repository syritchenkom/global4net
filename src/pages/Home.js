import React, { useEffect, useState } from 'react';

import { Grid, Typography, Container } from '@mui/material';

import axios from 'axios';

import Sort from '../components/Sort/Sort';
import './Pages.scss';

function Home() {
	const [country, setCountry] = useState('');
	const [countries, setCountries] = useState([]);

	useEffect(() => {
		axios.get('https://restcountries.com/v3.1/all').then((res) => {
			setCountries(
				res.data.map((selectedCountry) => {
					return selectedCountry;
				})
			);
		});
	}, []);
	// Loading message for array
	if (!countries?.length) {
		return (
			<Typography variant="h5" component="h5">
				Loading...
			</Typography>
		);
	}

	return (
		<Container className="home">
			{/* Title Section */}
			<Grid container className="homeTitle">
				<Grid item>
					<Typography variant="h5" component="h1">
						United
					</Typography>
				</Grid>
			</Grid>
			{/* Sort and Filtered Section */}
			<Sort
				country={country}
				setCountry={setCountry}
				countries={countries}
				setCountries={setCountries}
			/>
		</Container>
	);
}

export default Home;

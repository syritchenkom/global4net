import React, { useEffect, useState } from 'react';

import {
	Box,
	Grid,
	TextField,
	FormControl,
	InputLabel,
	Typography,
	MenuItem,
	Select,
	Container
} from '@mui/material';

import SearchIcon from '@mui/icons-material/Search';

import axios from 'axios';

import Sort from '../components/Sort';
import '../scss/Pages.scss';

function Home() {
	const [countries, setCountries] = useState([]);
	const [searchCountries, setSearchCountries] = useState('');
	const [string, setString] = useState('');

	const searchChange = (event) => {
		setSearchCountries(event.target.value);
	};

	useEffect(() => {
		axios.get('https://restcountries.com/v2/all/').then((res) => {
			setCountries(
				res.data.map((selectedCountry) => {
					console.log(selectedCountry);
					return selectedCountry;
				})
			);
		});
	}, []);

	return (
		<Container className="home">
			{/* Title */}
			<Grid container className="homeTitle">
				<Grid item>
					<Typography variant="h5" component="h1">
						United
					</Typography>
				</Grid>
			</Grid>

			<Sort countries={countries} setCountries={setCountries} />

			{/* Sort Countries
			<Grid container className="sortContainer">
				
				<Grid item className="homeSearch">
					<Box className="homeSearchBox">
						<SearchIcon className="homeSearchIcon" />
						<TextField
							className="homeSearchText"
							label="Search country"
							checked={searchCountries}
							onChange={searchChange}
							variant="standard"
						/>
					</Box>
				</Grid>

				
				<Grid item className="homeFilter">
					<FormControl variant="standard" className="homeFilterSearch">
						<InputLabel>Countries...</InputLabel>
						<Select value={countries} label="Countries">
							<MenuItem value="">
								<em>None</em>
							</MenuItem>
							<MenuItem value="europe">Europe</MenuItem>
							<MenuItem value="america">America</MenuItem>
							<MenuItem value="asia">Asia</MenuItem>
							<MenuItem value="africa">Africa</MenuItem>
							<MenuItem value="oceania">Oceania</MenuItem>
						</Select>
					</FormControl>
				</Grid>
			</Grid> */}

			{/*<Grid item className="">
					<Stack spacing={2} sx={{ width: 300 }}>
						<SearchIcon />
						<Autocomplete
							freeSolo
							id="free-solo-2-demo"
							disableClearable
							options={countries.map((option) => console.log(option))}
							renderInput={(params) => (
								<TextField
									variant="outlined"
									{...params}
									label="Search country"
									InputProps={{
										...params.InputProps,
										type: 'search'
									}}
								/>
							)}
						/>
					</Stack>
				</Grid> */}
			{/* //////////////////////////////////////////////// */}
			{/* United country */}
			{/* <Grid item className="">
					{countries.map((country) => {
						const { capital, name, currenciesCode, currenciesName } = country;
						// console.log(
						// 	country.currencies.forEach((currencySymbol) =>
						// 		console.log(currencySymbol.symbol)
						// 	)
						// 	 country.currencies.forEach((country) => console.log(country.name))
						// );
						return (
							<article key={currenciesCode}>
								<div>
									<h2>
										Capital: <span>{capital}</span>
									</h2>
									<h3>{name}</h3>
									<h4>
										Currenciess Name:
										<span>
											{country.currencies.forEach((currencyName) =>
												console.log(currencyName.name)
											)}
										</span>
									</h4>
									<h4>
										Currenciess Symbol:
										<span>
											{country.currencies.forEach((currencySymbol) =>
												console.log(currencySymbol.symbol)
											)}
										</span>
									</h4>
									)}
								</div>
							</article>
						);
					})}
				</Grid>
			</Grid> */}
		</Container>
	);
}

export default Home;

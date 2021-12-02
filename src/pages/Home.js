import React, { useEffect, useState } from 'react';

import axios from 'axios';

import {
	Grid,
	Input,
	Stack,
	Autocomplete,
	Icon,
	Paper,
	Typography,
	TextField
} from '@mui/material';

import { Box } from '@mui/system';
import SearchIcon from '@mui/icons-material/Search';

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
		<>
			{/* Title */}
			<Grid container className="home">
				<Grid item className="home_title">
					<h1 className>United</h1>
				</Grid>

				{/* Search input */}

				<Grid item className="home_search">
					<Box>
						<Box>
							<TextField
								tupe="text"
								className="todo_search"
								label="Search country"
								checked={searchCountries}
								onChange={searchChange}
								variant="outlined">
								<SearchIcon />
							</TextField>
						</Box>
					</Box>
				</Grid>

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
				</Grid> */}
			</Grid>
		</>
	);
}

export default Home;

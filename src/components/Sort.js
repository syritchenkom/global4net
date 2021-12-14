import React, { useState } from 'react';
import {
	Grid,
	TextField,
	FormControl,
	InputLabel,
	MenuItem,
	Select,
	Container
} from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';

import Countries from './Countries';
import '../scss/Sort.scss';

const Sort = ({ country, setCountry, countries, setCountries }) => {
	const [filteredCountries, setFilteredCountries] = useState('');
	const [selectedRegion, setSelectedRegion] = useState('all');
	const [searchCountry, setSearchCountry] = useState('');

	// Filtred regions
	const getFilteredCountries = (value) => {
		if (value === 'all' && !searchCountry) {
			return countries;
		}
		if (value === 'all' && searchCountry) {
			return countries.filter((country) =>
				country.name?.common.toLowerCase().includes(searchCountry.toLowerCase())
			);
		}
		return countries.filter(
			(country) =>
				country.region.toLowerCase().includes(value.toLowerCase()) &&
				country.name?.common.toLowerCase().includes(searchCountry.toLowerCase())
		);
	};

	// Search countries
	const getSearchCountries = (value) => {
		if (selectedRegion !== 'all') {
			return countries.filter(
				(country) =>
					country.name?.common.toLowerCase().includes(value.toLowerCase()) &&
					country.region.toLowerCase().includes(selectedRegion.toLowerCase())
			);
		}
		console.log('selectedRegion', selectedRegion, value);
		return countries.filter((country) =>
			country.name?.common.toLowerCase().includes(value.toLowerCase())
		);
	};

	//Search Function
	const searchChange = (event) => {
		//send information about search country
		const value = event.target?.value;
		setSearchCountry(value);
		if (value) {
			const search = getSearchCountries(value);
			console.log('value', value);
			console.log('search:', search);
			setFilteredCountries(search);
			return;
		}
		setSearchCountry('');
	};

	//Filtred Function
	const selectChange = (event) => {
		//send information about region
		const value = event.target?.value;
		setSelectedRegion(value);
		if (value) {
			const filtered = getFilteredCountries(value);
			setFilteredCountries(filtered);
			return;
		}
		setFilteredCountries('');
	};

	return (
		<Container className="sort">
			{/* Sort Countries */}
			<Grid container className="sortContainer">
				{/* Search Countries */}
				<Grid item className="sortSearch">
					<SearchIcon className="sortSearchIcon" />
					<TextField
						className="sortSearchText"
						label="Search country..."
						variant="standard"
						onChange={searchChange}
						inputProps={{
							type: 'search'
						}}
					/>
				</Grid>
				{/* Filtered Countries */}
				<Grid item className="sortFiltered">
					<FormControl
						variant="standard"
						className="sortFilteredSearch"
						data={countries}>
						<InputLabel>Region...</InputLabel>
						<Select
							labelId="demo-multiple-name-label"
							id="demo-multiple-name"
							onChange={selectChange}
							value={selectedRegion}
							label="Countries...">
							<MenuItem value={'all'}>
								<em>All</em>
							</MenuItem>
							<MenuItem value={'europe'}>Europe</MenuItem>
							<MenuItem value={'america'}>America</MenuItem>
							<MenuItem value={'asia'}>Asia</MenuItem>
							<MenuItem value={'africa'}>Africa</MenuItem>
							<MenuItem value={'oceania'}>Oceania</MenuItem>
						</Select>
					</FormControl>
				</Grid>
			</Grid>
			{/* Countries List */}
			<Grid container className="countriesList">
				<Grid item>
					<Countries
						country={country}
						setCountry={setCountry}
						countries={filteredCountries || countries}
						//1 countries={filteredCountries || countries}
						setCountries={setCountries}
					/>
				</Grid>
			</Grid>
		</Container>
	);
};

// const Sort = ({ country, setCountry, countries, setCountries }) => {
// 	const [filteredCountries, setFilteredCountries] = useState('');
// 	const [selectedRegion, setSelectedRegion] = useState('all');
// 	const [searchCountry, setSearchCountry] = useState('');

// 	// Filtred regions
// 	const getFilteredCountries = (value) => {
// 		return countries.filter(
// 			(country) =>
// 				country.region.toLowerCase().includes(value.toLowerCase()) &&
// 				country.name?.common.toLowerCase().includes(searchCountry.toLowerCase())
// 		);
// 	};

// 	// Search countries
// 	const getSearchCountries = (value) => {
// 		return countries.filter(
// 			(country) =>
// 				// country.name?.common.toLowerCase().includes(value.toLowerCase())
// 				country.name?.common.toLowerCase().includes(value.toLowerCase()) &&
// 				country.region.toLowerCase().includes(selectedRegion.toLowerCase())
// 		);
// 	};

// 	const searchChange = (event) => {
// 		//send information about search country
// 		const value = event.target?.value;
// 		console.log('searchChange:', value);
// 		if (value) {
// 			const search = getSearchCountries(value);
// 			setFilteredCountries(search);
// 			return;
// 		}
// 		setFilteredCountries('');
// 	};

// 	const selectChange = (event) => {
// 		//send information about region
// 		const value = event.target?.value;
// 		console.log('selectChange:', value);
// 		if (value) {
// 			setSelectedRegion(value);
// 			if (value !== 'all') {
// 				const filtered = getFilteredCountries(value);
// 				setFilteredCountries(filtered);
// 				return;
// 			}
// 		}
// 		setFilteredCountries('');
// 	};

// 	return (
// 		<>
// 			{/* Sort Countries */}
// 			<Grid container className="sortContainer">
// 				{/* Search Countries */}
// 				<Grid item className="sortSearch">
// 					<SearchIcon className="sortSearchIcon" />
// 					<TextField
// 						className="sortSearchText"
// 						label="Search country..."
// 						variant="standard"
// 						onChange={searchChange}
// 						inputProps={{
// 							type: 'search'
// 						}}
// 					/>
// 				</Grid>

// 				{/* Filtered Countries */}
// 				<Grid item className="sortFiltered">
// 					<FormControl
// 						variant="standard"
// 						className="sortFilteredSearch"
// 						data={countries}>
// 						<InputLabel>Region...</InputLabel>
// 						<Select
// 							labelId="demo-multiple-name-label"
// 							id="demo-multiple-name"
// 							onChange={selectChange}
// 							value={selectedRegion}
// 							label="Countries...">
// 							<MenuItem value={'all'}>
// 								<em>All</em>
// 							</MenuItem>
// 							<MenuItem value={'europe'}>Europe</MenuItem>
// 							<MenuItem value={'america'}>America</MenuItem>
// 							<MenuItem value={'asia'}>Asia</MenuItem>
// 							<MenuItem value={'africa'}>Africa</MenuItem>
// 							<MenuItem value={'oceania'}>Oceania</MenuItem>
// 						</Select>
// 					</FormControl>
// 				</Grid>

// 				{/* Countries List */}
// 				<Grid item className="countriesList">
// 					<Countries
// 						country={country}
// 						setCountry={setCountry}
// 						countries={filteredCountries || countries}
// 						setCountries={setCountries}
// 					/>
// 				</Grid>
// 			</Grid>
// 		</>
// 	);
// };

export default Sort;

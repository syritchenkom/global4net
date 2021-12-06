import React, { useState } from 'react';
import {
	Grid,
	TextField,
	FormControl,
	InputLabel,
	MenuItem,
	Select
} from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';

import Countries from './Countries';
import '../scss/Sort.scss';

const Sort = ({ country, setCountry, countries, setCountries }) => {
	const [filteredCountries, setFilteredCountries] = useState('');
	const [selectedRegion, setSelectedRegion] = useState('all');

	const getFilteredCountries = (value) => {
		return countries.filter((country) =>
			country.region.toLowerCase().includes(value.toLowerCase())
		);
	};

	const searchChange = (event) => {
		const value = event.target?.value;
		if (value) {
			const filtered = getFilteredCountries(value);
			setFilteredCountries(filtered);
			return;
		}
		setFilteredCountries('');
	};

	const selectChange = (event) => {
		const value = event.target?.value;
		if (value) {
			setSelectedRegion(value);
			if (value !== 'all') {
				const filtered = getFilteredCountries(value);
				setFilteredCountries(filtered);
				return;
			}
		}
		setFilteredCountries('');
	};

	return (
		<>
			{/* Sort Countries */}
			<Grid container className="sortContainer">
				{/* Search Countries */}
				<Grid item className="sortSearch">
					<SearchIcon className="sortSearchIcon" />

					<TextField
						className="sortSearchText"
						label="Search country"
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
						<InputLabel>Countries...</InputLabel>
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

				{/* Countries List */}
				<Grid item className="countriesList">
					<Countries
						country={country}
						setCountry={setCountry}
						countries={filteredCountries || countries}
						setCountries={setCountries}
					/>
				</Grid>
			</Grid>
		</>
	);
};

export default Sort;

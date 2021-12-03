import React from 'react';
import {
	Box,
	Grid,
	TextField,
	FormControl,
	InputLabel,
	MenuItem,
	Select
} from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';

import '../scss/Sort.scss';

const Sort = ({ countries, setCountries }) => {
	const searchCountries = () => {};
	const searchChange = () => {};
	return (
		<>
			{/* Sort Countries */}
			<Grid container className="sortContainer">
				{/* Search Countries */}
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
				{/* Filter Countries */}
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
			</Grid>
		</>
	);
};

export default Sort;

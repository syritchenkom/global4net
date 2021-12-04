import React from 'react';
import {
	Box,
	Grid,
	TextField,
	FormControl,
	InputLabel,
	MenuItem,
	Select,
	Autocomplete
} from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';

import '../scss/Sort.scss';

const Sort = ({ countries, setCountries, filtred, setFiltred }) => {
	const searchCountries = () => {};
	const filtredChange = (event) => {
		setFiltred(event.target.value);
	};
	return (
		<>
			{/* Sort Countries */}
			<Grid container className="sortContainer">
				{/* Search Countries */}
				<Grid item className="sortSearch">
					<SearchIcon className="sortSearchIcon" />
					<Autocomplete
						freeSolo
						className="sortSearchBox"
						disableClearable
						// options={DataTransfer.map((option) => option.title)}
						renderInput={(params) => (
							<TextField
								{...params}
								className="sortSearchText"
								label="Search country"
								variant="standard"
								inputProps={{
									...params.InputProps,
									type: 'search'
								}}
							/>
						)}
					/>
				</Grid>
				{/* Filter Countries */}
				<Grid item className="sortFilter">
					<FormControl variant="standard" className="sortFilterSearch">
						<InputLabel>Countries...</InputLabel>
						<Select value={filtred} onChange={filtredChange} label="Countries">
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

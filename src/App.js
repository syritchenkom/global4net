import React from 'react';

import { BrowserRouter, Routes, Route } from 'react-router-dom';

import { Container, Grid } from '@mui/material';

import Details from './pages/Details';
import Home from './pages/Home';

function App() {
	//  "homepage": "https://syritchenkom.github.io/Global4Netx/", "dependencies": {

	return (
		<Container>
			<Grid container spacing={7}>
				<Grid item xs={12} sm={12} md={4} lg={3}>
					<BrowserRouter>
						<Routes>
							<Route path="/" element={<Home />}>
								Home
							</Route>
							<Route path="/details" element={<Details />}>
								Details
							</Route>
						</Routes>
					</BrowserRouter>
				</Grid>
			</Grid>
		</Container>
	);
}

export default App;

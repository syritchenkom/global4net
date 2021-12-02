import React, { useState, useEffect } from 'react';
// import axios from 'axios';

const url = 'https://restcountries.com/v2/name/united';

const Countries = () => {
	

	const fetchCountryData = async () => {
		const response = await fetch(url);
		const countries = await response.json();
		setCountries(countries);
		// console.log(countries);
	};

	useEffect(() => {
		fetchCountryData();
	}, []);

	return (
		<>
			{countries.map((country) => {
				const { capital, name, currenciesCode } = country;
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
										string(currencySymbol.symbol)
									)}
								</span>
							</h4>
							{/* <h4>{currencyName}</h4> */}

							{/* {countries.map((currenciesName) =>
								console.log(currenciesName.map((currencies) => currencies))
							)} */}
						</div>
					</article>
				);
			})}
		</>
	);
};

export default Countries;

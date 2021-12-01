import { useState, useEffect } from 'react';

import axios from 'axios';

import './App.css';

function App() {
	const [todo, setTodo] = useState('');
	const [todos, setTodos] = useState([]);

	useEffect(() => {
		axios
			.get('https://restcountries.com/v2/name/united')
			.then((params) => {
				console.log(params.data);
			})
			.then((res) => {
				setTodos(
					res.data.map((selectedCountry) => {
						selectedCountry.completed = false;
						return selectedCountry;
					})
				);
			});
	}, []);

	return <div className="App"></div>;
}

export default App;

import React, { useEffect, useState } from 'react';
import { MapData } from 'marker-project';
import MapView from './components/MapView/MapView';
import Sidebar from './components/Sidebar/Sidebar';
import './App.css';

function App() {
	const [data, setData] = useState<MapData[] | undefined>(undefined);
	const [selectedMarker, setSelectedMarker] = useState<MapData | undefined>(undefined);

	const handleMarkerSelect = (data: MapData): void => {
		setSelectedMarker(data);
	};

	useEffect(() => {
		fetch('http://localhost:3000/markers', {
			method: 'GET',
			headers: {
				'Content-Type': 'application/json',
				'Authorization': `Bearer ${process.env.REACT_APP_NEST_API_KEY}`
			}
		})
		.then((res) => {
			if (!res.ok) {
				throw new Error('Network response was not ok.');
			}
			return res.json();
		})
		.then((data) => setData(data))
		.catch(err => console.warn(err));
	}, []);

	return (
		<div className="App">
			<Sidebar data={ data } onMarkerSelected={ handleMarkerSelect }/>
			<MapView data={ data } selectedMarker={ selectedMarker }/>
		</div>
	);
}

export default App;

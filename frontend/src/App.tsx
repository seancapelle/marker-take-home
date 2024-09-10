import React from 'react';
import MapView from './components/MapView/MapView';
import Sidebar from './components/Sidebar/Sidebar';
import './App.css';

function App() {
  return (
    <div className="App">
      <Sidebar />
      <MapView />
    </div>
  );
}

export default App;

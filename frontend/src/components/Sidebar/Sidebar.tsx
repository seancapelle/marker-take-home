import React from 'react';
import Marker from '../Marker/Marker';
import './Sidebar.css';

function Sidebar() {
    return(
        <div className='sidebar-container'>
            <div className='sidebar-container-header'>MARKERS</div>
            <Marker markerNum={ 1 } />
        </div>
    );
};

export default Sidebar;
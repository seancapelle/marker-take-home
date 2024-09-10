import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFlag } from '@fortawesome/free-regular-svg-icons';
import './Marker.css';

interface MarkerProps {
    markerNum: number;
}

function Marker({ markerNum }: MarkerProps) {

    return(
        <div className='marker-container'>
            <FontAwesomeIcon className='marker-container-flag' icon={ faFlag } />
            <div>Marker # { markerNum }</div>
        </div>
    );
}

export default Marker;
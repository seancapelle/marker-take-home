import { MapData } from 'marker-project';
import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFlag, } from '@fortawesome/free-regular-svg-icons';
import { faPaperclip, faVideo } from '@fortawesome/free-solid-svg-icons'
import './Marker.css';

interface MarkerProps {
    data: MapData;
    isSelectedMarker: boolean;
    onMarkerSelected: (data: MapData) => void;
}

function Marker({ data, isSelectedMarker, onMarkerSelected }: MarkerProps): React.JSX.Element {
    const handleClick = () => {
        onMarkerSelected(data);
    };
    
    return(
        <div className={`marker-container ${isSelectedMarker ? 'selected-marker' : ''}`.trim()} onClick={ handleClick }>
            <FontAwesomeIcon className='marker-container-flag' icon={ faFlag } />
            <div className='marker-container-title'>{ data.title }</div>

            <div className='marker-container-icons'>
                { data.hasVideo && 
                    <FontAwesomeIcon className='marker-container-icon' icon={ faVideo } />
                }
                { data.hasAttachment && 
                    <FontAwesomeIcon className='marker-container-icon' icon={ faPaperclip } />
                }
            </div>
        </div>
    );
}

export default Marker;
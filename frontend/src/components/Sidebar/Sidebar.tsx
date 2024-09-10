import { MapData } from 'marker-project';
import React, { useState } from 'react';
import Marker from '../Marker/Marker';
import './Sidebar.css';


interface SidebarProps {
    data: MapData[] | undefined;
    onMarkerSelected: (marker: MapData) => void;
}

function Sidebar({ data, onMarkerSelected }: SidebarProps): React.JSX.Element {
    const [selectedMarker, setSelectedMarker] = useState<MapData | undefined>(undefined);
    
    const handleMarkerSelect = (data: MapData) => {
        setSelectedMarker(data);
        onMarkerSelected(data);
    };

    return(
        <div className='sidebar-container'>
            <div className='sidebar-container-inner'>
                <div className='sidebar-container-inner-header'>MARKERS</div>
                { data?.map(marker => (
                    <Marker
                        data={ marker }
                        isSelectedMarker={ (selectedMarker && selectedMarker.id) === marker.id }
                        key={ marker.id }
                        onMarkerSelected={ handleMarkerSelect }
                    />
                ))}
            </div>
        </div>
    );
};

export default Sidebar;
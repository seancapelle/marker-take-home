import { MapData } from 'marker-project';
import React, { useEffect } from 'react';
import { Marker, useMap } from '@vis.gl/react-google-maps';

interface MapViewProps {
    data: MapData[] | undefined;
    selectedMarker: MapData | undefined;
}

function MapView({ data, selectedMarker }: MapViewProps): React.JSX.Element {
    const map = useMap();
    
    useEffect(() => {
        if (!map) return;

        if (selectedMarker) {
            map.panTo({ lat: selectedMarker.latitude, lng: selectedMarker.longitude } )
        }
    }, [selectedMarker]);
    
    return (
        <>
            {data?.map(marker => (
                <Marker
                    key={ marker.id }
                    position={{ lat: marker.latitude, lng: marker.longitude}}
                />
            ))}
        </>
    );
};

export default MapView;
import { MapData } from 'marker-project';
import React, { useEffect, useState } from 'react';
import { APIProvider, Map, Marker } from '@vis.gl/react-google-maps';

interface MapViewProps {
    data: MapData[] | undefined;
    selectedMarker: MapData | undefined;
}

function MapView({ data, selectedMarker }: MapViewProps): React.JSX.Element {
    const [centerLat, setCenterLat] = useState<GLfloat>(29.064447421802896);
    const [centerLng, setCenterLng] = useState<GLfloat>(-81.78543250582018);

    useEffect(() => {
        if (selectedMarker) {
            setCenterLat(selectedMarker.latitude);
            setCenterLng(selectedMarker.longitude);
        }
    }, [selectedMarker]);

    // TODO: Map is not re-rendering with new coords

    return (
        <APIProvider apiKey={ process.env.REACT_APP_MAPS_API_KEY }>
            <Map
                style={{width: '100vw', height: '100vh'}}
                defaultCenter={{ lat: centerLat, lng: centerLng }}
                defaultZoom={10}
                gestureHandling={'greedy'}
                disableDefaultUI={true}
            >
                {data?.map(marker => (
                    <Marker
                        key={ marker.id }
                        position={{ lat: marker.latitude, lng: marker.longitude}}
                    />
                ))}
            </Map>
        </APIProvider>
    );
};

export default MapView;
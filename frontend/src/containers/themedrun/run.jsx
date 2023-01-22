import React from 'react';
import styled from 'styled-components';
import { HistoRunImg } from '../../components/images/run';
import Map, { GeolocateControl } from "react-map-gl";
import "mapbox-gl/dist/mapbox-gl.css";

const MainContainer = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    height: 30vh;
    width: 100%;
`;

const RunImageContainer = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    position: absolute;
    align-items: center;
    width: 100%;
`;

const RunInfoContainer = styled.div`
    display: flex;
    width: 100%;
    height: 50vh;
    background-color: black;
`;

const RunTopText = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    width: 100%;
`;

const RouteText = styled.div`
    display: flex;
    color: white;
    font-family: 'Inter', sans-serif;
    font-size: 1.5rem;
    font-weight: 700;
    position: absolute;
    margin: 0 75vw 40vh 0;
`;

const KMText = styled.div`
    display: flex;
    color: white;
    font-family: 'Inter', sans-serif;
    font-size: 1rem;
    font-weight: 300;
    position: absolute;
    margin: 0vh 0 39vh 69vw;
`;

const MapContainer = styled.div`
    display: flex;
    position: absolute;
    width: 100%;
`;

export function ThemedRun() {
    
    return (

        <div>
            <MainContainer>
                <RunImageContainer>
                    <HistoRunImg/>
                </RunImageContainer>
            </MainContainer>
            <RunInfoContainer>
                <RunTopText>
                    <RouteText>
                        Route
                    </RouteText>
                    <KMText>
                        4.1 km total
                    </KMText>
                </RunTopText>

                <MapContainer>
                <div>
      <Map
        mapboxAccessToken="pk.eyJ1IjoiZmFyYWF6bSIsImEiOiJjbGQ3NjJwYzcxajd3M3BxbDZyYzAzNnZvIn0._Kj6LLizFREs1ZbhYqdVnA"
        initialViewState={{
          longitude: -100,
          latitude: 40,
          zoom: 3.5,
        }}
        mapStyle="mapbox://styles/mapbox/streets-v11"
      >
        <GeolocateControl
          positionOptions={{ enableHighAccuracy: true }}
          trackUserLocation={true}
        />
      </Map>
    </div>
    </MapContainer>



            </RunInfoContainer>
        </div>
    )
};
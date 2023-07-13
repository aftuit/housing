import React from "react";
import {
    YMaps, Map,
    // Placemark, Circle, SearchControl, FullscreenControl, TypeSelector, GeolocationControl, RouteButton, Polyline, Polygon 
} from "react-yandex-maps";

const mapStyle = {
    position: "relative",
    left: 0,
    top: 0,
    width: "100%",
    height: "50vh",
    overflow: "hidden",
};

export const YandexMap = ({ center,
    longitude, latitude
    // radius, 
    // center1, 
    // polygon, 
    // polyline 
}) => {
    return (
        <YMaps
            enterprise
            query={{ apikey: "afbb60c1-0761-48a5-b821-b566bf220d8b", lang: "EN" }}
        >
            <Map
                style={mapStyle}
                defaultState={{ center: center || [longitude, latitude], zoom: 13 }}
            >
                {/* <FullscreenControl/>
        <RouteButton options={{float: 'right'}} />
        <TypeSelector options={{float: 'right'}} />
        <SearchControl options={{float: 'left'}} />
        <GeolocationControl options={{float: 'left'}} /> */}
                {/* 
        {
            radius && <Circle 
                geometry={[[41.2995, 69.2401], radius || 3000]}
                options={{
                    draggable: true,
                    fillColor: "#DB709377",
                    strokeColor: "#990066",
                    strokeOpacity: 0.8,
                    strokeWidth: 2,
                }}
            />
        } */}
                {/* 
        <Placemark
          key={1}
        //   options={getPointOptions()}
          geometry={[41.2995, 69.2401]}
        /> */}
            </Map>
        </YMaps>
    );
};
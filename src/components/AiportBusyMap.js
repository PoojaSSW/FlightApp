import React from "react";
import {
  ComposableMap,
  Geographies,
  Geography,
  Marker
} from "react-simple-maps";
import airportStats from "../constants/airportStats.js";
const geoUrl = "https://cdn.jsdelivr.net/npm/us-atlas@3/states-10m.json";


const AiportBusyMap = ({
 openDestinationAirportDetails,
 airportMarkers
})=> {



     const onSelectAirportDataMarker = (busyAirportMarker) => {
      openDestinationAirportDetails && openDestinationAirportDetails(busyAirportMarker)
     }
    const getAirportData = () => {
    return (airportMarkers?.map((marker, index) => {
           const airportOriginCount = airportStats?.data[marker.IATA_CODE] ||  8;

           return (
            <Marker key={index} coordinates={[marker.LONGITUDE, marker.LATITUDE]} onClick={onSelectAirportDataMarker.bind(this, marker)}>
              <circle r={airportOriginCount || 8} 
              fill={"#0A7C06"} 
                  style={{cursor: "pointer"}}
                  />
              </Marker>);

                  
      })
    );
  }
  return (

   <ComposableMap projection="geoAlbersUsa">
      <Geographies geography={geoUrl}>
        {({ geographies }) => (
          <React.Fragment>
            {geographies.map(geo => (
              <Geography
                key={geo.rsmKey}
                stroke="#FFF"
                geography={geo}
                fill="#DDD"
              />
            ))}
          </React.Fragment>
        )}
      </Geographies>
      {getAirportData()}
    
    </ComposableMap>
  
);
}
export default AiportBusyMap;
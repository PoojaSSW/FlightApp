import React, {useState} from "react";
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
  const [tooltipContent, setTooltipContent] = useState(false);
  const onSelectAirportDataMarker = (busyAirportMarker) => {
    openDestinationAirportDetails && openDestinationAirportDetails(busyAirportMarker);
  }
  const getAirportData = () => {
    return airportMarkers?.map((marker, index) => {
       const airportOriginCount = airportStats?.data[marker.IATA_CODE] ||  8;
       const isHover = tooltipContent?.IATA_CODE === marker.IATA_CODE;
       return (
          <Marker key={index} coordinates={[marker.LONGITUDE, marker.LATITUDE]} 
              onClick={onSelectAirportDataMarker.bind(this, marker)}
              onMouseEnter={() => {
                  setTooltipContent(marker);
                }}
                onMouseLeave={() => {
                  setTooltipContent(false);
                }}>
              <circle r={airportOriginCount || 8} 
                fill={"#0A7C06"} 
                style={{cursor: "pointer", opacity: (!tooltipContent || isHover) ? 1 : 0.3}}
              />
              {(isHover) && 
                     <text textAnchor="middle" y={-10}
                         style={{fill: "#34343e" ,cursor: "pointer", fontWeight: "bold", fontSize: "20px"}}>
                            {marker.AIRPORT + "," + marker.CITY + "," + marker.STATE}
                     </text>}
          </Marker>);        
       });
  }
  return (
    <div className="airport-map-wrapper congestion-wrapper">
       <h3 className="sub-header-cls">Distribution of probable airports by congestion.</h3>
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
    </div>);
}
export default AiportBusyMap;
  import React, {useState} from "react";
import {
  ComposableMap,
  Geographies,
  Geography,
  Marker
} from "react-simple-maps";
const geoUrl = "https://cdn.jsdelivr.net/npm/us-atlas@3/states-10m.json";

const AllAirportDataMap = ({
  onAirportMarkerSelection,
  selectedMarker,
  airportMarkers
})=> {

  const [tooltipContent, setTooltipContent] = useState(false);
  const onSelectAirportMarker = (marker) => {
    onAirportMarkerSelection && onAirportMarkerSelection(marker)
  }
  const getAirportMarkers = () => {
    const markerData = selectedMarker || airportMarkers;
    return markerData?.map((marker, index) => {
      const hoverMarker = tooltipContent?.IATA_CODE === marker.IATA_CODE;
      return (<Marker key={index} 
                coordinates={[marker.LONGITUDE, marker.LATITUDE]} 
                onClick={onSelectAirportMarker.bind(this, marker)}
                onMouseEnter={() => {
                  setTooltipContent(marker);
                }}
                onMouseLeave={() => {
                  setTooltipContent(false);
                }}>
                    <circle r={hoverMarker ? 15 : 10} fill="#BE8AED" 
                        style={{cursor: "pointer", opacity: (!tooltipContent || hoverMarker) ? 1 : 0.3}}/>
                    {(hoverMarker) && 
                     <text textAnchor="middle" y={-10}
                         style={{fill: "#5D5A6D" ,cursor: "pointer", fontWeight: "bold", fontSize: "20px"}}>
                            {marker.AIRPORT + "," + marker.CITY + "," + marker.STATE}
                     </text>}
             </Marker>);
    });
  }
  return (
    <div className="airport-stats-wrapper">
        <h3 className="sub-header-cls">Select your origin airport to begin</h3>
        <ComposableMap projection="geoAlbersUsa">
          <Geographies geography={geoUrl}>
            {({ geographies }) => (
              <React.Fragment>
                {geographies.map(geo => (
                  <Geography
                    key={geo.rsmKey}
                    stroke="#FFF"
                    geography={geo}
                    fill="#DDD"/>
                ))}
              </React.Fragment>
            )}
          </Geographies>
          {getAirportMarkers()}
        </ComposableMap>
    </div>);
  }
export default AllAirportDataMap;
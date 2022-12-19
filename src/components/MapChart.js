import React, {useState} from "react";
import "../App.css";
import AirlineChart from "../components/AirlineChart";
import AiportBusyMap from "../components/AiportBusyMap";
import AllAirportDataMap from "../components/AllAirportDataMap";
import Modal from 'react-modal';
import {get} from "lodash";
import airports from "../json/airports.json";
import flights from "../json/flights.json";

  Modal.setAppElement("#root")
  const MapChart = () => {
const [modalIsOpen, setIsOpen] = React.useState(false);

    const [selectedMarker, setMarker] = useState(null);
  const [airportMarkers, setAirportMarker] = useState(airports);
  const [destinedFlightsToAirports, setDestinedFlightsToAirports] = useState(flights);

  const [airportBusyMarker, setAirportBusyMarker] = useState(null);

   const onSelectAirportMarker =(clickedMarker) => {
    const destinationAirports = flights?.filter(i=> i?.ORIGIN_AIRPORT === clickedMarker.IATA_CODE) || [];
    const destinations = [...new Set(destinationAirports.map(({ DESTINATION_AIRPORT }) => ({ DESTINATION_AIRPORT }))?.map(origin => origin.DESTINATION_AIRPORT))];
    const filteredDestinationAirports = airports.filter(ap => destinations?.includes(ap.IATA_CODE));
    setAirportMarker(filteredDestinationAirports);
    setDestinedFlightsToAirports(destinationAirports);
    setMarker([clickedMarker]);    
  }
  const resetData =() => {
    setAirportMarker(airports);
    setDestinedFlightsToAirports(flights);
    setMarker(null);
  }

    const closeModal = () => {
    setIsOpen(false);
  }
  const onSelectAirportDataMarker = (busyAirportMarker) => {
      setIsOpen(true);
      setAirportBusyMarker(busyAirportMarker);
  }

  return (<React.Fragment>
  <header>Plan an optimal vacation</header>
  <header>Select your origin airport to begin</header>
  distribution of probable sirports by business
  distribution of probable airlines by business
    <AllAirportDataMap airportMarkers={airportMarkers} selectedMarker={selectedMarker} onAirportMarkerSelection={onSelectAirportMarker.bind(this)}/>
     <div className="data-visual-wrapper">
      <AiportBusyMap openDestinationAirportDetails={onSelectAirportDataMarker.bind(this)} airportMarkers={airportMarkers}/>
      <AirlineChart airlineData={destinedFlightsToAirports} marker = {selectedMarker}/>
      <Modal isOpen={modalIsOpen} closeModal= {closeModal.bind(this)}>
          <div>
                <div>
                  {selectedMarker && 
                    <div>
                    <label>Origin AIRPORT:</label>
                    <span>{get(selectedMarker, "[0].AIRPORT")}</span>
                     </div>
                  }
                  <div><label>Name:</label><span>{airportBusyMarker?.AIRPORT}</span></div>
                  <div><label>City:</label><span>{airportBusyMarker?.CITY}</span></div>
                  <div><label>State:</label><span>{airportBusyMarker?.STATE}</span></div>
              </div>
               <button className="buttons" onClick={closeModal.bind(this)}>Close</button>
          </div>
      </Modal>
    </div>
    <button onClick={resetData.bind(this)}>Reset</button>


    </React.Fragment>
  );
};

export default MapChart;
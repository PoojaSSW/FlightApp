import React, {useState} from "react";
import "../App.css";
import AirlineChart from "../components/AirlineChart";
import AiportBusyMap from "../components/AiportBusyMap";
import AllAirportDataMap from "../components/AllAirportDataMap";
import AirportDetailsModal from "../components/AirportDetailsModal";
import Modal from 'react-modal';

import airports from "../json/airports.json";
import flights from "../json/flights.json";

Modal.setAppElement("#root")
const MapChart = () => {
  const [modalIsOpen, setIsOpen] = React.useState(false);
  const [selectedMarker, setMarker] = useState(null);
  const [airportMarkers, setAirportMarker] = useState(airports);
  const [destinedFlightsToAirports, setDestinedFlightsToAirports] = useState(flights);
  const [airportDataMarker, setAirportDataMarker] = useState(null);

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
    setAirportDataMarker(busyAirportMarker);
  }

  return (
    <React.Fragment>
         <h1 className="main-header-cls">Plan your optimal vacation!</h1>
         <AllAirportDataMap airportMarkers={airportMarkers} selectedMarker={selectedMarker} onAirportMarkerSelection={onSelectAirportMarker.bind(this)}/>
         <div className="data-visual-wrapper">
            <AiportBusyMap openDestinationAirportDetails={onSelectAirportDataMarker.bind(this)} airportMarkers={airportMarkers} />
            <AirlineChart airlineData={destinedFlightsToAirports} marker = {selectedMarker}/>
            <Modal isOpen={modalIsOpen} closeModal= {closeModal.bind(this)}>
              <AirportDetailsModal airportDataMarker={airportDataMarker} 
                  destinationAirports={destinedFlightsToAirports} 
                  selectedMarker={selectedMarker}
                  closeDialog={closeModal}/>
            </Modal>
        </div>
        <button className="buttons" onClick={resetData.bind(this)}>Reset</button>
    </React.Fragment>
  );
};
export default MapChart;

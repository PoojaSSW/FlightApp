
import React from "react";
import airports from "../json/airports.json";
import {get} from "lodash";

const AirportDetailsModal = ({
 airportDataMarker,
 destinationAirports,
 selectedMarker,
 closeDialog
})=> {
  return <React.Fragment>
      <h4>Airport Details</h4>
      <div className="airport-details-wrapper">
          <div className="airport-details">
            <label className="label-cls">Name:</label><span>{airportDataMarker?.AIRPORT}</span>
          </div>
          <div className="airport-details">
            <label className="label-cls">City:</label><span>{airportDataMarker?.CITY}</span>
          </div>
          <div className="airport-details">
            <label className="label-cls">State:</label><span>{airportDataMarker?.STATE}</span>
          </div>
          {selectedMarker && 
            <>
              <div className="airport-details">
                <label className="label-cls">Origin Airport:</label>
                <span>{get(selectedMarker, "[0].AIRPORT")}</span>
              </div>
              <div className="airport-details">
                <label className="label-cls">Destination Airport:</label>
                <span>{airports.find(i =>i?.IATA_CODE === airportDataMarker?.IATA_CODE)?.AIRPORT}</span>
              </div>
              <div className="airport-details">
                <label className="label-cls">Flight Number:</label>
                <span>{destinationAirports.find(i =>i?.DESTINATION_AIRPORT === airportDataMarker?.IATA_CODE)?.FLIGHT_NUMBER}</span>
              </div>
               <div className="airport-details">
                <label className="label-cls">Airline:</label>
                <span>{destinationAirports.find(i =>i?.DESTINATION_AIRPORT === airportDataMarker?.IATA_CODE)?.AIRLINE}</span>
              </div>
            </>
          }
      </div>
      <div className="btn-wrap">
        <button className="buttons" onClick={closeDialog.bind(this)}>Close</button>
      </div>
  </React.Fragment>
};
export default AirportDetailsModal;
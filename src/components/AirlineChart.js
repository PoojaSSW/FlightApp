import React from 'react';

import {
    ScatterChart,
    Scatter,
    XAxis,
    YAxis,
    ZAxis,
    CartesianGrid,
    Tooltip,
    Legend,
    Label
} from "recharts";

import '../App.css';
import getAirlineHelper from "../constants/airlineStats.js";

const AirlineChart = ({
 airlineData,
 marker
})=> {
  return (
    <div className="airport-map-wrapper">
        <h3 className="sub-header-cls">Distribution of probable airlines by congestion.</h3>
        <ScatterChart
          width={400}
          height={400}
          style={{cursor: "pointer"}}
          margin={{
            top: 20,
            right: 20,
            bottom: 20,
            left: 20
          }}
        >
        <CartesianGrid />
          <XAxis type="number" dataKey="AIRLINE_DELAY" name="delay">
            <Label
             style={{
               textAnchor: "middle",
               fontSize: "90%",
               fill: "black",
             }}
             angle={360} 
             offset={0} position="insideBottom"
             value={"Airline Delays (min)"} />
          </XAxis>
          <YAxis type="number" dataKey="DISTANCE" name="distance">
             <Label
             style={{
               textAnchor: "middle",
               fontSize: "90%",
               fill: "black",
             }}
             angle={270} 
             position="insideLeft"
             value={"Distance (km)"} />
          </YAxis>
          <ZAxis
            type="number"
            dataKey="count"
            range={(marker) ? [90, 200] : [10, 100]}
            name="delays"
          />
          <Tooltip cursor={{ strokeDasharray: "3 3" }} />
          <Legend />
          <Scatter name="Airline Report" data={getAirlineHelper(airlineData)} fill="#0E1FE8" shape="circle" />
        </ScatterChart>
    </div>);
}
export default AirlineChart;

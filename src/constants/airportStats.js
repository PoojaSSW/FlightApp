import flights from "../json/flights";

const getBusyAirportData = () => {
	const busyCounterObject = {};
	const flightsOriginArr = flights.map(({ ORIGIN_AIRPORT }) => ({ ORIGIN_AIRPORT }))?.map(origin => origin.ORIGIN_AIRPORT);
	for (const originValue of flightsOriginArr) {
	  if (busyCounterObject[originValue]) {
	    busyCounterObject[originValue] += 1;
	  } else {
	    busyCounterObject[originValue] = 1;
	  }
	}
	return busyCounterObject;
}

const airportStats = {
	data: getBusyAirportData()
}

export default airportStats;

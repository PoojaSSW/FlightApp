// import flights from "../json/flights";

const airlineStats = (data) => {
	return data?.map(({ AIRLINE_DELAY, AIRLINE, DISTANCE }) => ({AIRLINE_DELAY : (AIRLINE_DELAY || 0), count: (AIRLINE_DELAY || 0), AIRLINE, DISTANCE }))
}

export default airlineStats;

# US Vacation Optimizer

## Overview
The US Vacation Optimizer is a data visualization app, that uses the [2015 Flight Delays and Cancellations](https://www.kaggle.com/datasets/usdot/flight-delays) data from Kaggle to 
help you select an optimal vacation destination in the United States.

It starts off by displaying all the airports on the United States map. Users can select an origin airport from the map, to find an optimal destination using one of two charts:

1. **Airport congestion distribution**
For the selected origin airport, visualizes a distribution of airports by congestion using a <> chart. For an optimal experience, users should prefer airports with the least congestion 
(or the smallest bubbles in this chart.

1. **Airline delays and cancellation distribution**
For the selected origin airport, visualizes a distribution of airlines that offer routes to various destinations, using a <> chart. For an optimal experience, users should prefer airports with the least 
least distance and least cancellations, located towards the origin of the chart. The further you go on the X or Y axes, the less optimal the airline experience.

### User Journeys/Use Cases

1. As a user, I want to see all the airports in the USA, so that I can find all the probable vacation destinations

1. As a user, I want to find the busiest airports in the USA from a selected origin airport, so that I can figure out the airports to avoid while planning a trip during a busy season

1. As a user, I want to find the airlines with the most delays, and the most cancellations, so that I can avoid them while planning a trip


## Design


## Implementation Details
Components, libraries

### Build Instructions

### Deploy 
The site is set to automatically deploy using Netfliy at vacation-optimizer.netlify.app


## Future work
There are several ways in which the app could be improved, broadly categorized into feature functionality and implementation improvements.

### Feature Functionality
1. Show routes on the map and allow users to interact with a route to find more details about it
1. Make the app take seasonality into account, since the congestion of airports and cancellation/delay rates of airlines can vary significantly based on the season
1. Introduce cost of air ticket as a variable to optimize
1. Considering all the variables, recommend the top 3 optimal destinations from an origin

## Implementation 
1. Use Redux for <>
1. 

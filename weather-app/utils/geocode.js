const request = require('request');

const geocode = (address, callback) => {
    const url = `https://api.mapbox.com/geocoding/v5/mapbox.places/${encodeURIComponent(address)}.json?access_token=pk.eyJ1IjoiZGF2aWRsYXBhZHVsYSIsImEiOiJjancwMDJ3ZW4wNjA0M3ltdzhrNXlwNjM5In0.C2aiuF07gIUq_PsI15DxnA`;

    request({url: url, json: true}, (error, response) => {
        if (error) {
            // will be in the error message of the callback when it is called
            callback('Cant connect to location services', undefined); 
        } else if (!response.body.features.length) {
            callback('Cant find location, try another search', undefined); 
        } else {
            // set error as undefined
            callback(undefined, {
                latitude: response.body.features[0].center[0], 
                longitude: response.body.features[0].center[1], 
                location: response.body.features[0].place_name
            }); 
        }; 
    }); 

}; 

module.exports =  geocode; 
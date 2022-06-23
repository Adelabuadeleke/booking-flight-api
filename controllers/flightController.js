const fs = require('fs')
const FlightsData  = 'data/flights.json';
// const FData = JSON.stringify(FlightsData);
const models = require("../models/Flight");


// Get a Single Flight
// Update/Eidt a Single Flight
// Delete Flight
// const fetchFlights = () => {
//     try {
//         const flightString = fs.readFileSync(FlightsData).toString()
//         return JSON.parse(flightString);
//     } catch (e) {
//     }
// }

// Get All Flight
exports.get_all_flights = (req, res) => {
    try {
         res.status(200).json(models.flightModel);

    } catch (err) {
        return res.status(500).send('an error occured 😢');
    }
}

// Add/Book Flight
exports.post_single_flight = async(req, res) => {
    try {
        const flights = models.flightModel
        const newFlights = flights.push(req.body)
        return res.status(201).json(req.body);
    } catch (err) {

    }
}



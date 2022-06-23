const fs = require('fs')
const FlightsData  = 'data/flights.json';
// const FData = JSON.stringify(FlightsData);
const models = require("../models/Flight");

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

// Get a Single Flight
exports.get_single_flight = async(req, res) => {
    try{
        const flights = models.flightModel
        const result = flights.find((flight)=> flight.id == req.params.id)
        res.status(200).json(result);
    } catch(err) {
        console.log(err);
    }
}

// Update/Eidt a Single Flight
exports.patch_single_flight = async(req, res) => {
    try {
        const body = req.body
        const flights = models.flightModel
        
        for (const flight of flights) {
            if(flight.id == req.params.id) {
                body;
                break;
            } else {
                return res.status(404).send('not found')
            }
        }
        return flights
    } catch (err) {
        return res.status(500).send(err)
    }
}
// Delete Flight

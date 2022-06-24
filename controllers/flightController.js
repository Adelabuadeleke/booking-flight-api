const FlightsData  = 'data/flights.json';
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
// id, title, time, price, date
exports.post_single_flight = async(req, res) => {
    try {
        const flights = models.flightModel
        flights.push(req.body)
        return res.status(201).json(flights);
    } catch (err) {
        return res.status(500).send('an error occured 😢');
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

// Update/Edit a Single Flight
exports.patch_single_flight = async(req, res) => {
    try {
        const body = req.body
        const flights = models.flightModel
        const result = flights.find((flight)=> flight.id == req.params.id);
       
        if(result) {
            const updates = Object.keys(body);
            updates.forEach((update)=> result[update] = req.body[update]);
            return res.status(200).json(result);
        } else {
            return res.status(404).send(`flight with id ${req.params.id} not found 😢`)
        }
    } catch (err) {
        return res.status(500).send(err)
    }
}
// Delete Flight
exports.delete_single_flight = async(req, res) => {
    try {
        const flights = models.flightModel
        const result = flights.find((flight)=> flight.id == req.params.id);
        if(result) {
            const num = result.indexOf()
            console.log(num)
            const rem = flights.splice(num, 1);
            // if(rem == []) {
            //     return res.status(404).send(`flight with id ${req.params.id} not found 😢`)
            // }
            // return res.status(200).json(rem);
        } else {
            return res.status(404).send(`flight with id ${req.params.id} not found 😢`)
        }

    } catch(err) {
        return res.status(500).send(err);
    }
}
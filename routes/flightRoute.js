const express = require('express');

const router = express.Router();
const controller = require('../controllers/flightController');

router.get('/flights', controller.get_all_flights);
router.post('/flights', controller.post_single_flight);
router.get('/flights/:id', controller.get_single_flight);
router.patch('/flights/:id', controller.patch_single_flight);
router.delete('/flights/:id', controller.delete_single_flight);

module.exports = router;


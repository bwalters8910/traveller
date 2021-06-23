const router = require("express").Router();
const { Trip } = require("./../../models");

// create trip

router.post('/', async (req, res) => {
    try {
        const tripData = await Trip.create(req.body);
        res.status(200).json(tripData);
    } catch (err) {
        res.status(400).json(err);
    }
});

// delete trip

module.exports = router;
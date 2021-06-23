const router = require('express').Router();
const tripRoutes = require('./tripRoutes');
const travellerRoutes = require("./travellerRoutes");

router.use('/trips', tripRoutes);
router.use("/travellers", travellerRoutes);

module.exports = router;

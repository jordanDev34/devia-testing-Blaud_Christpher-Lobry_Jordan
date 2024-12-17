const express = require('express');
const router = express.Router();
const vaccineController = require('../controllers/vaccineController');

router.post('/', vaccineController.createVaccine);
router.delete('/vaccine/:id', vaccineController.deleteVaccine);

module.exports = router;

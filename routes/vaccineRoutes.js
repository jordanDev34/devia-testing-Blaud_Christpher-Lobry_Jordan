const express = require('express');
const router = express.Router();
const vaccineController = require('../controllers/vaccineController');

router.post('/vaccines', vaccineController.createVaccine);
router.delete('/vaccines/vaccine/:id', vaccineController.deletevaccine);

module.exports = router;

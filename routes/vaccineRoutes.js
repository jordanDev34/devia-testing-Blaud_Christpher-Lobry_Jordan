const express = require('express');
const router = express.Router();
const vaccineController = require('../controllers/vaccineController');

router.post('/', vaccineController.createVaccine);
router.get('/', vaccineController.getAllVaccines);
router.get('/vaccine/:id', vaccineController.getVaccineById);
router.delete('/vaccine/:id', vaccineController.deleteVaccine);

module.exports = router;

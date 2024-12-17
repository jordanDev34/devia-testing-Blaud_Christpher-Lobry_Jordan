const express = require('express');
const router = express.Router();
const vaccineController = require('../controllers/vaccineController');

router.get('/', vaccineController.getAllVaccines);
router.get('/vaccine/:id', vaccineController.getVaccineById);
router.post('/', vaccineController.createVaccine);
router.put('/vaccine/:id', vaccineController.updateVaccine);
router.delete('/vaccine/:id', vaccineController.deleteVaccine);

module.exports = router;

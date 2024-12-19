const express = require('express');
const router = express.Router();
const campaignController = require('../controllers/campaignController');

router.post('/', campaignController.createCampaign);
router.delete('/campaign/:id', campaignController.deleteCampaign);


module.exports = router;
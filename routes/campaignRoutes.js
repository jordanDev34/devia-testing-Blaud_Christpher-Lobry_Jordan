const express = require('express');
const router = express.Router();
const campaignController = require('../controllers/campaignController');

router.get('/', campaignController.getAllCampaigns);
router.get('/campaign/:id', campaignController.getCampaignById);
router.post('/', campaignController.createCampaign);
router.put('/campaign/:id', campaignController.updateCampaign);
router.delete('/campaign/:id', campaignController.deleteCampaign);


module.exports = router;
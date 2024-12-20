const Campaign = require('../models/campaignModel');

exports.createCampaign = async (req, res) => {
    try {
        const { name, eventDate, location } = req.body;

        if (!name) return res.status(400).json({ error: 'Name is required' });
        if (!eventDate) return res.status(400).json({ error: 'Event Date is required' });
        if (!location) return res.status(400).json({ error: 'Location is required' });

        const newCampaign = await Campaign.create({
            name,
            eventDate,
            location
        });

        res.status(201).json(newCampaign);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

exports.getAllCampaigns = async (req, res) => {
    try {
        const campaigns = await Campaign.findAll();
        res.status(200).json(campaigns);
    } catch (error) {
        res.status(500).json({ error: error.message })
    }
};

exports.getCampaignById = async (req, res) => {
    try {
        const campaign = await Campaign.findByPk(req.params.id);
        if (!campaign) return res.status(404).json({ error: 'Campaign not found' });

        res.json(campaign);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

exports.updateCampaign = async (req, res) => {
    try {
        const { id } = req.params;
        const { name, eventDate, location } = req.body; 

        if (!name || typeof name !== 'string') {
            return res.status(400).json({ error: 'Data is invalid: Name must be a string' });
        }
        if (!eventDate || isNaN(Date.parse(eventDate))) {
            return res.status(400).json({ error: 'Data is invalid: Event Date is required and must be a valid date' });
        }
        if (!location || typeof location !== 'string') {
            return res.status(400).json({ error: 'Data is invalid: Location must be a string' });
        }

        const campaign = await Campaign.findByPk(id);

        if (!campaign) {
            return res.status(404).json({ error: 'Campaign not found' });
        }

        campaign.name = name;
        campaign.eventDate = eventDate;
        campaign.location = location;
        campaign.updatedAt = new Date();

        await campaign.save();

        res.status(200).json(campaign);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};


exports.deleteCampaign = async (req, res) => {
    try {
        const campaign = await Campaign.findByPk(req.params.id);
        if (!campaign) return res.status(404).json({ error: 'Campaign not found' });

        await campaign.destroy();

        res.status(204).send();
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};
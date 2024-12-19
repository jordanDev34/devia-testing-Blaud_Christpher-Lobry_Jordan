const Campaign = require('../models/campaignModel'); // Importer le modèle Campaign

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
const Vaccine = require('../models/vaccineModel');

exports.createVaccine = async (req, res) => {
  try {
      const { name } = req.body;
      if (!name) return res.status(400).json({ error: 'Name is required' });

      const newVaccine = await Vaccine.create({ name });

      res.status(201).json(newVaccine);
  } catch (error) {
      res.status(500).json({ error: error.message });
  }
};

exports.getAllVaccines = async (req, res) => {
  try {
    const vaccines = await Vaccine.findAll();    
    res.status(200).json(vaccines);
  } catch (error) {
    res.status(500).json({ error: error.message })
  }
};

exports.deleteVaccine = async (req, res) => {
  try {
      const vaccine = await Vaccine.findByPk(req.params.id);
      if (!vaccine) return res.status(404).json({ error: 'Vaccine not found' });

      await vaccine.destroy();
      
      res.status(204).send();
  } catch (error) {
      res.status(500).json({ error: error.message });
  }
};
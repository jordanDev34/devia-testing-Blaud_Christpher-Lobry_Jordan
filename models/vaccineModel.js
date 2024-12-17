const { DataTypes } = require('sequelize');
const sequelize = require('../config/db.js');

const Vaccine = sequelize.define('Vaccine', {
    id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true
    },
    name: {
        type: DataTypes.STRING,
        allowNull: false
    }
}, {
    timestamps: true,
    createdAt: true
});

module.exports = Vaccine;

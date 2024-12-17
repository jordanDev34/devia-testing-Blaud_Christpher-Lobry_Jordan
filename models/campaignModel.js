const { DataTypes } = require('sequelize');
const sequelize = require('../config/db.js');

const Campaign = sequelize.define('Campaign', {
    id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true
    },
    name: {
        type: DataTypes.STRING,
        allowNull: false
    },
    eventDate: {
        type: DataTypes.DATE,
        allowNull: false
    },
    location: {
        type: DataTypes.STRING,
        allowNull: false
    }
}, {
    timestamps: true,
    createdAt: true,
    updatedAt: true
});

module.exports = Campaign;

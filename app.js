const express = require('express');
const bodyParser = require('body-parser');
const morgan = require('morgan');
const fs = require('fs');
const path = require('path');
const userRoutes = require('./routes/userRoutes');
const vaccineRoutes = require('./routes/vaccineRoutes');
const campaignRoutes = require('./routes/campaignRoutes');

const app = express();

// Middleware
app.use(bodyParser.json());

// Create a write stream for log file
const accessLogStream = fs.createWriteStream(
    path.join(__dirname, 'access.log'),
    { flags: 'a' } // Append logs to the file
);

// Logging middleware (logs written to file)
app.use(morgan('combined', { stream: accessLogStream }));

// Routes
app.use('/users', userRoutes);
app.use('/vaccines', vaccineRoutes);
app.use('/campaigns', campaignRoutes);

module.exports = app;

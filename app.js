// Define our route handlers here
// Separation of concerns

// Import express library
const express = require('express');

// Init express application
const app = express();

// Define our routes

// Healthcheck route
app.get('/', (req, res) => {
    res.send('Server is running');
});

// Export app to use in server.js
module.exports = app;
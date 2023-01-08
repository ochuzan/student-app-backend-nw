// Start the server and listen for incoming requests to our API

// Import the app
const app  = require('./app');

require('dotenv').config();

// Have the app listen
const PORT = process.env.PORT;

app.listen(PORT, () => {
    console.log(`Listening on ${PORT}...`);
});
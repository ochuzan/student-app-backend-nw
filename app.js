// Define our route handlers here
// Separation of concerns

// Import external libraries
// Import express library
const express = require('express');
const cors = require('cors')

// Import OUR stuff (our files, our components)
const studentsData = require('./studentsData.json')

// Init express application
const app = express();

// Set up middleware
// Functions that will work with req, res before
// the final route handler function

app.use(cors());

// Define our routes

// Healthcheck route
app.get('/', (req, res) => {
    res.status(200).json({data: 'Server is running'});
});

app.get('/students', (req, res) => {
    try {
        const { students } = studentsData;
        res.json({ data: students });
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
});

app.get('/students/:id', (req, res) => {
    try {
        const { id } = req.params;
        const { students } = studentsData;
        
        // for (const student of students) {
        //     if (student.id === id) {
        //         res.status(200).json({ data: student });
        //     }
        // }
        
        const student = students.find(student => student.id === id);
        if (student) {
            res.status(200).json({ data: student });
        } else {
            res.status(404).json({ error: `Could not find student with id ${id}` });
        }

    } catch (error) {
        res.status(500).json({ error: error.message});
    }

});

// Export app to use in server.js
module.exports = app;

require ('dotenv').config();
const express = require('express');
const connectToDataBase = require('./Database/index.js')

const app = express();

connectToDataBase();
// Define routes
app.get('/', (req, res) => {
    res.status(200).json({
        message: "This is the home page"
    });
});

app.get('/about', (req, res) => {
    res.status(200).json({
        message: "This is the about page"
    });
});

// Start the server
app.listen(process.env.PORT, () => {
    console.log("Server running on port 5000");
});

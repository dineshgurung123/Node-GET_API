
require ('dotenv').config();
const express = require('express');
const connectToDataBase = require('./Database/index.js')

const app = express();
app.use(express.json())

connectToDataBase();
// Define routes
app.get('/', (req, res) => {
    res.status(200).json({
        message: "This is the home page"
    });
});

app.post('/blog', (req, res) => {
console.log(req.body);
res.status(200).json({
    message : "Blog successful"
})

})


// Start the server
app.listen(process.env.PORT, () => {
    console.log("Server running on port 5000");
});

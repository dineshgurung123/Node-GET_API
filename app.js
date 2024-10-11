
require ('dotenv').config();
const express = require('express');
const connectToDataBase = require('./Database/index.js');
const Blog = require('./model/blogModel.js');

const app = express();
app.use(express.json())

connectToDataBase();
// Define routes
app.get('/', (req, res) => {
    res.status(200).json({
        message: "This is the home page"
    });
});

app.post('/blog', async(req, res) => {
// const title = req.body.title
// const subtitle = req.body.subtitle
// const description = req.body.description
// const image = req.body.image


const {title, subtitle, description, image} = req.body
 


if(!title || !description || !image || !subtitle){

    return res.status(400).json({
        message:"Please provide all data"
    })
}

await Blog.create({
   title : title,
   subtitle : subtitle,
   description : description,
   image : image

    
})


res.status(200).json({
    message : "Blog successful"
})

})


// Start the server
app.listen(process.env.PORT, () => {
    console.log("Server running on port 5000");
});

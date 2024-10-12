
require ('dotenv').config();
const express = require('express');
const connectToDataBase = require('./Database/index.js');
const Blog = require('./model/blogModel.js');



const app = express();
app.use(express.json())
const {multer, storage} = require('./middleware/multerConfig.js')

const upload = multer({storage : storage})

connectToDataBase();
// Define routes
app.get('/', (req, res) => {
    res.status(200).json({
        message: "This is the home page"
    });
});

app.post('/blog', upload.single('image') ,async(req, res) => {
// const title = req.body.title
// const subtitle = req.body.subtitle
// const description = req.body.description
// const image = req.body.image

const {title, subtitle, description} = req.body
const image = req.file

if(!title || !description || !image || !subtitle){

    return res.status(400).json({
        message:"Please provide all data"
    })
}

try {
    await Blog.create({
        title : title,
        subtitle : subtitle,
        description : description,
        image : image.path
     
         
     })
     
} catch (error) {
    
    if (error.code === 11000) {
        return res.status(400).json({
            message: "Blog title already exists. Please choose a different title."
        });
    }

}

res.status(200).json({
    message : "Blog successful"
})

})


// Start the server
app.listen(process.env.PORT, () => {
    console.log("Server running on port 5000");
});

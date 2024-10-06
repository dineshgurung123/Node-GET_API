 const express = require ('express');

  var app  =  express();


app.get('/', (req, res)=>{

    res.json({

        message: "This is home page"
    })
})

app.get('/about', (req, res)=>{
    res.json({
        message :"This is about page"
    })
})



  app.listen(5000, ()=>{
   
    console.log("Hello node");
  })
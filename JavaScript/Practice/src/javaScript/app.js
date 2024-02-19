const express = require('express');
const fs = require('node:fs');
const app = express();
const PORT = 80;

app.get('/',(req,res) =>{
    console.log(req.url);
    fs.readFile('data.json','utf-8',(err,data) =>{
        if (err) console.error;
       res.send(data.toString());
    });
});


app.listen(PORT,() =>{
   console.log(`Server port on: ${PORT}`);
});
const express = require('express');
const fs = require('node:fs');
const app = express();
const cors = require('cors');
const PORT = 80;

app.use(express.json());
app.use(cors());

//Handles a GET request.
app.get('/server/data', (req,res) =>{
  let jsonData = fs.readFileSync('data.json','utf-8');
  console.log(req.url);
  res.json(jsonData.toString());
});

//Handles a POST request.
app.post('/server/data',(req,res) =>{
    console.log('Connected');

    console.log(req.body);
    fs.writeFile('user.json',JSON.stringify(req.body),err =>{
      if (err) {
        console.error;
      }
    });

    let jsonData = fs.readFileSync('data.json','utf-8');
    res.send(jsonData);
});

//Opens the server for port.
app.listen(PORT,() =>{
    console.log(`Server Open on Port ${PORT}.`);
})
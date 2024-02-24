'use strict'

function sendRequest(){
    let output = document.getElementById('output');

    if (output == null) return;

    fetch('http://localhost:80/server/data',{
        method : 'GET'
    }).then( (res) => {
        return res.json()
    }) .then( (json) =>{
        let data = JSON.parse(json);
       output.textContent = data.name;
    });
}


function sendPostRequest(){
    let request = document.getElementById('request');
    let output = document.getElementById('output');

    if (request == null || output == null) return;

    const userData = {
        name: request.value,
        password : Math.random() * 10
     };

     let data = JSON.stringify(userData);
     console.log(data);
    fetch('http://localhost:80/server/data',{
        method : 'POST',
        headers :{
            'Accept' : 'application/json',
            'Content-Type' : 'application/json'
        },
        body : data
    });
}
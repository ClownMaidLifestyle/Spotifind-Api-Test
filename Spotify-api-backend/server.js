const express = require(`express`);
require("dotenv").config();
const axios = require(`axios`);
const cors = require(`cors`);
const bp = require(`body-parser`);

let clientId = process.env.client_id;
let clientSecret = process.env.client_secret;

port = process.env.PORT || 8222;

let app = express();
app.use(cors());
app.use(bp.json());

async function getAuth(){

};


app.get(`/`, async (request, response) =>{
    response.status(200).json(token);
  });

app.get(`/auth`, async (request, response) =>{
  const authParameters = {
    method: 'POST',
    headers: {
      'Content-Type': 'application/x-www-form-urlencoded'
    },
    body: 'grant_type=client_credentials&client_id='+clientId+'&client_secret='+clientSecret
  }
  fetch(`https://accounts.spotify.com/api/token`, authParameters)
  .then(result => result.json())
  .then(data => response.status(200).json(data))
});

app.post(`/search`, async (request, response) =>{
  const API = `https://api.spotify.com/v1/search?q=`;
  console.log(request.body.trackQuery);
  const searchParameters = {
    headers: {
      Authorization: `Bearer ${request.body.key}`
    }
  }
    fetch(API+request.body.trackQuery+`&type=track`, searchParameters)
  .then(result => result.json())
  .then(data => response.status(200).json(data))
});


app.listen(port, () =>{
  console.log(`listening on port:${port}`);
});
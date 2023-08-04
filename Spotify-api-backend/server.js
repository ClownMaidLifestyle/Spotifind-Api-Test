const express = require(`express`);
const dotenv = require(`dotenv`);
const axios = require(`axios`);
const cors = require(`cors`);
const bp = require(`body-parser`);

let port = process.env.port || 8222;


const API = `https://api.spotify.com/v1/search?q=`;
let app = express();
app.use(cors());
app.use(bp.json());


app.get(`/`, async (request, response) =>{
    response.status(200).json(token);
  });

app.listen(port, () =>{
  console.log(`listening on port:${port}`);
});
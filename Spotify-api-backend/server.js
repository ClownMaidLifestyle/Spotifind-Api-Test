const express = require(`express`);
const dotenv = require(`dotenv`);
const axios = require(`axios`);
const cors = require(`cors`);
const bp = require(`body-parser`);

let port = process.env.port || 8222;

let clientId = process.env.client_id;
let clientSecret = process.env.client_secret;
const API = `https://api.spotify.com/v1/search?q=`;
let app = express();
app.use(cors());
app.use(bp.json());

const getAccessToken = async () => {
  try {
    const response = await axios.post('https://accounts.spotify.com/api/token', null, {
      headers: {
        'Authorization': 'Basic ' + (new Buffer.from(clientId + ':' + clientSecret).toString('base64'))
      },
      form: {
        grant_type: 'client_credentials'
      },
      json: true
    });
    
    return response.data.access_token;
  } catch (error) {
    console.error('Error getting access token:', error.message);
    return null;
  }
};

app.get(`/`, async (request, response) =>{
    let token = getAccessToken();
    response.status(200).json(token);
  });

app.listen(port, () =>{
  console.log(`listening on port:${port}`);
});
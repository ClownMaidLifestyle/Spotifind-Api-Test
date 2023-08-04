import './App.css';
import React from 'react';
import axios from "axios";

let clientId = process.env.client_id;
let clientSecret = process.env.client_secret;

  function App() {

    async function getAuth(){
      const authParameters = {
        method: 'POST',
        headers: {
          'Content-Type': 'application/x-www-form-urlencoded'
        },
        body: 'grant_type=client_credentials&client_id='+`1ad3f40124c94559a950bf36b234d9f3`+'&client_secret='+`DUMMYVALUE`
      }
      fetch(`https://accounts.spotify.com/api/token`, authParameters)
      .then(result => result.json())
      .then(data => console.log(data))
    };
    
    
    return(
      <div>
        <button onClick={()=>getAuth()}>The magic Access Key button</button>
      </div>
    );
  }

export default App;


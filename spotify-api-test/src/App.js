import './App.css';
import React from 'react';
import axios from "axios";


function App() {

  async function getAuth(){
    const API = "http://localhost:8222/auth"
    const res =     await axios.get(API);
    console.log(res);
  }

    
    return(
      <div>
        <button onClick={()=>getAuth()}>The magic Access Key button</button>
      </div>
    );
  }

export default App;


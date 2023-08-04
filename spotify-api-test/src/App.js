import './App.css';
import React from 'react';
import axios from "axios";


  function App() {

    async function getSong(){
      let API = `http://localhost:8222`;
      const result = await axios.get(API);
      console.log(result);
    };
    
    
    return(
      <div>
        <button onClick={()=>getSong()}>The magic API button</button>
      </div>
    );
  }

export default App;


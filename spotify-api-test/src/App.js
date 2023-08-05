import './App.css';
import React from 'react';
import axios from "axios";
import {useState} from "react";

function App() {

  const [searchQuery, setSearchQuery] = useState({
    key: '',
    trackQuery: ''
  });

  async function getAuth(){
    const API = "http://localhost:8222/auth"
    const res = await axios.get(API);
    searchQuery.key = res.data.access_token;
  }

  function handleSearch(event){
    setSearchQuery({
      ...searchQuery,
      trackQuery: event.target.value
    })
  }

  async function doSearch(event){
    event.preventDefault();
    console.log(searchQuery);
    const API = "http://localhost:8222/search"
    const searchReturn = await axios.post(API, searchQuery);
    console.log(searchReturn);
  }

    
    return(
      <div>
        <button onClick={()=>getAuth()}>The magic Access Key button</button>
        <form onSubmitCapture={(event) => doSearch(event)}>
          <input placeholder='search track' onChangeCapture={(event) => handleSearch(event)}></input>
          <button type="submit">submit</button>
        </form>
      </div>
    );
  }

export default App;


import React, { useState, useEffect } from 'react';
import axios from "axios";

export default function App () {

    const [appState, setAppState] = useState();
  
  useEffect(() => {
    const apiUrl = 'http://www.filltext.com/?rows=32&id={number|1000}&firstName={firstName}&lastName={lastName}&email={email}&phone={phone|(xxx)xxx-xx-xx}&address={addressObject}&description={lorem|32}';
    axios.get(apiUrl).then((resp) => {
      const allPersons = resp.data;
      setAppState(allPersons);
      console.log(allPersons);
    });
  }, [setAppState]);

  

 
  return (
    <div className="app">
        <h1>some data</h1>
    </div>
  );
}
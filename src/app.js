//     const apiUrl = 'http://www.filltext.com/?rows=32&id={number|1000}&firstName={firstName}&lastName={lastName}&email={email}&phone={phone|(xxx)xxx-xx-xx}&address={addressObject}&description={lorem|32}';


import React, { useState, useEffect } from 'react';
import axios from 'axios';
 
function App() {
  const [data, setData] = useState({ hits: [] });
  const [recorded, setRecorded] = useState(false);
  
  //fetching data and adding to localStorage
  const fetchData = async () => {
    const result = await axios('https://hn.algolia.com/api/v1/search?query=redux');
    setData(result.data);
    setRecorded(true);
    localStorage.setItem('Data', JSON.stringify(result.data));  
  };

  useEffect(() => {
    fetchData();
    if(recorded)
       console.log(localStorage.getItem('Data'));
  },[recorded]);
 
  return (
    <ul>
      {data.hits.map(item => (
        <li key={item.objectID}>
          <a href={item.url}>{item.title}</a>
        </li>
      ))}
    </ul>
  );
}
 
export default App;
import React, { useState, useEffect } from 'react';
import axios from 'axios';

function Data () {
    
  const [data, setData] = useState({ hits: [] });
  const [recorded, setRecorded] = useState(false);

  const url = 'https://hn.algolia.com/api/v1/search?query=redux';
  const fetchData = async () => {
    const result = await axios(url);     
    localStorage.setItem('Data', JSON.stringify(result.data));
    setRecorded(true);
  }
  const postData = async () => {
    const result = await axios(url);     
    setData(result.data);
    JSON.parse(localStorage.getItem('Data', result.data));
  }

  useEffect(() => {
    fetchData();
  }, []);

  useEffect(() => {
    if(recorded){
      postData();
    }
  }, [recorded]);
 

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

export default Data;
import React, { useState, useEffect } from 'react';
import axios from 'axios';
 
function App() {

  const [data, setData] = useState({ hits: [] });
  const [recorded, setRecorded] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      const result = await axios('https://hn.algolia.com/api/v1/search?query=redux');     
      localStorage.setItem('Data', JSON.stringify(result.data));
      setRecorded(true);
    }
    fetchData();
  });
  

  useEffect(() => {
    if(recorded){
      const getData = async () => {
        const result = await axios('https://hn.algolia.com/api/v1/search?query=redux');     
        setData(result.data);
        JSON.parse(localStorage.getItem('Data', result.data));
      }
      getData();
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
 
export default App;
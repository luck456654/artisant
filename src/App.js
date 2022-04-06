import './App.css';
import axios from "axios";
import React, {useState, useEffect} from "react";
function App() {
  const [dataapi, setData] = useState([]);
  useEffect(() => {
  const url = "https://artisant.io/api/products";
    axios
    .get(
      url,
      {
        dataType: "json",
        "Access-Control-Allow-Origin": url,
        "Access-Control-Allow-Methods": "GET,PUT,POST,DELETE",
      }
    )
    
      .then(res => {
        setData(res);
       })
      .then(console.log(dataapi.data.data.products[0].name))  
     
    
    },[])
  return (
    <div className="App">
      {dataapi.map((item) => (
        <div>{item.data.data.products[0].name}</div>
      ))}
    </div>
  );
}

export default App;

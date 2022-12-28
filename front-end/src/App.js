import React, {useState, useEffect} from "react";
import axios from 'axios';
import './App.css';
import Status from "./components/Status";
import AISLogo from "./Images/AIS_logo.png";

function App() {
  const [message, setMessage] = useState({});
  const baseURL = "http://localhost:8000/data"; 

  const getData = async () => {
    try {
      const response = await axios.get(baseURL);
      const {data} = response;
      setMessage(data);
      console.log(data);
    }catch(error) {
      console.log(error);
    }
  }

  useEffect(() => {
    console.log("useEffect is working 1.")
    getData();
    console.log(message)
  }, []);
  return (
    <div className="App">
      <img src={AISLogo}/>
      <Status 
      messageB= {message}
      />
    </div>
  );
}

export default App;

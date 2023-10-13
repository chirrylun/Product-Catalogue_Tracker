import { NavBar } from './components/navBar';
import { useState, useEffect } from 'react';
import Axios from 'axios';
import React from 'react';
import './App.css';

function App() {
  
  
  const fetchCatFact = () => {
    Axios.get("https://catfact.ninja/fact")
      .then((res) => {
        setCatFact(res.data.fact);
      })
      .catch((error) => {
        console.error("Error fetching cat fact:", error);
      });
  };

  useEffect(() =>{
    fetchCatFact();
    console.log("Mounted")

    
  
    
  },[]);
  const [catFact, setCatFact] = useState("");
  const [text, setText] = useState("");

  return (
    <div className="App">
    <button onClick={fetchCatFact}>Generate Fact</button>
    <p className='factText'>{catFact}</p>
    <p>{text}</p>
      
    </div>
  );
}

export default App;

import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './App.css';
import SWCard from './components/charCard';


const App = () => {
  // Try to think through what state you'll need for this app before starting. Then build out
  // the state properties here.

  // Fetch characters from the star wars api in an effect hook. Remember, anytime you have a 
  // side effect in a component, you want to think about which state and/or props it should
  // sync up with, if any.
  let people = 'https://swapi.co/api/people/'
  const [data, setData] = useState([{}])

  useEffect (() =>{
    axios
    .get(people)
    .then(function(response){
      console.log(response.data.results);
      setData(response.data.results)
    })
    .catch(error => {
      console.log('the data was not returned', error);
    })

  }, [people]);

  return (
    <div className="App">
      <h1 className="Header">React Wars</h1>
      {data.map(function(item, index){
        console.log(SWCard)
       return <SWCard name={item.name} DOB={item.birth_year} height={item.height} weight={item.mass} gender = {item.gender} key={index} />
      })}
  
    </div>
  
    );
  }

export default App;

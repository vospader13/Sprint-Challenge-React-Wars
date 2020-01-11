import './StarWars.css';
import axios from 'axios';
import { Cards, CardText,
    CardTitle,CardContainer,DataContainer} from './styles';
import React, { useState, useEffect } from 'react';
    

export default function SWCard(props) {
    let homeWorld = 'https://swapi.co/api/planets/'
    const [home, setHome] = useState ([{}])

    useEffect (() => {
        axios
        .get(homeWorld)
        .then(function(response) {
            console.log('homeworld data', response.data.results)
            setHome(response.data.results)
        })
        .catch(error => {
            console.log('homeworld data was not returned', error);
        })
    }, [homeWorld]);

  return (
	<CardContainer>
	  <Cards>
        <DataContainer>
		    <CardTitle className="Header">Name: {props.name}</CardTitle>
    	</DataContainer>
    	<DataContainer>
		    <CardText>DOB: {props.DOB}</CardText>
            <CardText>Height: {props.height}</CardText>
            <CardText>Weight: {props.weight}</CardText>
            <CardText>Gender: {props.gender}</CardText>
    	</DataContainer>
	  </Cards>
	</CardContainer>
  )
}
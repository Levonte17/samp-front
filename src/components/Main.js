import{useState, useEffect} from 'react';
import{Routes, Route} from 'react-router-dom';

import About from '../components/About';
import Athlete from '../components/Athlete';
import Contact from './Contact';
import Schedule from '../pages/Schedule';

function Main(props) {
    
const API_URL = 'http://localhost:4000/api/workout details/';
const getData = async () => {
    try {
        const response = await fetch(API_URL);
        const data = await response.json();
        Schedule(data);
    } catch (error) {
        
    }
}

useEffect(() => {
    getData();
}, []);


    return(

<main>
    <Athlete />
    <About />
    <Contact />
</main>

    )
};

export default Main;
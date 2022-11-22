import{useState, useEffect} from 'react';
import { Routes, Route } from 'react-router-dom';

import Home from '../pages/Home';
import Content from '../pages/Content';
import ContactPage from '../pages/ContactPage';
import AboutPage from '../pages/AboutPage';
import Schedule from '../pages/Schedule';
import ShowSchedule from '../pages/ShowSchedule';

function Main(props) {

    const [workout, setWorkout] = useState(null);
    const API_URL = 'http://localhost:4001/api/workout/';
const getData = async () => {
    try {
        const response = await fetch(API_URL);
        const data = await response.json();
        setWorkout(data);
    } catch (error) {
        console.log(error)
    }
}

const createWorkout = async (event) => {
    try {
        await fetch(API_URL, {
            method: 'POST',
            headers:{
                'content-type': 'Application/json'
            }, 
            body: JSON.stringify(event)
    }); 
    getData();

    } catch (error) {
        
    }
}

useEffect(() => {
    getData();
}, []);


    return(

<main>

<Routes>
    <Route path='/' element={<Home/>}/>
    <Route path='/Contact-us' element={<ContactPage/>}/>
    <Route path='/about-us' element={<AboutPage/>}/>
    <Route path='/workout' element={<Schedule 
        workout={workout} createWorkout={createWorkout} />}/>
    <Route path='/workout/:id' element={<ShowSchedule/>}/>
    <Route path='/content' element={<Content/>}/>
</Routes>
</main>

    )
};

export default Main;
import{useState, useEffect} from 'react';
import { Routes, Route} from 'react-router-dom';

import Home from '../pages/Home';
import Content from '../pages/Content';
import ContactPage from '../pages/ContactPage';
import AboutPage from '../pages/AboutPage';
import Schedule from '../pages/Schedule'; 
import ShowSchedule from '../pages/ShowSchedule';

function Main(props) {

    const [workout, setWorkout] = useState(null);
    //const API_URL = 'http://localhost:4003/api/workout/';
    const API_URL = 'https://dih-api.adaptable.app/api/workout';

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

const deleteWorkout = async (id) => {
    try {
        await fetch(API_URL + id, {
            method: 'DELETE'
        });
        getData();
    } catch (error) {
        console.log(error);
        // TODO: add some logic to alert the user,
        // that something went wrong here
    }
}

const updateWorkout = async (updatedWorkout, id) => {
    try {
        await fetch(API_URL + id, {
            method: 'PUT',
            headers: {
                'Content-type': 'Application/json'
            },
            body: JSON.stringify(updatedWorkout)
        });
        
        getData();

    } catch (error) {
        console.log(error)
        // TODO: add additional logic to alert a user 
        // in case something goes wrong
    }
}


useEffect(() => {
    getData();
}, []);

    return(

<main>

<Routes>
    <Route path='/' 
        element={<Home
    />}/>

    <Route path='/Contact-us' 
        element={<ContactPage
    />}/>

    <Route path='/about-us' 
        element={<AboutPage
    />}/>

    <Route path='/workout' 
        element={<Schedule 
        workout={workout} 
        createWorkout={createWorkout} 
    />}/>

    <Route path='/workout/:id' 
        element={<ShowSchedule 
        workout={workout}
        deleteWorkout={deleteWorkout}
        updateWorkout={updateWorkout} 
    />}/>

    <Route path='/content' 
        element={<Content
    />}/>
</Routes>
</main>

    )
};

export default Main;
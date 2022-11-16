import { Routes, Route } from 'react-router-dom';
import About from '../components/About';
import Header from '../components/Header';
import Athlete from '../components/Athlete';
import Contact from '../components/Contact';
import Workout from '../components/Workout';

function Main(props) {

    return(

<main>
    <Header />
    <Athlete />
    <About />
    <Workout />
    <Contact />

<Routes>
    <Route path='/' element={<Main/>}/>
</Routes>
</main>

    )
};

export default Main;
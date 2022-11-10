//SASS
import './index.scss';
import{Routes, Route} from 'react-router-dom';

//COMPONENTS
import Header from './components/Header';
import About from './components/About';
import Athlete from './components/Athlete';
import Contact from './components/Contact';
import Workout from './components/Workout';
import Nav from './components/Nav';
import Wdetail from './components/Wdetail';
import Footer from './components/Footer';

function App() {
  return (
    <div className="App">

      <Nav />
      <Header />
      <About />
      <Contact />
      <Workout />
      <Athlete />
      <Footer />

      <Routes>
        <Route path='/Workout Details' element={<Wdetail/>}/>
        <Route path='/About' element={<About/>}/>
        <Route path='/Athletes' element={<Athlete/>}/>
        <Route path='/Workouts' element={<Workout/>}/>
        <Route path='/Contact Us' element={<Contact/>}/>
     </Routes>
    </div>
  );
}

export default App;

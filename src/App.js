//SASS
import './index.scss';
import{Routes, Route} from 'react-router-dom';

//COMPONENTS
import Header from './components/Header';
import Main from './components/Main';
import Nav from './components/Nav';
import Footer from './components/Footer';



function App() {
  return (
    <div className="App">

      <Nav />
      <Header />
      <Main />
      <Footer />

    </div>
  );
}

export default App;
